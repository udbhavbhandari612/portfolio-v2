import React from 'react'
import cover1 from '../../Assets/cover1.png'
import { motion } from 'framer-motion'
import relaunch from '../../Assets/relaunch.svg'
import './landing.scss'

function Landing({ timingOffset }) {
    return (
        <motion.div className='main-container h-100 d-flex justify-content-sm-center mt-sm-5 mt-3' >
            <motion.div className='mx-auto my-auto rounded shadow row position-relative'
                initial={{ opacity: 0 }}
                transition={{ duration: timingOffset + 0.2 }}
                animate={{ opacity: 1 }}>
                <div className='col-sm-3 col-12 justify-content-center position-relative'>
                    <motion.img src={cover1} className='cover1 rounded positiom-relative'
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8, delay: timingOffset + 0.3 }}
                        animate={{ opacity: 1 }} />
                    <motion.img src={cover1} className='cover1-bg'
                        initial={{ filter: 'grayscale(3) blur(0) opacity(0)', zIndex: -1 }}
                        animate={{ filter: 'grayscale(3) blur(3px) opacity(0.4)', zIndex: 0 }}
                        transition={{ duration: 0.5, delay: timingOffset + 2 }} />
                </div>
                <div className='col-sm-9 col-12 position-relative mt-4 mt-sm-0'>
                    <motion.div className='p-2 w-75 position-relative'
                        initial={{ right: -50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: timingOffset + 0.8 }}
                        animate={{ right: 0, opacity: 1, zIndex: 1 }}>
                        <span className='home-heading'>Hey there,<br /> I am <span className='text-danger'>Udbhav Bhandari</span> </span><br />
                        <span style={{ fontSize: '1.2rem', lineHeight: '2.5rem' }}>A Technology enthusiast, a passionate developer and an experienced IT professional, trying
                     my hands on the vast and innovative world of web development.<br />
            I aspire to develop and design creative and unique solutions that can contribute in the progression of web technologies.</span>
                    </motion.div>
                    <motion.img src={relaunch} className='relaunch'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 0.5, delay: timingOffset + 1.5 }} />
                </div>

            </motion.div>
        </motion.div >
    )
}

export default Landing
