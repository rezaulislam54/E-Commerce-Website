const DressStyle = () => {
  return (
    <div className="my-10">
      <div className="container mx-auto bg-[#F0F0F0] rounded-xl py-14 px-10">
        <h2 className="text-center text-5xl font-bold uppercase">
          BROWSE BY dress STYLE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 ">
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501157/image_11_yu83yf.png')] bg-center  lg:bg-right w-full p-5 rounded-xl lg:col-span-4 lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Casual</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501374/image_13_sxanh8.png')] bg-center lg:bg-left-top lg:col-span-8  w-full  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Formal</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501928/image_12_x4lydb.png')] bg-center lg:bg-left-top lg:col-span-8  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Party</h2>
          </div>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726501973/image_14_i2gzzo.png')]  lg:col-span-4  p-5 rounded-xl  lg:h-[280px] h-[200px]">
            <h2 className="text-2xl font-bold">Gym</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
