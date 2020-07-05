import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from './routes';

function App() {
  return (
    <Router>
      <IconStyle />
      <GlobalStyle />
      {
        renderRoutes(routes)
      }
    </Router>
  );
}

export default App;
