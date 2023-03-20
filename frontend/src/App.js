import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./App.scss";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import LogIn from "./Pages/LogIn/LogIn";
import Pricing from "./Pages/Pricing/Pricing";
import Favicon from "react-favicon";
// Import React FilePond
import { registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import NotFound404 from "./Pages/NotFound404/NotFound404";
import MultiStepForm from "./components/MutliStepForms/MultiStepForm";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import MultiStepTimeSlots from "./components/Scheduler/TimeSlots/MultiStepTimeSlot";
import MultiStepAppointment from "./components/Scheduler/Appointments/MultiStepAppointment";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Queries from "./Pages/Queries/Queries";
// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateSize
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <div className="App">
        <Favicon url="images/logo.svg"></Favicon>
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<LogIn setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="profile-forms" element={<MultiStepForm />} />
          <Route path="/referral" element={<Referrals />} />
          <Route path="/service" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer isForm={location.pathname === "/" ? true : false} />
      </div>
    );
  }
  return (
    <div className="App">
      <Favicon url="images/logo.svg"></Favicon>
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/referral" element={<Referrals />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/resources" element={<Resources />} />
        <Route
          path="/query"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Queries}
            />
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Students}
            />
          }
        />
        <Route
          path="/students/search/:keyword"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Students}
            />
          }
        />
        <Route
          path="/students/page/:pageNumber"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Students}
            />
          }
        />
        <Route
          path="/students/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={StudentProfile}
            />
          }
        />
        <Route
          path="/students/search/:keyword/page/:pageNumber"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Students}
            />
          }
        />
        <Route
          path="/mentors"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Mentors}
            />
          }
        />
        <Route
          path="/mentors/search/:keyword"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Mentors}
            />
          }
        />
        <Route
          path="/mentors/page/:pageNumber"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Mentors}
            />
          }
        />
        <Route
          path="/mentors/search/:keyword/page/:pageNumber"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={Mentors}
            />
          }
        />
        <Route
          path="/mentors/:id"
          className="px-[4rem]"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              element={InstructorProfile}
            />
          }
        />
        <Route path="/mentors/:id/timeslots" element={<MultiStepTimeSlots />} />
        <Route
          path="/mentors/:id/addappointment"
          element={<MultiStepAppointment />}
        />
        <Route path="profile-forms" element={<MultiStepForm />} />

        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer isForm={location.pathname === "/" ? true : false} />
    </div>
  );
}

export default App;

// TODO: Design a 404 not Found page to cater non listed routes
// TODO: https://codepen.io/salehriaz/pen/erJrZM for 404 page.
