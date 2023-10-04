import React, { useState } from 'react';
import previousIcon from '../../assets/arrow_previous.png';
import nextIcon from '../../assets/arrow_next.png';

export default function Slideshow({ logement }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    if (currentImageIndex === logement.pictures.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(logement.pictures.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!logement) {
    return <div>Ce logement n'existe pas</div>;
  }

  return (
    <div className="slideshow">
        <div className='image__div'>

      <img
          src={logement.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="slideshow__picture"
        />
        
        {logement.pictures.length > 1 && (
          <div className='icons__div'>
            <img
              src={previousIcon}
              alt="Image précédente"
              onClick={goToPreviousImage}
              className="slideshow__icon slideshow__icon--left"
            />

            <img
              src={nextIcon}
              alt="Image suivante"
              onClick={goToNextImage}
              className="slideshow__icon slideshow__icon--right"
            />
          </div>
        )}
        
        <div className="slideshow__counter">
          {currentImageIndex + 1}/{logement.pictures.length}
        </div>
        </div>
      </div>
  );
}
