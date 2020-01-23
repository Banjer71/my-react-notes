import React from 'react';
import Card from './Card';
import ButtonChange from './Button_change';
import Toggle from './Toggle';
import trainers from './images/trainers.jpg';
import lyrics_bites_screen from './images/lyrics_bites.JPG';

function Main() {
	return (
		<div className="main">
			<Card github="https://github.com/Banjer71/lyrics_bites">
				<h2>Lyrics Bites</h2>
				<a href="https://banjer71.github.io/lyrics_bites/" target="_blank" rel="noopener noreferrer">
					<img src={lyrics_bites_screen} alt="lyrics bites" className="project-trainers" />
				</a>
				<p>Learn your favourite song one bite at a time</p>
				<p>
					The idea is to query an API to retrieve the song lyrics and than give the possibility to the user to
					chunk the song Then set it to receive one verse everyday in his email address.
				</p>
			</Card>
			<Card github="https://github.com/Banjer71/trainers">
				<h2>Trainers product card</h2>
				<a href="https://banjer71.github.io/trainers/" target="_blank" rel="noopener noreferrer">
					<img src={trainers} alt="trainers color" className="project-trainers" />
				</a>
				<p>
					Selecting the colour all the available sizes for that shoes colour will be updated dynamically in
					the second select menu
				</p>
			</Card>
			<Card github="https://www.davidenaccarati.com">
				<h2>Toggle Button</h2>
				<Toggle firstName="Davide" lastName="Naccarati" />
			</Card>
			<Card github="https://github.com/Banjer71/my-react-notes/blob/master/src/components/Button_change.js">
				<h2>Counter</h2>
				<ButtonChange className="btn" />
			</Card>
		</div>
	);
}

export default Main;
