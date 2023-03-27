
import React from "react";

import {Card} from './cardindex';
import styles from './indexBodystyles.module.css'

type indexProptype = {
    cards: {
        imagefile: string
        title: string
        description: string
    }[]
}

export const IndexBody = (props: indexProptype) => {
    return (
        <div className={styles.cardContainer}>
            {
                props.cards.map(card => <Card cardData={card} />)
            }
        </div>
    )
}