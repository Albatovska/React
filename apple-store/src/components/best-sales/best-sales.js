import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBestSales } from '../../actions/index';
import withService from '../hoc/with-service';
import BestSalesCatalog from './best-sales-catalog/best-sales-catalog';

import './best-sales';

class BestSales extends Component {
	componentDidMount() {
		this.props.fetchBestSales();
	}
	render() {
		const {
			bestSales: { data, loading },
		} = this.props;

		if (loading === true) return <div>Loading...</div>;
		return (
			<div className="wrapper">
				<div className="wrap">
					<div className="page-title">Best Sales</div>
					<BestSalesCatalog data={data} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ bestSales }) => {
	return { bestSales };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const {
		service: { getBestSales },
	} = ownProps;
	return {
		fetchBestSales: () => fetchBestSales(getBestSales, dispatch),
	};
};
export default withService(connect(mapStateToProps, mapDispatchToProps)(BestSales));
