import React, { Component } from 'react';
import GalleryService from '../../service';
// import GalleryList from '../gallery-list/gallery-list';
import Loader from '../loader/loader';

import './search.css';

const service = new GalleryService();

export default class Search extends Component {
	state = {
		value: '',
		searchPhoto: [],
		page: 1,
		loading: false,
	};

	handleChange = e => {
		const { value } = e.target;
		this.setState({ value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { value, page } = this.state;
		if (!value) return console.log('error');
		service.getSearchPhoto(value, page).then(searchPhoto =>
			this.setState({
				searchPhoto: searchPhoto.results,
				page: page + 1,
				loading: false,
			})
		);
	};

	showMorePhotos = () => {
		const { page, value, searchPhoto } = this.state;
		this.setState({ loading: true });
		service.getSearchPhoto(value, page).then(data => {
			this.setState({
				searchPhoto: [...searchPhoto, ...data.results],
				page: page + 1,
				loading: false,
			});
		});
	};

	render() {
		const { value, searchPhoto, loading } = this.state;
		return (
			<>
				<div className={'search'}>
					<form onSubmit={e => this.handleSubmit(e)}>
						<input
							onChange={e => this.handleChange(e)}
							value={value}
							type="text"
							name={'search'}
							autoComplete={'off'}
							className={'search_input'}
							placeholder={'I search...'}
						/>
						<button className={'search_button'}>Find</button>
					</form>
				</div>
				<div className={'search__results'}>
					<div className="search_container">
						{' '}
						{searchPhoto.map(el => {
							return (
								<div className={'photo_item'} key={el.id}>
									<div className="img">
										<img key={el.id} src={el.urls.small} alt="" />
										<div className="autor"> </div>
										<div className="avatar"> </div>
									</div>
								</div>
							);
						})}{' '}
					</div>{' '}
					<Loader loading={loading} showMorePhotos={this.showMorePhotos} />
				</div>
			</>
		);
	}
}
