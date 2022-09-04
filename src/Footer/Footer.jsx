import React from 'react';
import '../App.css';

const Footer = () => {
    return (
    <>
        <h3 className='Footer-head'>Useful Links Below</h3>
        <ul className='Footer-list'>
        <li className='Footer-list-item'>
        <a
          className="Vet-link"
          href="https://ealingvets.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >Vet</a>
        </li>
      
        <li className='Footer-list-item'>
        <a
          className="FirstAid-link"
          href="https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/all-pets/first-aid-for-pets"
          target="_blank"
          rel="noopener noreferrer"
        >First Aid</a>
        </li>

        <li className='Footer-list-item'>
        <a
          className="Parks-link"
          href="https://goo.gl/maps/nHY6R9iJb6QMmndw5"
          target="_blank"
          rel="noopener noreferrer"
        >Nearby Parks</a>
        </li>
        </ul>

    </>
    );
}
export default Footer; 