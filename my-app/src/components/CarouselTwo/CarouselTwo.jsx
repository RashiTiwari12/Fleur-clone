import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const CarouselTwo = () => {
  const carouselItems = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg",
      cardImage:
        "https://cdn.pixabay.com/photo/2016/08/15/10/14/wedding-1594957_640.jpg",
      title: "Winter Wonderland",
      theme: "Design",
      date: "March 12, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio pariatur cum labore laborum!",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg",
      cardImage:
        "https://cdn.pixabay.com/photo/2021/08/21/19/43/bride-6563441_640.jpg",
      title: "Wedding Bliss",
      theme: "Design",
      date: "March 12, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Spernatur ullam vel in ea culpa iusto fuga.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg",
      cardImage:
        "https://cdn.pixabay.com/photo/2016/06/16/02/26/character-1460508_640.jpg",
      title: "Bride's Day",
      theme: "Design",
      date: "March 12, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perspiciatis? Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg",
      cardImage:
        "https://cdn.pixabay.com/photo/2020/09/15/09/27/woman-5573135_640.jpg",
      title: "Spring Sunshine",
      theme: "Design",
      date: "March 12, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, perspiciatis? Lorem ipsum dolor sit amet.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg",
      cardImage:
        "https://cdn.pixabay.com/photo/2016/08/15/10/14/wedding-1594957_640.jpg",
      title: "Winter Wonderland",
      theme: "Design",
      date: "March 12, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio pariatur cum labore laborum!",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextCards = () => {
    if (startIndex < carouselItems.length - 3) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevCards = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(carouselItems.length - 3);
    }
  };

  return (
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_640.jpg")`,
        }}
      >
        <div className="flex justify-center items-center p-24">
          <div>
            <div className="flex justify-between p-3">
              {carouselItems
                .slice(startIndex, startIndex + 3)
                .map((item, index) => (
                  <div
                    key={index}
                    className="w-[30%] h-[650px] bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    <div
                      className="h-[70%] bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.cardImage})` }}
                    ></div>

                    <div className="h-[20%] p-5 text-center">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="mt-6 text-sm text-gray-600 font-extralight font-serif">
                        {item.description}
                      </p>
                      <hr />
                      <div className="flex justify-around font-thin text-xl pt-3 ">
                        <div>
                          {" "}
                          <p className="mt-2 text-sm text-gray-600">
                            {item.theme}
                          </p>
                        </div>
                        <div>
                          {" "}
                          <p className="mt-2 text-sm text-gray-600">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
              <button onClick={prevCards} className=" text-black text-6xl p-3 ">
                <IoIosArrowRoundBack />
              </button>
            </div>
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
              <button
                onClick={nextCards}
                className=" text-black text-6xl  p-3 "
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
