import React from 'react';
import { Link } from 'react-router-dom';
import '../best-sales';

const BestSalesCatalog = ({ data }) => {
	console.log({ data });
	return (
		<div className="catalog">
			{data.map(el => {
				return (
					<Link to={`/device/${el.id}`} className={'item'} key={el.id}>
						<div className="img">
							<img src={el.img} alt="Item" />
						</div>
						<div className="model">{el.model}</div>
						<span className="price">
							Price: {el.price}$<span className="price stock-price">Price: {el.stockPrice}$</span>
						</span>
					</Link>
				);
			})}
		</div>
	);
};
export default BestSalesCatalog;
