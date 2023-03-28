import React from 'react'
import './card.css';

const Card = ({ id, name, language, framework }) => {
    return (
        <div className='card'>
            <div className='displays'>
                <div className='title'>
                    <h2>{id}</h2>
                    <p>Id</p>
                </div>
                <div className='title'>
                    <h2>{name}</h2>
                    <p>Name</p>
                </div>
                <div className='title'>
                    <h2>{language}</h2>
                    <p>Language</p>
                </div>
                <div className='title'>
                    <h2>{framework}</h2>
                    <p>Framework</p>
                </div>
            </div>
        </div>
    )
}

export default Card