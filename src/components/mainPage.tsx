
import React, {Component} from "react";

type mainPropType = {
    cardDate: {
        imageFile: string
        mainText: string
        description?: string
    }
}

export const MainComponent = (props: mainPropType) => {
    return (
        <div className="mainContainer">
        </div>
    )
}