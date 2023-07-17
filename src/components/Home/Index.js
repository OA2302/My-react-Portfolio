import {useEffect, useState} from 'react';
import Logo from '../../assets/images/LOGO.jpeg';
import { Link } from 'react-router-dom';
import './Home.scss';
import AnimatedLetter from '../AnimatedLetters/Index';
import Logos from './Logo/Logo';

const Home = () => {
  const [letterClass, setLetterClass] =useState('text-animate')
  const nameArray = ['k','i','k','i'];
  const jobArray = ['F','r','o','n','t','-','E','n','d','','D','e','v','e','l','o','p','e','r',];
  const hi = ['H', 'i', ','];
  const im = ["I","'m"]
  /*useEffect(() => {
    return setTimeout (() => {
      setLetterClass('text-animate-hover')
    }, 4000 )
  }, [] );*/
  return (
    <>
    <div className="conatainer home-page">
        <div className="text-zone">
            <h1> 
            <AnimatedLetter letterClass={letterClass}
             strArray={hi}
             idx={12}
             />
              <br/>
              <AnimatedLetter letterClass={letterClass}
             strArray={im}
             idx={16}
             />
               <br/>
            <img src={Logo} alt='developer'/>
            <AnimatedLetter letterClass={letterClass}
             strArray={nameArray}
             idx={16}
             />
            <br/>
            <AnimatedLetter letterClass={letterClass}
             strArray={jobArray}
             idx={22} />
            </h1>
            <h2>Front-End Developer / UI/UX Designer  </h2>
                <Link className='flat-bottom'>CONTACT ME</Link>
        </div>
        <Logos />
    </div>
    </>

  )
}

export default Home;