import React from "react";
import "./FAQ.scss";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="svg-container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>
        <div className="custom-shape-divider-top-1653762327">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div style={{ padding: "2rem" }}>
        <div className="lowerDivider">
          <h2>What will you get</h2>
          <p>
            We strongly believe that practical learning experiences are key to
            success in the world of technology. That's why we offer a platform
            that connects individuals with the resources they need to build
            real-world projects and develop in-demand tech skills to get placed
            for highest paying jobs. Here's a quick overview of what we offer:
          </p>
          <br />
          <p>
            Project-Based Learning: Our platform provides access to a wealth of
            resources that individuals can use to build real-world projects and
            develop their skills. Whether you're looking to build a website,
            create a mobile app, or work on a machine learning project, you'll
            find the resources you need to get started and complete your
            project.
          </p>
          <br />
          <p>
            Resource Library: Our resource library is packed with a wide range
            of resources, including tutorials, code snippets, project templates,
            and more. You'll have everything you need to hit the ground running
            and make meaningful progress on your project
          </p>
          <br />
          <p>
            Expert Mentorship: Our platform connects individuals with expert
            mentors who can provide personalized guidance and support as they
            work on their projects. Our mentors are seasoned professionals who
            bring a wealth of experience and expertise to the table and are
            passionate about helping others succeed.
          </p>
          <br />
          <p>
            Networking Opportunities: As a member of our platform, you'll have
            the opportunity to connect with industry leaders and experts in your
            field. Whether you're looking to learn from their experience,
            collaborate on projects, or explore new career opportunities, our
            platform provides a wealth of networking opportunities to help you
            succeed.
          </p>
          <br />
          <p>
            Placement Opportunity: Upon successful completion of your project,
            you'll have the opportunity to showcase your skills and experience
            to potential employers. We have a network of hiring partners who are
            looking for individuals with the skills and knowledge you've
            developed through our platform, and we'll work with you to connect
            you with these opportunities and help you land your dream job.
          </p>
          <br />
          <p>
            Community: As a member of our platform, you'll be part of a growing
            community of like-minded individuals who share a passion for
            technology. Whether you're looking to network, collaborate, or
            simply connect with others who share your interests, you'll find
            what you're looking for here.
          </p>
          <br />
          <p>
            So why wait? Join us today and start exploring the world of
            technology through project-based learning. With our comprehensive
            resource library, expert mentorship, networking opportunities, and
            placement support, we're helping individuals like you gain the
            skills and knowledge they need to succeed and make a real impact in
            the world.
          </p>
          <Typography variant="h3">FAQs</Typography>
          <Accordion style={{ backgroundColor: "#252C33CC", color: "#F8F9FA" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>When will you open registration?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our registration for the courses will start by March 1st till
                March 15th, 2023
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
