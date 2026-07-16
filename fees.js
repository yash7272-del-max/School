/* ==========================================
   School ERP
   File : js/fees.js
========================================== */

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

// Load Database
const db = getDatabase();

// Logged In Student
const studentId = localStorage.getItem("loggedInStudentID");

const student = db.students.find(function(item) {
    return item.id === studentId;
});

if (!student) {
    alert("Student not found!");
    window.location.href = "login.html";
}

// Student Details
document.getElementById("studentImage").src = student.profileImage;
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentID").textContent = student.id;
document.getElementById("studentClass").textContent = student.class;

// Default Fee Details
const feeAmount = student.feeAmount || "₹72,000";
const feeStatus = student.fees || "Pending";
const dueDate = student.feeDueDate || "31 July 2026";

// Display Fee
document.getElementById("feeAmount").textContent = feeAmount;
document.getElementById("feeStatus").textContent = feeStatus;
document.getElementById("dueDate").textContent = dueDate;

// Payment History
const historyContainer = document.getElementById("historyContainer");

const history = student.paymentHistory || [
    {
        date: "10 April 2026",
        amount: "₹50,000",
        status: "Paid"
    }
];

history.forEach(function(item){

    historyContainer.innerHTML += `
        <div class="history-card">
            <h3>${item.amount}</h3>
            <p>Date : ${item.date}</p>
            <p>Status : ${item.status}</p>
        </div>
    `;

});

// Pay Button
document.getElementById("payNow").addEventListener("click", function(){

    

});

// Receipt
document.getElementById("downloadReceipt").addEventListener("click", function(){

    alert("Receipt download feature will be added in the next version.");

});