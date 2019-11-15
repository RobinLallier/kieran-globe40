import React from 'react';

import { ReactComponent as Boat } from './assets/images/boat_icon.svg';
import './Navigation.css';



function Navigation(props) {

	//TODO : populate navigationPages with the active state
	const navigationPages = [
		{name: "Le Projet", link: "#project"},
		{name: "La Course", link: "#race"},
		{name: "L'Actu", link: "#news"},
		{name: "Le Bateau", link: "#boat"},
		{name: "L'Équipage", link: "#crew"},
		{name: "La Mission", link: "#mission"}
	];
	for (let page of navigationPages) {
		page.state = computeProgress(page.link);
	}

	function computeProgress(link) {
		let list = navigationPages.map(navElem => navElem.link); 
		if (list.indexOf(link) > list.indexOf(props.active)) return '';
		else if (list.indexOf(link) === list.indexOf(props.active)) return 'active';
		else return 'passed';
	}

	function renderNavLinks() {
		return navigationPages.map((navElem, index) => {
			return (
				<a className={`NavElement ${navElem.state}`} key={index} href={navElem.link}> 
					{renderIcon(navElem)}
					{navElem.name}
				</a>);
		})	
	}
	
	function renderIcon(navElem) {
		return (
			<React.Fragment>
				{navElem.state === 'active' ? <Boat /> : <i className={`fas fa-times`} ></i>}
			</React.Fragment>);
	}

	return (
    <nav className="Nav">
      {renderNavLinks()}
    </nav>
	);
}

export default Navigation;
