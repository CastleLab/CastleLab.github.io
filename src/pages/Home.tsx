import { ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2>CASTLE Group | HKUST</h2>
            <p>Code Analysis, Testing and Learning</p>
          </div>
        </div>
      </div>
      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Nov. 2022: </b> Prof. Shing-Chi Cheung has been elected to the
            IEEE Fellow Class 2023.
          </li>

          <li>
            <b>May. 2023: </b> Three papers are accepted by ISSTA'23.
            They are on the research field of Deep Learning compiler testing and android testing.
          </li>

          <li>
            <b>May. 2023: </b> Multiple papers are accepted by ACM TOSEM and IEEE TSE.
            They are on the research field of Deep Learning testing and smart contract testing.
          </li>

          <li>
            <b>Aug. 2022: </b> Lili Wei became Assistant Professor at McGill
            University.
          </li>


        </ul>
      </div>
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            <img src="images/about.jpg" alt=" " />
          </div>
          <div className="group-text">
            <h3>CASTLE Lab at HKUST</h3>
            <p>
              <b>CASTLE</b> (<b>C</b>ode <b>A</b>nalysi<b>S</b>, <b>T</b>esting
              and <b>LE</b>arning) Lab is a part of Software Engineering Group
              in HKUST. The lab is headed by Prof.{' '}
              <a href="http://www.cse.ust.hk/faculty/scc/">Shing-Chi Cheung</a>.
              We are interested in research topices regarding program analysis,
              testing and debugging, machine learning, crowdsourcing and open
              source software repository.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
