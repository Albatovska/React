import React, { Component } from 'react';
import Loader from '../loader/loader';

export const withData = (Wrapped, getData) => {
	return class extends Component {
		state = {
			data: false,
		};

		componentDidMount() {
			this.getData();
		}

		getData = () => {
			getData()
				.then(data => this.setState({ data }))
				.catch(error => console.log(error));
		};

		render() {
			const { data } = this.state;
			if (!data) return <Loader />;
			return <Wrapped {...this.props} data={data} />;
		}
	};
};
