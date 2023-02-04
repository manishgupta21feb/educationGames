import React from "react";
import "./style.scss";

const FourthScreenLeft = (props) => {
  const { data } = props;

  const dataRender = () => {
    return (
      <>
        {data.fourthScreenData.map((item, arr) => {
          return (
            <div
              className={`forth-screen-container-${arr + 1}`}
              key={arr}
              aria-hidden
            >
              {item.map((items, index) => {
                return (
                  <React.Fragment key={index}>
                    {items.headerTxt ? (
                      <p
                        className={`forth-screen-img${arr + 1}-header`}
                        dangerouslySetInnerHTML={{ __html: items.headerTxt }}
                      ></p>
                    ) : (
                      ""
                    )}

                    {items.topData
                      ? items.topData.map((txt, key) => {
                          return (
                            <div key={key}>
                              <div
                                className={`forthScreenText-container forthScreenTextImg1-up-container-${key}`}
                              >
                                <p
                                  className={`forthScreenText img-one-up-text-${key}`}
                                >
                                  {txt}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      : ""}

                    {items.frameshiftTxt ? (
                      <p className="framshift-text">{items.frameshiftTxt}</p>
                    ) : (
                      ""
                    )}

                    {items.bottomText
                      ? items.bottomText.map((txt, key) => {
                          return (
                            <div key={key}>
                              <div
                                className={`forthScreenText-container forthScreenTextImg1-Bottom-container-${key}`}
                              >
                                <p
                                  className={`forthScreenText img-one-up-text-${key}`}
                                >
                                  {txt}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="forth-screen-left-main">
        <div
          role="img"
          className="sr-image sr-only"
          aria-label={data.forthScreenAltTxt}
        ></div>
        {dataRender()}
        <div className="image-BG" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default FourthScreenLeft;
