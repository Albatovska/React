import React from 'react';
import './slider.css';
import { withData } from '../hoc/with-data';

const Slider = props => {
	const { urls } = props.data;
	return (
		<div
			className={'slider'}
			style={{
				backgroundImage: `url(${urls.small})`,
			}}
		></div>
	);
};

export default withData(Slider);
