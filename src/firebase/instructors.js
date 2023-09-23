import dp from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

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

function checkInstructor(instructor) {
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

function getInstructor(instractorEmail) {
  let instructor = {
    Age: "",
    Email: "",
    Job: "",
    Name: "",
    Password: "",
    Quizzes: [],
  };

  instructors.forEach((element) => {
    if (element.Email == instractorEmail) {
      instructor = element;
    }
  });

  return instructor;
}

async function deleteInstructorQuiz(quizId, instructorId) {
  let newQuizzes = [];
  let oldQuizzes = [];

  instructors.forEach((element) => {
    if (element.id == instructorId) {
      oldQuizzes = element.Quizzes;
    }
  });

  newQuizzes = oldQuizzes.filter((id) => id != quizId);

  await updateDoc(doc(dp, "Instructors", instructorId), {
    Quizzes: newQuizzes,
  });

  instructors.forEach((element) => {
    if (element.id == instructorId) {
      element.Quizzes = newQuizzes;
    }
  });
}

async function addQuizTo(id, quizId) {
  instructors.forEach(async (element) => {
    if (element.id == id) {
      element.Quizzes.push(quizId);

      await updateDoc(doc(dp, "Instructors", id), {
        Quizzes: element.Quizzes,
      });
    }
  });
}

export {
  initializeInstructors,
  checkInstructor,
  addInstructor,
  getInstructor,
  instructors,
  deleteInstructorQuiz,
  addQuizTo,
};
