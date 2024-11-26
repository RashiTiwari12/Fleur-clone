import React from "react";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const Footer = () => {
  // Sample Instagram images (replace with actual URLs)
  const instagramImages = [
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729513_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729513_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729513_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729513_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729513_640.jpg",
  ];

  return (
    <>
      <div className="bg-zinc-800 text-white  p-12">
        <div className="flex justify-around">
          {/* About Us Section */}
          <div className="w-1/3 p-6 ">
            <h1 className="text-3xl font-thin mb-2 ">About Us</h1>
            <p className="text-lg flex flex-wrap mr-12 text-gray-300">
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
              omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo
              errem partiendo ex cum.
            </p>
          </div>

          <div className="w-1/3 p-6 ">
            <h1 className="text-3xl font-thin  mb-2">Latest Tweets</h1>
            <p className="text-lg text-gray-300">
              Couldn't connect with Twitter
            </p>
          </div>

          <div className="w-1/3 p-6">
            <h1 className="text-3xl font-thin mb-2">Instagram</h1>
            <div className="flex flex-row gap-2">
              {instagramImages.map((img, index) => (
                <div key={index} className="w-20 h-20">
                  <img
                    src={img}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 p-9 flex flex-col">
          {" "}
          <h2 className="text-2xl font-thin ">
            Subscribe to Our Newsletter
          </h2>{" "}
          <div className="flex flex-row p-3">
            <input
              className="w-60 rounded-sm"
              placeholder=" Enter Your Email*"
            />
            <div className="bg-gray-700 rounded-2xl p-3">
              <PiPaperPlaneTiltBold />
            </div>
          </div>
          <hr className="bg-gray-600 h-[1px] border-0 mt-24" />
        </div>
        <div className="flex justify-between items-center p-4">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <h1 className="text-gray-300 font-serif text-4xl font-light ml-3">
              Fleur~
            </h1>
            <ul className="flex text-gray-300 ml-9 gap-6 font-normal text-lg">
              <li>Home</li>
              <li>Pages</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Footer Text */}
          <p className="text-gray-300 text-sm">
            © 2017 Qode Interactive, All Rights Reserved
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default Footer;
