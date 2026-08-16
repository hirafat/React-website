import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="  w-full bg-slate-900 shadow-md ">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          Minhaj Solutions
        </h1>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-white hover:text-yellow-300 " >
            Home
          </Link>

          <Link to="/about" className="text-white hover:text-yellow-300 " >
            About
          </Link>

          <Link to="/services" className="text-white hover:text-yellow-300 " >
            Services
          </Link>

          <Link to="/contact" className="text-white hover:text-yellow-300 " >
            Contact
          </Link>
        </div>

        <Link to="/login" className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black ">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;