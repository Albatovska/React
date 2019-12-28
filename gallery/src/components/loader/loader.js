import React from 'react';
import './loader.css';

const Loader = ({ loading, showMorePhotos }) => {
	return (
		<div className={'loader-box'}>
			<span
				onClick={() => showMorePhotos()}
				className={`glyphicon glyphicon-refresh loader ${loading ? 'active' : ''}`}
			></span>{' '}
		</div>
	);
};

export default Loader;
