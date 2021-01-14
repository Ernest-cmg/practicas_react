

import React,{ Suspense, lazy} from 'react'
import Loading from './Componentes/Loading'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './Componentes/Store'


function App() {
 
 const Menu = React.lazy(()=> import('./Componentes/Menu'))
 const Home = React.lazy(()=> import('./Componentes/Home'))
 const Servi = React.lazy(()=> import('./Componentes/Servi'))
 
 const loading = (
   <>
      <div className='container'>
          <h1 className='text-primary mt-5'>Cragando....</h1>
      </div>
   </>
 )
 
  return (

    <Provider store={store}>
     
     <BrowserRouter>
      
      <Suspense fallback={loading}>
        <Switch>
           <Route exact path="/" component={Menu} />
          <Route path="/home" component={Home} />
          <Route path="/servi" component={Servi} />

        </Switch>
      </Suspense>

     
     
     </BrowserRouter>
   


    </Provider>
    


  );
}

export default App;
