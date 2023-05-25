"use client"
import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';
import { usePathname } from 'next/navigation';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const pathname = usePathname();
	const id = Number(pathname.match(/\d+/g)[0]);
	
	const singleProjectData = projectsData.find((p) => p.id === id);

	return (
		<SingleProjectContext.Provider
			value={{singleProjectData}}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
