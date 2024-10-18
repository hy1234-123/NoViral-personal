import React, { useState, useEffect, useRef } from 'react';

const Section = ({ id, title, content }) => (
  <div id={id} className="section">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const SidebarItem = ({ id, title, active, onClick }) => (
  <div
    className={`sidebar-item ${active ? 'active' : ''}`}
    onClick={() => onClick(id)}
  >
    {title}
  </div>
);

const ScrollSpyApp = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const sectionRefs = useRef({});

  const sections = [
    { id: 'section1', title: 'Section 1', content: 'Content for section 1' },
    { id: 'section2', title: 'Section 2', content: 'Content for section 2' },
    { id: 'section3', title: 'Section 3', content: 'Content for section 3' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleSidebarItemClick = (sectionId) => {
    sectionRefs.current[sectionId].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="sidebar">
        {sections.map((section) => (
          <SidebarItem
            key={section.id}
            id={section.id}
            title={section.title}
            active={activeSection === section.id}
            onClick={handleSidebarItemClick}
          />
        ))}
      </div>
      <div className="content">
        {sections.map((section) => (
          <div key={section.id} ref={(el) => (sectionRefs.current[section.id] = el)}>
            <Section {...section} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpyApp;