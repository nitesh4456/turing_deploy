    
    // Sample event data
    const events = [
        //------for example
        // id: 1,
        // title: "IOT and Cloud Computing",
        // type: "workshop",
        // date: "2024-02-29",
        // time: "10:00 AM - 03:30 PM",
        // duration: "36 hours",
        // venue: "Conference Room",
        // address: "College Campus, Building 3",
        // description:
        //     "Join us for our annual 36-hour hackathon where you'll collaborate with fellow developers to build innovative solutions. This year's theme is 'Tech for Social Good'. Prizes worth $5000 to be won!",
        // image: "./Assets/1.jpg",
        // speakers: [
        //     { name: "John Doe", role: "CTO, Tech Innovators", image: "https://source.unsplash.com/random/100x100/?man" },
        //     { name: "Jane Smith", role: "AI Research Scientist", image: "https://source.unsplash.com/random/100x100/?woman" },
        // ],
        // status: "upcoming",
        // registrationOpen: true,
        // featured: true,
        // },
        // {
            {
                id: 0,
                title: "Code Rush",
                type: "coding competition",
                date: "2025-03-20",
                time: "11:30 AM - 1:00 PM",
                duration: "1 day",
                venue: "Seminar Hall",
                address: "Acharya Narendra Dev College, University of Delhi",
                description: "An exciting coding competition as part of Overload++, where participants will compete for a cash prize of ₹1.5K.",
                image: "./Assets/Code_Rush.jpg",
                speakers: [],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
                cashPrize: "₹1.5K",
                registrationLink: "your_google_form_link_here"
            },
            
        {
                id: 1,
                title: "IOT and Cloud Computing",
                type: "workshop",
                date: "2024-02-29",
                time: "10:00 AM - 12:00 PM, 1:30 PM - 3:30 PM",
                duration: "1 day",
                venue: "Conference Room",
                address: "Acharya Narendra Dev College, University of Delhi",
                description:
                    "A one-day workshop covering the fundamentals of IoT and Cloud Computing, conducted under the DBT Star Status College Scheme 2023-24.",
                image: "./Assets/1.jpg",
                speakers: [
                    { name: "Dr. Nikhil Rajput", role: "Assistant Professor, Ramanujan College, DU", image: "https://source.unsplash.com/random/100x100/?man" },
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
        {
                id: 2,
                title: "Hands on work experience in Blockchain",
                type: "workshop",
                date: "2023-10-31",
                time: "01:00 PM - 03:00 PM",
                duration: "2 hours",
                venue: "Conference Room",
                address: "Acharya Narendra Dev College, University of Delhi",
                description:
                    "An insightful seminar on navigating cybersecurity challenges in the digital world, featuring discussions on the latest trends and threats.",
                image: "./Assets/2.jpg",
                speakers: [
                    { name: "Dr. Ihitiram Raza Khan", role: "Professor,Dept. Computer Sc & Engineering Jamia Hamdard Deemed University , New delhi", image: "https://source.unsplash.com/random/100x100/?man"  },
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            {
                id: 3,
                title: "Navigating the Digital Frontier & Cyber Security Awareness",
                type: "seminar",
                date: "2023-10-31",
                time: "01:00 PM",
                duration: "N/A",
                venue: "Seminar Hall",
                address: "Acharya Narendra Dev College, University of Delhi",
                description:
                    "A seminar on digital transformation and cybersecurity awareness under the aegis of the DBT Star College scheme 2023-24.",
                image: "./Assets/3.jpg",
                speakers: [
                    { name: "Dr. Mohit Soni", role: "Founder and CEO, WhiteLint", image: "https://source.unsplash.com/random/100x100/?man" }
                ],
                status: "upcoming",
                registrationOpen: false,
                featured: false,
            },
            
            {
                id: 4,
                title: "Developing an Excellent Research Paper & Publication Ethics",
                type: "webinar",
                date: "2024-03-22",
                time: "01:30 PM - 03:30 PM",
                duration: "2 hours",
                venue: "Google Meet (Online)",
                address: "Virtual Event",
                description:
                    "A webinar on writing high-quality research papers while adhering to original research and publication ethics, organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
                image: "./Assets/4.jpg",
                speakers: [
                    { name: "Dr. Narendra Nath Dalei", role: "Associate Professor, Department of Economics, Central University of Himachal Pradesh", image: "https://source.unsplash.com/random/100x100/?professor" }
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            {
                id: 5,
                title: "Use of Machine Learning in Video Streaming",
                type: "technical talk",
                date: "2024-03-17",
                time: "11:00 AM - 01:00 PM",
                duration: "2 hours",
                venue: "Google Meet (Online)",
                address: "Virtual Event",
                description:
                    "A tech talk on how Machine Learning is revolutionizing video streaming, organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
                image: "./Assets/5.jpg",
                speakers: [
                    { name: "Mr. Sudesh Chandel", role: "Principal Data Engineer, AT&T India Pvt. Ltd, Hyderabad, India", image: "https://source.unsplash.com/random/100x100/?engineer" }
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            {
                id: 6,
                title: "Quantum Computing and Cybersecurity: A New Era of Challenges",
                type: "technical talk",
                date: "2024-03-16",
                time: "1:00 PM - 3:00 PM",
                duration: "2 hours",
                venue: "Google Meet (Online)",
                address: "Virtual Event",
                description:
                    "A technical talk on Quantum Computing and Cybersecurity, discussing the emerging challenges in the field. Organized by the Turing Society under the aegis of the DBT Star College scheme 2023-24.",
                image: "./Assets/6.jpg",
                speakers: [
                    { name: "Dr. Nihar Rajan Roy", role: "Associate Professor, Dept. of Computer Science & Engineering, Sharda University, Greater Noida", image: "https://source.unsplash.com/random/100x100/?professor" }
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            
            {
                id: 7,
                title: "Data Dive: Surfing the Waves of AI Innovation",
                type: "technical talk",
                date: "2024-02-25",
                time: "11:00 AM - 01:00 PM",
                duration: "2 hours",
                venue: "Online",
                address: "Google Meet",
                description:
                    "A technical talk on AI innovations and data science trends, featuring insights from industry experts.",
                image: "./Assets/7.jpg",
                speakers: [
                    { name: "Ms. Aakanksha Rehan", role: "Senior Data Scientist, Capgemini IT Pvt. Ltd.", image: "https://source.unsplash.com/random/100x100/?woman" }
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            {
                id: 8,
                title: "Natural Language Processing Workshop",
                type: "workshop",
                date: "2024-11-12 to 2024-11-13",
                time: "10:00 AM onwards",
                duration: "2 days",
                venue: "Conference Room",
                address: "College Campus, Building 3",
                description:
                    "An inter-college NLP workshop covering Sentiment Analysis, Text Representation, Document Clustering, and Language Modeling with hands-on sessions.",
                image: "./Assets/8.png",
                speakers: [
                    { name: "Experts from University", role: "NLP Specialists", image: "https://source.unsplash.com/random/100x100/?man" }
                ],
                status: "upcoming",
                registrationOpen: true,
                featured: true,
            },
            {
                id: 9,
                title: "Navigating the Digital Frontier & Cyber Security Awareness",
                type: "seminar",
                date: "2023-10-31",
                time: "01:00 PM",
                duration: "N/A",
                venue: "Seminar Hall",
                address: "Acharya Narendra Dev College, University of Delhi",
                description:
                    "A seminar on digital transformation and cybersecurity awareness under the aegis of the DBT Star College scheme 2023-24.",
                image: "./Assets/3.jpg",
                speakers: [
                    { name: "Dr. Mohit Soni", role: "Founder and CEO, WhiteLint", image: "https://source.unsplash.com/random/100x100/?man" }
                ],
                status: "upcoming",
                registrationOpen: false,
                featured: false,
            },
    ]
    
    // Function to render events
    function renderEvents(filteredEvents) {
        const eventsContainer = document.getElementById("events-container")
        eventsContainer.innerHTML = ""
    
        if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = '<div class="no-events">No events found matching your criteria.</div>'
        return
        }
    
        filteredEvents.forEach((event) => {
        const eventDate = new Date(event.date)
        const formattedDate = eventDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    
        const eventCard = document.createElement("div")
        eventCard.className = "event-card"
        eventCard.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}" loading="lazy">
                </div>
                <div class="event-type">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</div>
                <div class="event-content">
                    <div class="event-date">
                        <i class="fas fa-calendar-alt"></i>
                        ${formattedDate}
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-details">
                        <div class="event-detail">
                            <i class="fas fa-clock"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="event-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${event.venue}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="view-details" data-event-id="${event.id}">View Details</button>
                        ${
                            event.registrationOpen
                            ? `<button class="register-btn" data-event-id="${event.id}">Register</button>`
                            : `<button class="register-btn" disabled>Closed</button>`
                        }
                    </div>
                </div>
            `
        eventsContainer.appendChild(eventCard)
        })
    
        // Add event listeners to buttons
        document.querySelectorAll(".view-details").forEach((button) => {
        button.addEventListener("click", function () {
            const eventId = Number.parseInt(this.getAttribute("data-event-id"))
            openEventModal(eventId)
        })
        })
    
        document.querySelectorAll(".register-btn:not([disabled])").forEach((button) => {
        button.addEventListener("click", function () {
            const googleFormLink = "https://tr.ee/B20RjB"; 
            window.open(googleFormLink, "_blank"); // Opens the form in a new tab
        })
        })
    }
    
    // Function to open event details modal
    function openEventModal(eventId) {
        const event = events.find((e) => e.id === eventId)
        if (!event) return
    
        const eventDate = new Date(event.date)
        const formattedDate = eventDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        })
    
        const modalContent = document.getElementById("modal-content")
    
        let speakersHTML = ""
        if (event.speakers && event.speakers.length > 0) {
        speakersHTML = `
                <div class="event-speakers">
                    <h3>Speakers</h3>
                    <div class="speakers-list">
                        ${event.speakers
                            .map(
                            (speaker) => `
                            <div class="speaker-item">
                                <img src="${speaker.image}" alt="${speaker.name}">
                                <div>
                                    <div>${speaker.name}</div>
                                    <div class="speaker-role">${speaker.role}</div>
                                </div>
                            </div>
                        `,
                            )
                            .join("")}
                    </div>
                </div>
            `
        }
    
        modalContent.innerHTML = `
            <div class="event-header">
                <h2>${event.title}</h2>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-hourglass-half"></i>
                        <span>${event.duration}</span>
                    </div>
                    <div class="event-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.venue}</span>
                    </div>
                </div>
            </div>
            <div class="event-description">
                <h3>About This Event</h3>
                <p>${event.description}</p>
            </div>
            ${speakersHTML}
            <div class="event-location">
                <h3>Location</h3>
                <div class="location-map">
                    <!--- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579802148037!5m2!1sen!2sbg" allowfullscreen=""></iframe>-->
                    <!--- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579802148037!5m2!1sen!2sbg" allowfullscreen=""></iframe>--->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0245170251796!2d77.26125867473363!3d28.53898278832409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dfd351e211%3A0xf522d7e9ce85de17!2sAcharya%20Narendra%20Dev%20College%20University%20Of%20Delhi.!5e0!3m2!1sen!2sin!4v1741896204228!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p>${event.address}</p>
            </div>
            <div class="event-actions-modal">
                ${
                    event.registrationOpen
                    ? `<button class="btn btn-primary register-btn" data-event-id="${event.id}">Register Now</button>`
                    : `<button class="btn btn-primary" disabled>Registration Closed</button>`
                }
                <button class="btn btn-secondary close-modal-btn">Close</button>
            </div>
        `
    
        const modal = document.getElementById("event-modal")
        modal.style.display = "block"
    
        // Add event listener to register button in modal

        const registerBtn = modalContent.querySelector(".register-btn")
        if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            const googleFormLink = "https://tr.ee/B20RjB"; 
            window.open(googleFormLink, "_blank"); // Opens the form in a new tab
        })
        }

    
        // Add event listener to close button
        const closeBtn = modalContent.querySelector(".close-modal-btn")
        if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeModal("event-modal")
        })
        }
    }
    

    
    // Function to close modal----IMP
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }
    
    // Filter events by type and status
    function filterEvents() {
        const searchTerm = document.getElementById('search-events').value.toLowerCase();
        const activeFilterBtn = document.querySelector('.filter-btn.active');
        const activeTimeBtn = document.querySelector('.time-btn.active');
        
        const filterType = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
        const filterTime = activeTimeBtn ? activeTimeBtn.getAttribute('data-time') : 'upcoming';
        
        const filteredEvents = events.filter(event => {
            // Filter by search term
            const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                                event.description.toLowerCase().includes(searchTerm);
            
            // Filter by type
            const matchesType = filterType === 'all' || event.type === filterType;
            
            // Filter by time (upcoming/past)
            const matchesTime = event.status === filterTime;
            
            return matchesSearch && matchesType && matchesTime;
        });
        
        renderEvents(filteredEvents);
    }
    
    // Initialize events display
    document.addEventListener('DOMContentLoaded', () => {
        // Initial render of upcoming events
        const upcomingEvents = events.filter(event => event.status === 'upcoming');
        renderEvents(upcomingEvents);
        
        // Set up event listeners for search and filters
        document.getElementById('search-events').addEventListener('input', filterEvents);
        
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterEvents();
            });
        });
        
        document.querySelectorAll('.time-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterEvents();
            });
        });
    });
    
    