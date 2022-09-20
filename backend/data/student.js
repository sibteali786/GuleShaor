const bcrypt = require("bcryptjs");

const students = [
  {
    name: "Farhan Akhtar",
    studentDetails: {
      userType: "Free",
      username: "@farhan",
      designation: "Computer Engineer Undergrad",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Computing"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
    },
    email: "farhan@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
  {
    name: "Ali Ahmad",
    studentDetails: {
      userType: "Pro",
      username: "@ali",
      designation: "Mechanical Engineer Undergrad",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Mechanics of Machines"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Cricket", "Volunteering"],
      skills: ["Volunteering", "Orator", "Cricketer"],
    },
    email: "ali@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
  {
    name: "Junaid Ali",
    studentDetails: {
      userType: "Free",
      username: "@junaid",
      designation: "Charted Accountant",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Internation Relations", "Merchantile Law"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Community Collaboration", "Travelling"],
      skills: ["Riding", "Communication", "Leadership", "People Management"],
    },
    email: "junaid@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
  {
    name: "Noman Aslam",
    studentDetails: {
      userType: "Free",
      username: "@noman",
      designation: "Political Science",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Politics", "People Realtions"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Volunteering", "Community Collaboration"],
      skills: ["Seller", "Computing Operations", "Book Keeping"],
    },
    email: "noman@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
  {
    name: "Rizwan Hameed",
    studentDetails: {
      userType: "Pro",
      username: "@rizwan",
      designation: "Envoirmental Engineering",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Politics", "People Realtions"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Volunteering", "Community Collaboration"],
      skills: ["Seller", "Bussiness", "Book Keeping"],
    },
    email: "rizwan@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
  {
    name: "Rabia Ramzan",
    studentDetails: {
      userType: "Pro",
      username: "@rabia",
      designation: "Medical Sciences",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      preferredSubjects: ["Nephrology", "People Realtions"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Volunteering", "Community Collaboration"],
      skills: ["Orator", "Communication", "Reader"],
    },
    email: "rabia@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
  },
];

module.exports = students;
// TODO: modify required and optional fields in the schema
