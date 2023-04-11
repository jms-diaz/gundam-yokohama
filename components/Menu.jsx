import React from "react";

const Menu = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Gundam-Inspired Menu</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, minima
          eum! Possimus voluptatum repellat neque expedita nam recusandae
          accusamus! Veniam dolorem minus similique reiciendis consequuntur
          aperiam eius, dolorum omnis soluta.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1631799146456-9ee9fde0bd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="gundam"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1631799146456-9ee9fde0bd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="gundam"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1631799146456-9ee9fde0bd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="gundam"
        />
      </div>
    </div>
  );
};

export default Menu;
