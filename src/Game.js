import React, { Component } from 'react';
import './game.css';
import { DiRuby } from 'react-icons/di';
import { FaUserAstronaut } from 'react-icons/fa';


class Game extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.jump);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.jump);
  }

  jump = () => {
    const astronaut = document.querySelector('.FaUserAstronaut');
    if (astronaut) {
      astronaut.classList.add('jump');
    }
    setTimeout(() => {
      astronaut.classList.remove('jump');
    }, 500);
  };
loop = setInterval(()=>{
  const ruby = document.querySelector('.DiRuby')
  const computedStyle = window.getComputedStyle(ruby);
  const rubyPosition = parseInt(computedStyle.left);
  const astronaut = document.querySelector('.FaUserAstronaut');
  const astronautComputedStyle = window.getComputedStyle(astronaut);
  const astronautPosition = parseInt(astronautComputedStyle.bottom.replace('px',('')));

 
  if (rubyPosition <= 200 && astronautPosition < 40 ) {
    ruby.style.animation = 'none';
    ruby.style.left = `${rubyPosition}px`;
    astronaut.style.animation = 'none';
    astronaut.style.bottom = `${astronautPosition}px`;}  

},10)
 

  render() {
    return (
      <div className="game-board" >        
        <DiRuby className="DiRuby" />
        <FaUserAstronaut className="FaUserAstronaut" />       
        
      </div>
    );
  }
}

export default Game;
