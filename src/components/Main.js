import React from 'react';
import Card from './Card';
import ButtonChange from './Button_change';
import User from './User';

function Main() {
	return (
		<div className="main">
		<Card github="https://github.com/Banjer71/my-react-notes/blob/master/src/components/Button_change.js">
				<h2>Counter</h2>
				<ButtonChange className="btn" />
			</Card>

			<Card github="https://www.davidenaccarati.com">
				<h2>Toggle Button</h2>
				<User firstName="Davide" lastName="Naccarati" />
			</Card>

			<Card github="">
				<h2>Who's next....</h2>
			</Card>
		</div>
	);
}

export default Main;
