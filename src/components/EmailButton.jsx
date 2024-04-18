// eslint-disable-next-line no-unused-vars
import React from 'react'

const EmailButton = () => {
  return (
    <div>
       <div >
       <button
          className=" emailMe border=2  
         rounded border-solid border-black bg-gray-400 p-2 mr-4
         text-xs text-black hover:bg-gray-600 hover:text-varLIGHTDUCKHEAD"
        >
          <a href="mailto:contact@mybabb.com">Email Me</a>
        </button>
        </div>
    </div>
  )
}

export default EmailButton
