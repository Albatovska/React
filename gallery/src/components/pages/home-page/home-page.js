import React, { Component } from 'react';
import './home-page.css';
import GalleryList from '../../gallery-list/gallery-list';
import Slider from '../../slider/slider';
import { withData } from '../../hoc/with-data';
import GalleryService from '../../../service';

const service = new GalleryService();

export default class HomePage extends Component {
	render() {
		const SliderComponent = withData(Slider, service.getRandomPhotos);
		return (
			<>
				<SliderComponent />
				<GalleryList />
			</>
		);
	}
}
