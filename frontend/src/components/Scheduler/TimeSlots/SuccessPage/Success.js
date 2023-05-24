import { Link } from "react-router-dom";

const Success = ({ id, userType }) => {
  return (
    <>
      <div className="h-screen bg-[rgba(136, 134, 138, 0.1)] px-4 sm:px-6 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-green-500 sm:text-5xl">
              Success
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Thank You for Submitting your choice
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  You can go back to the profile
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to={
                    userType === "mentor" ? `/query/${id}` : `/students/${id}`
                  }
                  className="inline-flex items-center no-underline rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                >
                  Go back to Profile
                </Link>
                <a
                  href="/"
                  className="inline-flex items-center no-underline rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Success;
