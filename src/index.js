import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/home/Home';
import ContactUs from './components/contact/ContactUs';
import { Provider } from 'react-redux'
import { store } from './components/app_contact/store';
import ReviewMessage from './components/reviewMessage/ReviewMessage';
import News from './components/news/News';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/review_message" component={ReviewMessage} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
