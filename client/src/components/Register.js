import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../img/logo.png';
import { Button, Container, Grid, Menu, Icon, Image } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
const Register = ({ setAuth, setCli }) => {
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    branch: '',
    address_: '',
    phone_: '',
    mail: '',
    password_: '',
  });
  let { name, surname, branch, address_, phone_, mail, password_ } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, surname, branch, address_, phone_, mail, password_ };
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      setAuth(true);
      //localStorage.setItem("")
      //console.log(parseRes);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
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
            <a className='nav-link' href='/'>
              Anasayfa
            </a>
          </ul>
        </nav>
        <Card
          key='Light'
          style={{ width: '500px', height: '600px' }}
          className='mb-2 registerCard'
        >
          <Card.Body>
            <Card.Title className='text-center my-5'> Kayıt Ol </Card.Title>
            <Card.Text>
              <form onSubmit={onSubmitForm}>
                <input
                  type='text'
                  name='name'
                  placeholder='İsim'
                  className='form-control my-3'
                  value={name}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='text'
                  name='surname'
                  placeholder='Soyisim'
                  className='form-control my-3'
                  value={surname}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='text'
                  name='branch'
                  placeholder='Uzmanlık Alanı'
                  className='form-control my-3'
                  value={branch}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='text'
                  name='address_'
                  placeholder='İş Yeri Adresi'
                  className='form-control my-3'
                  value={address_}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='tel'
                  name='phone_'
                  placeholder='Telefon'
                  className='form-control my-3'
                  value={phone_}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='email'
                  name='mail'
                  placeholder='e-mail'
                  className='form-control my-3'
                  value={mail}
                  onChange={(e) => onChange(e)}
                ></input>
                <input
                  type='password'
                  name='password_'
                  placeholder='Şifre'
                  className='form-control my-3'
                  value={password_}
                  onChange={(e) => onChange(e)}
                ></input>

                <button className='btn btn-success btn-block'>Kaydet</button>
              </form>

              <hr />
              <Link to='/login'>Giriş Yap</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </body>
  );
};

export default Register;
