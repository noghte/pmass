
import React, { useState, useContext } from 'react'

export default function TopNavTemplate() {
    const [selectedMenu, setSelectedMenu] = useState("menu3");
    function selectMenu(e) {
        let menuId = e.target.id;
        setSelectedMenu(menuId);
    }
  
    return (
<nav className="UnderlineNav">
  <div className="UnderlineNav-body" role="tablist">
    <button id="input" onClick={selectMenu} aria-selected={selectedMenu === "input" ? "true" : undefined} className="UnderlineNav-item" role="tab" type="button">Input</button>
    <button id="stats" onClick={selectMenu} aria-selected={selectedMenu === "stats" ? "true" : undefined} className="UnderlineNav-item" role="tab" type="button">Stats</button>
    <button id="visualize" onClick={selectMenu} aria-selected={selectedMenu === "visualize" ? "true" : undefined} className="UnderlineNav-item" role="tab" type="button">Visualize</button>
    <button id="rawdata" onClick={selectMenu} aria-selected={selectedMenu === "rawdata" ? "true" : undefined} className="UnderlineNav-item" role="tab" type="button">Raw Data</button>
  </div>
</nav>)
}