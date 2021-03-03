import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ContBlog from 'components/common/cont-blog';
import Gnb from 'components/common/gnb';
import Main from './main';
import Introduce from './introduce';
import Blog from './blog';

const Wrapper = () => {
  return (
    <Router>
      <ContBlog>
        <Gnb />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/introduce'>
            <Introduce />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Redirect from='*' to='/' />
        </Switch>
      </ContBlog>
    </Router>
  );
};

export default Wrapper;
