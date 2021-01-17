

import React,{ Suspense, lazy} from 'react'

import {Route, Switch, BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './Componentes/Store'


function App() {
 
 
 const Home = React.lazy(()=> import('./Componentes/Home'))
 
 
 const loading = (
   <>
      <div className='container'>
          <h1 className='text-primary mt-5'>Cragandoo....</h1>
      </div>
   </>
 )
 
  return (

    <Provider store={store}>
     
     <BrowserRouter>
      
      <Suspense fallback={loading}>
        <Switch>
           
          <Route path="/" component={Home} />
         

        </Switch>
      </Suspense>

     
     
     </BrowserRouter>
   


    </Provider>
    


  );
}

export default App;
