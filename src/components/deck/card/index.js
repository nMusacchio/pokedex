import React, {Component, Fragment} from "react";
import styles from './card.module.css';
import {Link, Route} from 'react-router-dom';

export class Card extends Component{
    render(){
        const {props} = this;
        return(  <Link to={props.name}>
                    <div className={styles.card}>
                        <div className={styles.image} style={{ backgroundImage: 'url('+props.image+')' }} ></div>
                        <div className={styles.info}>
                            <small>#{props.number.toString().padStart(3,'0')}</small>
                            <p className={styles.name}>{props.name}</p>
                        </div>
                        {/* <div className="types">
                            {}
                        </div> */}
                    </div>
                </Link>
            );
    }
}