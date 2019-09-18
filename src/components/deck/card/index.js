import React, {Component, Fragment} from "react";
import styles from './card.module.css';


export class Card extends Component{
    render(){
        const {props} = this;
        return(  <Fragment>
                    <div className="card">
                        <div className={styles.image} style={{ backgroundImage: 'url('+props.image+')' }} ></div>
                        <small>{props.number +1}</small>
                        <p className="name">{props.name}</p>
                        {/* <div className="types">
                            {}
                        </div> */}
                    </div>
                </Fragment>
            );
    }
}