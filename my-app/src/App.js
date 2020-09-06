import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent/Main'
import Banner from './components/BannerComponent/banner'


const App = () => (
  <div className="App">
    <Banner/>
    <MainComponent />
  </div>
);

export default App;