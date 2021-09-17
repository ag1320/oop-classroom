/*
  

     
  
      it('if no argument is added, attempts to complete all incomplete homework and will complete it if the `skillLevel` is higher', function () {
        const student = new Student(...this.properties)
  
        const homework = { title: 'OOP Classroom', skillLevel: 47 }
        student.doHomework(homework)
  
        expect(student.assignments).to.include(homework)
  
        student.study().study().study().study()
        student.doHomework()
  
        expect(student.assignments[0].completed).to.be.true
      })
  
      it('if no argument is added, attempts to complete all incomplete homework but it will stay incomplete if `skillLevel` is still not enough', function () {
        const student = new Student(...this.properties)
  
        const homework = { title: 'Capstone Project', skillLevel: 90 }
        student.doHomework(homework)
  
        expect(student.assignments).to.include(homework)
  
        student.study().study().study().study()
        student.doHomework()
  
        expect(student.assignments[0].completed).to.be.false
      })
    })
  })*/

class Student {
  constructor(name, skillLevel, f){
    this.assignments = [];
    this.name = name;
    this.skillLevel = skillLevel;
  }

  study(){
    if(this.skillLevel < 100){
      this.skillLevel++
    }
    return this;
  }

  doHomework(homework = this.assignments){
    if (this.skillLevel > homework.skillLevel){
      homework.completed = true;
    } else {
      homework.completed = false;
    }

    if (!(homework.skillLevel < 1 || homework.skillLevel > 100 || homework.skillLevel === undefined)){
      this.assignments.push(homework);
    }

    for (let assignment of this.assignments){
        if (!(assignment.completed) && this.skillLevel > assignment.skillLevel){
          assignment.completed = true;
        }
    }

  }
}

module.exports = Student
