import React from 'react'
import {Switch,Route} from 'react-router-dom'
import App from './App'
import Description from './Description'
import Me from './Me'


const RouteE = () => {
      
      return (
            <div>
            <Switch>
                  <Route exact path='/' component={App}></Route>
                  {/* <Route path='/description' render={(props)=><Description {...props}></Description>}></Route> */}
                 {/* <Route exact path='/me/:id' component={Me}/> */}
                 <App /> 

            </Switch>
           
            </div>
            
      )
}

export default RouteE
