"use client";
import { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';

import CounterItem from './CounterItem';

const AboutCounter = () => {
  useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
  useCountUp({ ref: 'totalprojects', end: 50, duration: 2 });
  useCountUp({ ref: 'feedbackCounter', end: 80, duration: 2 });
  useCountUp({ ref: 'projectsCounter', end: 95, duration: 2 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
          <CounterItem
            title="Years of experience"
            counter={<span id="experienceCounter" />}
            measurement=""
          />

          <CounterItem
            title="Total projects"
            counter={<span id="totalprojects" />}
            measurement=""
          />

          <CounterItem
            title="Positive feedback"
            counter={<span id="feedbackCounter" />}
            measurement="%"
          />

          <CounterItem
            title="Projects completed"
            counter={<span id="projectsCounter" />}
            measurement="%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCounter;
