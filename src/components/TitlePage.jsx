import React from 'react'
import Section from './Section'


import { useRef } from 'react'

function Hero() {
  const parallaxRef = useRef(null)

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id={'hero'}
    >
    
          </Section>
  )
}

export default Hero
