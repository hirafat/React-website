import React, { useState } from "react";
import { IoEye, IoEyeOff, IoCopyOutline } from "react-icons/io5";

const Home = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const generatePassword = () => {
   
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const Symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const combineAll = Uppercase+Lowercase+Numbers+Symbols;



    let newPassword = "";

    for(let i = 0; i < rangeValue; i++){ 

      const radomIndex = Math.floor(Math.random() * combineAll.length)

      newPassword += combineAll[radomIndex]

    }

    setPassword(newPassword)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="w-full max-w-md border border-gray-300 rounded-3xl p-8 shadow-2xl bg-white">
        <h1 className="text-3xl font-bold text-black text-center">
          Password Generator
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Create strong and secure passwords
        </p>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password..."
            value={password}
            className="w-full border border-gray-300 rounded-xl py-3 px-4 pr-24 text-black outline-none focus:border-black transition"
          />

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 text-xl text-gray-600">
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-black transition"
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>

            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="hover:text-black transition"
            >
              <IoCopyOutline />
            </button>
          </div>
        </div>

        {/* Length */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Length</span>
            <span className="font-bold">{rangeValue}</span>
          </div>

          <input
            type="range"
            min="6"
            max="30"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            className="w-full accent-black"
          />
        </div>

        {/* Options */}
        <div className="mt-6 space-y-4">
          <label className="flex justify-between items-center">
            <span>Uppercase Letters</span>
            <input type="checkbox" defaultChecked className="accent-black" />
          </label>

          <label className="flex justify-between items-center">
            <span>Numbers</span>
            <input type="checkbox" defaultChecked className="accent-black" />
          </label>

          <label className="flex justify-between items-center">
            <span>Special Characters</span>
            <input type="checkbox" defaultChecked className="accent-black" />
          </label>
        </div>

        {/* Button */}
        <button onClick={generatePassword} className="w-full mt-8 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 active:scale-95 transition">
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Home;