import React from 'react'

function Navigation() {
  return (
    <nav>
      <div className='navigation'>
        <div className='logo'>
          <h5>Namrata Universal.</h5>
        </div>

        <div className="navbar">

          {["Home", "internship", "Training & development", "pages", "about", "contact", "Blog", "pay"].map((item, index) => (
            <div className='check'><a key={index}>{item}</a></div>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navigation

