import { useState } from 'react';

const Calculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    const daysDiff = currentDate.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  const resetData = () => {
    setBirthdate('');
    setAge('');
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-gray-400 to-purple-700">
        <div className="bg-white w-[60rem] h-[30rem] border rounded-xl">
          <h1 className="font-bold text-2xl flex flex-col justify-center items-center mt-6">
            Age Calculator
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-[30rem] mt-28 border-r-2 border-black h-48 grid grid-rows-2 gap-4 p-4">
              <h2 className="font-bold flex justify-center ml-[-80px] mb-6 text-lg">
                Select Date of Birth
              </h2>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="border-4 border-indigo-500/100 p-4 w-60 rounded-md flex justify-center ml-14 text-base font-bold hover:bg-gray-200"
              />
              <div className="flex justify-start items-center gap-6 mt-7 ml-12">
                <button
                  onClick={calculateAge}
                  className="cursor-pointer text-black font-bold relative text-[12px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:to-90% before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Calculate Age
                </button>
                <button
                  onClick={resetData}
                  className="cursor-pointer text-black font-bold relative text-[12px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:to-90% before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                >
                  Reset Data
                </button>
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <h2 className="font-bold flex justify-center ml-[-80px] mb-6 text-lg">
                Age: {age}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;