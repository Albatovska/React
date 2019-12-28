import React, { Component } from 'react';
import GalleryService from '../../../service';
import Loader from '../../loader/loader';
import './photo-card.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const service = new GalleryService();

class PhotoCard extends Component {
	state = {
		photo: false,
	};

	componentDidMount() {
		service.getOnePhoto(this.props.id).then(photo => this.setState({ photo }));
	}

	render() {
		const { photo } = this.state;
		const { user = {} } = photo;
		const { location, name, username } = user;
		const { history } = this.props;

		if (!photo) return <Loader />;

		return (
			<div className={'photo-card-section'}>
				<div className="photo-card-info">
					<div onClick={() => history.goBack()} className="backTo">
						back to prev page
					</div>
					<Link to={`/users/${username}`} className="autor">
						Autor: {name}
					</Link>
					<span className="nickName">Nick: {username}</span>
					<span className="location">From: {location}</span>
				</div>
				<div className="photo-card">
					<img src={photo.urls.regular} alt="" className="photo-card-image" />
				</div>
			</div>
		);
	}
}

export default withRouter(PhotoCard);
