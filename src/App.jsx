import { useState } from "react";
import reviews from "./assets/Components/data";
import commentPng from "./assets/images/comments.png";
import nextBtn from "./assets/images/next-arrow.png";
import prevBtn from "./assets/images/prev-arrow.png";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number < 0) return reviews.length - 1;
    if (number > reviews.length - 1) return 0;
    else return number;
  };

  const showPrev = () => {
    setIndex(checkNumber(index - 1));
  };

  const showNext = () => {
    setIndex(checkNumber(index + 1));
  };

  const showRandom = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (index == randomIndex) setIndex(checkNumber(randomIndex + 1));
    else setIndex(randomIndex);
  };

  return (
    <div className=" shadow-2xl max-w-[600px] flex flex-col items-center p-4 relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="relative">
        <img
          className="w-[10rem] h-[10rem] object-cover rounded-full border-4 p-1 border-blue-400 mb-4"
          src={image}
          alt={name}
        />
        <img
          src={commentPng}
          className="w-[3rem] absolute top-6 left-[-1rem]"
        />
      </div>
      <p className="capitalize font-bold text-2xl">{name}</p>
      <p className="uppercase text-blue-600 text-sm">{job}</p>
      <p className="text-center my-4 opacity-70">{text}</p>
      <div className="flex gap-2">
        <img
          onClick={showPrev}
          className="w-[3rem] h-[3rem] cursor-pointer"
          src={prevBtn}
          title="Previous review"
        />
        <img
          onClick={showNext}
          className="w-[3rem] h-[3rem] cursor-pointer"
          src={nextBtn}
          title="Next review"
        />
      </div>
      <button
        onClick={showRandom}
        className="bg-[#C1BEFF] text-blue-700 py-[2px] px-6 my-4 rounded hover:text-black"
        title="Show random review"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default App;
