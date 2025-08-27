const students = [
    { name: "Lukas", age: "18", course: "Webudvikler-1" },
    { name: "Ginger", age: "18", course: "Webudvikler-2" },
    { name: "Manse", age: "67", course: "Webudvikler-3" }
]

const studentsDivList = document.getElementById("content")

students.forEach(student => {
    const studentsDiv = document.createElement("div")
    studentsDiv.classList.add("student")

    const studentHeader = document.createElement("h2")
    studentHeader.textContent = (student.name)

    const studentDetails = document.createElement("p")
    studentDetails.textContent = (`Age: ${student.age} Course: ${student.course}`)

    studentsDiv.append(studentHeader, studentDetails)
    studentsDivList.append(studentsDiv)

})