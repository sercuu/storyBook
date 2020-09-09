import React from 'react'

const Avatar = ({ size, username, src }) => {
    return (
        <div className={size}>
            <h1>{username}</h1>
            <img src={src} alt={username}/>
        </div>
    )
}

export default Avatar;