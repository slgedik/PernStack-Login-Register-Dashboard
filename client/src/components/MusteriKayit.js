import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import img from '../img/logo.png';
import { Image } from 'semantic-ui-react';

const MusteriKayit = ({ newReg }) => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    mName: '',
    mSurname: '',
    mPhone_: '',
    m_mail: '',
    mAddress_: '',
    numOfPet_: 0,
  });
  let { mName, mSurname, mPhone_, m_mail, mAddress_, numOfPet_ } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  async function getPassword() {
    console.log('veri çekiliyo');
    await fetch('http://localhost:5000/register/', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPassword(data);
      });
  }
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { mName, mSurname, mPhone_, m_mail, mAddress_, numOfPet_ };
      const response = await fetch('http://localhost:5000/auth/musteriKayit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      //setAuth(true);
      //localStorage.setItem("")
      console.log(`show ${show}`);
      console.log(`sifre ${parseRes}`);

      setPassword(parseRes);
    } catch (err) {
      console.log(err.message);
    }
  };
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

          <Link to='/home' className='nav-link'>
            Çıkış Yap
          </Link>
        </ul>
      </nav>
      <Card
        key='Light'
        style={{ width: '800px', height: '650px' }}
        className='mb-2 musteriCard'
      >
        <Card.Body>
          <Card.Title className='text-center my-5'> Müşteri Kayıt </Card.Title>
          <Card.Text>
            <form onSubmit={onSubmitForm}>
              <input
                type='text'
                name='mName'
                placeholder='İsim'
                className='form-control my-3'
                value={mName}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                type='text'
                name='mSurname'
                placeholder='Soyisim'
                className='form-control my-3'
                value={mSurname}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                type='tel'
                name='mPhone_'
                placeholder='Telefon'
                className='form-control my-3'
                value={mPhone_}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                type='email'
                name='m_mail'
                placeholder='email'
                className='form-control my-3'
                value={m_mail}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                type='text'
                name='mAddress_'
                placeholder='Adres'
                className='form-control my-3'
                value={mAddress_}
                onChange={(e) => onChange(e)}
              ></input>
              <input
                type='text'
                name='numOfPet_'
                placeholder='Hayvan Sayisi'
                className='form-control my-3'
                value={numOfPet_}
                onChange={(e) => onChange(e)}
              ></input>

              <button
                className='btn btn-success btn-block'
                onClick={() => setShow(true)}
              >
                Devam Et
              </button>
            </form>
            {show && (
              <Alert show={show} variant='success'>
                <Alert.Heading>Müşteri Kaydı Yapıldı</Alert.Heading>
                <p>Şifre : {password}</p>
                <hr />
                <div className='d-flex justify-content-end'>
                  <button
                    onClick={() => setShow(false)}
                    variant='outline-success'
                  >
                    Kapat
                  </button>
                </div>
              </Alert>
            )}
            <hr /> <br />
            <button
              class='btn btn-secondary'
              onClick={() => {
                newReg(false);
              }}
              style={{ marginLeft: '90%' }}
            >
              Geri
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </body>
  );
};

export default MusteriKayit;
