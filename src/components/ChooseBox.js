import React from 'react'
import '../styles/Why.css'

function ChooseBox(props) {
    return (
        <div className='box-1-container'>
            <div className="card-content">
                <div className="image-content">
                    <img src={props.img} alt="" />
                </div>
                <div className="text-content">
                    <div className="title">{props.title}</div>
                    <span className="content">{props.text}</span>
                </div>
            </div>
        </div>
    )
}

export default ChooseBox