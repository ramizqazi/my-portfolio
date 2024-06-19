import { client } from '../../../sanity/lib/client';
import AboutMeBio from '../../components/about/AboutMeBio';
import AboutCounter from '../../components/about/AboutCounter';
import AboutCertifications from '../../components/about/AboutCertifications';

const About = async () => {
	const certification = await client.fetch(`*[_type=="certification"]`);
	return (
		<div>
			<AboutMeBio />
			<AboutCounter />
			<AboutCertifications certification={certification} />
		</div>
	);
};

export default About;
