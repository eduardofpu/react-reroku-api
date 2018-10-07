import React, { Component } from 'react';<label></label>  
import CallGetCities from '../core/url-cities';
import { BASE_URL } from '../core/constants';

export default class FormCities extends Component {
    constructor() {
        super();
        this.state = { name: ''};
        this.enviaForm = this.enviaForm.bind(this);
       
    }
    
    enviaForm (evento){
       evento.preventDefault();
       
       const URL = `${BASE_URL}/cities`;
       const stringiFy = JSON.stringify({name: this.state.name, headers: this.state.headers });
       const setState = this.setState.bind(this);
       const name = this.state.name;
             
       new CallGetCities().urlCallbackPost(URL, stringiFy, setState, name); 
    }
    
     render() {
      return ( 
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >Create Cities</button>
                
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New Data Cities</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body">
                                <form  onSubmit={this.enviaForm} method="post">
                                    <div className="form-group">

                                        <label htmlFor="name" className="col-form-label">Cities:</label>  

                                        <input type="text"  className="form-control"  id="name"
                                            name="name"  value={this.state.name} required placeholder="Name" 
                                            onChange={new CallGetCities().butonSave.bind(this,'name')} label="Name"/>
                                    </div>

                                        <div className="modal-footer">

                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                            
                                </form>
                            
                        </div>
                        
                        </div>
                    </div>
                </div>
                    
            </div>       
        );
    }
}