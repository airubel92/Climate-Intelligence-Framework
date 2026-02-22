# Climate Intelligence Framework 🌍📊

**A Big Data and Machine Learning Approach for Weather Forecasting and Analysis in Bangladesh**

This project aims to analyze historical climate data (2021-2024) and provide reliable future weather forecasts (2026-2030) for Bangladesh using an integrated pipeline of **Excel, R, and Python**.

---

## 🚀 Key Features
- **Big Data Analysis:** Processed over 8,700+ rows of historical climate records.
- **Predictive Modeling:** Utilized Facebook's **Prophet Model** for time-series forecasting.
- **Explainable AI (XAI):** Integrated **SHAP** values to interpret model decisions and feature importance.
- **Interactive Dashboard:** A responsive web interface to visualize temperature and precipitation trends.
- **Statistical Rigor:** Validated data using R-programming and Linear Regression.

---

## 🛠️ Tech Stack
- **Data Engineering:** Microsoft Excel (ETL, Data Cleaning)
- **Statistical Computing:** R Programming (Heatmaps, Regression)
- **Machine Learning:** Python (Prophet, Scikit-learn, SHAP)
- **Web Interface:** HTML5, CSS3 (Glassmorphism UI), JavaScript, Chart.js

---

## 📈 Model Performance
| Metric | Value |
| :--- | :--- |
| **Mean Squared Error (MSE)** | 12.4582 |
| **R-squared ($R^2$)** | 0.8420 |

---

## 📂 Project Structure
```bash
├── index.html          # Main web interface
├── style.css           # Custom Glassmorphism styling
├── script.js           # Interactive chart logic & data fetching
├── chart_data.json     # The "Brain": Project results and stats
└── README.md           # Project documentation