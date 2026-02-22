// Function to fetch data and initialize the dashboard
async function initDashboard() {
    try {
        // Fetching the JSON data
        const response = await fetch('chart_data.json');
        const data = await response.json();

        // 1. Update Summary Metrics
        document.getElementById('total-records').innerText = data.station_summary.total_records.toLocaleString();
        document.getElementById('r2-score').innerText = data.model_performance.values[1];

        // 2. Initialize Historical Temperature Chart
        const tempCtx = document.getElementById('tempChart').getContext('2d');
        new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: data.historical_data.years,
                datasets: [{
                    label: 'Avg Temperature (°F)',
                    data: data.historical_data.avg_temp,
                    borderColor: '#38bdf8',
                    backgroundColor: 'rgba(56, 189, 248, 0.2)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: '#f8fafc' } } },
                scales: {
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
                }
            }
        });

        // 3. Initialize Precipitation Bar Chart
        const prcpCtx = document.getElementById('prcpChart').getContext('2d');
        new Chart(prcpCtx, {
            type: 'bar',
            data: {
                labels: data.historical_data.years,
                datasets: [{
                    label: 'PRCP Count',
                    data: data.historical_data.prcp_count,
                    backgroundColor: '#10b981',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: '#f8fafc' } } },
                scales: {
                    y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } }
                }
            }
        });

        // 4. Populate Forecast Table
        const tableBody = document.getElementById('forecast-table-body');
        data.forecast_data.years.forEach((year, index) => {
            const row = `<tr>
                <td style="font-weight: 600;">${year}</td>
                <td style="font-family: 'Roboto Mono';">${data.forecast_data.predicted_temp[index]} °F</td>
                <td><span style="color: #fbbf24;">↑ Rising</span></td>
            </tr>`;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error('Error loading chart data:', error);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Run initialization on load
window.onload = initDashboard;