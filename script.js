// 1. Define Data Structure for all 10 Sensors
const sensorsData = {
    dht11: { name: "DHT11 Sensor", unit: "°C / %", icon: "🌡️" },
    ultrasonic: { name: "Ultrasonic HC-SR04", unit: "cm", icon: "🦇" },
    ldr: { name: "LDR Light", unit: "lux", icon: "☀️" },
    pir: { name: "PIR Motion", unit: "Status", icon: "🏃" },
    mq2: { name: "MQ-2 Gas", unit: "ppm", icon: "🌫️" },
    soil: { name: "Soil Moisture", unit: "%", icon: "🌱" },
    ir: { name: "IR Proximity", unit: "Boolean", icon: "🛑" },
    bmp: { name: "BMP180 Pressure", unit: "hPa", icon: "🎈" },
    rain: { name: "Rain Sensor", unit: "Level", icon: "🌧️" },
    servo: { name: "Servo Motor", unit: "Angle", icon: "🦾" }
};

// 2. Function to Render Cards based on Checkboxes
function renderDashboard() {
    const dashboard = document.getElementById('dashboard-area');
    dashboard.innerHTML = ''; // Clear current content

    // Get all checked checkboxes
    const checkboxes = document.querySelectorAll('.sensor-list input[type="checkbox"]');
    
    checkboxes.forEach(box => {
        if (box.checked) {
            const key = box.value; // e.g., 'dht11'
            const sensor = sensorsData[key];
            
            // Generate Random Data for Demo
            const value = generateRandomValue(key);

            // Create HTML Card
            const cardHTML = `
                <div class="card">
                    <div class="card-header">
                        <span>${sensor.icon} ${sensor.name}</span>
                        <span class="card-status">Active</span>
                    </div>
                    <div class="card-value">${value} <span style="font-size:1rem; color:#7f8c8d">${sensor.unit}</span></div>
                    <div style="font-size: 0.8rem; color: #7f8c8d; margin-top: auto;">
                        Operation: Monitoring...
                    </div>
                </div>
            `;
            dashboard.innerHTML += cardHTML;
        }
    });

    // If no sensors selected
    if (dashboard.innerHTML === '') {
        dashboard.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">No sensors selected. Please select from the sidebar.</p>`;
    }
}

// 3. Helper to generate realistic fake data
function generateRandomValue(type) {
    if(type === 'dht11') return (Math.random() * (35-20) + 20).toFixed(1); // 20-35 C
    if(type === 'ultrasonic') return Math.floor(Math.random() * 200); // 0-200 cm
    if(type === 'ldr') return Math.floor(Math.random() * 1000); // 0-1000 lux
    if(type === 'pir' || type === 'ir') return Math.random() > 0.5 ? "Detected" : "Clear";
    if(type === 'mq2') return Math.floor(Math.random() * 500); // ppm
    if(type === 'soil' || type === 'rain') return Math.floor(Math.random() * 100); // %
    if(type === 'bmp') return (1013 + Math.random() * 10).toFixed(1); // hPa
    if(type === 'servo') return Math.floor(Math.random() * 180); // 0-180 deg
    return 0;
}

// 4. Event Listeners
document.querySelectorAll('.sensor-list input').forEach(box => {
    box.addEventListener('change', renderDashboard);
});

// Run once on load
function simulateAll() { renderDashboard(); }
window.onload = renderDashboard;