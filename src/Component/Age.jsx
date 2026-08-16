import { useState } from "react";

const Age = () => {

  const [year, setYear] = useState("");


  console.log(year)

  const getMyDOB = (selectedYear)=> {
    return `${2026-selectedYear}`
  }

  return (
    <div className="bg-gray-200 w-50 p-5 border-1 rounded-2xl">

      <input
        type="date"
        placeholder="Enter birth year"
        onChange={(e) => setYear(e.target.value.split("-")[0])}
      />

      <div className="bg-blue-800 w-22 min-h-2 mt-3 rounded-2xl text-white">
        <button >
          Calculate
        </button>
      </div>

      <h1>your age:{getMyDOB(year)}</h1>

    </div>
  );
};

export default Age;