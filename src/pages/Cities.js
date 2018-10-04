import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Table from '../tables/Table';
import CallGetCities from '../core/url-cities';
import { BASE_URL } from '../core/constants'


export default class Cities extends Component {
    constructor() {
        super()
     
        this.state = { lista: [], totalPages: 0 };
        this.getTables = this.getTables.bind(this); 
             
    }  

    getTables(pagina) {        
    const page = (pagina - 1) || 0;
    const url = `${BASE_URL}/cities?page=${page}&size=10`;   
    const setState = this.setState.bind(this);
    
    new CallGetCities().urlCallbackGet(url, setState);           
    }
    
    componentDidMount() {
        this.getTables(0);
        PubSub.subscribe('atualiza-listagem-tables', function (topico, novaLista) {
            this.setState({ topico: novaLista });           
            this.getTables(0);  
           
        }.bind(this));
        
        PubSub.subscribe('mudou-pagina', function (topico, pagina) {
            this.getTables(pagina);  
        }.bind(this))
    }
    
       render() {
           console.log(this.state.lista)
            return (
    
                <div>
                    <div className="header">
                        <h1>Cities</h1>
                        
                    </div>
                   
                    <div className="content" id="content">
    
                       
                        <Table lista={this.state.lista} totalPages={this.state.totalPages} />                    
                         
                    </div>
                </div>
            );
        }
    }