import { FaGithub } from "react-icons/fa";

import { blogData } from "../../assets/data/data";
export default function ProjectCard() {
  return (
    <section className="w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="w-full bg-lightPrimary/70 dark:bg-darkPrimary/90 border border-gray-200 rounded-lg shadow-md dark:bg-darkSecondary dark:border-darkPrimary  transition-all duration-300 ease-in-out hover:shadow-lg"
        >
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={blog.image}
            alt={blog.title}
          />

          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-darkPrimary dark:text-white">
              {blog.title}
            </h5>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
              {blog.description}
            </p>
            <div className="group inline-block text-center w-full sm:w-full md:w-[70%]">
              <button
                type="button"
                className="flex items-center gap-2 text-lightPrimary dark:text-darkPrimary bg-darkAccent dark:bg-lightAccent hover:bg-darkSecondary dark:hover:bg-lightPrimary focus:ring-2 focus:outline-none focus:ring-darkSecondary font-semibold rounded-lg text-md px-5 py-2.5 text-center 
                 transition-all duration-300 ease-in-out transform hover:scale-105 text-center w-full
                
                 "
              >
                <FaGithub className="text-xl group-hover:animate-jello" />
                View Code{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
