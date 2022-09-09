import "./App.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FAQ from "./Pages/FAQ/FAQ";
import Referrals from "./Pages/Referrals/Referrals";
import Services from "./Pages/Services/Services";
import InstructorProfile from "./Pages/InstructorProfile/InstructorProfile";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import Mentors from "./Pages/Mentors/Mentors";
import Students from "./Pages/Students/Students";
import Team from "./Pages/Team/Team";
import Resources from "./Pages/Resources/Resources";
import Signup from "./Pages/SignUp/Signup";
import LogIn from "./Pages/LogIn/LogIn";
import Pricing from "./Pages/Pricing/Pricing";
import Favicon from "react-favicon";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Favicon url="images/logo.svg"></Favicon>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/referral" element={<Referrals />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentors/:id" element={<InstructorProfile />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
      </Routes>
      <Footer isForm={location.pathname === "/" ? true : false} />
    </div>
  );
}

export default App;

// TODO: Design a 404 not Found page to cater no listed routes
