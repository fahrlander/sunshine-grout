import React from 'react';
import './Section.css';

const Section = ({ children, theme, id }) => {
  const styles = ['Section'];

  theme === 'dark' ? styles.push('Section-theme-dark') : null;

  return (
    <section id={id} className={styles.join(' ')}>
      <div className="Section-wrapper">{children}</div>
    </section>
  );
};

export default Section;
