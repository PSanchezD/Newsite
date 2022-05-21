import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { click } from "@testing-library/user-event/dist/click";

function Sidebar() {
  const [show, setShow] = useState(false);

  let closeout = useRef();

  function handleHam(event) {
    setShow(true);
    if (show) {
      setShow(!show);
    }
  }

  useEffect(() => {
    const closeOut = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setShow(false);
      }
    };

    document.body.addEventListener("click", closeOut);

    return () => document.body.removeEventListener("click", closeOut);
  }, []);

  return (
    <>
      <div className="sidebar-c">
        <div className="sidebar-r">
          <div className="button-c">
            <button type="button" onClick={handleHam}>
              MENU
            </button>
          </div>
          {show && (
            <div ref={closeout} className="sidebar-div">
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
