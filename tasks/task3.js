// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, char) {
  return people.find(({name})=>name===char);
}

module.exports = findByName;