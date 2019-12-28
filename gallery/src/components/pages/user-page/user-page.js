import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Loader from '../../loader/loader';
import Header from '../../header/header';

import GalleryService from '../../../service';
import './user-page.css';

const service = new GalleryService();

class UserPage extends Component {
	state = {
		user: false,
	};

	componentDidMount() {
		service.getUser(this.props.username).then(user => this.setState({ user }));
	}
	render() {
		const { history } = this.props;
		const { user } = this.state;
		const {
			profile_image: image,
			name,
			location,
			total_photos: photos,
			total_likes: likes,
			updated_at: updated,
		} = user;
		if (!user) return <Loader />;
		return (
			<>
				<Header />
				<div className={'user-card'}>
					<div onClick={() => history.goBack()} className="backTo">
						back to prev page
					</div>
					<div className={'user-image'}>
						<img src={image.large} alt={name} />
					</div>
					<div className={'user-card-info'}>
						<p className={'name'}>{name}</p>
						<p>
							<span>From: </span>
							{location ? location : 'unknown'}
						</p>
						<p>
							<span>Total number of photos: </span> {photos ? photos : 'not yet'}
						</p>
						<p>
							<span>Total number of likes: </span> {likes ? likes : 'not yet'}
						</p>
						<p>
							<span>Last updated: </span> {updated ? updated.slice(0, 10) : 'information relevant'}
						</p>
					</div>
				</div>
			</>
		);
	}
}
export default withRouter(UserPage);
