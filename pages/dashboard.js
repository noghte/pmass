
import TopNavTemplate from '../components/TopNavTemplate'
import React, { useState, useContext } from 'react'

export default function Dashboard() {
    const [selectedMenu, setSelectedMenu] = useState("menu1");
    function selectMenu(e) {
        let menuId = e.target.id;
        setSelectedMenu(menuId);
    }
    const analysisProperties = 
        <form>
            <div className="form-group">
                <div className="form-group-header">
                    <label htmlFor="example-text">Example Text</label>
                </div>
                <div className="form-group-body">
                    <input className="form-control" type="text" value="Example Value" id="example-text" />
                </div>
            </div>

            <div className="form-group">
                <div className="form-group-header">
                    <label htmlFor="example-select">Example Select</label>
                </div>
                <div className="form-group-body">
                    <select className="form-select" id="example-select">
                        <option>Choose an option</option>
                        <option>Git</option>
                        <option>Subversion</option>
                        <option>Social Coding</option>
                        <option>Beets</option>
                        <option>Bears</option>
                        <option>Battlestar Galactica</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="form-group-header">
                    <label htmlFor="example-select">Dimension</label>
                </div>
                <div className="form-group-body">
                    <label> <input type="radio" id="2d" name="dimension" checked /> 2D </label>
                    <label> <input type="radio" style={{ marginLeft: '0.5rem' }} className="p-2" id="3d" name="dimension" /> 3D </label>

                </div>
            </div>

            <div className="form-group">
                <div className="form-group-header">
                    <label htmlFor="example-textarea">Example Textarea</label>
                </div>
                <div className="form-group-body">
                    <textarea className="form-control" id="example-textarea"></textarea>
                </div>
            </div>
        </form>
    const material = <p className="f4">Material</p>
    const LeftMenu = () => {
        return (<nav className="SideNav border" style={{ maxWidth: "360px" }}>
            <a id="menu1" className="SideNav-item" onClick={selectMenu} aria-current={selectedMenu === "menu1" ? "page" : undefined}>Analysis Properties</a>
            <a id="menu2" className="SideNav-item" onClick={selectMenu} aria-current={selectedMenu === "menu2" ? "page" : undefined}>Materials</a>
            <a id="menu3" className="SideNav-item" onClick={selectMenu} aria-current={selectedMenu === "menu3" ? "page" : undefined}>Models</a>
            <a id="menu4" className="SideNav-item" onClick={selectMenu} aria-current={selectedMenu === "menu4" ? "page" : undefined}>Settings</a>
        </nav>)
    }
    const itemDescription = "Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.";

    return (
        <>
            <TopNavTemplate />
            <div className="container-lg clearfix">
                <p className="h2">Please enter your data</p>
                <div className="col-2 float-left p-0">
                    <LeftMenu />
                </div>
                <div className="col-6 float-left border p-4">
                    {selectedMenu === "menu1" && analysisProperties}
                    {selectedMenu === "menu2" && material}

                </div>
                <div className="col-4 float-left p-4">
                    <p className="text-normal">Normal</p>
                    <p className="f3">Focaccia</p>
                    <p className="lh-default">
                        {itemDescription}
                    </p>
                </div>

            </div>
        </>
    )
}

