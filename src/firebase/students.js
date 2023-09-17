import dp from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

let students;
const studentsCollectionRef = collection(dp, "Students");

async function initializeStudents() {
  if (!students) {
    let studentDocs = await getDocs(studentsCollectionRef);
    students = studentDocs.docs.map((element) => ({
      ...element.data(),
      id: element.id,
    }));
  }
}

async function checkStudent(student) {
  var res = -1;
  students.forEach((element) => {
    if (element.Email == student.Email) {
      if (element.Password == student.Password) {
        res = 1;
      } else {
        res = 0;
      }
    }
  });
  return res;
}

async function addStudent(student) {
  const docRef = await addDoc(studentsCollectionRef, student);

  const newStudent = {
    ...student,
    id: docRef.id,
  };
  students.push(newStudent);
}

export { initializeStudents, checkStudent, addStudent };
