import { motion } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'


function Loading() {
    const loc = useLocation()

    let pageTitle = ''
    switch (loc.pathname) {
        case '/':
            pageTitle = 'Home'
            break;
        case '/about-me':
            pageTitle = 'About Me'
            break;
        case '/projects':
            pageTitle = 'Projects'
            break;
        default:
            pageTitle = 'Welcome'
            break;
    }

    const variants = {
        initial: {
            opacity: 0
        },
        in: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }
    const variants2 = {

        in: {
            y: 0,
            transition: {
                duration: 0.3
            }
        },
        out: {
            x: '100%',
            transition: {
                duration: 0.2,
                delay: 1
            }
        }
    }


    return (
        <motion.div
            variants={variants}
            animate={['initial', 'in']}
            className="position-absolute vw-100 vh-100" style={{
                top: 0, bottom: 0, left: 0, right: 0, zIndex: 100, overflow: 'hidden'
            }}>
            <motion.div
                variants={variants2}
                animate={['in', 'out']}
                style={{ zIndex: 80, y: '-100%' }}
                className='bg-light position-absolute w-100 h-100'></motion.div>
            <motion.div
                className='text-black-50 mx-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: "relative",
                    zIndex: 85, fontSize: '7rem',
                    top: '40%'
                }}>
                {pageTitle}
            </motion.div>
        </motion.div >
    )
}

export default Loading
