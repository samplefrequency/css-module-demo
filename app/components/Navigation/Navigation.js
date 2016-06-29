/**
 * Created by Eric on 2016-06-29.
 */
import React from 'react'
import { bigText } from './styles.css'

const Navigation = () => {
    return (
        <div>
            <h2 className={bigText}> This is also big text...but different</h2>
            <ul>
                <li>Nav 1</li>
                <li>Nav 2</li>
                <li>Nav 3</li>
                <li>Nav 4</li>
            </ul>
        </div>
    )
}

export default Navigation