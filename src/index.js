import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MyTodoListApp from './components/todolist/MyTodoListApp';
import { AnimatePresence } from 'framer-motion';
import Form from './components/form/Form';

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
      <Router>
        <Switch>
          <Route exact path="/form" component={Form} />
          <Route path="/" component={MyTodoListApp} />
        </Switch>
      </Router>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
