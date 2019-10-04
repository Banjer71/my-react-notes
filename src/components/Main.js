import React from 'react';
import User from '../User';
import ButtonChange from '../Button_change';
import SocialMedia from './SocialMedia';

function Main() {
	return (
		<div className="main">
			<User firstName="Davide" lastName="Naccarati" />
			<ButtonChange className="btn" />
			<SocialMedia github="https://github.com/Banjer71/my-react-notes" />
		</div>
	);
}

export default Main;
