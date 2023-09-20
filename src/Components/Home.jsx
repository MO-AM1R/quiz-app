import LogoutHome from "./LogoutHome";
import StudentHome from "./StudentHome";
import InstructorHome from "./InstructorHome";
import { useLocation } from "react-router-dom";

function Home() {
  let location = useLocation();
  return (
    <>
      {!location.state?.logedIn ? (
        <LogoutHome />
      ) : location.state.isInstructor ? (
        <InstructorHome email={location.state.email} />
      ) : (
        <StudentHome email={location.state.email} />
      )}
    </>
  );
}

export default Home;
