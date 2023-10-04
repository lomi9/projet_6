import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Header from '../../components/Header/Header';
import logements from '../../logements.json';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";


export default function LogementPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
        navigate("/error");
    }
}, [logement, navigate]);


  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={starActive} alt="étoile rose" className='star'/>);
      } else {
        stars.push(<img key={i} src={starInactive} alt="étoile grise" className='star' />);
      }
    }
    return stars;
  };

  return (
    <>
      <Header />
      <Slideshow logement={logement} />
      <section className='logement__header'>
        <div className='logement__main-infos'>
            <h1 className='logement__title'>{logement?.title}</h1>
            <h2 className='logement__location'>{logement?.location}</h2>
        </div>
        <div className='logement__host-infos-desktop'>
        <div className='host__name'>
    <span className='host__name-firstname'>{logement?.host?.name.split(' ')[0]}</span>
    <span className='host__name-lastname'>{logement?.host?.name.split(' ')[1]}</span>
  </div>
            <img className='host__photo' src={logement?.host?.picture} alt={`${logement?.host?.name} `}/>

        </div>
      </section>

      <section className='logement__tags-stars'>
      <div className="tags">
  {logement?.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ))}
</div>
<div className='stars'>
{renderStars(logement?.rating)}
</div>
<div className='logement__host-infos-mobile'>
        <div className='host__name'>
    <span className='host__name-firstname'>{logement?.host?.name.split(' ')[0]}</span>
    <span className='host__name-lastname'>{logement?.host?.name.split(' ')[1]}</span>
  </div>
            <img className='host__photo' src={logement?.host?.picture} alt={`${logement?.host?.name} `}/>

        </div>

        </section>
        <section className='logement__description-equipment'>
        <Collapse 
      title="Description"
      content={logement?.description}
      />
<Collapse 
  title="Équipements"
  content={
    <ul className="equipments-list">
      {logement?.equipments.map((equipment, index) => (
        <li key={index} className="equipment-item">
          {equipment}
        </li>
      ))}
    </ul>
  }
/>
        </section>
        <Footer/>
    </>
  );
}
