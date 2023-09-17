import dp from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

let instructors;
const instructorsCollectionRef = collection(dp, "Instructors");

/*
    Age: 25
    Email: "r"
    Job: "d"
    Name: "r"
    Password: "r"
    Quizzes: (2) [1, 2]
    id: "bSZuzahXGpMLJIbmL2mb"
*/

async function initializeInstructors() {
  if (!instructors) {
    let instructorsDocs = await getDocs(instructorsCollectionRef);
    instructors = instructorsDocs.docs.map((element) => ({
      ...element.data(),
      id: element.id,
    }));
  }
}

async function checkInstructor(instructor) {
  var res = -1;
  instructors.forEach((element) => {
    if (element.Email == instructor.Email) {
      if (element.Password == instructor.Password) {
        res = 1;
      } else {
        res = 0;
      }
    }
  });
  return res;
}

async function addInstructor(instructor) {
  const docRef = await addDoc(instructorsCollectionRef, instructor);

  const newInstructor = {
    ...instructor,
    id: docRef.id,
  };
  instructors.push(newInstructor);
}

export { initializeInstructors, checkInstructor, addInstructor };
