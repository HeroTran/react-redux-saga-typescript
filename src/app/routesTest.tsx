import * as React from 'react';
import { Switch, Route } from 'react-router';
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/projects" />
        <Route path="/contacts" />
        <Route path="/auth" />
    </Switch>
);