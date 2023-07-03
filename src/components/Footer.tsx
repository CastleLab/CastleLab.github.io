import { ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-left">
            <div className="footer-left-text">
              <p>
                {' '}
                © CASTLE Group |{' '}
                <a href="http://www.cse.ust.hk">CSE in HKUST</a> | Last Updated:{' '}
                <span id="build-time">{process.env.REACT_APP_BUILD_TIME}</span>{' '}
                | Built Version Hash:{' '}
                <span id="build-hash">{process.env.REACT_APP_GIT_SHA}</span>{' '}
              </p>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="footer-right">
            <div className="footer-left-text">
              <p>
              Template designed by
              <a href="http://w3layouts.com/"> w3layouts</a>
              </p>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
