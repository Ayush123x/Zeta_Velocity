# 🚨 Sentinel – IoT Emergency Escalation System

![Python](https://img.shields.io/badge/Python-3.x-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?style=for-the-badge&logo=flask)
![Status](https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Sentinel** is a software-centric emergency alert platform inspired by standalone GSM-based SOS systems. It simulates a hardware-triggered safety device and processes alerts through a structured backend system with real-time monitoring and built-in GPS tracking capabilities.

*Built during the Velocity Hackathon (24–25 January 2026).*

---

## 🔎 The Problem

In emergency situations, users may not be able to unlock smartphones, navigate apps quickly, or rely on stable internet connections. Traditional safety systems often fail under stress due to high-friction interfaces. Sentinel addresses this by designing a fast, minimal, and structured emergency signaling system that mimics hardware reliability.

---

## 💡 The Solution

Sentinel introduces a **multi-level alert system** with intelligent escalation logic, allowing the system to differentiate between a simple check-in and a critical emergency:

* 🔹 **Single Press** → Immediate Guardian Notification
* 🔹 **Double Press** → Alert + Live Location (GPS) + Call Workflow
* 🔹 **Long Press** → Critical Emergency Escalation

---

## 🔥 Alert Priority Scoring System

To ensure structured escalation and organized response tracking, Sentinel utilizes a Priority Scoring Engine:

| Priority | Trigger Mode | Description | Outcome / Response Level |
| :--- | :--- | :--- | :--- |
| **P1** | Single Press | Standard Alert | Notification to primary contacts. |
| **P2** | Double Press | Elevated Alert | Location tagging & elevated response. |
| **P3** | Long Press | Critical Alert | High-frequency tracking & extreme escalation. |

---

## 🏗 System Architecture

The Sentinel platform is built on a scalable, REST-driven architecture designed to manage the full lifecycle of an emergency event.

`Trigger Simulation` → `Flask API` → `SQLite Database` → `Real-Time Dashboard`

---

## 🔁 Alert Lifecycle
Every alert is systematically processed through a strict state machine:

`Triggered` ➡️ `Acknowledged` ➡️ `Resolved`

---

## 🔌 API Documentation

### 1. Create Alert
Trigger an emergency event based on a simulated hardware press.
* **Method:** `POST /api/alert`
* **Payload:**
    ```json
    {
      "device_id": "DEVICE_01",
      "location": "Hostel Block A",
      "type": "panic_button",
      "priority": "P3"
    }
    ```

### 2. Get Alerts
Fetch all active and historical alerts for the real-time monitoring dashboard.
* **Method:** `GET /api/alerts`
* **Returns:** JSON array of alert objects.

### 3. Update Alert Status
Transition the alert lifecycle state (Acknowledge or Resolve).
* **Method:** `POST /api/alerts/update`
* **Payload:**
    ```json
    {
      "alert_id": 1,
      "action": "acknowledge"
    }
    ```
    *(Actions available: `acknowledge`, `resolve`)*

---

## ⚙️ Tech Stack

* **Backend:** Python 3.x, Flask, REST APIs
* **Database:** SQLite (Persistent Event Storage)
* **Frontend / Dashboard:** HTML, CSS, JavaScript
* **Architecture:** Modular System Design, Request Validation

---

## 🚀 Features

* **Multi-Level Emergency Triggering** (P1, P2, P3).
* **Integrated GPS Tracking** (Live Location).
* **Real-Time Dashboard Updates** for active monitoring.
* **Backend Validation & Processing** to ensure system stability.
* **Structured Alert Lifecycle** tracking.
* **Scalable System Architecture** ready for future expansion.

---

## 🌍 Vision
To build a scalable emergency communication system that evolves from a software prototype into a standalone hardware solution using GSM or wearable IoT devices.

---

## 📌 Future Improvements
* ☁️ Cloud deployment & load balancing.
* 🔒 Implementation of Authentication & Security protocols.
