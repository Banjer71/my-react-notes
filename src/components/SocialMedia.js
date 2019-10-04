import React from 'react';

function SocialMedia(props) {
	return (
		<ul className="media">
			<li>
				<a href={props.github} target="_alt" rel="noopener noreferrer">
					<i className="fab fa-github-square" />
				</a>
			</li>
		</ul>
	);
}

export default SocialMedia;
