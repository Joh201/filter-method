
/**
 * To run this file in Gitpod, use the
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldenoughTodrink = people.filter(item=>item.age >= 18)

console.log(oldenoughTodrink)

const paul = people.filter(item=>item.name ==='Paul')[0]
console.log(paul)



// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// short way
const has5yearsExperience = skill=> skill.yrsExperience >=5;
const hasStrongSkills = student=> student.skills.filter(has5yearsExperience).length > 0;
const candidates = students.filter(hasStrongSkills)
console.log(candidates)
let names = candidates.map(item=> item.name)
console.log(names)
// One way
const candidates = students.filter(student=>{
  let strongSkills = student.skills.filter(skill=> skill.yrsExperience >=5)
  console.log(strongSkills)
  return strongSkills.length > 0

  })
console.log(candidates)
let names = candidates.map(item=> item.name)
console.log(names)