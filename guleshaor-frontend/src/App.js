import "./App.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FAQ from "./Pages/FAQ/FAQ";
import Referrals from "./Pages/Referrals/Referrals";
import Services from "./Pages/Services/Services";
import InstructorProfile from "./Pages/InstructorProfile/InstructorProfile";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import Mentors from "./Pages/Mentors/Mentors";
import { BrowserRouter } from "react-router-dom";
import Students from "./Pages/Students/Students";
import Team from "./Pages/Team/Team";
import Resources from "./Pages/Resources/Resources";
import LogInSignIn from "./Pages/LogInSignIn/LogInSignIn";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/referral" element={<Referrals />} />
        <Route path="/service" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/logSignIn" element={<LogInSignIn />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentProfile />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentors/:id" element={<InstructorProfile />} />
        </Routes>
        <Footer />
        </div>
    </BrowserRouter>
    );
}

export default App;
