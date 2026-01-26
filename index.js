document.querySelector("#booking form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const bookingMessage = document.getElementById("bookingMessage");
  
    const bookingData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      service: document.getElementById("service").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value

    };
  
    try {
      const response = await fetch("https://saloon-backend-plfu.onrender.com/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        bookingMessage.innerHTML = `<div class="alert alert-success">✅ Booking successful! See you soon.</div>`;
        e.target.reset();
      } else {
        bookingMessage.innerHTML = `<div class="alert alert-danger">❌ ${data.error}</div>`;
      }
    } catch (error) {
      bookingMessage.innerHTML = `<div class="alert alert-danger">❌ Server not responding. Try again later.</div>`;
    }
  });
  
/* ✅ Mark booking as completed */
function markCompleted(id) {
  fetch(`https://saloon-backend-plfu.onrender.com/api/bookings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Completed" })
  })
    .then(() => location.reload());
}

/* ❌ Delete booking */
function deleteBooking(id) {
  if (confirm("Are you sure you want to delete this booking?")) {
    fetch(`https://saloon-backend-plfu.onrender.com/api/bookings/${id}`, {
      method: "DELETE"
    })
      .then(() => location.reload());
  }
}
