'use client';
import {createContext} from 'react';
import {aboutMeData, certificationsData} from '../data/aboutMeData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({children}) => {

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe: aboutMeData,
        certification: certificationsData,
      }}>
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
