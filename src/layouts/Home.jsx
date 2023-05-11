import { Box } from '@chakra-ui/react'
import Hero from '../components/Home/Hero'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'

const Home = () => {
  return(
    <Box>
      <Navbar />
      <motion.div
      whileInView={{opacity:[0, 1]}}
      transition={{duration: 1}}
      viewport={{once: true}}
      >
        <Hero />
      </motion.div>
    </Box>
  )
}
export default Home