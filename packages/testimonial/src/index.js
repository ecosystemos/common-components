import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './Test';
//import reportWebVitals from './reportWebVitals';
//import ApolloWraper from './components/ReviewCard/ApolloProvider';


ReactDOM.render(
    <React.StrictMode>
      {/* <ApolloWraper> */}
      <App />
      {/* </ApolloWraper> */}
    </React.StrictMode>,
    document.getElementById('root')
  );

/* 
import { getInfo } from "./Test";
const Test = { getInfo };
export default Test; */
