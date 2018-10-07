import { METOD_POST } from '../core/constants'
import { METOD_ACCEPT } from '../core/constants'
import { METOD_CONTENT_TYPE } from '../core/constants'
import PubSub from 'pubsub-js';

export default class CallGetCustomers {
   
    urlCallbackGet(url, setState){
        fetch(url, setState)
          .then((response) => response.json())
          .then((responseJson) => {
            
            setState({
              isLoading: false,
              lista: responseJson._embedded.customers, 
              totalPages: responseJson.page.totalPages   
                
            }, function(){           
               
            });
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    butonSave(nomeInput,evento){
      evento.preventDefault();
      var campo={};
      campo[nomeInput]=evento.target.value;
      this.setState(campo);    
  }


  urlCallbackPost (url, stringiFy, setState, name){
    fetch(url, {
        method: METOD_POST,
        headers: {
          'Accept': METOD_ACCEPT,
          'Content-Type': METOD_CONTENT_TYPE
        },
        body: stringiFy,   

        })  
        .then(res=>res.json())
        .then(res => console.log(res))  
        .then(function () { 

            PubSub.publish('atualiza-listagem-tables');                
            setState({ name: '' })//limpa o formulario  
            alert("Salvo com sucesso! " +name);                                          
        },     
        
        ).catch (function (error) {
            console.log('Request failed', error);
            alert(error);
        })          
}
}
