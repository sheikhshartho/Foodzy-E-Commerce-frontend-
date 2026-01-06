import React from "react";
import carrotImage from "../../public/Section → 1.jpg.png";
const About = () => {
  return (
    <div className="max-w-360 mx-auto mt-8">
      <div className="flex justify-around items-center gap-8 my-10">
        <div className="w-full">
          <h1 className="font-bold text-4xl mb-7">About The Carrot</h1>
          <p className="font-medium text-sm text-[#7A7A7A] mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae necessitatibus quasi incidunt alias adipisci pariatur
            earum iure beatae assumenda rerum quod. Tempora magni autem a
            voluptatibus neque.
          </p>
          <p className="font-medium text-sm text-[#7A7A7A] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            rerum cum accusamus magni consequuntur architecto, ipsum deleniti
            expedita doloribus suscipit voluptatum eius perferendis amet!.
          </p>
          <p className="font-medium text-sm text-[#7A7A7A] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, maxime amet architecto est exercitationem optio ea
            maiores corporis beatae, dolores doloribus libero nesciunt qui
            illum? Voluptates deserunt adipisci voluptatem magni sunt sed
            blanditiis quod aspernatur! Iusto?
          </p>
          <div className="flex gap-8 justify-around mb-8 bg-[#E9E9E9] p-10 rounded-2xl">
            <div>
              <h2 className="font-bold text-6xl text-red-500 ">
                0.1<span className="text-3xl text-[#7A7A7A]">K</span>
              </h2>
              <p className="font-semibold text-xl">Vendors</p>
            </div>
            <div>
              <h2 className="font-bold text-6xl text-red-500 ">
                23<span className="text-3xl text-[#7A7A7A]">K</span>
              </h2>
              <p className="font-semibold text-xl">Customers</p>
            </div>
            <div>
              <h2 className="font-bold text-6xl text-red-500 ">
                20<span className="text-3xl text-[#7A7A7A]">K</span>
              </h2>
              <p className="font-semibold text-xl">Products</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img src={carrotImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
