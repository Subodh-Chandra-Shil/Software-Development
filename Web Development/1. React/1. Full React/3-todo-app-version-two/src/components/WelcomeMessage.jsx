import React from 'react'

export const WelcomeMessage = ({ todoItems }) => {
    return (
        <div>
            {todoItems.length === 0 && <h2 className='text-decoration-underline'>Welcome, plan your day now!!</h2>}
        </div>
    )
}
