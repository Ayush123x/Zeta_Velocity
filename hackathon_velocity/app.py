from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

alerts = []

@app.route('/alert', methods=['POST'])
def receive_alert():
    data = request.json
    alert = {
        "id": len(alerts) + 1,
        "source": data.get("source", "unknown"),
        "time": datetime.now().strftime("%H:%M:%S"),
        "status": "ACTIVE"
    }
    alerts.append(alert)
    return jsonify(alert)

@app.route('/alerts', methods=['GET'])
def get_alerts():
    return jsonify(alerts)

@app.route('/update_status', methods=['POST'])
def update_status():
    data = request.json
    for alert in alerts:
        if alert["id"] == data.get("id"):
            alert["status"] = data.get("status")
            return jsonify(alert)
    return jsonify({"error": "Alert not found"}), 404

app.run(debug=True)
