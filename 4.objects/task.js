'use strict'
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  this.subject = null;
   
}

let student1 = new Student("Василиса", "", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Анна", "женский", 25);
let student4= new Student("Артур", "мужской", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks){
    if(this.marks === undefined){
      console.log("Student is excluded!");
      return;  
    } else {
      this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    if(this.marks === undefined ||this.marks.length === 0 ){
     return 0;
    }else
    for (let i = 0; i <  this.marks.length; i++) {
     sum += this.marks[i]; 
   }
 
  return sum / this.marks.length; 
}
  


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
