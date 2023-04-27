import Image from "next/image";

function Hero() {
  return (
    <div className="flex justify-around">
      <div>
        <Image src="/Main_logo.png" alt="Main logo" width={500} height={500}/>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 aria-label="main title" className="font-bold">
          We just love keyboards
        </h1>
        <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy now!
        </button>
      </div>
    </div>
  );
}

export default Hero;
