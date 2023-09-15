import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
      Hello! I'm 
        {' '}
        <a
          href=""
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Karimullah
        </a>
        {' '}
       , a dedicated and enthusiastic 3rd-year BSCS student at Lahore Garrison University in Lahore, Pakistan. My journey into the world of coding began back in 8th grade when I first dabbled in modifying APKs. Little did I know that this initial curiosity would ignite a passion that continues to burn brightly to this day.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
      Over the years, I've embarked on a relentless quest for knowledge and growth in the field of software development. Today, I proudly consider myself an intermediate-level Android and web developer. I've honed my skills, learned from challenges, and embraced the ever-evolving technologies that shape our digital landscape.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
      My commitment to excellence drives me to create clean, efficient, and user-friendly applications that solve real-world problems. With each project, I strive not only to meet the technical requirements but also to exceed user expectations.
        {' '}
        <a
          href="https://github.com/griffin-k"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          {/* 2500+ contributions on GitHub */}
        </a>
        {' '}
      
          </motion.p>

          <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
      As I continue on this exciting journey, I look forward to taking on new challenges, collaborating with fellow developers, and contributing to the ever-expanding world of technology. 
      {' '}
     </motion.p>

      
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
