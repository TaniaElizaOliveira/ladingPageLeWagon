import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../src/img/stepClass.jpg'; // Substitua 'nome-da-imagem.jpg' pelo nome do arquivo da sua imagem e sua extensão


const Welcome = () => {
  const [magicPosition, setMagicPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const magic = document.querySelector('.magic');
    const magicWHalf = magic.offsetWidth / 2;

    const handleMouseMove = (e) => {
      setMagicPosition({
        left: e.pageX - magicWHalf,
        top: e.pageY - magicWHalf,
      });
    };

    const handleMouseOut = () => {
      // magic.style.left = 'calc(50% - 10rem)';
      // magic.style.top = 'calc(50% - 10rem)';
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <Link to="/home">
      <div className="container-magic">
        <div className="neon-border">
          <div className="card-content">
            <h2>Tech recruiter looking</h2>
            <h4>For your new unicorn?...</h4>
          </div>
        </div>
        <div
          className="magic"
          style={{
            backgroundImage: `url(${image})`,
            left: `${magicPosition.left}px`,
            top: `${magicPosition.top}px`,
          }}
        ></div>
      </div>
    </Link>
  );
};

export default Welcome;



