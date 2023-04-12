import React from "react";

const Products = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Images */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://gundam-factory.net/en/images/products/item_01.jpg"
          alt="gundam"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://gundam-factory.net/en/images/products/item_04.jpg"
          alt="gundam"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://gundam-factory.net/en/images/products/item_03.jpg"
          alt="gundam"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://gundam-factory.net/en/images/products/item_02.jpg"
          alt="gundam"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://gundam-factory.net/en/images/products/item_05.jpg"
          alt="gundam"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Exclusive Products</h3>
        <p className="text-2xl py-6">
          Original and limited edition products which are not available anywhere
          else.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repellendus fuga eius, praesentium ipsa delectus fugit perferendis?
          Officiis, sed quam omnis iusto rem libero debitis laboriosam totam.
          Necessitatibus, autem velit!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-md">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
