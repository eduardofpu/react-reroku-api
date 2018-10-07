import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Table from '../tables/Table';
import CallGetCustomers from '../core/url-customers';
import { BASE_URL } from '../core/constants'
import FormCustomers from '../forms/FormCustomers';


export default class Customers extends Component {
    constructor() {
        super()
     
        this.state = { lista: [], totalPages: 0 };
        this.getTables = this.getTables.bind(this); 
             
    }  

    getTables(pagina) {        
    const page = (pagina - 1) || 0;
    const url = `${BASE_URL}/customers?page=${page}&size=10`;   
    const setState = this.setState.bind(this);
    
    new CallGetCustomers().urlCallbackGet(url, setState);           
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

                    <FormCustomers />
                    
                        <h1>Customers</h1>
                        
                    </div>
                   
                    <div className="content" id="content">
    
                       
                        <Table lista={this.state.lista} totalPages={this.state.totalPages} />                    
                         
                    </div>
                </div>
            );
        }
    }