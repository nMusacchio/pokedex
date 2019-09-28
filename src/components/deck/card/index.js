import React, {Component, Fragment} from "react";
import styles from './card.module.css';
import {NavLink} from 'react-router-dom';

export class Card extends Component{

    shouldComponentUpdate() {
        return false;
    }

    render(){
        const {props} = this;
        return(  <NavLink to={'/ficha/' + props.pokemon.id.toString() }>
                    <div className={styles.card}>
                        <div className={styles.image} style={{ backgroundImage: 'url(https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+props.pokemon.id.toString().padStart(3,'0')+'.png)' }} ></div>
                        <div className={styles.info}>
                            <small>#{props.pokemon.id.toString().padStart(3,'0')}</small>
                            <p className={styles.name}>{props.pokemon.name.english}</p>
                        </div>
                        {/* <div className="types">
                            {}
                        </div> */}
                    </div>
                </NavLink>
            );
    }
}
