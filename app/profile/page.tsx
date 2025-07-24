
const AboutUsPage = () => {
  return (
    <div className="about-us-container p-6 md:p-10 lg:p-12 bg-white text-gray-900 min-h-screen">
      <div className="max-w-3xl w-full space-y-8 m-auto">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          About Us
        </h1>
        <p className="text-gray-700 text-center text-lg sm:text-xl">
👥 We are Team AC07 — a group of enthusiastic AIML students from Gokaraju Rangaraju Institute of Engineering and Technology (GRIET). As part of our minor project, we developed the AI-Powered Mock Interview System with the vision to help job seekers improve their interview skills through advanced AI-driven simulations.       
 </p>

 <p className="text-gray-700 text-center text-lg sm:text-xl">
🧠 Our Mission
To empower candidates with a smart, accessible, and personalized platform that boosts interview confidence and readiness through real-time feedback and analytics. </p>


        <div className="team-info space-y-6 bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Our Team</h2>
          <p className="text-gray-700">
            We are passionate and driven individuals committed to delivering innovative and reliable solutions.
            Our services reflect our dedication to excellence, creativity, and customer satisfaction.
          </p>

          <div className="space-y-4">
            {/* G.Siddartha */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: G.Siddartha</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23245A6614
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> siddarthagunjala@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 8639353175
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> AIML-C GRIET
              </p>
              <p className="text-gray-700">
                <strong>Role:</strong> Project Lead
              </p>
            </div>

            {/* Ch.Chandravardhan Goud */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: Ch.Chandravardhan Goud</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 22H51A6675
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> chchandravardhan1501@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7815940137
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> CSE(AIML) - CMRCET
              </p>
              <p className="text-gray-700">
                <strong>Role:</strong> Tech Lead
              </p>
            </div>
          </div>
        </div>

        <div className="project-details space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600">Project Overview</h2>
            <p className="text-gray-700">
                The AI-Powered Mock Interview System is a web application designed to simulate real-world job interviews.  It leverages artificial intelligence to provide candidates with personalized feedback, identify areas for improvement, and ultimately increase their confidence and success in actual interviews.
            </p>
            <p className="text-gray-700">
               Our goal is to make interview preparation more accessible, effective, and less stressful for everyone.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
