import React from 'react';
import Logo from '../../assets/images/OIP.jpeg';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="conatainer home-page">
        <div className="text-zone">
            <h1>Hi <br/> I'm <br/>
            <img src={Logo} alt='developer'/>kikiOluwa Adenekan
            <br/>
            Front-End Developer
            </h1>
            <h2>Front-End Developer / UI/UX Designer  </h2>
                <Link className='flat-bottom'>CONTACT ME</Link>
        </div>
    </div>

  )
}

export default Home;