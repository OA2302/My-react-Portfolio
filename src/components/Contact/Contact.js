import './Contact.scss';
import AnimatedLetter from '../AnimatedLetters/Index';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const Contact = () => {
    const [letterClass, setLetterClass] =useState('text-animate')

  /* useEffect(() => {
        return setTimeout (() => {
          setLetterClass('text-animate-hover')
        }, 4000 )
      }, [] );*/
    return (
        <>
    <div className='container contact-page'>
            <div className='time-zone'>
                <h1>
                    <AnimatedLetter
                    strArray={['C','o','n','t','a','c','t','','m','e']}
                    idx={15}
                    />
               </h1>
            </div>
            
        </div>
        <Loader />
        </>
    )
}
export default Contact;