import React from 'react'

const Footer = () => {
let footerStyle={
  position:"relative",
  top:"100vh",
  width:"100%"
}
  return (
    <div className='bg-dark text-light  my-3' style={footerStyle}>
     <p className='text-center'>copyright &copy;MY TODOS LIST.COM</p>
    </div>
  )
}

export default Footer;
