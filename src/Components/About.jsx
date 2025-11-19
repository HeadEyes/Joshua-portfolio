import { React, useState, useRef, Children } from 'react'
import skills from '../Data/skills'
import Paragraph from './Word';
import { Fragment } from 'react';
import Magnet from './Magnet';
import Section from './Section';

const About = () => {

  return (
    <Section className='' id='about'>
        <h2 className='text-accent self-start text-2xl mb-8 tracking-widest font-medium'>About me</h2>
        <Paragraph />
    </Section>
  )
}

export default About