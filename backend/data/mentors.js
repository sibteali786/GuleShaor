const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    mentorDetails: {
      userType: "Pro",
      username: "@admin",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: true,
  },
  {
    name: "Sibteali Baqar",
    mentorDetails: {
      userType: "Free",
      username: "@sibteali",
      designation: "Web Developer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["Coding", "writing", "singing", "travelling"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "sibteali@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Izza Gul Awan",
    mentorDetails: {
      userType: "Free",
      username: "@izza",
      designation: "Content Writer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["Writer", "Singing", "programming", "cricket"],
    },
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Abdullah Wasi",
    mentorDetails: {
      userType: "Free",
      username: "@wasi",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Free",
      username: "@akhan",
      designation: "Bussinessman and Volunteer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Pro",
      username: "@admin",
      designation: "Web and Android Developer and CS graduate",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Pro",
      username: "@admin",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Free",
      username: "@sibteali",
      designation: "Web Developer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["Coding", "writing", "singing", "travelling"],
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
      userType: "Free",
      username: "@izza",
      designation: "Content Writer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["Writer", "Singing", "programming", "cricket"],
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
      userType: "Free",
      username: "@wasi",
      designation: "UI/UX Designer and Computer Engineer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Free",
      username: "@akhan",
      designation: "Bussinessman and Volunteer",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
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
      userType: "Pro",
      username: "@admin",
      designation: "Web and Android Developer and CS graduate",
      image: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
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
      skills: ["astrology", "painting", "programming", "writing"],
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
