import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Banner_about from '../../assets/mountains_banner.png';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';



export default function About() {

    const bannerTitle = '';

    return (
      <>
      <Header/>
      <Banner backgroundImageUrl={Banner_about} titleDesktop={bannerTitle} titleMobile={bannerTitle}/>
      <div className='collapse__div'>
      <Collapse 
      title="Fiabilité"
      content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Collapse 
      title="Respect"
      content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une explusion de notre plateforme."
      />
      <Collapse 
      title="Service"
      content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Collapse 
      title="Sécurité"
      content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      </div>
      <Footer/>
      </>
    );
  }