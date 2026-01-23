
document.querySelector("#booking form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value
  };

  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Booking successful!");
      e.target.reset();
    } else {
      alert("❌ " + data.error);
    }
  } catch (error) {
    alert("❌ Server not responding");
  }
});

