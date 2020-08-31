import React from "react";
import PageHeader from "./views/home/PageHeader";
import PageSliderBar from "./views/home/PageSliderBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from "./views/home/todo/TodoList";
// const appStyle = {

// }

export default function App() {
  return (
   <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Router>
        <PageHeader></PageHeader>
        <div 
          style={{
            flex: 1,
            display: 'flex',
            backgroundColor: 'green',
          }}
        >
          <PageSliderBar></PageSliderBar>
          <div style={{
            flex: 1,
          }}>
            <Switch>
              <Route path="/todos">
                <TodoList></TodoList>
              </Route>
              <Route path="/today">
                <div>今日任务</div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
