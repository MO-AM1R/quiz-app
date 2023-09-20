import dp from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

let instructors;
const instructorsCollectionRef = collection(dp, "Instructors");

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

async function getInstructorId(instractor) {
  instructors.forEach((element) => {
    if (element.Email == instractor.Email) {
      return element.id;
    }
  });
}

export {
  initializeInstructors,
  checkInstructor,
  addInstructor,
  getInstructorId,
  instructors,
};
