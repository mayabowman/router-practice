import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

function Roster() {
  return (
    <Switch>
      <Route exact path='/roster' component={FullRoster} />
      <Route path='/roster/:number' component={Player} />
    </Switch>
  )
}

export default Roster