const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    mentorDetails: {
      userType: "mentor",
      username: "@admin",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      designation: "UI/UX Designer and Computer Engineer",
      category: "UI/UX",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Astrology"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to Astronomy",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "How to approach Astrology",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "What to expect learning Astrology",
        poster: "/images/Rectangle8.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Islamabad",
      country: "Pakistan",
      dob: "1999-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      education: {
        degree: "Bachelors of Computer Engineering",
        university: "FAST NUCES",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: true,
  },
  {
    name: "Ali Baqar",
    mentorDetails: {
      userType: "mentor",
      username: "@aliBaqar",
      designation: "Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["Coding", "writing", "singing", "travelling"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["History", "Software", "AI and ML"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "History as a subject",
        poster: "/images/Rectangle6.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "Intro to Programming",
        poster: "/images/Rectangle7.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "Javascript ES6",
        poster: "/images/Rectangle8.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    certifications: [
      {
        name: "Python For Everybody",
        issuingOrg: "Coursera",
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Karachi",
      country: "Pakistan",
      dob: "1999-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Programmer", "Gamer", "Reader"],
      education: {
        degree: "Bachelors of Computer Engineering",
        university: "FAST NUCES",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "ali@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Rabia Awan",
    mentorDetails: {
      userType: "mentor",
      username: "@izza",
      designation: "Content Writer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["Writer", "Singing", "programming", "cricket"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Leadership"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "What is Marketing",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "An Introduction to Team Building",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    certifications: [
      {
        name: "Project Management",
        issuingOrg: "United Nations",
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Female",
      city: "Peshawar",
      country: "Pakistan",
      dob: "1998-02-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Content Writing", "Qirat"],
      education: {
        degree: "Bachelors of Electrical Engineering",
        university: "UET Peshawar",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "rabiaa@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Abdullah Wasi",
    mentorDetails: {
      userType: "mentor",
      username: "@wasi",
      designation: "UI/UX Designer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Astrology"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to Astronomy",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "How to approach Astrology",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "What to expect learning Astrology",
        poster: "/images/Rectangle8.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    certifications: [
      {
        name: "Google UI/UX",
        issuingOrg: "Google, Coursera",
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Islamabad",
      country: "Pakistan",
      dob: "2001-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      education: {
        degree: "Bachelors of Computer Engineering",
        university: "NUST",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "wasi@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Ahmad Khan",
    mentorDetails: {
      userType: "mentor",
      username: "@akhan",
      designation: "Bussinessman and Volunteer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Frienship"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "What is it we have to offer",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Karachi",
      country: "Pakistan",
      dob: "2000-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      education: {
        degree: "Bachelors of Bussiness and Administration",
        university: "UOK",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "ahmad@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Daniyal Rao",
    mentorDetails: {
      userType: "mentor",
      username: "@admin",
      designation: "Web and Android Developer and CS graduate",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Programming"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to JAVA",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "dani@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Adila",
    mentorDetails: {
      userType: "mentor",
      username: "@admin",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Astrology"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to Astronomy",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "How to approach Astrology",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "What to expect learning Astrology",
        poster: "/images/Rectangle8.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "adila@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: true,
  },
  {
    name: "Ali Riyad",
    mentorDetails: {
      userType: "mentor",
      username: "@sibteali",
      designation: "Web Developer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["History", "Software", "AI and ML"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "History as a subject",
        poster: "/images/Rectangle6.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "Intro to Programming",
        poster: "/images/Rectangle7.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "Javascript ES6",
        poster: "/images/Rectangle8.jpg",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Programmer", "Gamer", "Reader"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "aliriyad@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Yousra Qureshi",
    mentorDetails: {
      userType: "mentor",
      username: "@izza",
      designation: "Content Writer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Leadership"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "What is Marketing",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "An Introduction to Team Building",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Content Writing", "Qirat"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "yousraqureshi@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Wasif Riyaz",
    mentorDetails: {
      userType: "mentor",
      username: "@wasif",
      designation: "UI/UX Designer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Astrology"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to Astronomy",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "How to approach Astrology",
        poster: "/images/Rectangle7.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
      {
        name: "What to expect learning Astrology",
        poster: "/images/Rectangle8.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Multan",
      country: "Pakistan",
      dob: "2002-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],

      education: {
        degree: "Bachelors of Computer Science",
        university: "PUCIT",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "wasif@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Ahsan Ali",
    mentorDetails: {
      userType: "mentor",
      username: "@akhan",
      designation: "Bussinessman and Volunteer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Frienship"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "What is it we have to offer",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Lahore",
      country: "Pakistan",
      dob: "2001-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      education: {
        degree: "Bachelors of Arts",
        university: "FAST",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "ahsanali@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Daniyal Majeed",
    mentorDetails: {
      userType: "mentor",
      username: "@admin",
      designation: "Web and Android Developer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      technical: ["astrology", "painting", "programming", "writing"],
      interpersonal: ["communication", "teamwork", "leadership"],
      preferredSubjects: ["Programming"],
    },
    introVideo: {
      video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster: "/images/Rectangle5.jpg",
    },
    courses: [
      {
        name: "Introduction to JAVA",
        poster: "/images/Rectangle6.jpg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description: {
          chapters: "2",
          hours: "3",
          type: "Project Based",
        },
      },
    ],
    about: {
      randomAchievement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia",
      gender: "Male",
      city: "Haripur",
      country: "Pakistan",
      dob: "1997-01-01",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      education: {
        degree: "Bachelors of Computer Science",
        university: "FAST",
      },
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "daniyalmajeed@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
];

module.exports = users;

// TODO: modify required and optional fields in the schema
