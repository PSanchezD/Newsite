import { useState } from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

function Sidebar() {
  const [show, setShow] = useState(false);

  function handleHam() {
    setShow(true);
    if (show) {
      setShow(!show);
    }
  }

 

  return (
    <>
      <div className="sidebar-c">
        <div className="sidebar-r">
          <div className="button-c">
            <button type="checkbox" onClick={handleHam}><GiHamburgerMenu/></button>
          </div>
          {show && (
            <div className="sidebar-div">
              <Link to="/Search">Search</Link>
              <Link to="/TopHeadlines">Top Headlines</Link>
              <Link to="/Tech">Tech</Link>
              <Link to="/Fashion">Fashion</Link>
              <Link to="/Entertainment">Entertainment</Link>
              <Link to="/Finance">Financial</Link>
              <Link to="/Crypto">Crypto</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
