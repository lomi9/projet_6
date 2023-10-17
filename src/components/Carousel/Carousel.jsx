import React, { useState } from 'react';
import previousIcon from '../../assets/arrow_previous.png';
import nextIcon from '../../assets/arrow_next.png';

export default function Carousel({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    if (currentIndex === logement.pictures.length - 1) {
      setCurrentIndex(0); // Si on est sur la dernière image + click suivant, on reviens à la première image
    } else {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const showPreviousImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(logement.pictures.length - 1);// Si on est sur la première image + click précédant, on va à la dernière image
    } else {
      setCurrentIndex(currentIndex - 1); 
    }
  };


   if (!logement) {
    return null;
    //<div>Ce logement n'existe pas</div>
  }

  

  return (
    <div className="carousel">
        <div className='carousel__div'>

            <img
            src={logement.pictures[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="carousel__div-picture"
            />
        
            {logement.pictures.length > 1 && (
            <div className='carousel__div-icon'>
                <img
                src={previousIcon}
                alt="précédent"
                onClick={showPreviousImage}
                className="carousel__icon"
                />

            <img
              src={nextIcon}
              alt="suivant"
              onClick={showNextImage}
              className="carousel__icon"
            />
          </div>
        )}
        
        <div className="carousel__div-counter">
          {currentIndex + 1}/{logement.pictures.length}
        </div>
        </div>
      </div>
  );
}
