
export default class CallGetCities {
   
    urlCallbackGet(url, setState){
        fetch(url, setState)
          .then((response) => response.json())
          .then((responseJson) => {
            
            setState({
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
}