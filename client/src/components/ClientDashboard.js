// 050593  sena@gmail.com
//940397 selin@gmail.com

import React, { Fragment, useState, useEffect } from 'react';
import img from '../img/logo.png';
import { Image } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';

const ClientDashboard = ({ setCli }) => {
  const [name, setName] = useState('');
  const [vetName, setVetName] = useState('');
  const [vetSurame, setVetSurname] = useState('');

  console.log('client dashboard');
  async function getName() {
    console.log('veri çekiliyo');
    await fetch('http://localhost:5000/dashboard/cli', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data);
      });
  }

  async function getVetName() {
    console.log('veri çekiliyo');
    await fetch('http://localhost:5000/dashboard/cli-vet', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVetName(data.vetname);
        setVetSurname(data.vetsurname);
      });
  }

  console.log('deneme');
  useEffect(() => {
    getName();
  });

  useEffect(() => {
    getVetName();
  });

  return (
    <body className='bodyClass'>
      <nav className='NavbarItems'>
        <a className='navbar-logo' href='/'>
          {' '}
          <Image src={img} size='tiny' /> VETMED{' '}
        </a>

        <ul className='nav-dashboard'>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Veterinerim
          </a>

          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Hayvanlarım
          </a>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Randevular
          </a>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Yakındaki Veterinerler
          </a>

          <a className='nav-link'>|</a>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Profil
          </a>

          <Link to='/home' className='nav-link' onClick={() => setCli(false)}>
            Çıkış Yap
          </Link>
        </ul>
      </nav>

      <h1 style={{ marginLeft: '42%' }}>Hoşgeldin {name} </h1>
      <h2 style={{ marginLeft: '40.5%' }}>
        Veterineriniz: {vetName} {vetSurame}{' '}
      </h2>
    </body>
  );
};

export default ClientDashboard;
