export default function Statistics() {
  return (
    <div className="w-full px-6 py-10 bg-darkPrimary dark:bg-lightPrimary shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column */}
        <div className="flex flex-row gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 font-semibold justify-start text-start">
            <h2 className="text-3xl md:text-5xl font-bold text-lightAccent dark:text-darkSecondary">
              10+
            </h2>
            <p className="text-sm md:text-xl text-lightAccent dark:text-darkSecondary font-normal">
              Years of <br /> Experience
            </p>
          </div>
          <div className="flex items-center gap-4 font-semibold justify-start text-start">
            <h2 className="text-3xl md:text-5xl font-bold text-lightAccent dark:text-darkSecondary">
              12+
            </h2>
            <p className="text-sm md:text-xl text-lightAccent dark:text-darkSecondary font-normal">
              Projects <br />
              Completed
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-wrap justify-center gap-1 text-4xl text-darkAccent dark:text-lightAccent">
          <img
            src="/assets/andriantech/1.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />
          <img
            src="/assets/andriantech/2.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/3.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/4.png"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/5.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/6.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/7.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
          <img
            src="/assets/andriantech/8.PNG"
            alt="Profile"
            className=" w-10 h-auto md:w-20 md:-auto"
          />{" "}
        </div>
      </div>
    </div>
  );
}
