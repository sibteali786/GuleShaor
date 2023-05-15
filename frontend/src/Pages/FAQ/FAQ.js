import React from "react";

const faqs = [
  {
    id: 1,
    question: "What is the main focus of our platform?",
    answer:
      "Our platform focuses on providing individuals with the resources they need to build real-world projects and develop in-demand tech skills for high-paying jobs.",
  },

  {
    id: 2,
    question:
      "What types of projects can individuals work on using our platform?",
    answer:
      "Using our platform, individuals can work on a variety of projects such as building websites, creating mobile apps, or working on machine learning projects.",
  },

  {
    id: 3,
    question: "What kind of resources are available in our resource library?",
    answer:
      "Our resource library offers a wide range of resources including tutorials, code snippets, project templates, and more to support individuals in making meaningful progress on their projects.",
  },

  {
    id: 4,
    question: "Who are the mentors available on our platform?",
    answer:
      "The mentors available on our platform are seasoned professionals with extensive experience and expertise in the industry. They are passionate about helping individuals succeed and provide personalized guidance and support.",
  },
  {
    id: 5,
    question: "What networking opportunities are available on our platform?",
    answer:
      "Our platform provides numerous networking opportunities for individuals to connect with industry leaders and experts in their field. They can learn from their experience, collaborate on projects, and explore new career opportunities.",
  },
  {
    id: 6,
    question:
      "What happens upon successful completion of a project on our platform?",
    answer:
      "Upon successful completion of a project, individuals have the opportunity to showcase their skills and experience to potential employers. We have a network of hiring partners who are actively seeking individuals with the skills developed through our platform and assist in connecting them with job opportunities.",
  },
  {
    id: 7,
    question:
      "What kind of community can individuals be part of on our platform?",
    answer:
      "By joining our platform, individuals become part of a growing community of like-minded individuals who share a passion for technology. They can network, collaborate, and connect with others who have similar interests.",
  },
  {
    id: 8,
    question: "Why should individuals join our platform?",
    answer:
      "Individuals should join our platform to explore the world of technology through project-based learning. With our comprehensive resource library, expert mentorship, networking opportunities, and placement support, we provide the necessary tools for individuals to gain the skills and knowledge they need to succeed and make an impact in the tech industry.",
  },
  // More questions...
];
const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900 mb-12 font-[Montserrat]">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-800">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{" "}
            <a
              href="mail:guleshaor.management@gmail.com"
              className="font-semibold text-orange-400 hover:text-orange-500 underline-offset-4"
            >
              sending us an email
            </a>{" "}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-semibold leading-7 text-black">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-800">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
