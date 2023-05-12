import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
const theme = extendTheme({
  colors: {
    purple: '#5800FF',
    yellow: '#FFC600',
    black: '#000',
    white: '#fff'
  },
  styles: {
    global: {    
      body: {
        bg: '#000114',
        color: '#fff',
        '@media (max-width: 500px)': {
          display: 'flex'
        },
        overflowX: 'hidden',
        '&::-webkit-scrollbar':  {
          width: '12px',
          backgroundColor: '#000114'
         },
         '&::-webkit-scrollbar-thumb': {
          borderRadius: '50px',
          backgroundColor: '#5800FF' }
      },
     
      
      // styles for the `a`
      
    },
  },
})
export default theme