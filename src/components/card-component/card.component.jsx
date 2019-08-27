import React from 'react'
import './card.styles.css'

export const Card = props  => {

    return (
        <div className="card-container" key={props.children.id}>

            {/* MONSTER IMAGE */}
            <img alt={`monster${props.children.id}`}
                 src={`https://robohash.org/${props.children.id}?set=set2&size=180x180`}/>

            {/* MONSTER DATA */}
            <h2 key={props.children.id}>{props.children.name}</h2>
            <h3><p>{props.children.email}</p></h3>

        </div>
    )
}
