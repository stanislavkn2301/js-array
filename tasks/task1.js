//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  let newArr=[];
  let k=0;
//  console.log(people[0].age);
  for(let i = 0;i<people.length;i++){
    if(people[i].age>=18){
      newArr[k]=people[i];
      k++;
    }
  }
  //console.log(people);
  console.log(newArr);
  return newArr;
}

module.exports = filterAdults;