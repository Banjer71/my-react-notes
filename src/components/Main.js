import React from 'react';
import Card from './Card';
import ButtonChange from './Button_change';
import Toggle from './Toggle';
import trainers from './images/trainers.jpg'

function Main() {
	return (
		<div className="main">
		<Card github="https://github.com/Banjer71/my-react-notes/blob/master/src/components/Button_change.js">
				<h2>Counter</h2>
				<ButtonChange className="btn" />
			</Card>

			<Card github="https://www.davidenaccarati.com">
				<h2>Toggle Button</h2>
				<Toggle firstName="Davide" lastName="Naccarati" />
			</Card>

			<Card github="https://github.com/Banjer71/trainers">
				<h2>Trainers product card</h2>
				<a href='https://banjer71.github.io/trainers/' target='_blank' rel="noopener noreferrer">
				<img src={trainers} alt='trainers color' className='project-trainers'/>
				</a>
				<p>Selecting the colour all the available sizes for that shoes colour will be updated dynamically in the second select menu</p>
				
			</Card>
		</div>
	);
}

export default Main;
