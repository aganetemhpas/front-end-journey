// Dashboard Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts if they exist on the page
    const dailyChartCtx = document.getElementById('dailyChart');
    const visitorTypesChartCtx = document.getElementById('visitorTypesChart');
    
    if (dailyChartCtx) {
        new Chart(dailyChartCtx, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [
                    {
                        label: 'Entradas',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderColor: '#4361ee',
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Saídas',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: '#f72585',
                        backgroundColor: 'rgba(247, 37, 133, 0.1)',
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    if (visitorTypesChartCtx) {
        new Chart(visitorTypesChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Funcionários', 'Visitantes', 'Fornecedores', 'Terceirizados'],
                datasets: [{
                    data: [300, 150, 100, 50],
                    backgroundColor: [
                        '#4361ee',
                        '#4cc9f0',
                        '#f8961e',
                        '#f72585'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    }
                }
            }
        });
    }
    
    // New register button functionality
    const newRegisterBtn = document.getElementById('newRegisterBtn');
    if (newRegisterBtn) {
        newRegisterBtn.addEventListener('click', function() {
            // Scroll to the form section
            document.querySelector('.registration-form').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Filter functionality for tables
    const searchInputs = ['searchPeople', 'searchVehicle'];
    searchInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                const filter = this.value.toLowerCase();
                const table = this.closest('.registered-list').querySelector('table');
                const rows = table.querySelectorAll('tbody tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(filter) ? '' : 'none';
                });
            });
        }
    });
    
    // Date filter functionality
    const dateFilter = document.getElementById('filterAccessDate');
    if (dateFilter) {
        dateFilter.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const table = this.closest('.registered-list').querySelector('table');
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const dateCell = row.querySelector('td:nth-child(4)'); // Adjust index based on your table structure
                if (dateCell) {
                    const cellDateStr = dateCell.textContent.split(' ')[0]; // Get date part only
                    const cellDateParts = cellDateStr.split('/');
                    const cellDate = new Date(`${cellDateParts[2]}-${cellDateParts[1]}-${cellDateParts[0]}`);
                    
                    if (isNaN(selectedDate.getTime()) || 
                        (cellDate.getDate() === selectedDate.getDate() &&
                         cellDate.getMonth() === selectedDate.getMonth() &&
                         cellDate.getFullYear() === selectedDate.getFullYear())) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        });
    }
});