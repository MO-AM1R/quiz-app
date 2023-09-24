import db from "./firebaseConfig";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

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

function getLastId() {
  let id;
  quizzes.forEach((element) => {
    id = element.id;
  });

  return id;
}

async function addQuiz(quiz) {
  let getMaxId = parseInt(getLastId()) + 1;

  setDoc(doc(db, "Quizzes", getMaxId.toString()), {
    ...quiz,
  });

  const newQuiz = {
    ...quiz,
    id: getMaxId,
  };

  quizzes.push(newQuiz);

  return getMaxId;
}

function getQuiz(id) {
  let quiz = {
    Answers: [],
    Category: "",
    Correct_Answers: [],
    Instructor: "",
    Question_Count: 0,
    Questions: [],
  };

  quizzes.forEach((element) => {
    if (element.id == id) {
      quiz = element;
    }
  });

  return quiz;
}

async function deleteQuiz(id) {
  await deleteDoc(doc(db, "Quizzes", id.toString()));

  //remove the quiz which it's id
  quizzes = quizzes.filter((quiz) => quiz.id !== id);
}

export { initializeQuizzes, addQuiz, quizzes, getQuiz, deleteQuiz };
