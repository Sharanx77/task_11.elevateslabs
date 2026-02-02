# 🎛️ IoT Master Controller | CSS Grid Layout - Task 11

**A responsive, professional-grade admin dashboard designed for monitoring multi-sensor Arduino networks, featuring advanced CSS Grid layouts and real-time data simulation.**

### 🔴 **Live Demo:** [Click Here to View](https://sharanx77.github.io/task_11.elevateslabs/)

This project was developed as part of the **Elevate Labs Web Development Internship (Task 11)**. It bridges the gap between Electronics (ECE) and Frontend Development, demonstrating how modern web technologies can be used to visualize complex hardware data.

---

## 🚀 About The Project

**"IoT Master Controller"** is a simulated control panel designed for an industrial or home automation context. Unlike standard web layouts, this dashboard requires complex data visualization, making **CSS Grid** the perfect tool for the job.

The application simulates a live connection to an **ESP32/Arduino** gateway, allowing users to:
1.  **Monitor Environmental Data:** Real-time feedback from temperature, humidity, and gas sensors.
2.  **Control Actuators:** Visualize the status of motors and relays.
3.  **Dynamic Filtering:** Toggle specific sensors on/off using the sidebar to focus on relevant data.

### 🎯 Key Features
* **Advanced CSS Grid Architecture:** Utilizes `grid-template-areas` to create a semantic, maintainable layout (Header, Sidebar, Main, Footer).
* **Mobile-First Responsiveness:** Seamlessly adapts from a single-column mobile stack to a multi-column desktop "dashboard" view using Media Queries.
* **Dynamic DOM Manipulation:** JavaScript listens for checkbox events to instantly inject or remove HTML cards from the grid without refreshing the page.
* **Smart Layouts:** Uses `repeat(auto-fit, minmax(...))` to automatically flow sensor cards into the available space, ensuring a perfect look on tablets and wide screens.
* **Educational Module:** A dedicated "Sensor Guide" page (`info.html`) that explains the working principles of all 10 sensors with links to official Arduino documentation.

---

## 🧰 Tech Stack

* **HTML5:** Semantic structure with `<header>`, `<aside>`, `<main>`, and `<footer>`.
* **CSS3:** Heavy use of **Grid Layout** for page structure and **Flexbox** for component alignment.
* **JavaScript (ES6):** Vanilla JS for DOM manipulation, event listeners, and data simulation.
* **Design:** Modern "Dark/Light" hybrid theme with flat UI design principles.

---

## 📡 Sensor Modules Implemented

The dashboard currently simulates data for the following hardware components:

| Sensor / Module | Function | Data Type |
| :--- | :--- | :--- |
| **DHT11** | Temperature & Humidity | Float / Percentage |
| **HC-SR04** | Ultrasonic Distance | Integer (cm) |
| **LDR** | Light Intensity | Integer (Lux) |
| **PIR** | Motion Detection | Boolean (Detected/Clear) |
| **MQ-2** | Gas/Smoke | Integer (PPM) |
| **Soil Moisture** | Agriculture Monitoring | Percentage |
| **IR Proximity** | Obstacle Detection | Boolean |
| **BMP180** | Barometric Pressure | Float (hPa) |
| **Rain Sensor** | Weather Monitoring | Percentage |
| **SG90 Servo** | Motor Control | Angle (0-180°) |

---

## 📂 Project Structure

```text
/Task_11_IoT_Dashboard
│
├── index.html      # Main Dashboard (Grid Layout & Controls)
├── info.html       # Documentation Page (Sensor Details)
├── style.css       # Global Styles, CSS Grid definitions, Responsiveness
└── script.js       # Logic for sidebar toggles and random data generation
```

🔮 Future Roadmap
While the current version uses Math.random() to simulate data, the architecture is designed to be easily connected to real hardware.
Phase 2: Connect to an ESP32 Web Server using the fetch() API to replace random numbers with live JSON data.
Phase 3: Implement Chart.js to visualize historical temperature trends over time.
Phase 4: Add voice control (Web Speech API) to toggle sensors hands-free.

🛠️ Technical Implementation Details (Task 11)
This project strictly adheres to the prompt requirements:
Grid Activation: Applied display: grid to the .grid-container.
Rows & Columns: Defined using grid-template-columns: 260px 1fr (Desktop) and 1fr (Mobile).


## 👨‍💻 Author

**B Sharana Basava**
* *Interests:* VLSI, Embedded Systems, Web Development, Python

## 📬 Contact
**B Sharana Basava**
*Electronics and Communication Engineering Student*
* 📧 [Email](mailto:b.sharanabasava2006@gmail.com)
* 💼 [LinkedIn](https://www.linkedin.com/in/b-sharana-basava-b4313a325)
* 🐙 [GitHub](https://github.com/Sharanx77)


## 🙌 Acknowledgments
* **Elevate Labs** for the internship opportunity.
* **Stoic Quotes API** for the open-source data.
* **Gemini AI** for code optimization and assistance.

