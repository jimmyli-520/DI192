import people from '../dailychallenge/data.mjs'

function averageAge(arr) {
  const total = arr.reduce((sum, person) => sum + person.age, 0)
  return total / arr.length
}

const result = averageAge(people)
console.log(result)