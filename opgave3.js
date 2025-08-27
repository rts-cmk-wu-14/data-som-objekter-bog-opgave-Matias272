const students = [
    { name: "Lukas", age: "17", course: "Webudvikler-1" },
    { name: "Ginger", age: "18", course: "Webudvikler-2" },
    { name: "Manse", age: "67", course: "Webudvikler-3" }
]

const studentsDivList = document.getElementById("content")

students.forEach(student => {
    const studentsDiv = document.createElement("div")
    studentsDiv.classList.add("student")
    studentsDiv.textContent = `Name: ${student.name} Age: ${student.age} Course: ${student.course}`
    studentsDivList.append(studentsDiv)

})