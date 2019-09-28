import React, {Component, Fragment} from "react";
import styles from './ficha.module.css';
import pokedex from './../../pokedex.js';
import {NavLink} from 'react-router-dom';

export class Ficha extends Component{
    render(){
        const {props} = this;
        const pokemon = pokedex.filter((p) => p.id == props.match.params.id)[0];

        return (
            <div class={styles.fichaCont}>
                <NavLink to={'/ficha/' + (pokemon.id-1).toString() } >{pokemon.id != 1 ? <img class={styles.arrow} src="/back.svg"/> : ''}</NavLink>
                <div className={styles.ficha}>
                <p className={styles.name}>{pokemon.name.english} <span className={styles.number}>#{pokemon.id.toString().padStart(3, '0')}</span></p> 
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemon.id.toString().padStart(3, '0') + '.png'} alt=""/>
                </div>
                <NavLink to={'/ficha/' + (pokemon.id+1).toString() }><img src="/right-arrow.svg" class={styles.arrow} /> </NavLink>
            </div>
        )
    }
}