import React, {Component, Fragment} from "react";
import styles from './ficha.module.css';
import pokedex from './../../pokedex.js'


export class Ficha extends Component{
    render(props){
        //const {props} = this;
        return(  <h1>{this.props.match.params.id}</h1>
            );
    }
}