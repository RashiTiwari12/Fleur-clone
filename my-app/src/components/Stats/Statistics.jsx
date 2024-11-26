import React from "react";

const Statistics = () => {
  const progressValues = [
    { theme: "Design", value: 25 },
    { theme: "Marketing", value: 50 },
    { theme: "Development", value: 75 },
    { theme: "User Experience", value: 100 },
  ];
  return (
    <div className="flex h-[50vh] justify-between items-start space-x-8 p-12 m-9">
      {" "}
      <div className="flex-1 p-9 mt-9 ">
        {" "}
        <h1 className="text-3xl font-semibold text-blue-950">
          ENGAGING CREATIVE PAGE AND THEME
        </h1>
        <h3 className="text-2xl font-thin font-mono text-zinc-800">
          Express yourself and your business through this amazing theme
        </h3>
        <p className=" pt-3 text-xl font-serif text-gray-950">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          esse inventore, doloribus consectetur officiis, temporibus facilis
          iure illo magni repudiandae fugiat eaque omnis ad eligendi! Et eaque
          odit laudantium eum.
        </p>
      </div>
      <div className="flex-1 space-y-9 mt-3 ">
        {progressValues.map((items, index) => (
          <div>
            {" "}
            <p className="float-end">{items.value}%</p>
            <p>{items.theme}</p>
            <div key={index} className="w-full bg-gray-100 rounded-full h-3">
              <div
                className="bg-gray-300 h-3 rounded-full  transition-all duration-300"
                style={{ width: `${items.value}%` }}
              ></div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
