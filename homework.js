/* ==========================================
   School ERP
   File : js/homework.js
========================================== */

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  
  window.location.href = "login.html";
  
}

// Database
const db = getDatabase();

// Logged Student
const studentId = localStorage.getItem("loggedInStudentID");

const student = db.students.find(function(item) {
  
  return item.id === studentId;
  
});

if (!student) {
  
  alert("Student not found.");
  
  window.location.href = "login.html";
  
}

// Show Student Details
document.getElementById("studentName").textContent =
  student.name;

document.getElementById("studentClass").textContent =
  student.class;

// Homework Container
const container =
  document.getElementById("homeworkContainer");

// Display Homework
function loadHomework(keyword = "") {
  
  container.innerHTML = "";
  
  const homeworkList =
    db.homework.filter(function(hw) {
      
      return hw.class === student.class &&
        hw.title.toLowerCase().includes(keyword.toLowerCase());
      
    });
  
  if (homeworkList.length === 0) {
    
    container.innerHTML = `
            <div class="homework-card">
                <h3>No Homework Found</h3>
            </div>
        `;
    
    return;
    
  }
  
  homeworkList.forEach(function(hw) {
    
    container.innerHTML += `

        <div class="homework-card">

            <h3>${hw.title}</h3>

            <p class="subject">
                Subject : ${hw.subject}
            </p>

            <p class="due">
                Due Date : ${hw.dueDate}
            </p>

            <span class="status">
                Pending
            </span>

        </div>

        `;
    
  });
  
}

// Initial Load
loadHomework();

// Search
document
  .getElementById("searchHomework")
  .addEventListener("keyup", function() {
    
    loadHomework(this.value);
    
  });