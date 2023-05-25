"use client"
import { useContext } from 'react';
import SingleProjectContext from '@/context/SingleProjectContext';

const ProjectInfo = () => {
	const {singleProjectData} = useContext(SingleProjectContext);
	const paraBreak = singleProjectData.details.projectDescription.indexOf('{break}')

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.technologies.title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.technologies.techs.join(
							', '
						)}
					</p>
				</div>
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Key Features
					</p>
					<ul className="list-disc">
						{singleProjectData.details.features.map(
							(f) => (
									<li
										key={f}
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
									>
										<span>{`${f}`}</span>
									</li>
								)
						)}
					</ul>
				</div>
			</div>
			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						About App
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
					{singleProjectData.details.projectDescription.slice(0, paraBreak > -1 ? paraBreak : undefined)}
				</p>
				{paraBreak > -1 && (
					<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
						{singleProjectData.details.projectDescription.slice(paraBreak + 7, singleProjectData.details.projectDescription.length -1)}
					</p>
				)}
			</div>
		</div>
	);
};

export default ProjectInfo;
