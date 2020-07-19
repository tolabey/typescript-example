import React from 'react';
import './App.css';
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
        <Page
            title={"Page 1"}
            id={1523}
        />

        <Page
            title={"Page 2"}
            id={17}
        />

        <Page
            title={"Page 2"}
            id={623}
        />
    </div>
  );
}

export default App;
