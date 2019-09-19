import React, {Component, Fragment} from "react";
import styles from './deck.module.css';
import {Card} from './card';
import pokedex from './../../pokedex.js';

export class Deck extends Component{
    constructor(props) {
        super()
        this.state = {
            search: ''
        }
    }
    setValue(value){
        this.setState({
            search: value
        })
    }
    render(){
        return(  <Fragment>
                    <input className={styles.searcher} onChange={e=>this.setValue(e.target.value)} type="text" placeholder="Search a Pokemon" value={this.state.search}/>
                    <div className={styles.deck}>
                        {
                            pokedex.filter(p=>p.name.english.includes(this.state.search)).map((pokemon, i) =>                             
                            <Card name={pokemon.name.english} image={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+(pokemon.id).toString().padStart(3,'0')+'.png'} types={pokemon.type} key={i} number={(pokemon.id)}></Card>
                        )}

                     </div>
                </Fragment>
            );
    }
}