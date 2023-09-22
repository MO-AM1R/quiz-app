import db from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
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

async function addQuiz(quiz) {
  const docRef = await addDoc(quizzesCollectionRef, quiz);

  const newQuiz = {
    ...quiz,
    id: docRef.id,
  };
  quizzes.push(newQuiz);
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

async function temp() {
  let quiz1 = {
    Answers: [],
    Category: "s",
    Correct_Answers: [],
    Instructor: "Ali",
    Question_Count: 15,
    Questions: [],
  };

  let quiz2 = {
    Answers: [],
    Category: "g",
    Correct_Answers: [],
    Instructor: "Ahmed",
    Question_Count: 15,
    Questions: [],
  };

  let quiz3 = {
    Answers: [],
    Category: "e",
    Correct_Answers: [],
    Instructor: "Ali",
    Question_Count: 15,
    Questions: [],
  };

  let quiz4 = {
    Answers: [],
    Category: "x",
    Correct_Answers: [],
    Instructor: "Ahmed",
    Question_Count: 15,
    Questions: [],
  };

  let q = [quiz1, quiz2, quiz3, quiz4];
  for (let index = 6; index <= 9; index++) {
    addQuizzes(index, q[index - 6]);
  }
}

async function addQuizzes(id, quiz) {
  // to push with specific id

  setDoc(doc(db, "Quizzes", id.toString()), {
    ...quiz,
  });

  const newQuiz = {
    ...quiz,
    id: id,
  };

  quizzes.push(newQuiz);
}

async function deleteQuiz(id) {
  await deleteDoc(doc(db, "Quizzes", id));

  //remove the quiz which it's id
  quizzes = quizzes.filter((quiz) => quiz.id !== id);
}

export {
  initializeQuizzes,
  addQuiz,
  quizzes,
  getQuiz,
  addQuizzes,
  deleteQuiz,
  temp,
};
