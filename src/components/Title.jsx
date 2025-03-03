import React from 'react'

const Title = ({ children }) => {
    return (
        <h1 className='text-3xl text-center font-semibold py-5 text-slate-500'>
            {children}
        </h1>
    )
}

export default Title