import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-800">
          Welcome to Minhaj Solutions
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Minhaj Solutions is a modern software company that provides
          professional web development, UI/UX design and digital solutions
          for businesses.
        </p>

        <div className="mt-8">
          <Link to="/contact"className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700" >
       Get Started
        </Link>

           <Link
    to="/about"
    className="border border-slate-800 text-slate-900 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
  >
    Learn More
  </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;