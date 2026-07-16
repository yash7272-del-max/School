/* ==========================================
   School ERP
   File : js/attendance.js
========================================== */

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// Get Database
const db = getDatabase();

// Logged-in Student
const studentId = localStorage.getItem("loggedInStudentID");

const student = db.students.find(function(s) {
  return s.id === studentId;
});

if (!student) {
  alert("Student not found!");
  localStorage.clear();
  window.location.href = "login.html";
}

// Load Student Details
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentClass").textContent = student.class;
document.getElementById("studentRoll").textContent = student.rollNo;
document.getElementById("studentImage").src = student.profileImage;

// Attendance Data
const attendancePercent = parseInt(student.attendance);

const totalDays = 30;
const presentDays = Math.round((attendancePercent / 100) * totalDays);
const absentDays = totalDays - presentDays;

// Update Cards
document.getElementById("attendancePercent").textContent =
  attendancePercent + "%";

document.getElementById("presentDays").textContent =
  presentDays;

document.getElementById("absentDays").textContent =
  absentDays;

// Progress Bar
const progress = document.getElementById("progressFill");

setTimeout(function() {
  progress.style.width = attendancePercent + "%";
}, 300);

// Calendar
const calendar =
  document.getElementById("attendanceCalendar");

for (let i = 1; i <= totalDays; i++) {
  
  const day = document.createElement("div");
  
  day.className = "day";
  
  day.textContent = i;
  
  if (i <= presentDays) {
    
    day.classList.add("present");
    
  } else {
    
    day.classList.add("absent");
    
  }
  
  calendar.appendChild(day);
  
}