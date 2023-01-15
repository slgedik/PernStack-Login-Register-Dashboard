import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import image from '../img/Vetmed.png';
import { Button, Container, Grid, Menu, Icon, Image } from 'semantic-ui-react';
import '../App.css';
import img from '../img/logo.png';
const Login = ({ setAuth, setCli }) => {
  const [inputs, setInputs] = useState({
    mail: '',
    password_: '',
  });

  const { mail, password_ } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { mail, password_ };
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log('cevap');
      console.log(parseRes);

      if (parseRes === 'Password or Email is incorrect') {
        setAuth(false);
      } else {
        console.log('basarili');
        setAuth(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <body className='bodyClass'>
        <div className='loginClass'>
          <nav className='NavbarItems'>
            <a className='navbar-logo' href='/'>
              {' '}
              <Image src={img} size='tiny' /> VETMED{' '}
            </a>

            <ul className='nav-menu'>
              <a className='nav-link'>
                <Link
                  to='/login'
                  style={{ color: ' rgb(146, 186, 234)' }}
                  onClick={() => setAuth(false)}
                >
                  Veteriner Giriş
                </Link>
              </a>
              <a className='nav-link'>
                <Link
                  to='/client-Login'
                  style={{ color: ' rgb(146, 186, 234)' }}
                  onClick={() => setCli(false)}
                >
                  Müşteri giriş
                </Link>
              </a>
              <a className='nav-link'>|</a>

              <Link
                to='/register'
                className='nav-link'
                onClick={() => setAuth(false)}
              >
                Kayıt Ol
              </Link>
            </ul>
          </nav>
          <img src={image} alt='vet med logo' className='imgClass' />
          <Card
            key='Light'
            style={{ width: '500px', height: '450px' }}
            className='mb-2 CardClass'
          >
            <Card.Body>
              <Card.Title className='text-center my-5'> Giriş Yap </Card.Title>
              <Card.Text>
                <form onSubmit={onSubmitForm}>
                  <input
                    type='email'
                    name='mail'
                    placeholder='E-mail'
                    className='form-control my-3'
                    value={mail}
                    onChange={(e) => onChange(e)}
                  />
                  <input
                    type='password'
                    name='password_'
                    placeholder='Şifre'
                    className='form-control my-3'
                    value={password_}
                    onChange={(e) => onChange(e)}
                  />
                  <button className='btn btn-success btn-block'>
                    Giriş Yap
                  </button>
                </form>
                <hr />
                <Link to='/register'>Kayıt Ol</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </body>
    </>
  );
};

export default Login;
