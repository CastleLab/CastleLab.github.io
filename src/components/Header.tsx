import { ReactElement } from 'react';

export function Header(): ReactElement {
  // change element with id="nav1" to display block if it is hidden, or hide it if it is displayed
  const toggleMenu = () => {
    const nav1 = document.getElementById('nav1');
    if (nav1) {
      if (nav1.style.display === 'block') {
        nav1.style.display = 'none';
      } else {
        nav1.style.display = 'block';
      }
    }
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-part">
            <div className="head-logo">
              <a href="index.html">
                <img src="images/logo.png" alt=" " height="68px"></img>
              </a>
            </div>
            <div className="top-nav" onClick={toggleMenu}>
              <span className="menu">
                <img src="images/menu.png" alt="" />
              </span>
              <ul className="nav1" id="nav1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#/news">News</a>
                </li>
                <li>
                  <a href="#/projects">Projects</a>
                </li>
                <li>
                  <a href="#/publication">Publication</a>
                </li>
                <li>
                  <a href="#/people">People</a>
                </li>
                <li>
                  <a href="#/awards">Awards</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}
