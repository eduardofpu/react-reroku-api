import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Table extends Component {       
    constructor(props) {
        super(props);        
        this.state = {
        activePage: 1
        };
         
        this.handlePageChange = this.handlePageChange.bind(this)
      }
     
      handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        PubSub.publish('mudou-pagina', pageNumber);
      }
       
    render() {
        return (
          
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>                            
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                         this.props.lista.map(function (lista) {
                                return (
                                    <tr key={lista.name}>                                                        
                                    <td>{lista.name}</td>  
                                                                    
                                    </tr>                                          
                                );                                
                            })
                         }
                    </tbody>
                   
                </table> 
                 
                <Pagination 
                    activePage={this.state.activePage}
                    itemsCountPerPage={1}
                    totalItemsCount={this.props.totalPages}
                    pageRangeDisplayed={this.props.totalPages}
                    onChange={this.handlePageChange}
                />
                                    
                </div>   
        );
    }
   
}
