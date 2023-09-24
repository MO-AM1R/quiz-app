import StudentHome from "../Student home page/StudentHome";
import InstructorHome from "../Instructor home page/InstructorHome";
import { useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();
  return (
    <>
      {location.state.isInstructor ? (
        <InstructorHome email={location.state.email} />
      ) : (
        <StudentHome email={location.state.email} />
      )}
    </>
  );
}

export default Home;
