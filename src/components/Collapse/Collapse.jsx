import React, { useState } from 'react';
import openArrowIcon from '../../assets/arrow_open.png';

export default function Collapse({ title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__header">
        <div className="collapse__title">{title}</div>
        <img
          onClick={toggleCollapse}
          src={openArrowIcon}
          alt={isOpen ? 'Open' : 'Close'}
          className={`collapse__icon ${isOpen ? 'rotated' : ''}`}
        />
      </div>
      <div 
        className={`collapse__content ${isOpen ? 'expanded' : 'collapsed'}`}
      >
        {content}
      </div>
    </div>
  );
}
