function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-slate-800 mb-6">
          About Minhaj Solutions
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-8">
          At <span className="font-semibold text-slate-800">Minhaj Solutions</span>,
          we transform ideas into powerful digital experiences. Our team is
          passionate about creating modern, responsive, and user-friendly
          websites that help businesses grow in today's digital world.
        </p>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To empower businesses with innovative web solutions that improve
              their online presence and deliver exceptional user experiences.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become a trusted technology partner by delivering creative,
              reliable, and high-quality digital services worldwide.
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              We focus on clean design, fast performance, responsive layouts,
              and customer satisfaction to create websites that truly stand out.
            </p>
          </div>


        </div>

      </div>
    </div>
  );
}

export default About;