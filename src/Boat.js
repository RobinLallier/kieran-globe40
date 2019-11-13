import React from 'react';

import './Boat.css';
import boat from './assets/images/boat.png';



function Boat(props) {

	return (
	<section id="boat">
		<h1>Le Bateau</h1>
		<section>
			<img src={boat} alt="class40"/>
			<ol>
				<li>
					<strong>La voilure</strong>
					<p>Avec plus de 40m2 de voilure, le class40 est capable de se propulser jusqu'à 10000 noeuds nautiques en quelques minutes.</p>
				</li>
				<li>
					<strong>Le mat</strong>
					<p>Assemblé en fibres de carbone, le mat permet de soutenir les conditions météorologiques des mers les plus dangereuses.</p>
				</li>
				<li>
					<strong>La coque</strong>
					<p>La longueur de 40 pieds, à l'origine du nom du voilier, en fait le compromis idéal entre performance et confort, indispensable pour des traversées si longues.</p>
				</li>
				<li>
					<strong>L'équipement</strong>
					<p>Indispensable pour une telle course, le class40 doit être entièrement équipé à hauteur de 80 000€.</p>
				</li>
				</ol>
		</section>
	</section>
	);
}

export default Boat;