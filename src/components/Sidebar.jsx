import React, { useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = ({ thumbnail, onProductSelect, selectedProductId }) => {
  const sidebarRef = useRef(null);
  const selectedItemRef = useRef(null);

  useEffect(() => {
    if (selectedItemRef.current && sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const itemRect = selectedItemRef.current.getBoundingClientRect();

      if (itemRect.top < sidebarRect.top || itemRect.bottom > sidebarRect.bottom) {
        selectedItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedProductId]);

  return (
    <div className='sidebar' ref={sidebarRef}>
      <h2>제품 썸네일</h2>
      <div className='thumbnail-container'>
        {thumbnail && thumbnail.length > 0 ? (
          thumbnail.map((item) => (
            <div 
              key={item.id} 
              className={`thumbnail-item ${selectedProductId === item.id ? 'selected' : ''}`}
              onClick={() => onProductSelect(item.id)}
              ref={selectedProductId === item.id ? selectedItemRef : null}
            >
              <img 
                src={item.thumbnail} 
                alt={`Product ${item.id}`} 
                className={selectedProductId === item.id ? 'focused' : ''}
              />
            </div>
          ))
        ) : (
          <p>No thumbnails available</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;