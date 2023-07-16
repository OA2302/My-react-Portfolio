import './About.scss';
import AnimatedLetter from '../AnimatedLetters/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJs, faReact, faUikit } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const About = () => {
    const [letterClass, setLetterClass] =useState('text-animate')

  /* useEffect(() => {
        return setTimeout (() => {
          setLetterClass('text-animate-hover')
        }, 4000 )
      }, [] );*/
    return (
        <>
    <div className='container about-page'>
            <div className='time-zone'>
                <h1>
                    <AnimatedLetter
                    strArray={['A','b','o','u','t',' ','','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious Front-end Developer looking for role in an established IT company
                    with the opportunity to work with the latest technologies on challenging and diversed projects. 
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on 
                    improving my chops one designing problem at a time.
                </p>
                <p>
                    if I need to define myself in one sentence that would be an hard-working,
                     deligent person, sport fanatic and tech-obsessed!!!
                </p>
            </div>
            <div className='state-cube-cont'>
                <div className='cubespinner'>
                <div className='face1'>
                         <FontAwesomeIcon icon={faReact} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                         <FontAwesomeIcon icon={faHtml5} color='#F06921'/>
                    </div>
                    <div className='face3'>
                         <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                         <FontAwesomeIcon icon={faJs} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                         <FontAwesomeIcon icon={faUikit} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                         <FontAwesomeIcon icon={faGithub} color='#EC4'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader />
        </>
    )
}
export default About;