import React, { useState } from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { Button, Container, Grid, Menu, Icon, Image } from 'semantic-ui-react';
import { Flag } from 'semantic-ui-react';
import img from '../img/logo.png';

//import Lang from './Lang'

//export default olanları import ederken süslü parantez kullanılmaz
export default function Navi({ setAuth, setCli }) {
  return (
    <nav className='NavbarItems'>
      <a className='navbar-logo' href='/'>
        {' '}
        <Image src={img} size='tiny' /> VETMED{' '}
      </a>

      <ul className='nav-menu'>
        <Link
          to='/login'
          className='nav-link'
          style={{ color: ' rgb(146, 186, 234)' }}
          onClick={() => setAuth(false)}
        >
          Veteriner Giriş
        </Link>

        <Link
          to='/client-Login'
          className='nav-link'
          style={{ color: ' rgb(146, 186, 234)' }}
          onClick={() => setCli(false)}
        >
          Müşteri Giriş
        </Link>

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
  );
}

{
  /*   
        const [isAuthenticated, setIsAuthenticated] = useState(true)
        //let history = useHistory()
    
        function handleSignOut() {
            setIsAuthenticated(false)  
        }
        function handleSignIn() {
            setIsAuthenticated(true)        
        }
    
        return (
            <Menu fixed="top">
                <Container className="main3">
                    <Menu.Item size='massive' style={{ color: 'black' }}  as={NavLink} to="/"
                         name='SGB.net'
                    />
                    <Menu.Menu position='right'>
                        <Lang />
                        <Grid>
                            <Grid.Column width={12}>
                                <Flag name='united kingdom' />
                                <Flag name='turkey' />
                            </Grid.Column>
                        </Grid>
                         <Menu.Item>
                            {isAuthenticated ? <Button onClick={handleSignOut} primary> Giriş Yap </Button> : <Button as={NavLink} to="/" onClick={handleSignIn} primary > Çıkış Yap </Button>}
                        </Menu.Item>
                        </Menu.Menu>
                        </Container>
                    </Menu> 
            )          
*/
}
