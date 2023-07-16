import './Contact.scss';
import AnimatedLetter from '../AnimatedLetters/Index';
import { useEffect, useRef, useState } from 'react';
import Loader from '../Loader/Loader';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] =useState('text-animate')
    const refForm = useRef()

    

 /*useEffect(() => {
       setTimeout (() => {
        return  setLetterClass('text-animate-hover')
        }, 3000 )
      }, [] );*/
      const sendEmail = (e) => {
        e.preventDefault()

        emailjs 
            .sendEmail (
                'email',
                "okikiadenakan3",
                refForm.current,
                "okikiadenekan3@gmail.com"
            )
        .then (
            () => {
                alert('Message successfully sent')
                window.location.reload(false)
            },
            () => {
                alert('Werey try again later.')
            }
        )
         }
    return (
        <>
    <div className='container contact-page'>
            <div className='tim-zone'>
                <h1>
                    <AnimatedLetter
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
               </h1>
               <p>
                I am interested in a freelance opportunity, especially ambitious or large 
                projects. However, if you have any other request or question
                dont hesitate to contact me using the below form either
               </p>
               <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input 
                        type='email'
                        name='email'
                        placeholder='Email.com'
                        required
                        />
                    </li>
                   <li className='subject'>
                   <input
                    type='text'
                    name='subject' 
                    placeholder='Subject'
                    required
                    />
                   </li>
                   <li className='message'>
                    <textarea
                    type='text'
                    placeholder='Message'
                    name='message'
                    required
                    >

                    </textarea>
                   </li>
                   <li>
                    <input type='submit' className='flat-button' value="SEND"/>
                   </li>
                </ul>
                </form>
                </div>
            </div>
          
            <div className='map-wrap'>
               
            </div>
        </div>
        <Loader />
        </>
    )
}
export default Contact;
/*position={44.96366, 19.61045}>
<MapContainer center={[44.96366, 19.61045] }zoom={13} >
<TitleLayer url="https://{3}.tile.openstreetmap.org/{z}/{x}/{y}/.png"/>
<Marker >
    <Popup>
        Okiki Lives here
    </Popup>
</Marker>
</MapContainer>
<div className='info-map'>
                Adenekan Okiki
                <br/>
                Nigeria,
                <br/>
                4, joy ogunbamwo str, adeba ibeju-lekki, lagos state.
                <span>okikiadenekan3@gmail.com</span>
            </div>*/