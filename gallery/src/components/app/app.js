import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RandomPhoto from '../pages/random-photo/random-photo';
import './app.css';
import Header from '../header/header.js';
import GalleryList from '../gallery-list/gallery-list';
import HomePage from '../pages/home-page/home-page';
import PhotoCard from '../pages/photo-card/photo-card';
import Search from '../search/search';
import UserPage from '../pages/user-page/user-page';

const App = () => {
	return (
		<div className="app">
			<Header headerId={2} item2={'string'} />
			<Switch>
				<Route
					path={'/'}
					render={() => {
						return <HomePage />;
					}}
					exact
				/>
				<Route
					path={'/all/'}
					render={() => {
						return <HomePage />;
					}}
					exact
				/>
				<Route
					path={'/animal/:id'}
					render={({ match }) => {
						return <GalleryList id={match.params.id} />;
					}}
					exact
				/>
				<Route
					path={'/films/:id'}
					render={({ match }) => {
						return <GalleryList id={match.params.id} />;
					}}
					exact
				/>
				<Route
					path={'/food&drink/:id'}
					render={({ match }) => {
						return <GalleryList id={match.params.id} />;
					}}
					exact
				/>
				<Route
					path={'/nature/:id'}
					render={({ match }) => {
						return <GalleryList id={match.params.id} />;
					}}
					exact
				/>
				<Route
					path={'/search/'}
					render={() => {
						return <Search />;
					}}
					exact
				/>
				<Route
					path={'/randomPhoto/'}
					render={() => {
						return <RandomPhoto />;
					}}
					exact
				/>
				<Route
					path={'/photo/:id'}
					render={({ match }) => {
						return <PhotoCard id={match.params.id} />;
					}}
					exact
				/>
				<Route
					path={'/login/'}
					render={() => {
						const login = false;
						if (!login) return <Redirect to={'/all/'} />;
						return <div>Some important content</div>;
					}}
					exact
				/>
				<Route
					path={'/users/:username'}
					render={({ match }) => <UserPage username={match.params.username} />}
					exact
				/>
				<Route
					render={() => {
						return <h2 className="page-not-found">Page Not Found</h2>;
					}}
					exact
				/>
			</Switch>
		</div>
	);
};

export default App;
