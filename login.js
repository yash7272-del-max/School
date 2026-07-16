/* ==========================================
   School ERP
   File : js/login.js
========================================== */

// Show / Hide Password
function togglePassword() {
  
  const password = document.getElementById("password");
  const eye = document.querySelector(".eye");
  
  if (password.type === "password") {
    
    password.type = "text";
    eye.innerHTML = "visibility_off";
    
  } else {
    
    password.type = "password";
    eye.innerHTML = "visibility";
    
  }
  
}

// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  
  e.preventDefault();
  
  const studentId = document
    .getElementById("studentId")
    .value
    .trim();
  
  const password = document
    .getElementById("password")
    .value
    .trim();
  
  const student = loginStudent(studentId, password);
  
  if (student) {
    
    // Save Login Session
    localStorage.setItem("isLoggedIn", "true");
    
    localStorage.setItem("loggedInStudentID", student.id);
    
    localStorage.setItem("studentName", student.name);
    
    // Loading Button
    const button = document.getElementById("loginButton");
    
    button.innerHTML = "Logging In...";
    
    button.disabled = true;
    
    setTimeout(function() {
      
      window.location.href = "dashboard.html";
      
    }, 1200);
    
  } else {
    
    alert("Invalid Student ID or Password");
    
  }
  
});

// Auto Login
window.addEventListener("load", function() {
  
  if (localStorage.getItem("isLoggedIn") === "true") {
    
    window.location.href = "dashboard.html";
    
  }
  
});