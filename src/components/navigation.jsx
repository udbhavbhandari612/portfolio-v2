import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'


function Navigation({ timingOffset }) {

    const logoSequence = {
        appear: {
            transform: 'scale(1)', opacity: 1, bottom: 0,
            transition: { type: 'spring', bounce: 0.3, duration: 0.5, delay: timingOffset + 1 }
        },
        rotate: {
            rotate: -3,
            transition: {
                duration: 1, delay: 1.5, repeat: 'Infinity',
                repeatType: "mirror",
            }
        },
        hummer: {
            y: 8,
            transition: {
                duration: 1.2, delay: 1.5, repeat: 'Infinity',
                repeatType: "reverse",
            }
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }


    const CustomeLink = ({ to, children }) => {
        return (
            <Link to={to} className={'link text-decoration-none'}>
                {children}
            </Link>
        )
    }

    return (
        <motion.div className='d-flex pt-3 pb-2 align-items-center position-relative' style={{ zIndex: 10 }}>
            <Link to='/' className='text-decoration-none' style={{ color: 'inherit' }}>
                <motion.div className='d-inline-block logo ml-sm-5 ml-4 position-relative mt-sm-3'
                    initial={{ transform: 'scale(0)', opacity: 0, bottom: -50 }}
                    animate={['appear', 'rotate', 'hummer']}
                    variants={logoSequence}
                >
                    Portfolio
            </motion.div>
            </Link>
            <motion.div className='d-sm-flex d-none ml-auto mr-sm-5 mr-3'
                variants={container}
                initial="hidden"
                animate="show">
                <motion.div className='mx-sm-5 mx-3' variants={item}>
                    <CustomeLink text='About Me' to='/about-me' >
                        <button type="button" className="btn btn-dark">
                            About Me
                        </button>
                    </CustomeLink>
                </motion.div>

                <motion.div className='mx-sm-5 mx-3' variants={item}>
                    <CustomeLink text='Projects' to='/projects' >
                        <button type="button" className="btn btn-dark">
                            Projects
                    </button>
                    </CustomeLink>
                </motion.div>

                <motion.div className='mx-sm-5 mx-3' variants={item}>
                    <button type="button" className="btn btn-light">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i> Let's connect</button>
                </motion.div>
            </motion.div>

        </motion.div >
    )
}

export default Navigation
