/* eslint-disable @next/next/no-img-element */
"use client"
import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

import WebProjectImg from '../../images/web-project-2.jpg';
import MobileProjectImg from '../../images/web-project-1.jpg';

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.images.map((img) => {
				return (
					<img
						key={img.src}
						src={img.src}
						className="rounded-xl h-full cursor-pointer shadow-lg sm:shadow-none"
						alt={img.src}
					/>
				);
			})}
			{singleProjectData?.category === 'Web Application' && <img
							src={WebProjectImg.src}
							className="rounded-xl h-full cursor-pointer shadow-lg sm:shadow-none"
							alt='web project'
						/>}
			{singleProjectData?.category === 'Mobile Application' && <img
							src={MobileProjectImg.src}
							className="rounded-xl h-full cursor-pointer shadow-lg sm:shadow-none"
							alt='web project'
						/>}
		</div>
	);
};

export default ProjectGallery;
