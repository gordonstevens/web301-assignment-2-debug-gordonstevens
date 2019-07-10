import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Documentation from './pages/Documentation/Documentation';
import Api from './pages/Api/Api';

function App() {
   return (
      <div className={styles.app}>
         <div className={styles.header}>
            <Header />
         </div>
         <div className={styles.container}>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/documentation" component={Documentation} />
               <Route exact path="/api" component={Api} />
            </Switch>
         </div>
      </div>
   );
}

export default App;
