document.addEventListener('DOMContentLoaded', function() {
    // Get area key from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const areaKey = urlParams.get('area');

    // DOM Elements
    const areaTitle = document.getElementById('area-title');
    const areaDescription = document.getElementById('area-description');
    const facultiesContent = document.getElementById('faculties-content');
    const scholarsContent = document.getElementById('scholars-content');
    const studentsContent = document.getElementById('students-content');

    // Validate area key
    if (!areaKey || !researchAreas[areaKey]) {
        showError();
        return;
    }

    const areaData = researchAreas[areaKey];

    // Update header
    areaTitle.textContent = areaData.displayName;
    areaDescription.textContent = areaData.description;
    document.title = `ChEC | ${areaData.displayName}`;

    // Populate the page
    populateFaculties(areaData.faculty);
    populateScholars(areaData.scholar);
    populateStudents(areaData.student);

    // --- Helper Functions ---

    function showError() {
        areaTitle.textContent = 'Area Not Found';
        areaDescription.textContent = 'The requested research area could not be found. Please go back and try again.';
        
        const errorHTML = `
            <div class="error-state" style="grid-column: 1 / -1;">
                <h2>Oops! Something went wrong</h2>
                <p>We couldn't find the research area you're looking for.</p>
                <a href="../matrix/index.html" class="back-link" style="margin-top: 20px; display: inline-flex;">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back to Research Matrix</span>
                </a>
            </div>
        `;
        
        document.querySelector('.sections').innerHTML = errorHTML;
    }

    function getInitials(name) {
        return name.split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2);
    }

    function formatLinkedIn(linkedin) {
        if (!linkedin) return '#';
        if (linkedin.startsWith('http')) return linkedin;
        if (linkedin.startsWith('www.')) return 'https://' + linkedin;
        if (linkedin.startsWith('linkedin.com')) return 'https://' + linkedin;
        return 'https://www.linkedin.com/in/' + linkedin;
    }

    // --- Faculty Card Creation ---
    function createFacultyCard(facultyName) {
        // Find faculty details from the faculties array
        const faculty = faculties.find(f => f.name === facultyName);
        
        if (!faculty) {
            // If faculty not found in data, create a basic card
            return `
                <div class="person-row">
                    <div class="image-container">
                        <div class="profile-img-placeholder">${getInitials(facultyName)}</div>
                    </div>
                    <div class="details">
                        <h2 class="name">${facultyName}</h2>
                    </div>
                </div>
            `;
        }

        return `
            <div class="person-row">
                <div class="image-container">
                    ${faculty.imageUrl 
                        ? `<img class="profile-img" src="../${faculty.imageUrl}" alt="${faculty.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <div class="profile-img-placeholder" style="display: none;">${getInitials(faculty.name)}</div>`
                        : `<div class="profile-img-placeholder">${getInitials(faculty.name)}</div>`
                    }
                </div>
                <div class="details">
                    <h2 class="name">${faculty.name}</h2>
                    <p class="designation">${faculty.designation}</p>
                    <div class="contact-info">
                        <a href="mailto:${faculty.contact.email}" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        ${faculty.googleScholar ? `
                            <a href="${faculty.googleScholar}" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                                <i class="fas fa-graduation-cap"></i>
                            </a>
                        ` : ''}
                        ${faculty.contact.phone ? `
                            <a href="tel:${faculty.contact.phone}" title="Phone">
                                <i class="fas fa-phone"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // --- PhD Scholar Card Creation ---
    function createScholarCard(scholarName) {
        // Find scholar details from talent directory
        const scholar = talentDirectory.phd_scholars.find(s => s.name === scholarName);
        
        if (!scholar) {
            return `
                <div class="person-row">
                    <div class="image-container">
                        <div class="profile-img-placeholder">${getInitials(scholarName)}</div>
                    </div>
                    <div class="details">
                        <h2 class="name">${scholarName}</h2>
                    </div>
                </div>
            `;
        }

        return `
            <div class="person-row">
                <div class="image-container">
                    ${scholar.photo 
                        ? `<img class="profile-img" src="../${scholar.photo}" alt="${scholar.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <div class="profile-img-placeholder" style="display: none;">${getInitials(scholar.name)}</div>`
                        : `<div class="profile-img-placeholder">${getInitials(scholar.name)}</div>`
                    }
                </div>
                <div class="details">
                    <h2 class="name">${scholar.name}</h2>
                    ${scholar.research_topic ? `<p class="designation">${scholar.research_topic}</p>` : ''}
                    ${scholar.supervisor ? `<p class="program">Supervisor: ${scholar.supervisor}</p>` : ''}
                    ${scholar.bio ? `<p class="bio">${scholar.bio}</p>` : ''}
                    <div class="contact-info">
                        <a href="mailto:${scholar.email}" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        ${scholar.linkedin ? `
                            <a href="${formatLinkedIn(scholar.linkedin)}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        ` : ''}
                        ${scholar.resume ? `
                            <a href="../${scholar.resume}" target="_blank" rel="noopener noreferrer" title="Resume">
                                <i class="fas fa-file-pdf"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // --- Student Card Creation ---
    function createStudentCard(studentName) {
        // Find student details from talent directory
        const student = talentDirectory.students.find(s => s.name === studentName);
        
        if (!student) {
            return `
                <div class="person-row">
                    <div class="image-container">
                        <div class="profile-img-placeholder">${getInitials(studentName)}</div>
                    </div>
                    <div class="details">
                        <h2 class="name">${studentName}</h2>
                    </div>
                </div>
            `;
        }

        return `
            <div class="person-row">
                <div class="image-container">
                    ${student.photo 
                        ? `<img class="profile-img" src="../${student.photo}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                           <div class="profile-img-placeholder" style="display: none;">${getInitials(student.name)}</div>`
                        : `<div class="profile-img-placeholder">${getInitials(student.name)}</div>`
                    }
                </div>
                <div class="details">
                    <h2 class="name">${student.name}</h2>
                    ${student.program ? `<p class="designation">${student.program}</p>` : ''}
                    ${student.project_title ? `<p class="program">Project: ${student.project_title}</p>` : ''}
                    ${student.bio ? `<p class="bio">${student.bio}</p>` : ''}
                    <div class="contact-info">
                        <a href="mailto:${student.email}" title="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                        ${student.linkedin ? `
                            <a href="${formatLinkedIn(student.linkedin)}" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        ` : ''}
                        ${student.resume ? `
                            <a href="../${student.resume}" target="_blank" rel="noopener noreferrer" title="Resume">
                                <i class="fas fa-file-pdf"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // --- Populate Functions ---
    function populateFaculties(facultyNames) {
        if (!facultyNames || facultyNames.length === 0) {
            facultiesContent.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <p>No faculty members listed for this area yet.</p>
                </div>
            `;
            return;
        }

        facultiesContent.innerHTML = facultyNames.map(name => createFacultyCard(name)).join('');
    }

    function populateScholars(scholarNames) {
        if (!scholarNames || scholarNames.length === 0) {
            scholarsContent.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-user-graduate"></i>
                    <p>No PhD scholars listed for this area yet.</p>
                </div>
            `;
            return;
        }

        scholarsContent.innerHTML = scholarNames.map(name => createScholarCard(name)).join('');
    }

    function populateStudents(studentNames) {
        if (!studentNames || studentNames.length === 0) {
            studentsContent.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-users"></i>
                    <p>No students listed for this area yet.</p>
                </div>
            `;
            return;
        }

        studentsContent.innerHTML = studentNames.map(name => createStudentCard(name)).join('');
    }
});
