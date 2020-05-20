//Event Listener
class Student {
    constructor(sname, sclass, simp) {
      this.name = sname;
      this.class = sclass;
      this.imp = simp;
      // console.log("Student Created");
    }
  }
  class DY {
    addStudent(student) {
      const holder = document.getElementById("students-list");
      let row = document.createElement("tr");
      let excellent;
      if (student.imp) {
        excellent = "YES";
      } else {
        excellent = "NO";
      }
      row.innerHTML = `<td>${student.name}</td><td>${student.class}</td><td>${excellent}</td> <td><a href ="#" class="btn btn-danger btn-sm delete">Delete</a></td>`;
      holder.appendChild(row);
    }
  
    showMessage(msg) {
      const container = document.getElementById("con-main");
      const form = document.getElementById("form-main");
      const div = document.createElement("div");
      div.setAttribute("id", "divlist");
      div.innerHTML = msg;
      console.log(div);
      container.insertBefore(div, form);
      setTimeout(() => {
        document.getElementById('divlist').remove();
      }, 4000);
    }

    static deleteStudent(el) {
      console.log(el)
      if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
        
const container = document.getElementById("con-main");
        const form = document.getElementById("form-main");
        let div = document.createElement('div');
        div.setAttribute('id', 'divlist2');
        div.innerHTML = "Student deleted.";
        container.insertBefore(div, form);
        setTimeout(()=>{
          document.getElementById('divlist2').remove();
        }, 3000);
      
      }
    
        
        
     }}
   

  const form = document.getElementById("form-main");
  const sname = document.getElementById("sname");
  const sclass = document.getElementById("sclass");
  const simp = document.getElementById("simp");
  
  form.addEventListener("submit", function (e) {
    if (sname.value === "" || sclass.value === "") {
      console.log("Empty");
    } else {
      let student = new Student(sname.value, sclass.value, simp.checked);
      // let student = {
      //   name: sname.value,
      //   class: sclass.value,
      //   imp: simp.checked,
      // };
      let display = new DY();
      display.addStudent(student);
      display.showMessage("Student Record Added Successfully");
     
      
      
    }
    e.preventDefault();
  });
  // EVENT: We would like to remove a book if we don't want it anymore
document.getElementById('students-list').addEventListener('click', (f) => {
  // Remove book from DY
  
  DY.deleteStudent(f.target);
})