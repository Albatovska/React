import React from 'react';
import SimpleSlider from '../../simple-slider/simple-slider';
import CategoriesSection from '../../categories-section/categories-section';
import BestSales from '../../best-sales/best-sales';

const HomePage = () => {
	return (
		<>
			<SimpleSlider />
			<CategoriesSection />
			<BestSales />
		</>
	);
};

export default HomePage;
