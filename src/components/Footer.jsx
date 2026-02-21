import React from 'react';
import './Footer.css';

export default function Footer({ email }) {
  return (
    <footer id="contact" className="footer">
      <p>Let's connect! Drop me an email at <br className="mobile-break" />
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </footer>
  );
}