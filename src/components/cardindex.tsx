
import React from "react";

import styles from './indexcardstyle.module.css'

type cardtype = {
    cardData : {
        imagefile: string
        title: string
        description: string
    }
}

export const Card = (props: cardtype) => {
    return (
        <div className={styles.card}>
            <img src={props.cardData.imagefile} alt="image" />
            <h1>{props.cardData.title}</h1>
            <h2>{props.cardData.description}</h2>
        </div>
    )
}