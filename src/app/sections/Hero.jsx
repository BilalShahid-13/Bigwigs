import Image from 'next/image';

export const metadata = {
  title: 'Bigwigs English Academy',
  description: 'Master Spoken English, Business English,IELTS, and PTE with expert trainers at Bigwigs English Academy. Enroll now and transform your future!',
};

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center gap-[25%]">
      <div className="flex flex-col justify-start items-start gap-4
       w-[40%]">
        <h1 className="text-4xl font-semibold font-playfair leading-tight">
          Unlock Your Potential with{' '}
          <span className="text-btnColor font-bold">Bigwigs</span> English
          Academy
        </h1>
        <h2 className="text-xl font-medium font-playfair">
          Master &nbsp;
          <span className="bg-indigo-500 text-white text-lg px-2 py-1 rounded-sm">
            Spoken English, Business English, IELTS, and PTE
          </span>{' '}
          &nbsp; with Expert Trainers
        </h2>
        <p className="font-montserrat">
          Join thousands of students who’ve transformed their English skills
          and achieved their dreams with Bigwigs.
        </p>
        <div className="flex flex-row gap-2 font-montserrat">
          <button
            className="bg-btnColor text-white py-2 px-4 rounded-md hover:bg-[#3731e1] transition-all ease-in duration-150"
            aria-label="Enroll Now"
          >
            Enroll Now
          </button>
          <button
            className="bg-[#efeef3] text-[#b097e8] py-2 px-4 rounded-md hover:bg-[#b097e8] hover:text-white transition-all ease-in duration-150"
            aria-label="Book a Free Demo"
          >
            Book a Free Demo
          </button>
        </div>
      </div>
      <div className="relative w-[400px] h-[400px] rounded-full
        bg-indigo-500 justify-center items-center text-center flex">
        <Image
          src={'/Hero/image2.png'}
          width={400}
          priority={true}
          height={400}
          className="object-cover"
          alt="Students learning English at Bigwigs English Academy"
        />
      </div>
    </section>
  );
};

export default Hero;