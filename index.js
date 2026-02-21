//Booking

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
  
  //service
  const serviceCards = document.querySelectorAll('.service-card');
  
  window.addEventListener('scroll', () => {
    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        card.classList.add('show');
      }
    });
  });
  

  //gallery
  
const galleryImgs = document.querySelectorAll('.gallery-img');

window.addEventListener('scroll', () => {
  galleryImgs.forEach(img => {
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      img.classList.add('show');
    }
  });
});



//Admin

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("https://saloon-backend-plfu.onrender.com/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("admin", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = data.error;
  }
};


