+++
title = "AI Capabilities"
weight = 20
menuTitle = "AI Capabilities"
+++

## AI Capabilities

LEAP's intelligence layer is composed of multiple interconnected AI and automation capabilities, each addressing a distinct challenge in sustainable energy management. Together they form a continuous loop: collect → validate → understand → predict → act → explain.

---

### Forecasting

LEAP generates short-term to long-term energy forecasts spanning weekly to yearly horizons, covering consumption, cost, carbon emissions, and renewable generation. These forecasts move the platform from reactive monitoring to proactive planning — enabling La Trobe to anticipate demand peaks, model the impact of energy-saving initiatives, and schedule maintenance without disrupting operations.

Specialist forecasting models handle different time scales and use cases, including a Transformer architecture for global energy time series forecasting and dedicated solar irradiance nowcasting using CNN + LSTM networks for real-time photovoltaic generation prediction.

---

### Building Profiles & Anomaly Detection

Because La Trobe's 100+ buildings each serve different purposes — teaching, research, administration, student accommodation — each has a unique energy signature. LEAP learns these signatures at multiple granularities, building intra-day and inter-day consumption profiles that capture what "normal" looks like for every individual asset.

When consumption deviates from the expected profile, LEAP's anomaly detection engine flags it automatically — distinguishing transient spikes from persistent underperformance, and isolating individual faults from system-wide issues. This pattern-based approach makes it possible to surface problems that would be invisible in aggregate dashboards.

LEAP uses SHAP (SHapley Additive exPlanations) values to explain what drove each anomaly — temperature, time of day, day of week, holiday status, humidity — making the AI's reasoning transparent and interpretable for non-technical decision-makers.

![SHAP value explainability chart showing the relative impact of ApparentTemperature, RelativeHumidity, Hour24, DewPointTemperature, IsWeekend and other features on energy consumption model output](/images/leap/ai-capabilities/shap-explainability.png)

---

### Digital Twins

LEAP builds digital twin models of energy clusters and tracks their performance against defined KPIs. These virtual representations allow operators to simulate interventions — such as load shifting, equipment changes or tariff restructuring — before committing to them in the physical environment. The digital twin layer also underpins the platform's Measurement and Verification capability, providing evidence-based validation of the impact of energy efficiency initiatives.

---

### Data Quality Framework

Reliable AI depends on reliable data. LEAP's data quality framework validates all incoming data feeds against defined standards and formats before they enter the all-data lakehouse. Critically, it uses AI for **predictive coding** during data dropouts and periods of missing or erroneous sensor readings — ensuring the lakehouse remains inclusive and complete even when individual data sources are intermittent. This is particularly important across a multi-campus estate with hundreds of meters from diverse vendors.

---

### Intelligent Reporting: Bill Validation & Tariff Simulation

LEAP closes the loop between operational data and financial accountability. The platform automates bill validation — cross-referencing actual consumption data against energy invoices to identify billing errors — and runs tariff simulations to model the financial impact of switching between energy pricing structures. These capabilities translate AI insights directly into cost savings and procurement decisions.

---

### Real-Time Monitoring & Smart Alerting

Consumption is monitored continuously with active benchmarking against expected baselines. When major events or anomalies are detected, LEAP's triage and alerting engine generates smart notifications with dynamic reporting — surfacing the right information to the right stakeholder at the right time, without alert fatigue from false positives.

---

### Technology Platform

LEAP was built entirely in-house on the **Microsoft Azure** platform and is fully cloud native. It uses CI/CD pipelines for rapid prototyping and deployment, and its core architecture is containerised for resilience and scalability.

The all-data lakehouse creates a single-version-of-truth for all energy data — internal streams covering consumption, generation, utilisation and events, alongside external streams for weather, climate, tariff and energy market metrics. The code framework draws on the .NET and Python ecosystems, with a React.js web frontend and advanced analytics delivered through Power BI and Grafana.
