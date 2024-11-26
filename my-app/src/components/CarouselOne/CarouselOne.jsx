import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const CarouselOne = () => {
  const slides = [
    {
      id: 1,
      Title: "Style and Grace",
      buttonText: "Purchase",
      image:
        "https://cdn.pixabay.com/photo/2019/08/28/14/24/girl-4436910_640.jpg",
      text: "This is beauty designed with love & care, Fleur is all you ever wanted",
    },
    {
      id: 2,
      Title: "This is Beauty",
      buttonText: "Purchase",
      image:
        "https://cdn.pixabay.com/photo/2016/04/21/22/29/portrait-1344645_640.jpg",
      text: "Experience unmatched elegance and charm with our unique designs",
    },
    {
      id: 3,
      Title: "Simply Charming",
      buttonText: "Purchase",
      image:
        "https://cdn.pixabay.com/photo/2021/07/15/11/15/woman-6468147_640.jpg",
      text: "Crafted with passion and dedication, bring beauty to life with Fleur",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowTitle(false);
    setShowText(false);

    const titleTimeout = setTimeout(() => setShowTitle(true), 1000); // Delay 1 second for title
    const textTimeout = setTimeout(() => setShowText(true), 1500); // Delay 1.5 seconds for text

    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(textTimeout);
      clearTimeout(timer);
    };
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-start justify-center text-white h-full px-12">
              <div className="flex justify-center items-center mb-9">
                <h1
                  className={`ml-64 text-6xl font-sans font-thin transition-opacity duration-700 ${
                    showTitle ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.Title}
                </h1>
              </div>
              <h1
                className={`text-3xl font-bold mb-4 transition-opacity duration-700 ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.text}
              </h1>
              <button
                className={`ml-96 mt-12 bg-transparent border border-zinc-50 text-white px-6 py-3 text-3xl rounded-md transition-opacity duration-1000 ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 text-6xl text-white"
      >
        <IoIosArrowRoundBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 text-6xl text-white"
      >
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default CarouselOne;
