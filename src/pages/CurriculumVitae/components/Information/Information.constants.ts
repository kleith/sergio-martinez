import moment from "moment"

export const skills = [
  { name: "Node", years: 5 },
  { name: "React", years: 5 },
  { name: "Typescript", years: 2 },
  { name: "AngularJS", years: 2 },
  { name: "Express", years: 3 },
  { name: "NestJS", years: 2 },
  { name: "Jest", years: 2 },
  { name: "Cypress", years: 1 },
  { name: "MySQL", years: 5 },
  { name: "PHP", years: 4 },
  { name: "PostgreSQL", years: 2 },
  { name: "MongoDB", years: 2 },
  // { name: "Git", years: 6 },
  // { name: "CSS3", years: 9 },
  // { name: "HTML5", years: 9 },
]

export const birthday = "1989-10-29"
const today = moment()
export const years = today.diff(birthday, "years")
