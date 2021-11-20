import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import '../../App.css'
import {AuthContext} from '../../contexts/AuthContext'

function NavBarMenu() {
    const {
        authState:{
            user:{username}
        },
        logoutUser
    }= useContext(AuthContext)

    const logout = () => logoutUser()

    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow '>
        <Navbar.Brand className='font-weight-bolder text-white'>
            <img
                src={learnItLogo}
                alt='learnItLogo'
                width='32'
                height='32'
                className='mr-2'
            />
            FTravel
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav' className='d-flex justify-content-between mr12'>
            <Nav className='mr-auto'>
                <Nav.Link
                    className='font-weight-bolder text-white'
                    to='/dashboard'
                    as={Link}
                >
                    Dashboard
                </Nav.Link>
                <Nav.Link
                    className='font-weight-bolder text-white'
                    to='/about'
                    as={Link}
                >
                    Book Travel
                </Nav.Link>
            </Nav>

            <Nav>
                <Nav.Link className='font-weight-bolder text-white' disabled>
                    Customer {username} 
                    
                </Nav.Link>
                <Button
                    variant='secondary'
                    className='font-weight-bolder text-white'
                    onClick={logout}
                >
                    <img
                        src={logoutIcon}
                        alt='logoutIcon'
                        width='32'
                        height='32'
                        className='mr-2'
                    />
                    Logout
                </Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        
    )
}


export default NavBarMenu
