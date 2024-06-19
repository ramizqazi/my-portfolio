'use client';
import { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';

const ProjectGallery = ({ project }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {project?.images?.map((img, index) => {
        return (
          <Image
            key={img}
            src={urlForImage(img)?.url()}
            width="500"
            height="200"
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
          src={project?.images}
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
