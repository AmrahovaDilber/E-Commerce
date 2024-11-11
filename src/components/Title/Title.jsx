import React from 'react';
import "../Title/Title.css"

export default function Title({children}) {
  return (
      <div>
          <p className='section-title'>{children}</p>
    </div>
  )
}
