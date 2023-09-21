import db from "./firebaseConfig";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

let quizzes;
const quizzesCollectionRef = collection(db, "Quizzes");

async function initializeQuizzes() {
  if (!quizzes) {
    let quizzesDocs = await getDocs(quizzesCollectionRef);
    quizzes = quizzesDocs.docs.map((element) => ({
      ...element.data(),
      id: element.id,
    }));
  }
}

async function addQuiz(quiz) {
  const docRef = await addDoc(quizzesCollectionRef, quiz);

  const newQuiz = {
    ...quiz,
    id: docRef.id,
  };
  quizzes.push(newQuiz);
}

function getCompletedQuizzes(id) {
  let quiz = {
    Answers: [],
    Category: "",
    Correct_Answers: [],
    Instructor: "",
    Quistion_Count: 0,
    Questions: [],
  };

  quizzes.forEach((element) => {
    if (element.id == id) {
      quiz = element;
    }
  });

  return quiz;
}

async function addQuizzes(id, quiz) {
  // to push with specific id
  setDoc(doc(db, "Quizzes", id), {
    ...quiz,
  });

  const newQuiz = {
    ...quiz,
    id: id,
  };

  quizzes.push(newQuiz);
}

export { initializeQuizzes, addQuiz, quizzes, getCompletedQuizzes, addQuizzes };
