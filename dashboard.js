/* ==========================================
   School ERP
   File : js/dashboard.js
========================================== */

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// Get Database
const database = getDatabase();

// Logged In Student ID
const loggedStudentID = localStorage.getItem("loggedInStudentID");

// Find Student
const student = database.students.find(function(item) {
  
  return item.id === loggedStudentID;
  
});

// Student Not Found
if (!student) {
  
  alert("Student not found.");
  
  localStorage.clear();
  
  window.location.href = "login.html";
  
}

// Load Student Details
document.getElementById("welcomeText").innerHTML =
  "Welcome, " + student.name + " 👋";

document.getElementById("studentName").innerHTML =
  student.name;

document.getElementById("studentID").innerHTML =
  student.id;

document.getElementById("studentClass").innerHTML =
  student.class;

document.getElementById("studentRoll").innerHTML =
  student.rollNo;

document.getElementById("attendance").innerHTML =
  student.attendance;

document.getElementById("fees").innerHTML =
  student.fees;

document.getElementById("studentImage").src =
  student.profileImage;

// Homework Count
let totalHomework = 0;

database.homework.forEach(function(hw) {
  
  if (hw.class === student.class) {
    
    totalHomework++;
    
  }
  
});

document.getElementById("homeworkCount").innerHTML =
  totalHomework;

// Latest Notice
if (database.notices.length > 0) {
  
  document.getElementById("notice").innerHTML =
    database.notices[0].title + "<br>" +
    database.notices[0].message;
  
}

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(function(card, index) {
  
  card.style.opacity = "0";
  
  card.style.transform = "translateY(20px)";
  
  setTimeout(function() {
    
    card.style.transition = ".5s";
    
    card.style.opacity = "1";
    
    card.style.transform = "translateY(0)";
    
  }, index * 120);
  
});

// Logout Function
function logout() {
  
  localStorage.removeItem("isLoggedIn");
  
  localStorage.removeItem("loggedInStudentID");
  
  window.location.href = "login.html";
  
}

console.log("Dashboard Loaded Successfully");