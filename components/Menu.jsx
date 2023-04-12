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
          src="https://resize.cdn.otakumode.com/resize/1600/u/ef699bb2b76f49b6ba4766562c907c4b.jpg.webp"
          alt="gundam"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://resize.cdn.otakumode.com/full/u/1641933504084701a6aee40448ac19a6.jpg"
          alt="gundam"
        />
        <img
          className="object-cover w-full h-full"
          src="https://resize.cdn.otakumode.com/full/u/68e33e96ef624bda9fb6b895213772c7.jpg"
          alt="gundam"
        />
      </div>
    </div>
  );
};

export default Menu;
