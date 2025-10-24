
import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a5825', padding: '20px', textAlign: 'center', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} Hi-Grade Systems Ltd. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
