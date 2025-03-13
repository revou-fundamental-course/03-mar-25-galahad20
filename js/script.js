console.log("Javascript is working!");

function simpanNama() {
  let nama = document.getElementById("namaInput").value.trim();
  if (nama) {
    document.getElementById("welcome").innerText = "Hi, " + nama + ". Selamat Datang!";
    document.getElementById("popup").style.display = "none"; // Sembunyikan modal
  }
}

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function slideShow() {
  currentIndex = (currentIndex + 1) % totalSlides; // Pindah ke gambar berikutnya
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideShow, 5000); // Auto slide setiap 5 detik

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name-input").value.trim();
  const dob = document.getElementById("birth-date").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("pesan").value.trim();

  if (name === "") {
    document.getElementById("nameError").classList.remove("hidden");
    isValid = false;
  } else {
    document.getElementById("nameError").classList.add("hidden");
  }

  if (dob === "") {
    document.getElementById("dobError").classList.remove("hidden");
    isValid = false;
  } else {
    document.getElementById("dobError").classList.add("hidden");
  }

  if (!gender) {
    document.getElementById("genderError").classList.remove("hidden");
    isValid = false;
  } else {
    document.getElementById("genderError").classList.add("hidden");
  }

  if (message === "") {
    document.getElementById("messageError").classList.remove("hidden");
    isValid = false;
  } else {
    document.getElementById("messageError").classList.add("hidden");
  }

  if (isValid) {
    document.getElementById("resName").textContent = name;
    document.getElementById("resDob").textContent = dob;
    document.getElementById("resGender").textContent = gender.value;
    document.getElementById("resMessage").textContent = message;
    document.getElementById("result").classList.remove("hidden");
  }
}
