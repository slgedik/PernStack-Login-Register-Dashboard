import React, { Fragment, useState, useEffect } from 'react';
import img from '../img/logo.png';
import { Image } from 'semantic-ui-react';
import MusteriKayit from './MusteriKayit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';
const Dashboard = ({ setAuth, newReg }) => {
  const [name, setName] = useState('');
  console.log('dashboard');
  async function getName() {
    console.log('veri çekiliyo');
    await fetch('http://localhost:5000/dashboard/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data);
      });
  }

  useEffect(() => {
    getName();
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
            Hastalar
          </a>

          <Link
            to='/musteriKayit'
            className='nav-link'
            onClick={() => newReg(true)}
          >
            Müşteri Kayıt
          </Link>

          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Randevular
          </a>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Sözlük
          </a>
          <a className='nav-link'>|</a>
          <a className='nav-link' href='/'>
            {/* <Icon disabled name='users' /> */}
            Profil
          </a>

          <Link to='/home' className='nav-link' onClick={() => setAuth(false)}>
            Çıkış Yap
          </Link>
        </ul>
      </nav>

      <h1 style={{ marginLeft: '42%' }}>Hoşgeldin {name}</h1>
    </body>
  );
};

export default Dashboard;
