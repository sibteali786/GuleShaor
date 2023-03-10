import React from "react";

const SocialLinks = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
        >
          <span className="sr-only">Sign in with Facebook</span>
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
        >
          <span className="sr-only">Sign in with Gmail</span>
          <i className="fab fa-google-plus-g h-5 w-5"></i>
        </a>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 no-underline"
        >
          <span className="sr-only">Sign in with GitHub</span>
          <i className="fab fa-linkedin-in h-5 w-5"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
