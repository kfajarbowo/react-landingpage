import React from 'react'
import propTypes from 'prop-types'


export default function Card(props) {
    const className = ["tiles-item"]
    className.push(props.className)
    return (
      <div className="tiles-item">
        <div className={`tiles-item-inner ${props.hasShadow ? " has-shadow" : ""}`}>
          {props.children}
        </div>
      </div>
    );
}

Card.propTypes ={
    hasShadow : propTypes.bool,
    className : propTypes.string
}