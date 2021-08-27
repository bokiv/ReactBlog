import React, { Fragment , Component } from 'react';

import { Header } from './Header/Header.jsx';
import { BlogList } from './BlogList/BlogList.jsx';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Fragment>
      <Header />
      <BlogList />
     </Fragment> 
    );
  } 

}

export default App;
