// Start with the following starter code:
/*
1. Welcome only new students (using the isNew attribute)
2. Welcome only 10 students (can be selected arbitrarily based on new students)
3. Should print out "Welcome, First L.!", where the printed out name should be computed based on their inputted name of "First Last". You may assume all names be formatted "First(space)Last" and that both First and Last will exist.
4. Limit your solution to 5 lines of code. See hints below on JavaScript language features to make use of
*/

class Student {
    constructor(name, isNew) {
        this.name = name;
        this.isNew = isNew;
    };
};

const michael = new Student("Michael Nova", false)
const matt = new Student("Matt Oata", true)
const allen = new Student("Allen Mia", true)
const tony = new Student("Tony Nuga", true)
const jordan = new Student("Jordan Hela", true)
const patrick = new Student("Patrick Kova", true)
const mitali = new Student("Mitali Ga", true)
const cherry = new Student("Cherry Hera", true)
const bao = new Student("Bao Wenya", true)
const val = new Student("Val Dona", true)
const jawwad = new Student("Jawwad Ahma", true)
const sophie = new Student("Sophie Nova", true)
const danielle = new Student("Danielle Pola", true)

const students = [michael, matt, allen, tony, jordan, patrick, mitali, cherry, bao, val, jawwad, sophie, danielle]

// each array element points to a Student class with access to name and isNew
// iterate and print new students

function welcomeStudents(students) {
    const studentsToWelcome = students.filter(student => student.isNew).slice(0, 10)
    studentsToWelcome.forEach(({ name }) => {
        const nameParts = name.split(' ')
        console.log(`Welcome, ${nameParts[0]} ${nameParts[1].charAt(0)}.!`)
    })
}