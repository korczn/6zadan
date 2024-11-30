class Student {
    constructor(name, age, grades = []){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(...newGrades){
        this.grades = [...this.grades, ...newGrades];
    }

    calculateAverage(){
        if (this.grades.length === 0){
            return 'No grades available';
        }
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return (total / this.grades.length).toFixed(2);
    }
}

class GradeManager{
    constructor(){
        this.students = [];
    }

    addStudent(name, age, grades = []){
        const newStudent = new Student(name, age, grades);
        this.students.push(newStudent);
    }

    displayStudents(){
        this.students.forEach(({ name, age, grades, calculateAverage }) => {
            console.log(`Student: ${name}, Age: ${age}`);
            console.log(`Grades: ${grades.length > 0 ? grades.join(', ') : 'No grades yet'}`);
            console.log(`Average Grade: ${calculateAverage.call({ grades })}`);
            console.log('-------------------------');
        });
    }
}

const gradeManager = new GradeManager();

gradeManager.addStudent('Mia', 21, [85, 90, 78]);
gradeManager.addStudent('Lana', 19);
gradeManager.addStudent('Jessa', 20, [95, 88]);

gradeManager.students[1].addGrade(70, 82, 94);

gradeManager.displayStudents();