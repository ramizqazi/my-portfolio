/* eslint-disable @next/next/no-img-element */
'use client';
import {useContext, useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';
import SingleProjectContext from '../../context/SingleProjectContext';

import WebProjectImg from '../../images/web-project-2.jpg';
import MobileProjectImg from '../../images/web-project-1.jpg';

const ProjectGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const {singleProjectData} = useContext(SingleProjectContext);
  const images = [
    ...singleProjectData.images.map(i => i.src),
    singleProjectData?.category === 'Web Application'
      ? WebProjectImg.src
      : MobileProjectImg.src,
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {images.map((img, index) => {
        return (
          <img
            key={img}
            src={img}
            className="rounded-xl h-full cursor-pointer shadow-lg sm:shadow-none"
            alt={img}
            onClick={() => {
              setSelectedImg(index + 1);
            }}
          />
        );
      })}
      {!!selectedImg && (
        <ImageViewer
          src={images}
          currentIndex={selectedImg - 1}
          onClose={() => setSelectedImg(null)}
          disableScroll={false}
          closeOnClickOutside={true}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
        />
      )}
    </div>
  );
};

export default ProjectGallery;
