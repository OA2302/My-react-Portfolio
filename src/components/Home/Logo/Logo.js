import React, { useRef } from 'react'
import LogoS from '../../../assets/images/OIP.jpeg'
import './Logo.scss'

const Logos = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
  return (
    <div className='logo-container' ref={bgRef}>
        <img className='solid-logo' src={LogoS} alt='S'/>
        <svg
        width='559pt'
        height='897pt'
        version='1.0'
        viewBox='0 0 559 897'
        xmlns='http://www./w3.orgg/2000/svg'
        >
            <g
            className='svg-container'
            transform='translate(0 457) scale=(.1 -.1)'
            fill='none'
            >
            <path
            d='n2930 4560c-344-16-623-85-915-228-231-144-406-241-600-436-61-60-145-'
            />
            </g>
        </svg>
    </div>
  )
}

export default Logos