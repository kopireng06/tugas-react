import {useState} from 'react'
import Sidebar from './Sidebar'
import DataList from './DataList'
import './TodoList.css'
import TodoList from './TodoList'
import AboutApp from './AboutApp'
import Error from './Error'
import { Route,Switch,useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


const MyTodoListApp = ()=>{

  const location = useLocation();
  const persistor = persistStore(store);

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="w-full container-root">
          <Sidebar/> 
          <div className="container-todolist">
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <TodoList/> 
                </Route>
                <Route exact path="/about/:about">
                  <AboutApp /> 
                </Route>
                <Route path="/:error">
                  <Error /> 
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </PersistGate>
    </Provider>
  )

}
 
export default MyTodoListApp;