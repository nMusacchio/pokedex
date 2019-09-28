import React, {Component, Fragment} from "react";
import styles from './deck.module.css';
import {Card} from './card';
import pokedex from './../../pokedex.js';

export class Deck extends Component{
    constructor(props) {
        super();
        this.state = {
            search: ''
        };
    }
    setValue(value){
        this.setState({
            search: value
        })
    }
    render(){
        return(     
                <Fragment>
                    <input className={styles.searcher} onChange={e=>this.setValue(e.target.value)} type="text" placeholder="Search a Pokemon" value={this.state.search}/>
                    <div className={styles.deck}>
                        {pokedex.map((pokemon, i) => (
                            <div style={{ display: pokemon.name.english.includes(this.state.search) ? 'block' : 'none' }} key={i}>
                                <Card pokemon={pokemon} />
                            </div>
                        ))}

                     </div>
                </Fragment>
            );
    }
}