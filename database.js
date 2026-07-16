/* ==========================================
   School ERP
   File : js/database.js
========================================== */

const schoolDatabase = {

    school: {
        name: "ABC Public School",
        address: "Jaipur, Rajasthan",
        phone: "+91-9876543210",
        email: "school@example.com"
    },

    students: [

        {
            id: "yash",
            password: "7089",

            name: "yash jangid",

            class: "8-B",

            rollNo: "21",

            section: "B",

            father: "___ jangid",

            mother: "____ jangid",

            phone: "____4468__",

            email: "_________@gmail.com",

            address: "se___ bari",

            dob: "_______",

            bloodGroup: "_-",

            attendance: "96%",

            fees: "Paid",

            profileImage:
            "assets/images/profile-placeholder.png"

        },

        {
            id: "1001",
            password: "113456",

            name: "Priya Singh",

            class: "9-B",

            rollNo: "12",

            section: "B",

            father: "Raj Singh",

            mother: "Meena Singh",

            phone: "9876500000",

            email: "priya@gmail.com",

            address: "Delhi",

            dob: "20-02-2011",

            bloodGroup: "A+",

            attendance: "98%",

            fees: "Pending",

            profileImage:
            "assets/images/profile-placeholder.png"

        }

    ],

    homework: [

        {

            class:"10-A",

            subject:"Mathematics",

            title:"Exercise 5.1",

            dueDate:"05-07-2026"

        },

        {

            class:"9-B",

            subject:"Science",

            title:"Chapter 4 Notes",

            dueDate:"06-07-2026"

        }

    ],

    notices:[

        {

            title:"Holiday",

            message:"School will remain closed on Sunday."

        },

        {

            title:"PTM",

            message:"Parent Teacher Meeting on Saturday."

        }

    ]

};

/* Create Database */

if(!localStorage.getItem("schoolDatabase")){

    localStorage.setItem(

        "schoolDatabase",

        JSON.stringify(schoolDatabase)

    );

}

/* Read Database */

function getDatabase(){

    return JSON.parse(

        localStorage.getItem("schoolDatabase")

    );

}

/* Save Database */

function saveDatabase(data){

    localStorage.setItem(

        "schoolDatabase",

        JSON.stringify(data)

    );

}

/* Login */

function loginStudent(id,password){

    const db = getDatabase();

    return db.students.find(student=>{

        return student.id===id &&

               student.password===password;

    });

}