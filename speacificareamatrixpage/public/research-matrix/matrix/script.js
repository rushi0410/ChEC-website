document.addEventListener('DOMContentLoaded', function () {
    // Get all research area keys from config
    const areaKeys = Object.keys(researchAreas);
    
    // Build display names array for rendering
    const displayNames = areaKeys.map(key => researchAreas[key].displayName);

    // Build faculty data from the faculties array
    const facultyData = faculties.map(faculty => ({
        name: faculty.name,
        id: faculty.id,
        research: faculty.expertise
    }));

    const researchContainer = document.getElementById('research-areas-container');
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');

    // Navigate to research area detail page
    function navigateToArea(areaKey) {
        // Store data in sessionStorage for the detail page
        const areaData = researchAreas[areaKey];
        sessionStorage.setItem('selectedArea', JSON.stringify({
            key: areaKey,
            ...areaData
        }));
        
        // Navigate to the research area detail page
        window.location.href = `../research-area/index.html?area=${encodeURIComponent(areaKey)}`;
    }

    function renderResearchAreas() {
        researchContainer.innerHTML = '';
        areaKeys.forEach((key, index) => {
            const area = researchAreas[key];
            const card = document.createElement('a');
            card.className = 'research-card';
            card.textContent = area.displayName;
            card.dataset.area = key;
            card.href = `../research-area/index.html?area=${encodeURIComponent(key)}`;
            card.addEventListener('click', function(e) {
                e.preventDefault();
                navigateToArea(key);
            });
            researchContainer.appendChild(card);
        });
    }

    function renderTable() {
        // Table Header Logic
        tableHeader.innerHTML = '';
        const headerRow = document.createElement('tr');
        let headerHTML = `<th scope="col">Professor Name</th>`;
        
        areaKeys.forEach(key => {
            const area = researchAreas[key];
            headerHTML += `<th scope="col" class="clickable-header" data-area="${key}" title="Click to explore ${area.displayName}">${area.displayName}</th>`;
        });
        headerRow.innerHTML = headerHTML;
        tableHeader.appendChild(headerRow);

        // Add click handlers to column headers
        headerRow.querySelectorAll('.clickable-header').forEach(header => {
            header.addEventListener('click', function() {
                const areaKey = this.dataset.area;
                navigateToArea(areaKey);
            });
        });

        // Table Body Logic
        tableBody.innerHTML = '';
        facultyData.forEach(faculty => {
            const row = document.createElement('tr');
            row.className = 'table-row';

            let rowHTML = `<td class="faculty-name-cell"><a href="../../../../listoffacultypage/public/listoffacultypage/prof.html#${faculty.id}" class="faculty-link">${faculty.name}</a></td>`;

            areaKeys.forEach(key => {
                const area = researchAreas[key];
                // Check if faculty name is in the area's faculty list
                const hasResearch = area.faculty.includes(faculty.name);
                
                rowHTML += `
                    <td class="status-cell" data-area="${key}">
                        ${hasResearch ?
                        `<div class="icon-check" title="${faculty.name} works in ${area.displayName}" style="cursor: pointer;" onclick="window.location.href='../research-area/index.html?area=${encodeURIComponent(key)}'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>`
                        :
                        `<div class="icon-empty"></div>`
                        }
                    </td>`;
            });
            row.innerHTML = rowHTML;
            tableBody.appendChild(row);
        });
    }

    // Interactive Highlight on card hover
    researchContainer.addEventListener('mouseover', function (e) {
        const card = e.target.closest('.research-card');
        if (card && card.dataset.area) {
            const areaKey = card.dataset.area;
            
            // Remove previous highlights
            document.querySelectorAll('th, td').forEach(cell => cell.classList.remove('highlight-col'));

            // Find the column index
            const areaIndex = areaKeys.indexOf(areaKey);
            if (areaIndex !== -1) {
                const colIndex = areaIndex + 2; // +2 for 1-based index and skipping the name column
                const columnCells = document.querySelectorAll(`tr > *:nth-child(${colIndex})`);
                
                // Apply new highlights
                columnCells.forEach(cell => {
                    cell.classList.add('highlight-col');
                });

                // Smooth scroll to show the selected column
                const tableWrapper = document.querySelector('.table-responsive-wrapper');
                const targetHeader = document.querySelector(`th:nth-child(${colIndex})`);
                
                if (tableWrapper && targetHeader) {
                    const professorColWidth = document.querySelector('.faculty-table th:first-child').offsetWidth;
                    const scrollTarget = targetHeader.offsetLeft - professorColWidth;

                    tableWrapper.scrollTo({
                        left: scrollTarget,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });

    // Remove highlights when mouse leaves
    researchContainer.addEventListener('mouseout', function (e) {
        if (!e.relatedTarget || !researchContainer.contains(e.relatedTarget)) {
            document.querySelectorAll('th, td').forEach(cell => cell.classList.remove('highlight-col'));
        }
    });

    renderResearchAreas();
    renderTable();
});
