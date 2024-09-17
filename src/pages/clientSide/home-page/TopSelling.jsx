

const TopSelling = () => {
    const star = {  
        position: "relative",//+
        overflow: "hidden",//+
        cursor: "pointer",//+
        display: "block",//+
        float: "left",//+
        color: "#FFD700",
        fontSize: "20px;"//+
    }
    return (
        <div className="container mx-auto my-20">
      <h2 className="text-center text-5xl font-bold">NEW ARRIVALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5 lg:px-0">
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726243801/image_7__1_-removebg-preview_pyxly3.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> VERTICAL STRIPED SHIRT</h2>
        
         
          <div className="flex items-center">
            <div>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
                <span className=" text-center text-2xl pt-2 font-bold">4.5/5</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold">$120</h2>
        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726244319/image_8__1_-removebg-preview_zv14lr.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5">COURAGE GRAPHIC T-SHIRT</h2>
        
         
          <div className="flex items-center">
            <div>
            <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
                <span className=" text-center text-2xl pt-2 font-bold">3.5/5</span>
            </div>
          </div>
        <div className="flex items-center gap-5 "> 
        <h2 className="text-3xl font-bold">$240</h2>
          <h2 className="text-3xl font-bold line-through text-gray-400">$260</h2>
          <span className="text-red-600 px-3 py-2.5 rounded-[60px] bg-[#FFEAEA]">-20%</span>
             
        </div>
          
        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726244360/image_9__1_-removebg-preview_lyghff.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> LOOSE FIT BERMUDA SHORTS</h2>
        
         
          <div className="flex items-center">
            <div>
            <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
                <span className=" text-center text-2xl pt-2 font-bold">4.5/5</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold">$180</h2>
        </div>
        <div className="">
          <div className="bg-[#F0EEED] p-5 rounded-[20px] h-[310px]">
            <img
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1726244404/image_10__1_-removebg-preview_mckvbt.png"
              alt=""
            />
          </div>
          <h2 className="text-xl font-bold pt-5"> FADED SKINNY JEANS</h2>
        
         
          <div className="flex items-center">
            <div>
            <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="2" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
                    <span className="text-4xl" data-index="0" data-forhalf="★" style={star}>★</span>
            </div>
            <div className="flex justify-center items-center">
                <span className=" text-center text-2xl pt-2 font-bold">4.5/5</span>
            </div>
          </div>
          <div className="flex items-center gap-5 "> 
             <h2 className="text-3xl font-bold">$130</h2>
            <h2 className="text-3xl font-bold line-through text-gray-400">$160</h2>
            <span className="text-red-600 px-3 py-2.5 rounded-[60px] bg-[#FFEAEA]">-30%</span>
             
        </div>
        </div>
       
      </div>
      {/* btn */}
      <div className="text-center py-3">
        <button className="px-6 py-3 rounded-[60px] border border-gray-400">View All</button>

      </div>
      <hr className="mt-10" />
    </div>
    );
};

export default TopSelling;