import React from 'react';

const Card = (props) => {
	return (
		<div className="card">
			<div className="card-section-one">{props.children}</div>
			<div className="card-section-two">
				<p className="source-code">The source code can be find here:</p>
				<ul className="media">
					<li>
						<a href={props.github} target="_alt" rel="noopener noreferrer">
							<i className="fab fa-github-square" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Card;
