import React from "react";
import card1 from "./../../Assets/Moto_Assets/Rectangle 15.png";
import card2 from "./../../Assets/Moto_Assets/Rectangle 16.png";
import card3 from "./../../Assets/Moto_Assets/unsplash_Ox6SW103KtM.png";
const blogPosts = [
  {
    id: 1,
    title: "Referall & Direct Partnerships",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Information", href: "#" },
    imageUrl: card3,
    preview:
      "We offer an exclusive membership package for direct referralsto our service. We work with organisations to create a tailored workshop programme delivered at agreed intervals.",
  },
  {
    id: 2,
    title: "Resource Alliance",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Information", href: "#" },
    imageUrl: card1,
    preview:
      "We support our students by referring them to our partners for additional support. They provide them with free learning resources, such as academic and skill-building courses and assets.",
  },
  {
    id: 3,
    title: " University Student Chapter",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Information", href: "#" },
    imageUrl: card2,
    preview:
      "If you would like to work with us as a volunteer we would love to have you onboard! We require volunteers with a variety of skills and experience so get in touch today to see how you can help us to Elevate The Youth.",
  },
];

const Resources = () => {
  return (
    <div className="relative bg-gray-50 pb-16 sm:pb-24 lg:pb-32">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-black">
            Let's Collaborate
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Support Our Youth
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <a
                      href={post.category.href}
                      className="hover:underline no-underline"
                    >
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block no-underline">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.preview}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
