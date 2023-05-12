import React, {useCallback, useEffect, useMemo, useState} from "react";
import { ReactComponent as ArrowLeft } from "./assets/icons/arrow_back.svg";
import { ReactComponent as FirstIcon } from "./assets/icons/Icon.svg";
import { ReactComponent as SecondIcon } from "./assets/icons/Icon (1).svg";
import { ReactComponent as ThirdIcon } from "./assets/icons/Icon (2).svg";
import "./styles.scss";
import character from "./assets/images/character.svg";
import calendar from "./assets/images/calendar.svg";

const QueueView = () => {

  return (
    <>
      <div className="main_wrapper">
        <div className="online_queue__wrapper">
          <div className="online_queue__content">
            <div className={"top"}>
              <div className={"go_back"}>
                <ArrowLeft />
              </div>

              <div className={"images_block"}>
                <img src={character} alt={"img"} />
                <img src={calendar} alt={"img"} />
              </div>
            </div>

            <div className="take_queue">
              <div className="take_queue__title">{"Онлайн очередь"}</div>
              <div className="take_queue__description">
                {
                  "Занять очередь в отделение MBANK теперь можно не выходя из дома"
                }
              </div>

              <div className="take_queue__steps">
                <div className={"step"}>
                  <div className={"step__icon"}>
                    {" "}
                    <FirstIcon />
                  </div>

                  <div>
                    {
                      "Выберете отделение с поддержкой онлайн бронирования очереди"
                    }
                  </div>
                </div>
                <div className={"step"}>
                  <div className={"step__icon"}>
                    <SecondIcon />
                  </div>
                  <div>{"Укажите тип услуги и время посещения отделения"}</div>
                </div>
                <div className={"step"}>
                  <div className={"step__icon"}>
                    <ThirdIcon />
                  </div>
                  <div>
                    {
                      "Активируйте электронный билет с помощью QR или в терминале"
                    }
                  </div>
                </div>
              </div>
              <div className={"take_queue__button"}>
                <button>{"Занять очередь"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueueView;
