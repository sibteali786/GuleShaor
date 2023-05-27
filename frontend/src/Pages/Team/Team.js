import { Grid } from "@mui/material";
import React from "react";
import "./Team.scss";
import profile from "../../Assets/Team/Profile Pic.png";
import sibteali from "../../Assets/Team/sibteali.png";
import izza from "../../Assets/Team/izza.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
const Team = () => {
  const people = [
    {
      name: "Izza Gul Awan",
      role: "Founder, Marketing and Core Operations",
      imageUrl: izza,
      bio: "Our founder, Izza Gul Awan, is a tech industry veteran with a passion for helping others succeed. With her wealth of experience, she brings a unique perspective and deep understanding of the challenges individuals face as they develop their skills and build their careers.",
      linkedinUrl: "https://www.linkedin.com/in/izza-gul-awan-399146197",
      instagramUrl: "https://www.instagram.com/izzagul_awan?r=nametag",
    },
    {
      name: "Sibteali Baqar",
      role: "Technical Lead",
      imageUrl: sibteali,
      bio: "Sibteali Baqar is our Technical Lead and a Mern Stack Developer. He is responsible for managing and developing the product, as well as handling communication across our organization regarding technical requirements. He applies coding standards and takes care of performance, security, and deployment aspects.",
      githubUrl: "https://github.com/sibteali786",
      linkedinUrl: "https://www.linkedin.com/in/syed-sibteali-baqar-03167a17a/",
      mediumUrl: "https://medium.com/@sibteali786",
      websiteUrl: "www.sibtealibaqar.me",
    },
  ];
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-[Montserrat]">
            About the team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Guleshaoor, we believe that success is a team effort. That's why
            we've brought together a group of talented, dedicated, and
            passionate individuals who are committed to helping individuals
            develop their tech skills and achieve their goals.
          </p>
        </div>
        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                className="aspect-auto w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-800">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-800">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.githubUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Github</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
