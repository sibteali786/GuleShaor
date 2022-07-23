import bcrypt from 'bcryptjs';

const users = [
  {
    
    name: "Admin User",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
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
    name: "Sibteali Baqar",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
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
    name: "Izza Gul Awan",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
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
    name: "Abdullah Wasi",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "wasi@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Ahmad Khan",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "ahmad@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
  {
    name: "Daniyal Rao",
    mentorDetails:{
      userType:"Pro",
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
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"How to approach Astrology",
        poster:"/images/Rectangle7.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      },
      {
        name:"What to expect learning Astrology",
        poster:"/images/Rectangle8.png",
        details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque beatae ratione corporis asperiores nesciunt odio obcaecati doloribus tempora quod.",
        description:{
          chapters:"2",
          hours:"3",
          type:"Project Based"
        }
      }
    ],
    about:{
      heading:'How Astrology changed my life',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    studentDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi facere corrupti dolores quis natus aliquid tempore cumque eaque unde.",
    email: "dani@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
    isAdmin: false,
  },
];

export default users;