import dp from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

let quizzes;
const quizzesCollectionRef = collection(dp, "Quiz");

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

export { initializeQuizzes, addQuiz, quizzes, getCompletedQuizzes };
