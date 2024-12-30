document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const departure = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const date = document.getElementById("date").value;
    const time24 = document.getElementById("time").value;

    // Convert time to 12-hour format with AM/PM
    const [hour, minute] = time24.split(":");
    const hour12 = hour % 12 || 12; // Convert 0-23 to 1-12
    const ampm = hour >= 12 ? "PM" : "AM";
    const time12 = `${hour12}:${minute} ${ampm}`;

    if (!name || !age || !gender || !departure || !destination || !date || !time24) {
        alert("All fields are required.");
        return;
    }

    if (age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (departure.toLowerCase() === destination.toLowerCase()) {
        alert("Departure and Destination cannot be the same.");
        return;
    }

    const trains = [
        { name: "Express Train", fare: 500 },
        { name: "Superfast Train", fare: 700 },
        { name: "Local Train", fare: 300 },
    ];

    const trainList = document.getElementById("trainList");
    trainList.innerHTML = "";

    trains.forEach((train, index) => {
        const trainDiv = document.createElement("div");
        trainDiv.className = "train-option";
        trainDiv.innerHTML = `
        <p><strong>${index + 1}. ${train.name}</strong></p>
        <p>Fare: ₹${train.fare}</p>
        <button onclick="bookTicket('${train.name}', ${train.fare}, '${time12}')">Book Ticket</button> 
        `;
        trainList.appendChild(trainDiv);
    });
});

function bookTicket(trainName, fare, time12) {
    const passengerName = document.getElementById("name").value;
    const departure = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    alert(
        `Ticket Details: \n\nPassenger: ${passengerName}\nTrain: ${trainName}\nFrom: ${departure}\nTo: ${destination}\nDate: ${date}\nTime: ${time12}\nFare: ₹${fare}`
    );

    document.getElementById("form").reset();
    document.getElementById("trainList").innerHTML = "";
}
