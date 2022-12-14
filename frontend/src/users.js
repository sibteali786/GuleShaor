const users = [
  {
    id: "1",
    name: "Admin User",
    usertype: "Pro",
    username: "@admin",
    smallDescription: "UI/UX Designer and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "Astrology",
    descriptionHeading: "How Astrology changed my life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["Astrology", "Gamer"],
    skills: ["astrology", "painting", "programming", "writing"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "admin@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: true,
  },
  {
    id: "2",
    name: "Sibteali Baqar",
    username: "@sibteali",
    usertype: "Free",
    smallDescription:
      "Mern Stack Developer, Pyhton <br/> and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "History",
    descriptionHeading: "How i survived thorught it all",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["History", "Gamer", "travelling"],
    skills: ["history", "programming", "singing", "observer"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "sibteali@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id: "3",
    name: "Izza Gul Awan",
    username: "@izza",
    usertype: "Free",
    smallDescription: "Content Writer, Programmer <br/> and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "Leadership",
    descriptionHeading: "Leadership is what i am known for",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["Reading", "Singing"],
    skills: ["Reading", "Marketing", "Leadership", "Writer"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id: "4",
    name: "Abdullah Wasi",
    username: "@wasi",
    usertype: "Free",
    smallDescription: "Content Writer, Programmer <br/> and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "Leadership",
    descriptionHeading: "Leadership is what i am known for",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["Reading", "Singing"],
    skills: ["Reading", "Marketing", "Leadership", "Writer"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id: "5",
    name: "Ahmad Khan",
    username: "@Akhan",
    usertype: "Free",
    smallDescription: "Content Writer, Programmer <br/> and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "Leadership",
    descriptionHeading: "Leadership is what i am known for",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["Reading", "Singing"],
    skills: ["Reading", "Marketing", "Leadership", "Writer"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id: "6",
    name: "Daniyal Rao",
    username: "@dani",
    usertype: "Free",
    smallDescription: "Content Writer, Programmer <br/> and Computer Engineer",
    image: "/images/profilePic.png",
    otherImages: [
      "/images/Rectangle 1.png",
      "/images/Rectangle 2.png",
      "/images/Rectangle 3.png",
      "/images/Rectangle 4.png",
    ],
    video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    videoPoster: "/images/Rectangle 5.png",
    offeredCoursesVideosPosters: [
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
    ],
    favourite_subject: "Leadership",
    descriptionHeading: "Leadership is what i am known for",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
    hobbies: ["Reading", "Singing"],
    skills: ["Reading", "Marketing", "Leadership", "Writer"],
    aboutStudents:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: "123456", // password will be generated using bcrypt library
    isAdmin: false,
  },
];

export default users;
