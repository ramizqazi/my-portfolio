"use client";
import { motion } from 'framer-motion';

import Certification from './Certification';

const AboutCertifications = ({ certification }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="container mx-auto">
        <section className="py-5 sm:py-10 mt-5 sm:mt-10">
          <div className="text-center">
            <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
              Certifications
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10">
            {certification.map(c => (
              <Certification key={c.id} certification={c} />
            ))
            }
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutCertifications;
