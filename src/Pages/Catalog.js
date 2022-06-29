import React from "react";
import '../App.css';
import {SideBar, TallCardCollection} from '../ui-components'

function Catalog() {
  const CollectionOverride = {

  }
  return (
    <div className="App">
      <div className="container">
        <div className="Sidebar">
        <SideBar  />
        </div>
        <div className="Collection"/>
          <TallCardCollection className="tallCardCollection" />
        </div>
      </div>
  );
}

export default Catalog;