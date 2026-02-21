import React, { useState, useRef, useEffect } from 'react';
import './FadeInSection.css';

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Set up the observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // When the element enters the viewport, set it to visible
        if (entry.isIntersecting) {
          setVisible(true);
          // Stop observing once it's visible so it doesn't animate repeatedly
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15 // Triggers when 15% of the element is visible
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}