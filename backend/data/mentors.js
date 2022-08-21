import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    mentorDetails: {
      userType: "Pro",
      username: "@admin",
      career: "UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["Astrology"],
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
      heading: "How Astrology changed my life",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
    },
    studentDescription:
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
      career: "Web Developer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["History", "Software", "AI and ML"],
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
      heading: "What i perceived History to be ",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Programmer", "Gamer", "Reader"],
      skills: ["Coding", "writing", "singing", "travelling"],
    },
    studentDescription:
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
      career: "Content Writer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["Leadership"],
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
      heading: "How to servive post pandemic market ?",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Content Writing", "Qirat"],
      skills: ["Writer", "Singing", "programming", "cricket"],
    },
    studentDescription:
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
      career: "UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["Astrology"],
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
      heading: "How Astrology changed my life",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
    },
    studentDescription:
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
      career: "Bussinessman and Volunteer",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["Frienship"],
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
      heading: "Being a Bussinessman",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
    },
    studentDescription:
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
      career: "Web and Android Developer and CS graduate",
      profilePicture: "/images/profilePic.png",
      otherImages: [
        "/images/Rectangle1.jpg",
        "/images/Rectangle2.jpg",
        "/images/Rectangle3.jpg",
        "/images/Rectangle4.jpg",
      ],
      favouriteSubjects: ["Programming"],
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
      heading: "Post college experiences",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies: ["Astrology", "Gamer"],
      skills: ["astrology", "painting", "programming", "writing"],
    },
    studentDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "dani@example.com",
    password: bcrypt.hashSync("123456", 10), // password will be generated using bcrypt library
    isAdmin: false,
  },
];

export default users;
