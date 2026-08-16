import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto py-14 px-8 grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-3xl font-bold text-white ">
            Minhaj Solutions
          </h1>

          <p className="mt-5 text-gray-400">
            Building modern websites, web apps,
            and digital solutions for businesses worldwide.
          </p>

        </div>

        <div>

          <h2 className="font-bold text-xl mb-5">
            Company
          </h2>

          <ul className="space-y-3">

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/services">Services</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        <div>

          <h2 className="font-bold text-xl mb-5">
            Services
          </h2>

          <ul className="space-y-3">

            <li>Web Development</li>

            <li>UI/UX Design</li>

            <li>SEO</li>

            <li>Digital Marketing</li>

          </ul>

        </div>

        <div>

          <h2 className="font-bold text-xl mb-5">
            Contact
          </h2>

          <p>📧 info@minhajsolutions.com</p>

          <p className="mt-2">📞 +92 300 1234567</p>

          <p className="mt-2">📍 Lahore, Pakistan</p>

          <div className="flex gap-4 text-2xl mt-5">

            <span>🌐</span>

            <span>📘</span>

            <span>📸</span>

            <span>💼</span>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5 text-gray-400">
        © 2026 Minhaj Solutions. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;