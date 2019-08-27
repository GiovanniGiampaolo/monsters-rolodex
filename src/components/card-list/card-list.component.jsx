import React from 'react'
import {Card} from '../card-component/card.component'
import './card-list.styles.css'


export const CardList = props => {

    const monsterArr = props.monsters

    return (
        <div className="card-list">
            {/* MONSTER MAPPER */}
            {
                Array.isArray(monsterArr) && monsterArr.length > 0 && monsterArr.map(monster =>
                    <Card key={monster.id}>{monster}</Card>
                )
            }
        </div>
    )
}
