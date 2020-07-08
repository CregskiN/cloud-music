import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { IconStyle } from './assets/iconfont/iconfont';
import GlobalStyle from './style';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */'./application/Home'));
const Recommend = lazy(() => import(/* webpackChunkName: 'Recommend' */'./application/Recommond'));
const Rank = lazy(() => import(/* webpackChunkName: 'Rank' */'./application/Rank'));
const Singers = lazy(() => import(/* webpackChunkName: 'Singers' */'./application/Singers'));


const Loading: React.FC<any> = () => {
  return <div>Loading</div>
}

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Home />
            <Route path="/" exact render={() => (<Redirect to="/singers"/>)}/>
            <Route path="/recommend" component={Recommend} exact />
            <Route path="/singers" component={Singers} exact />
            <Route path="/rank" component={Rank} exact />
          <IconStyle />
          <GlobalStyle />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
