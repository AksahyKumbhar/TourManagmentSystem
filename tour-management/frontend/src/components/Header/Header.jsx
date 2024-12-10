import React, { useRef, useEffect, useContext } from 'react';

import { Button, Container, Row } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

import { AuthContext } from './../../context/AuthContext';

const Nav__links = [
  {
     path: '/home',
     display: 'Home'
  },
  {
     path: '/about',
     display: 'About'
  },
  {
     path: '/tours',
     display: 'Tours'
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null)
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className="header" ref={headerRef} style={{ backgroundColor: 'white' }} >
      <Container fluid>
        <Row className='d-flex align-items-center justify-content-between p-1 m-0'>
          <div className='logo col-md-3 col-lg-2'>
            <img src={logo} alt='' className='w-100' style={{ height: '80px' }} />
          </div>
          <div className='navigation col-md-6' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu d-flex align-items-center justify-content-md-start gap-md-5' style={{listStyle:'none'}}>
              {Nav__links.map((item, index) => (
                <li className='nav__item m-2' key={index}>
                  <NavLink
                    to={item.path}
                    className={navClass => navClass.isActive ? 'active__link' : ''}>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='nav__right col-md-3 d-flex align-items-center justify-content-end gap-md-4'>
            <div className='nav__btns d-flex align-items-center gap-md-4'>

              {/* {
                user ? <>
                  <h5 className='mb-0'>{user.username}</h5>
                  <Button className="btn btn-dark" onClick={logout}>
                    LOGOUT
                  </Button>
                </> 
                ) : ( 
                <>

                  <Button className='btn btn-light' style={{ fontSize: '16px', fontWeight: 'bold', color: 'dark', height: '40px', width: '150px' }}>
                    <Link to='/login' className='button-link text-decoration-none text-dark'>
                      Login
                    </Link>
                  </Button>
                  <Button
                    className='btn btn-warning '
                    style={{ fontSize: '16px', fontWeight: 'bold', height: '40px', width: '150px' }}
                  >
                    <Link to='/register' className='button-link text-decoration-none text-light'>
                      Register
                    </Link>
                  </Button>

                </>

             )} */}

{user? (
  <>
    <h5 className='mb-0'>{user.username}</h5>
    <Button className="btn btn-dark" onClick={logout}>
      LOGOUT
    </Button>
  </>
) : (
  <>
    <Button className='btn btn-light' style={{ fontSize: '16px', fontWeight: 'bold', color: 'dark', height: '40px', width: '150px' }}>
      <Link to='/login' className='button-link text-decoration-none text-dark'>
        Login
      </Link>
    </Button>
    <Button
      className='btn btn-warning '
      style={{ fontSize: '16px', fontWeight: 'bold', height: '40px', width: '150px' }}
    >
      <Link to='/register' className='button-link text-decoration-none text-light'>
        Register
      </Link>
    </Button>


  </>
)}



            </div>
            <span className='mobile__menu' onClick={toggleMenu}>
              <i className="ri-menu-2-fill" style={{ height: '100px', width: '100px', fontSize: '20px' }}></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
