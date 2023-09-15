'use client';
import {motion} from 'framer-motion';
import {FiX} from 'react-icons/fi';

const Modal = ({title, children, onClose}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500">
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            {title && (
              <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
                <h2 className='ont-general-semibold text-lg lg:text-lg xl:text-lg text-center sm:text-left text-ternary-dark dark:text-primary-light'>{title}</h2>
                <button
                  onClick={onClose}
                  className="px-4 font-bold text-primary-dark dark:text-primary-light">
                  <FiX className="text-3xl" />
                </button>
              </div>
            )}
            <div className="modal-body p-5 w-full h-full">
							{children}
             </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Modal;
