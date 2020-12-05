import { motion } from 'framer-motion'
import React from 'react'

function Stars({ x, y }) {

    return (
        <motion.div animate={{ opacity: 1 }} transition={{ delayChildren: 1 }}
            className='stars'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{ translateX: x, translateY: y }}
                className='position-relative' id="stars2"></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                style={{ translateX: x, translateY: y }}
                className='position-relative' id="stars"></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                style={{ translateX: x, translateY: y }}
                className='position-relative' id="stars3"></motion.div>
        </motion.div>
    )
}

export default Stars
