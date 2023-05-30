import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../src/img/stepClass.jpg'; 
import { GiUnicorn } from "react-icons/gi";


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
          
            <h1>Tech recruiter,looking for the Future of Technological Talent!</h1>
            <h2>Discover our programme, supported by Lisbon City Council and Le Wagon Portugal, offers a unique opportunity to discover exceptional talents who have improved their skills in our intensive web development bootcamp. Don't miss your chance to find your team's next superstar.
               Explore our program now and unlock the potential of tomorrow's technology leaders!</h2>
          
        </div>
        <div className="magic"
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



