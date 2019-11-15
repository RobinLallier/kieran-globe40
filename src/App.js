import React, { Component }from 'react';

import './App.css';
import kieran from './assets/images/kieran.png';
import logoMerConcept from './assets/images/mer_concept.png';
import logoGabart from './assets/images/logo_francois_gabart.png';
import Navigation from './Navigation.js';
import Boat from './Boat.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: '#project'
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation active={this.state.activeSection} />
        <main>
        
          <section id="project">
            <h1>Père et Fils autour du monde</h1>
            <article>
              
              <p>
              <img src={kieran} alt="Kieran"/>Un officier de marine marchande, un sportif de haut niveau en kitefoil, une aventure extraordinaire : <strong>Le tour du monde.</strong> C’est le défi que se sont donné Kieran et Jean-Jacques Le Borgne.<br />
              <img src={kieran} alt="JJ" className="secondPic"/>
              Père et fils très proches, ils sont toujours en recherche d’aventures et sensations fortes. C’est dans la voile et le kitesurf qu’ils ont trouvé le plaisir de la vitesse et de la technique.<br />
              Naviguant ensemble depuis plusieurs années, ils ont créé une complicité dans le sport…
              <br />
              Embarquez dans l’aventure d’un tour du monde et participez à l’écriture d’une histoire hors du commun !
              </p>
            </article>
          </section>

          <section id="race">
            <h1>La Course</h1>
            <q>Quel passionné d’océans n’a rêvé un jour de descendre l’Atlantique et ses îles du Nord au Sud, de traverser l’océan Indien, de rejoindre les rivages polynésiens, de passer le cap Horn et Noël en Terre de Feu, de connaître les ivresses brésiliennes du Nordeste et pour finir les douceurs de l’hiver aux Antilles ?</q>
            <section>
              <article>
                <p>
                  La nouvelle course de la classe 40 : un tour du monde en double pour 150 jours de mer. <br />
                  Plus qu’un tour du monde sportif, il s’agit là d’une aventure, d’un voyage au long cours sur un parcours qui s’écarte des routes traditionnelles avec des étapes inédites. <br />
                  Pour cette première édition, l’enthousiasme est déjà au rendez-vous et il est certain que les retombées médiatiques vont être élevées. A l’image de l’OCEAN RACE, un tour du monde en étapes permet du suspens et un fort rapprochement avec le public.
                </p>
              </article>
              <aside>
                <div id="div30000">
                  <h2>30.000</h2>
                  <p>Milles de course</p>
                </div>
                <div id="div8">
                  <h2>8</h2>
                  <p>Escales</p>
                </div>
                <div id="div150">
                  <h2>150</h2>
                  <p>Jours en mer</p>
                </div>
              </aside>
            </section>
          </section>

          {//Actualités
          }

          <Boat />

          <section id="crew">
            <h1>L'Équipage</h1>
            <article>
              <figure>
                <img src={logoMerConcept} alt='logo Mer Concept'/>
                <img src={logoGabart} alt='logo Mer Concept' style={{filter: 'invert(100%)'}}/>
              </figure>
              <p>L’écurie de course au large de François Gabart, Mer Concept, nous soutient pour la construction et la mise au point d’un Class40 innovant :
                <br/>- Une empreinte carbone réduite : utilisation de fibres naturelles et de résine biosourcée
                <br/>- Un bateau laboratoire pour de futures innovations : moteur hybride, voiles solaires, . . .
                <br/>- Un Class40 performant spécialement étudié pour le tour du monde en double
                <br/>- Une équipe expérimentée et spécialisée dans la construction des voiliers les plus rapide du monde
              </p>
            </article>
          </section>
        </main>
      </div>
    );
  }
  
}

export default App;
