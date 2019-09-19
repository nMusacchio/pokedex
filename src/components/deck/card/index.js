import React, {Component, Fragment} from "react";
import styles from './card.module.css';


export class Card extends Component{
    render(){
        const {props} = this;
        return(  <Fragment>
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
                </Fragment>
            );
    }
}