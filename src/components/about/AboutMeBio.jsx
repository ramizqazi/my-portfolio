"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

import profileImage from '../../../assets/images/profile.jpeg';

const AboutMeBio = () => {
	const aboutMe = [
		{
			id: 1,
			bio: "Welcome to my portfolio! My name is Ramiz, and I'm a 20-year-old Front-End Web and Mobile App Developer with a passion for innovation and creativity. With years of experience in the field, I have developed expertise in various web and mobile technologies.",
		},
		{
			id: 2,
			bio: "I take pride in my ability to create stunning and meaningful front-end apps with HTML5, CSS3, Javascript, and React.js. Additionally, I am proficient in using React Native to develop cross-platform mobile apps that offer a native feel and look to users on both Android and iOS platforms.",
		},
		{
			id: 3,
			bio: "Collaboration and client satisfaction are my top priorities. I always strive to complete my projects most effectively and efficiently, and I easily adapt to different environments. Whether you need a new app or a website, I'm confident that my skills and experience can make it happen.",
		},
		{
			id: 4,
			bio: "Thank you for visiting my portfolio, and I look forward to hearing from you soon. Click on Hire Me if you'd like to learn more about what I can do for your business.",
		},
	];


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			exit={{ opacity: 0 }}
			className="container mx-auto"
		>
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
					<Image src={profileImage} className="rounded-lg w-96" alt="" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
							key={bio.id}
						>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default AboutMeBio;
