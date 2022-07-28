import bcrypt from 'bcryptjs';

const students = [
  {    
    name: "Farhan Akhtar",
    studentDetails:{
      userType:"Free",
      username:"@farhan",
      career:"Computer Engineer Undergrad",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Computing"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Astrology","Gamer"],
      skills:["astrology",'painting','programming','writing'],
    },
    email: "farhan@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
  {    
    name: "Ali Ahmad",
    studentDetails:{
      userType:"Pro",
      username:"@ali",
      career:"Mechanical Engineer Undergrad",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Mechanics of Machines"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Cricket","Volunteering"],
      skills:["Volunteering",'Orator','Cricketer'],
    },
    email: "ali@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
  {    
    name: "Junaid Ali",
    studentDetails:{
      userType:"Free",
      username:"@junaid",
      career:"Charted Accountant",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Internation Relations","Merchantile Law"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Community Collaboration","Travelling"],
      skills:["Riding",'Communication','Leadership','People Management'],
    },
    email: "junaid@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
  {    
    name: "Noman Aslam",
    studentDetails:{
      userType:"Free",
      username:"@noman",
      career:"Political Science",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Politics","People Realtions"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Volunteering","Community Collaboration"],
      skills:["Seller",'Computing Operations','Book Keeping'],
    },
    email: "noman@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
  {    
    name: "Rizwan Hameed",
    studentDetails:{
      userType:"Pro",
      username:"@rizwan",
      career:"Envoirmental Engineering",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Politics","People Realtions"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Volunteering","Community Collaboration"],
      skills:["Seller",'Bussiness','Book Keeping'],
    },
    email: "rizwan@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
  {    
    name: "Rabia Ramzan",
    studentDetails:{
      userType:"Pro",
      username:"@rabia",
      career:"Medical Sciences",
      profilePicture: "/images/profilePic.png",
      otherImages:["/images/Rectangle1.png","/images/Rectangle2.png","/images/Rectangle3.png","/images/Rectangle4.png"],
      favouriteSubjects:["Nephrology","People Realtions"],
    },
    introVideo:{
      video:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      videoPoster:"/images/Rectangle5.png",
    },
    about:{
      heading:'Introduction',
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam suscipit tempore facere officia fuga laboriosam adipisci, libero et quo harum quasi obcaecati molestias illo quas placeat aut sapiente dolorum!",
      hobbies:["Volunteering","Community Collaboration"],
      skills:["Orator",'Communication','Reader'],
    },
    email: "rabia@example.com",
    password: bcrypt.hashSync('123456',10), // password will be generated using bcrypt library
  },
];

export default students;