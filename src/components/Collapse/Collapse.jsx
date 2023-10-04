import React, { useState } from 'react';
import openArrowIcon from '../../assets/arrow_open.png';

export default function Collapse({ title, content}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse__header">
        <div className="collapse__title">{title}</div>
        <img
          onClick={toggleCollapse}
          src={openArrowIcon}
          alt={isCollapsed ? 'Open' : 'Close'}
          className={`collapse__icon ${isCollapsed ? '' : 'rotated'}`}
        />
      </div>
      <div 
        className={`collapse__content ${isCollapsed ? 'collapsed' : 'expanded'}`}
      >
        {content}
      </div>
    </div>
  );
}
