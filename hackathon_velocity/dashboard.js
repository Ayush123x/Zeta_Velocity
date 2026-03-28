const BACKEND_URL = "http://172.20.214.135:5000"; 
// replace with Member 3 PC IP

async function fetchAlerts() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/alerts`);
        const alerts = await res.json();

        const table = document.getElementById("alerts");
        table.innerHTML = "";

        alerts.forEach(alert => {
            table.innerHTML += `
                <tr>
                    <td>${alert.alert_id}</td>
                    <td>${alert.device_id}</td>
                    <td>${alert.alert_type}</td>
                    <td class="status-${alert.status}">${alert.status}</td>
                    <td>
                        <button class="ack-btn"
                            onclick="updateAlert(${alert.alert_id}, 'ACKNOWLEDGED')">
                            Ack
                        </button>
                        <button class="resolve-btn"
                            onclick="updateAlert(${alert.alert_id}, 'RESOLVED')">
                            Resolve
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error fetching alerts:", error);
    }
}

async function updateAlert(alertId, newStatus) {
    await fetch(`${BACKEND_URL}/api/alerts/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            alert_id: alertId,
            status: newStatus
        })
    });

    fetchAlerts(); // refresh table
}

// Auto refresh every 3 seconds
setInterval(fetchAlerts, 3000);
fetchAlerts();
