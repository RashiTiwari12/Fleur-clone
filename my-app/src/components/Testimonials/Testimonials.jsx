import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Testimonials",
      person: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id asperiores nihil voluptatem saepe ea veniam consequatur, facere eveniet animi. Officia tempora sapiente blanditiis similique, nobis sed voluptas deserunt iusto.",
    },
    {
      id: 2,
      title: "Testimonials",
      person: "Sam Smith",
      text: "Loaboriosam id asperiores nihil voluptatem saepe ea veniam consequatur, facere eveniet animi. Officia tempora sapiente blanditiis similique, nobis sed voluptas deserunt iusto.",
    },
    {
      id: 3,
      title: "Testimonials",
      person: "Jerry Lawrence",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique odio maiores magni qui, provident et, in nesciunt animi, consequatur sint ea eos error debitis quos distinctio aut deo.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % testimonials.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentSlide, testimonials.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {" "}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/11/27/19/03/landscape-4657646_640.jpg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-3">
          <p className="text-6xl md:text-2xl lg:text-3xl text-center max-w-3xl mb-3 text-white">
            {testimonials[currentSlide].title}
          </p>
          <p className="text-xl  text-center max-w-3xl  mt-9">
            " {testimonials[currentSlide].text}"
          </p>
          <p className="text-xl  text-center   mt-6 mb-0">
            {testimonials[currentSlide].person}
          </p>

          <div className="flex space-x-2 mt-60">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-4 h-4 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
