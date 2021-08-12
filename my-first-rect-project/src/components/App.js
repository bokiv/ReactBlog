import { Fragment } from 'react';

import { Header } from './Header/Header.jsx';

import './App.css';
import { BlogList } from './BlogList/BlogList.jsx';

function App() {
  return (
    <Fragment>
    <Header />
    <BlogList />
      <BlogItems />
      <BlogItems />
      <BlogItems />
   </Fragment> 
  );
}

export default App;
