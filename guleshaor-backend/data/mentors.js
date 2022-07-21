import bcrypt from 'bcryptjs';

const users = [
  {
    id:"1",
    name: "Admin User",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: true,
  },
  {
    id:"2",
    name: "Sibteali Baqar",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "sibteali@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id:"3",
    name: "Izza Gul Awan",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id:"4",
    name: "Abdullah Wasi",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id:"5",
    name: "Ahmad Khan",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    id:"6",
    name: "Daniyal Rao",
    mentorDetails:{
      usertype:"Pro",
      username:"@admin",
      career:"UI/UX Designer and Computer Engineer",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favourite_subject:["Astrology"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    courses:[
      {
        name:"Introduction to Astronomy",
        poster:"/images/Rectangle6.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod."
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "izza@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
];

export default users;