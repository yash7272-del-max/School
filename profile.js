/* ==========================================
   School ERP
   File : js/profile.js
========================================== */

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// Load Database
const db = getDatabase();

// Logged-in Student ID
const studentId = localStorage.getItem("loggedInStudentID");

// Find Student
const student = db.students.find(function(s) {
  return s.id === studentId;
});

// Student Not Found
if (!student) {
  alert("Student not found!");
  localStorage.clear();
  window.location.href = "login.html";
}

// Load Profile
document.getElementById("studentImage").src = student.profileImage;
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentID").textContent = "Student ID : " + student.id;

document.getElementById("studentClass").textContent = student.class;
document.getElementById("studentRoll").textContent = student.rollNo;
document.getElementById("studentSection").textContent = student.section;

document.getElementById("studentAttendance").textContent = student.attendance;
document.getElementById("studentFees").textContent = student.fees;

document.getElementById("fatherName").textContent = student.father;
document.getElementById("motherName").textContent = student.mother;

document.getElementById("studentPhone").textContent = student.phone;
document.getElementById("studentEmail").textContent = student.email;
document.getElementById("bloodGroup").textContent = student.bloodGroup;
document.getElementById("studentDOB").textContent = student.dob;
document.getElementById("studentAddress").textContent = student.address;

// Page Title
document.title = student.name + " - Profile";

// Fade-in Animation
document.querySelectorAll(".detail-card").forEach(function(card, index) {
  
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  
  setTimeout(function() {
    
    card.style.transition = "0.5s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    
  }, index * 150);
  
});