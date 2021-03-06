import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import SimpleComponentExample from '../Examples/SimpleComponentExample';
import SimpleComponentStateExample from '../Examples/SimpleComponentStateExample';
import ComponentCompositionExample from '../Examples/ComponentCompositionExample';
import LifeHooksExample from '../Examples/LifeHooksExample';
import ConnectedExample from '../../containers/ConnectedExample';

const Routes = () => (
  <Switch>
    <Route exact path="/simple-component" component={SimpleComponentExample} />
    <Route exact path="/simple-component-state" component={SimpleComponentStateExample} />
    <Route exact path="/component-composition" component={ComponentCompositionExample} />
    <Route exact path="/life-hooks" component={LifeHooksExample} />
    <Route exact path="/redux" component={ConnectedExample} />

    <Redirect from="/" to="/simple-component" />
  </Switch>
);

export default Routes;
