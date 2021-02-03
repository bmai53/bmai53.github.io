import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import chatbot from "../chatbot-white.png";

export default () => {
  const [showChat, setShowChat] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const { innerWidth: width } = window;
    if (width < 480) {
      setIsSmallScreen(true);
    }
  }, []);

  return (
    <>
      {showChat ? (
        <>
          <div className='chatbot-wrapper'>
            <iframe
              className='chatbot'
              src='https://chat-with-bennybot.herokuapp.com/'
              title='BennyBot'
            >
              <head>
                <base target='_top' />
              </head>
            </iframe>
          </div>
          <button
            className='mobile-close-chat-btn'
            onClick={() => {
              setShowChat(false);
            }}
          >
            Close Chat
          </button>
        </>
      ) : null}

      <button
        data-tip
        data-for='chatTip'
        className='show-chat-btn'
        onClick={() => {
          setShowChat(!showChat);
        }}
      >
        {!showChat ? (
          <>
            {/* made by surang at https://www.flaticon.com/ */}
            <img className='chatbot-image' src={chatbot} />
          </>
        ) : !isSmallScreen ? (
          "Close Chat"
        ) : null}
      </button>

      {!isSmallScreen ? (
        <ReactTooltip id='chatTip' place='top' effect='solid' scrollHide={true}>
          Chat with me!
        </ReactTooltip>
      ) : null}
    </>
  );
};