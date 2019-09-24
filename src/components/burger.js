import React from 'react';
import '../Stylesheets/burger.scss'

const Burger = (props) => {

  return (
    <div className="burger" onClick={props.toggleNav}>
      <div className="part1"></div>
      <div className="part2"></div>
      <div className="part3"></div>
    </div>
  )
}

export default Burger;
