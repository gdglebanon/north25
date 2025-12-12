document.addEventListener('DOMContentLoaded', () => {
    console.log('DevFest North 2025 website loaded!');

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // --- Dynamic Content Rendering ---

    // Render Agenda
    const agendaTracks = document.getElementById('agenda-tracks');
    if (agendaTracks && typeof devFestData !== 'undefined') {
        renderAgenda(agendaTracks, devFestData);
    }

    // Render Mobile Agenda
    const mobileAgendaContainer = document.getElementById('mobile-agenda');
    if (mobileAgendaContainer && typeof devFestData !== 'undefined') {
        renderMobileAgenda(devFestData.sessions, devFestData.speakers);
    }

    // Render Speakers
    const speakersGrid = document.getElementById('speakers-grid');
    if (speakersGrid && typeof devFestData !== 'undefined') {
        renderSpeakers(speakersGrid, devFestData.speakers);
    }

    // Render Sponsors
    const sponsorsContainer = document.querySelector('#sponsors .container');
    if (sponsorsContainer && typeof devFestData !== 'undefined' && devFestData.sponsors) {
        renderSponsors(sponsorsContainer, devFestData.sponsors);
    }


    // Modal Logic
    setupModals();

    // --- Search Logic ---
    const searchInput = document.getElementById('agendaSearch');
    if (searchInput && typeof devFestData !== 'undefined') {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterSessions(searchTerm);
        });
    }
});

function filterSessions(searchTerm) {
    if (!devFestData) return;

    const { sessions, speakers } = devFestData;

    const filteredSessions = sessions.filter(session => {
        // Always include common sessions if search is empty, otherwise check match
        if (session.isCommon) {
            // Optional: Filter common sessions too? 
            // If I search "React", I probably don't want "Coffee Break".
            // So let's filter them too.
            return session.title.toLowerCase().includes(searchTerm) ||
                session.description.toLowerCase().includes(searchTerm);
        }

        const speaker = speakers.find(s => s.id === session.speakerId);
        const speakerName = speaker ? speaker.fullName.toLowerCase() : '';
        const title = session.title.toLowerCase();
        const tags = session.tags.map(t => t.toLowerCase()).join(' ');
        const description = session.description.toLowerCase();

        return title.includes(searchTerm) ||
            speakerName.includes(searchTerm) ||
            tags.includes(searchTerm) ||
            description.includes(searchTerm);
    });

    // Re-render Desktop Agenda
    const agendaTracks = document.getElementById('agenda-tracks');
    if (agendaTracks) {
        // We need to pass a modified data object to renderAgenda
        const filteredData = { ...devFestData, sessions: filteredSessions };
        renderAgenda(agendaTracks, filteredData);
    }

    // Re-render Mobile Agenda
    // renderMobileAgenda takes sessions array directly
    renderMobileAgenda(filteredSessions, speakers);
}

function renderAgenda(container, data) {
    const { schedule, sessions } = data;

    // 1. Sort all sessions by time
    const allSessions = [...sessions].sort((a, b) => parseTime(a.time) - parseTime(b.time));

    // 2. Identify Common Sessions (Breaks)
    const commonSessions = allSessions.filter(s => s.isCommon);

    // 3. Create Chunks (Blocks)
    // A chunk is either a "common" session or a "track" block (time range between common sessions)
    const chunks = [];
    let lastEndTime = -1;

    // Helper to get start/end minutes
    const getMinutes = (timeStr) => {
        const parts = timeStr.split('-');
        return { start: parseTime(parts[0]), end: parseTime(parts[1]) };
    };

    if (commonSessions.length === 0) {
        // No common sessions, just one big track block
        chunks.push({ type: 'tracks', sessions: allSessions });
    } else {
        let currentSessions = [];

        allSessions.forEach(session => {
            if (session.isCommon) {
                // If we have accumulated track sessions, push them as a block first
                if (currentSessions.length > 0) {
                    chunks.push({ type: 'tracks', sessions: [...currentSessions] });
                    currentSessions = [];
                }
                // Push the common session as its own block
                chunks.push({ type: 'common', session: session });
            } else {
                currentSessions.push(session);
            }
        });

        // Push remaining sessions
        if (currentSessions.length > 0) {
            chunks.push({ type: 'tracks', sessions: [...currentSessions] });
        }
    }

    // 4. Render Chunks
    container.innerHTML = ''; // Clear existing

    chunks.forEach(chunk => {
        if (chunk.type === 'common') {
            const commonEl = document.createElement('div');
            commonEl.className = 'common-session';
            commonEl.innerHTML = `
                <span class="time">${chunk.session.time}</span>
                <h3>${chunk.session.title}</h3>
                <p>${chunk.session.description}</p>
            `;
            container.appendChild(commonEl);
        } else {
            const trackBlock = document.createElement('div');
            trackBlock.className = 'agenda-block';

            schedule.auditoriums.forEach(room => {
                const trackCol = document.createElement('div');
                trackCol.className = 'track';

                // Track Header (only needed if it's the first block, or we repeat it? 
                // User said "repeat it once" implies maybe only at top, but if we break flow, 
                // we might need headers again or just keep columns aligned. 
                // Let's try keeping columns aligned by using a grid or flex with consistent widths.
                // For now, let's re-add headers for clarity in each block, or maybe just for the first one.
                // Actually, if we break the row, we lose the column visual continuity.
                // To keep it looking like a table with a row break, we need consistent widths.

                const trackHeader = document.createElement('div');
                trackHeader.className = 'track-header';
                trackHeader.textContent = room;
                trackCol.appendChild(trackHeader);

                const roomSessions = chunk.sessions.filter(s => s.room === room);

                roomSessions.forEach(session => {
                    const speaker = data.speakers.find(s => s.id === session.speakerId);
                    const sessionCard = createSessionCard(session, speaker);
                    sessionCard.addEventListener('click', () => openSessionModal(session));
                    trackCol.appendChild(sessionCard);
                });

                trackBlock.appendChild(trackCol);
            });

            container.appendChild(trackBlock);
        }
    });
}

function renderMobileAgenda(sessions, speakers) {
    const happeningNowContainer = document.getElementById('happening-now-container');
    const happeningNowGrid = document.getElementById('happening-now-grid');
    const upcomingContainer = document.getElementById('upcoming-container');
    const mobileAgendaGrid = document.getElementById('mobile-agenda-grid');
    const previousSessionsContainer = document.getElementById('previous-sessions-container');
    const previousSessionsGrid = document.getElementById('previous-sessions-grid');
    const showPreviousBtn = document.getElementById('show-previous-btn');

    // Clear existing content
    happeningNowGrid.innerHTML = '';
    mobileAgendaGrid.innerHTML = '';
    previousSessionsGrid.innerHTML = '';

    // Reset visibility
    happeningNowContainer.style.display = 'none';
    previousSessionsContainer.style.display = 'none';
    upcomingContainer.style.display = 'block'; // Always show schedule container by default, or manage dynamically

    // Flatten and sort all sessions
    const sortedSessions = [...sessions].sort((a, b) => parseTime(a.time) - parseTime(b.time));

    // Current Time Logic (Mockable)
    const now = new Date();
    // To test "Happening Now", uncomment the line below and set a time within a session
    // const now = new Date('2025-12-20T11:10:00');

    const eventDateStr = '2025-12-20';
    const todayStr = now.toISOString().split('T')[0];
    const isEventDay = todayStr === eventDateStr;

    let hasHappeningNow = false;
    let hasPrevious = false;

    sortedSessions.forEach(session => {
        let card;

        if (session.isCommon) {
            card = document.createElement('div');
            card.className = 'common-session mobile-common-session';
            card.innerHTML = `
                <span class="time">${session.time}</span>
                <div class="common-content">
                    <h3>${session.title}</h3>
                    <p>${session.description}</p>
                </div>
            `;
        } else {
            const speaker = speakers.find(s => s.id === session.speakerId);
            card = createSessionCard(session, speaker);
            card.addEventListener('click', () => openSessionModal(session));

            // Add Room Label for Mobile
            const roomLabel = document.createElement('div');
            roomLabel.style.fontSize = '0.8rem';
            roomLabel.style.fontWeight = 'bold';
            roomLabel.style.color = 'var(--google-blue)';
            roomLabel.style.marginBottom = '5px';
            roomLabel.textContent = `📍 ${session.room}`;
            card.insertBefore(roomLabel, card.firstChild);
        }

        if (isEventDay) {
            const { start, end } = getSessionTimes(session.time, eventDateStr);

            if (now >= start && now < end) {
                happeningNowGrid.appendChild(card);
                hasHappeningNow = true;
            } else if (now >= end) {
                previousSessionsGrid.appendChild(card);
                hasPrevious = true;
            } else {
                mobileAgendaGrid.appendChild(card);
            }
        } else {
            // Not event day, show all in schedule
            mobileAgendaGrid.appendChild(card);
        }
    });

    if (hasHappeningNow) {
        happeningNowContainer.style.display = 'block';
    }

    if (hasPrevious) {
        previousSessionsContainer.style.display = 'block';
        showPreviousBtn.addEventListener('click', () => {
            previousSessionsGrid.classList.toggle('show');
            showPreviousBtn.textContent = previousSessionsGrid.classList.contains('show')
                ? 'Hide Previous Sessions'
                : 'See Previous Sessions';
        });
    }
}

// Helper to create session card HTML (reused)
function createSessionCard(session, speaker) {
    const sessionCard = document.createElement('div');
    sessionCard.className = 'session-card';

    let speakerHtml = '';
    if (speaker) {
        speakerHtml = `
            <div class="session-speaker-info">
                <img src="${speaker.profilePicture}" alt="${speaker.fullName}" class="session-speaker-avatar" onerror="this.src='assets/images/logo.png'">
                <div class="session-speaker-text">
                    <span class="session-speaker-name">${speaker.fullName}</span>
                    <span class="session-speaker-company">${speaker.company || ''}</span>
                </div>
            </div>
        `;
    }

    sessionCard.innerHTML = `
        <span class="session-time">${session.time}</span>
        <h4>${session.title}</h4>
        <div class="session-meta">
            ${session.level} | ${session.format}
        </div>
        <div class="session-tags">
            ${session.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${speakerHtml}
    `;
    return sessionCard;
}

function parseTime(timeStr) {
    const startTime = timeStr.split('-')[0].trim();
    const [time, modifier] = startTime.split(' ');
    let [hours, minutes] = time.split(':');

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (hours === 12 && modifier === 'AM') {
        hours = 0;
    }
    if (hours !== 12 && modifier === 'PM') {
        hours += 12;
    }

    return hours * 60 + minutes;
}

function getSessionTimes(timeStr, dateStr) {
    const [startStr, endStr] = timeStr.split('-').map(s => s.trim());

    const parseDate = (tStr) => {
        const [time, modifier] = tStr.split(' ');
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (hours === 12 && modifier === 'AM') hours = 0;
        if (hours !== 12 && modifier === 'PM') hours += 12;

        return new Date(`${dateStr}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`);
    };

    return {
        start: parseDate(startStr),
        end: parseDate(endStr)
    };
}

function renderSpeakers(container, speakers) {
    speakers.forEach(speaker => {
        const card = document.createElement('div');
        card.className = 'speaker-card';
        card.innerHTML = `
            <div class="avatar">
                <img src="${speaker.profilePicture}" alt="${speaker.fullName}" onerror="this.src='assets/images/logo.png'">
            </div>
            <h3>${speaker.fullName}</h3>
            <p>${speaker.tagLine}</p>
        `;
        card.addEventListener('click', () => openSpeakerModal(speaker));
        container.appendChild(card);
    });
}

function renderSponsors(container, sponsors) {
    // Clear existing static content but keep the header
    const header = container.querySelector('.section-header');
    container.innerHTML = '';
    if (header) container.appendChild(header);

    // Grouping Logic
    const sponsoredBy = sponsors.filter(s => ['Gold', 'Silver', 'Bronze'].includes(s.tier));
    const partners = sponsors.filter(s => !['Gold', 'Silver', 'Bronze'].includes(s.tier));

    // 1. Sponsored By Section
    if (sponsoredBy.length > 0) {
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'sponsor-section-title';
        sectionTitle.textContent = 'Sponsored By';
        container.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'sponsors-grid';

        sponsoredBy.forEach(sponsor => {
            const card = createSponsorCard(sponsor);
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }

    // 2. Partners & Supporters Section
    if (partners.length > 0) {
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'sponsor-section-title';
        // You can customize this title based on specific needs, or just "Partners & Supporters"
        // Based on image: "Main Supporters" and "Partners" seem separate but user asked for max 2 sections.
        // Let's use generic "Partners & Supporters" or just split visual headers inside if we want more granularity
        // efficiently. User said "max two sections".
        // Let's try to group them nicely.
        sectionTitle.textContent = 'Partners & Supporters';
        sectionTitle.style.marginTop = '40px';
        container.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.className = 'sponsors-grid';

        partners.forEach(sponsor => {
            const card = createSponsorCard(sponsor);
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }
}

function createSponsorCard(sponsor) {
    const card = document.createElement('div');
    card.className = `sponsor-card ${sponsor.tier.toLowerCase().replace(/\s+/g, '-')}`;

    // Determine badge color class based on tier
    let badgeClass = 'badge-default';
    if (sponsor.tier === 'Gold') badgeClass = 'badge-gold';
    if (sponsor.tier === 'Silver') badgeClass = 'badge-silver';
    if (sponsor.tier === 'Bronze') badgeClass = 'badge-bronze';
    if (sponsor.tier === 'Host') badgeClass = 'badge-host';
    if (sponsor.tier === 'Main Supporter') badgeClass = 'badge-main';
    if (sponsor.tier === 'Media Partner') badgeClass = 'badge-media';

    card.innerHTML = `
        <div class="sponsor-logo-wrapper">
            <img src="${sponsor.logo}" alt="${sponsor.name}">
        </div>
        <div class="sponsor-info">
            <h4>${sponsor.name}</h4>
            <span class="sponsor-badge ${badgeClass}">${sponsor.tier}</span>
        </div>
    `;
    card.addEventListener('click', () => openSponsorModal(sponsor));
    return card;
}

// --- Modals ---

const sessionModal = document.getElementById('session-modal');
const speakerModal = document.getElementById('speaker-modal');
const sponsorModal = document.getElementById('sponsor-modal');
const sessionBody = document.getElementById('session-modal-body');
const speakerBody = document.getElementById('speaker-modal-body');
const sponsorBody = document.getElementById('sponsor-modal-body');

function setupModals() {
    // Close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            sessionModal.classList.remove('show');
            speakerModal.classList.remove('show');
            sponsorModal.classList.remove('show');
            setTimeout(() => {
                sessionModal.style.display = 'none';
                speakerModal.style.display = 'none';
                sponsorModal.style.display = 'none';
            }, 300);
        });
    });

    // Click outside to close
    window.addEventListener('click', (e) => {
        if (e.target === sessionModal) closeModal(sessionModal);
        if (e.target === speakerModal) closeModal(speakerModal);
        if (e.target === sponsorModal) closeModal(sponsorModal);
    });
}

function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function openSponsorModal(sponsor) {
    if (sessionModal.classList.contains('show')) closeModal(sessionModal);
    if (speakerModal.classList.contains('show')) closeModal(speakerModal);

    // Badge styling for modal
    let badgeClass = 'badge-default';
    if (sponsor.tier === 'Gold') badgeClass = 'badge-gold';
    if (sponsor.tier === 'Silver') badgeClass = 'badge-silver';
    if (sponsor.tier === 'Bronze') badgeClass = 'badge-bronze';
    if (sponsor.tier === 'Host') badgeClass = 'badge-host';
    if (sponsor.tier === 'Main Supporter') badgeClass = 'badge-main';
    if (sponsor.tier === 'Media Partner') badgeClass = 'badge-media';

    sponsorBody.innerHTML = `
        <div class="sponsor-modal-content">
            <div class="sponsor-modal-header">
                <div class="sponsor-modal-logo">
                    <img src="${sponsor.logo}" alt="${sponsor.name}">
                </div>
                <div class="sponsor-modal-info">
                    <h2>${sponsor.name} <span class="sponsor-badge ${badgeClass}"><span class="icon">🏆</span> ${sponsor.tier}</span></h2>
                    
                    <div class="sponsor-description">
                        ${sponsor.description || 'Proud supporter of DevFest North 2025.'}
                    </div>

                    <div class="sponsor-meta">
                        <span class="icon">🏢</span> ${sponsor.name}
                    </div>
                </div>
            </div>
            
            <div class="sponsor-modal-footer">
                <div class="social-links">
                    ${sponsor.socials.website ? `<a href="${sponsor.socials.website}" target="_blank" class="social-icon">🌐 Website</a>` : ''}
                    ${sponsor.socials.linkedin ? `<a href="${sponsor.socials.linkedin}" target="_blank" class="social-icon">🔗 LinkedIn</a>` : ''}
                </div>
                <button class="btn btn-secondary close-modal-btn" onclick="closeModal(document.getElementById('sponsor-modal'))">Close</button>
            </div>
        </div>
    `;

    sponsorModal.style.display = 'block';
    sponsorModal.offsetHeight;
    sponsorModal.classList.add('show');
}


function openSessionModal(session) {
    const speaker = devFestData.speakers.find(s => s.id === session.speakerId);

    sessionBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${session.title}</h2>
            <div class="modal-meta">
                <span>📅 ${session.time}</span>
                <span>📍 ${session.room}</span>
                <span>🎓 ${session.level}</span>
            </div>
            <div class="session-tags">
                ${session.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="modal-body">
            <p>${session.description}</p>
            

            
            <h4 style="margin-top: 20px;">Target Audience</h4>
            <p>${session.targetAudience}</p>

            ${speaker ? `
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; cursor: pointer;" onclick="openSpeakerModalById('${speaker.id}')">
                    <h4>Speaker</h4>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${speaker.profilePicture}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" onerror="this.src='assets/images/logo.png'">
                        <div>
                            <div style="font-weight: bold; color: var(--google-blue);">${speaker.fullName}</div>
                            <div style="font-size: 0.9rem; color: var(--text-light);">${speaker.tagLine}</div>
                        </div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    sessionModal.style.display = 'block';
    // Trigger reflow
    sessionModal.offsetHeight;
    sessionModal.classList.add('show');
}

function openSpeakerModal(speaker) {
    // Close session modal if open
    if (sessionModal.classList.contains('show')) {
        closeModal(sessionModal);
    }

    speakerBody.innerHTML = `
        <div class="speaker-profile">
            <img src="${speaker.profilePicture}" alt="${speaker.fullName}" onerror="this.src='assets/images/logo.png'">
            <div class="speaker-info">
                <h3>${speaker.fullName}</h3>
                <p class="tagline">${speaker.tagLine}</p>
                <div class="modal-body">
                    <p>${speaker.bio}</p>
                </div>
                <div class="social-links">
                    ${speaker.socials.linkedin ? `<a href="${speaker.socials.linkedin}" target="_blank">LinkedIn</a>` : ''}
                    ${speaker.socials.twitter ? `<a href="${speaker.socials.twitter}" target="_blank">Twitter</a>` : ''}
                    ${speaker.socials.company ? `<a href="${speaker.socials.company}" target="_blank">Company</a>` : ''}
                    ${speaker.socials.blog ? `<a href="${speaker.socials.blog}" target="_blank">Blog</a>` : ''}
                </div>
            </div>
        </div>
    `;

    speakerModal.style.display = 'block';
    speakerModal.offsetHeight;
    speakerModal.classList.add('show');
}

// Helper to open speaker from session modal (needs to be global or attached to window)
window.openSpeakerModalById = (speakerId) => {
    const speaker = devFestData.speakers.find(s => s.id === speakerId);
    if (speaker) {
        openSpeakerModal(speaker);
    }
};

// --- Badge Generator Logic ---
document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById('badgeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const photoUpload = document.getElementById('photoUpload');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const titleInput = document.getElementById('title');
    const companyInput = document.getElementById('company');
    const usernameInput = document.getElementById('username');
    const downloadButton = document.getElementById('downloadButton');
    const fileChosenText = document.getElementById('file-chosen-text');
    const dragHint = document.getElementById('dragHint');

    const templateImage = new Image();
    const userPhoto = new Image();
    userPhoto.crossOrigin = "anonymous";

    const targetRect = {
        x: 590,
        y: 260,
        width: 450,
        height: 620
    };

    const imageState = {
        x: 0,
        y: 0,
        drawWidth: 0,
        drawHeight: 0
    };

    let isDragging = false;
    let lastDragPos = { x: 0, y: 0 };

    const textData = {
        firstName: "First Name",
        lastName: "Last Name",
        title: "",
        company: "",
        username: "",
    };

    // Font loading
    try {
        // Load fonts if not already available
        await document.fonts.load('450 45px "Outfit"');
        await document.fonts.load('bold 32px Roboto');
    } catch (err) {
        console.warn('Fonts might not be fully loaded for canvas:', err);
    }

    function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Draw User Photo (Clipped)
        if (userPhoto.src) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(targetRect.x, targetRect.y, targetRect.width, targetRect.height);
            ctx.clip();
            ctx.drawImage(userPhoto, imageState.x, imageState.y, imageState.drawWidth, imageState.drawHeight);
            ctx.restore();
        }

        // 2. Draw Template
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

        // 3. Draw Text
        // Using Outfit to match site theme, fallback to Arial
        ctx.fillStyle = '#757577';
        ctx.font = '450 45px "Outfit", sans-serif';
        ctx.fillText(textData.firstName, 90, 510);
        ctx.fillText(textData.lastName, 90, 580);

        ctx.fillStyle = '#757577';
        ctx.font = '32px "Outfit", sans-serif';
        ctx.fillText(textData.title, 90, 650);
        ctx.font = 'bold 32px "Outfit", sans-serif';
        ctx.fillText(textData.company, 90, 700);
        ctx.font = '32px "Outfit", sans-serif';
        ctx.fillText(textData.username, 90, 800);
    }

    // Load template
    templateImage.src = 'assets/images/Attendee.png';
    templateImage.onload = () => {
        drawCanvas();
    };

    // Handle Photo Upload
    photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            fileChosenText.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (event) => {
                userPhoto.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle Photo Load
    userPhoto.onload = () => {
        const imgAspectRatio = userPhoto.width / userPhoto.height;
        const targetAspectRatio = targetRect.width / targetRect.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgAspectRatio > targetAspectRatio) {
            drawHeight = targetRect.height;
            drawWidth = drawHeight * imgAspectRatio;
            offsetX = targetRect.x + (targetRect.width - drawWidth) / 2;
            offsetY = targetRect.y;
        } else {
            drawWidth = targetRect.width;
            drawHeight = drawWidth / imgAspectRatio;
            offsetX = targetRect.x;
            offsetY = targetRect.y + (targetRect.height - drawHeight) / 2;
        }

        imageState.x = offsetX;
        imageState.y = offsetY;
        imageState.drawWidth = drawWidth;
        imageState.drawHeight = drawHeight;

        drawCanvas();
        if (dragHint) dragHint.classList.remove('hidden');
    };

    // Handle Inputs
    firstNameInput.addEventListener('input', (e) => {
        textData.firstName = e.target.value || "First Name";
        drawCanvas();
    });

    lastNameInput.addEventListener('input', (e) => {
        textData.lastName = e.target.value || "Last Name";
        drawCanvas();
    });

    titleInput.addEventListener('input', (e) => {
        textData.title = e.target.value;
        drawCanvas();
    });

    companyInput.addEventListener('input', (e) => {
        textData.company = e.target.value;
        drawCanvas();
    });

    usernameInput.addEventListener('input', (e) => {
        textData.username = e.target.value ? `${e.target.value}` : "";
        drawCanvas();
    });

    // Handle Download
    // Handle Download
    downloadButton.addEventListener('click', () => {
        try {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'my-devfest-badge.png';
            document.body.appendChild(link); // Append to body to ensure it works in all browsers
            link.click();
            document.body.removeChild(link); // Clean up
        } catch (err) {
            console.error("Download failed:", err);
            alert("Could not download badge. If you are running this locally, browser security might be blocking the download. Please try running on a local server.");
        }
    });

    // Drag Logic
    function getEventPos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const clientX = evt.clientX || (evt.touches && evt.touches[0].clientX);
        const clientY = evt.clientY || (evt.touches && evt.touches[0].clientY);
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function getClientPos(evt) {
        return {
            x: evt.clientX || (evt.touches && evt.touches[0].clientX),
            y: evt.clientY || (evt.touches && evt.touches[0].clientY)
        };
    }

    function onDragStart(e) {
        if (!userPhoto.src) return;
        const pos = getEventPos(canvas, e);
        if (pos.x >= targetRect.x && pos.x <= targetRect.x + targetRect.width &&
            pos.y >= targetRect.y && pos.y <= targetRect.y + targetRect.height) {
            isDragging = true;
            lastDragPos = getClientPos(e);
            canvas.style.cursor = 'grabbing';
            if (e.preventDefault) e.preventDefault();
        }
    }

    function onDragMove(e) {
        const pos = getEventPos(canvas, e);
        if (pos.x >= targetRect.x && pos.x <= targetRect.x + targetRect.width &&
            pos.y >= targetRect.y && pos.y <= targetRect.y + targetRect.height) {
            if (!isDragging) canvas.style.cursor = 'grab';
        } else {
            if (!isDragging) canvas.style.cursor = 'default';
        }

        if (!isDragging) return;
        if (e.preventDefault) e.preventDefault();

        const clientPos = getClientPos(e);
        const dx = clientPos.x - lastDragPos.x;
        const dy = clientPos.y - lastDragPos.y;

        let newX = imageState.x + dx;
        let newY = imageState.y + dy;

        newX = Math.min(targetRect.x, newX);
        newX = Math.max(targetRect.x + targetRect.width - imageState.drawWidth, newX);
        newY = Math.min(targetRect.y, newY);
        newY = Math.max(targetRect.y + targetRect.height - imageState.drawHeight, newY);

        imageState.x = newX;
        imageState.y = newY;

        lastDragPos = clientPos;
        drawCanvas();
    }

    function onDragEnd() {
        isDragging = false;
        canvas.style.cursor = 'grab';
    }

    canvas.addEventListener('mousedown', onDragStart);
    canvas.addEventListener('mousemove', onDragMove);
    canvas.addEventListener('mouseup', onDragEnd);
    canvas.addEventListener('mouseleave', () => {
        if (isDragging) onDragEnd();
        canvas.style.cursor = 'default';
    });

    canvas.addEventListener('touchstart', onDragStart, { passive: false });
    canvas.addEventListener('touchmove', onDragMove, { passive: false });
    canvas.addEventListener('touchend', onDragEnd);
    canvas.addEventListener('touchcancel', onDragEnd);
});
