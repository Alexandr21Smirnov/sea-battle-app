import React, { PropsWithChildren   } from 'react'
import './Layout.css'

const Layout = ({ children }: PropsWithChildren  ) => {
  return (
    <div className='wrapper'>{children}</div>
  )
}

export default Layout
