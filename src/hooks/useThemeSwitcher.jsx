import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const defaultTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(defaultTheme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);

		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
