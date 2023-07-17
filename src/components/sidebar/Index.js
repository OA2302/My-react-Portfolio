import React from 'react';
import './Index.scss';
import { Form, Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope} from  '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faTwitter, faRProject} from '@fortawesome/free-brands-svg-icons'
import me from '../../assets/images/me.jpg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={me} alt='logo' />
        </Link>
        <h2><small>Adenekan Okikioluwa</small></h2>
        <nav>

       <div className='ul'>
       <li>
        <NavLink exact="true" activeclassname="active" to="/">
                    <a>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </a>
            </NavLink>
            
            <NavLink exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
                    <a> <FontAwesomeIcon  icon={faUser} color='#4d4d4e'/></a>
            </NavLink>
            
            <NavLink exact="true"
                activeclassname="active"
                className="contact-link" to="/contact"
            >
                    <a>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </a>
            </NavLink>
            <NavLink exact="true"
                activeclassname="active"
                className="contact-link" to="/project"
            >
                    <a>
                    <FontAwesomeIcon icon={faRProject} color='#4d4d4e' />
                    </a>
            </NavLink></li>
       </div>
            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/okikioluwa-adenekan-1aa6a2259/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/OA2302'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li><li>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://twitter.com/Adenekanokiki2'>
                        <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Sidebar;