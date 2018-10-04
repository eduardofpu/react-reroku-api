import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Table from '../tables/Table';

export default class Cities extends Component {
    constructor() {
        super()
     
        this.state = { lista: [], totalPages: 0 };
        this.getTables = this.getTables.bind(this);   
             
    }  

    getTables(pagina) {
        const page = (pagina - 1) || 0;
    
        fetch(`https://customers-challenge.herokuapp.com/cities?page=${page}&size=10`)
          .then((response) => response.json())
          .then((responseJson) => {
            
            this.setState({
              isLoading: false,
              lista: responseJson._embedded.cities, 
              totalPages: responseJson.page.totalPages   
                
            }, function(){           
               
            });
          })
          .catch((error) =>{
            console.error(error);
          });
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