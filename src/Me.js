import React from 'react'
import {data} from './data'

const Me = ({match}) => {
      let person = data.find(el=>el.id==match.params.id)
      return (
            <div>
                  <h1>{person.profession}</h1>
                  this.is me component
                 
            </div>
      )
}

export default Me
