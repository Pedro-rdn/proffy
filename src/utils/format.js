const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjecNumber) {
    const arrayPosition = +subjecNumber - 1
    return subjects[arrayPosition]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number(hours * 60) + Number(minutes)
}

module.exports = {
    subjects, 
    weekdays, 
    getSubject,
    convertHoursToMinutes
}
