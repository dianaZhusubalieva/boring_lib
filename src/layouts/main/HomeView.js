import React from "react";
import "./styles.scss";
import { ReactComponent as Logo } from "./../../icons/Group.svg";
import img1 from "./../../images/Group.png";
import img2 from "./../../images/Group 5.png";

import first from "./../../images/first.png";
import second from "./../../images/second.png";
import third from "./../../images/third.png";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className={"blue-section-wrapper"}>
        <section className="blue_section">
          <header className={"header"}>
            <div className={"header_logo"}>
              <Logo />
            </div>

            <ul className={"header_list"}>
              <li>About</li>
              <li
                onClick={() => navigate("/components")}
                style={{ cursor: "pointer" }}
              >
                Components
              </li>
              <li
                  onClick={() => navigate("/animations")}
                  style={{ cursor: "pointer" }}
              >
                Animations
              </li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
            <div className={"header_login"}>
              <span>Log In</span>
              <button>Sign up</button>
            </div>
          </header>

          <div className={"grid-wrapper"}>
            <div className={"grid-item"}>
              <div className={"text_content"}>
                <div className={"text_content__title"}>
                  {"Get access to\nworldwide content"}
                </div>
                <div className={"text_content__description"}>
                  {
                    "There are many variations of passages of Lorem Ipsum \navailable, but the majority have suffered."
                  }
                </div>
                <div>Start from $2.99 / month</div>
                <div className={"text_content__button"}>
                  <button>Get Started</button>
                  <span>* 30-Days money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={"trustpilot-grid"}>
        <div className={"trustpilot-grid__content"}>
          <div>
            <img src={img1} alt={"img"} />
          </div>
          <div className={"centralize"}>
            <img src={img2} alt={"img"} />
          </div>
          <div>
            <img src={img1} alt={"img"} />
          </div>
        </div>
      </div>

      <section className={"img-texts-wrapper"}>
        <div className={"img-texts__row"}>
          <div className={"img-wrapper"}>
            <img src={first} alt={"img"} />
          </div>
          <div className={"text-item"}>
            <div className={"title"}>
              {"One gateway endless\nentertainment"}
            </div>
            <div className={"description"}>
              {
                "Content at the tip of your fingers! With thousands of\nservers and millions of IPs, you can access websites and\nenjoy your favourite movies, TV shows, games, and more;\nin over 190 countries."
              }
            </div>
          </div>
        </div>

        <div className={"img-texts__row"}>
          <div className={"text-item"}>
            <div className={"title"}>
              {"Putting power back\ninto your hands"}
            </div>
            <div className={"description"}>
              {
                "Instant protection to enhance your online privacy.\nBrowse the internet safety and anonymously."
              }
            </div>
          </div>
          <div className={"img-wrapper"}>
            <img src={second} alt={"img"} />
          </div>
        </div>

        <div className={"img-texts__row"}>
          <div className={"img-wrapper"}>
            <img src={third} alt={"img"} />
          </div>
          <div className={"text-item"}>
            <div className={"title"}>{"30 Days money back\nguarantee"}</div>
            <div className={"description"}>
              {
                "Since we trust that you will fall in love with vping, we\noffer our users the option to try it for 30 days. If you\n don’t enjoy the experience, we will give you a 100%\n refund."
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeView;
