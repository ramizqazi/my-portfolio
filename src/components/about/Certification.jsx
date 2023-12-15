'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';

const animation = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const Certification = ({certification}) => {
  return (
    <motion.div initial="hidden" whileInView="show" variants={animation}>
        <div style={{height: 750}} className="rounded-xl shadow-lg hover:shadow-xl flex flex-col justify-between cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={certification.image}
              width="700"
              height="200"
              style={{height: 390}}
              className="rounded-t-xl border-none"
              alt="Certification"
            />
          </div>
          <div className="text-left px-4 pt-5">
            <h1 className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {certification.title}
            </h1>
            <span className="text-md text-ternary-dark dark:text-ternary-light">
              {certification.description}
            </span>
          </div>
          <div className='px-4 py-5 z-50'>
            <a href={certification.link} target='_blank'>
            <button type='button'  className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-xl">
              <p>Check Certification</p>
            </button>
              </a>            
          </div>
        </div>
    </motion.div>
  );
};

export default Certification;
