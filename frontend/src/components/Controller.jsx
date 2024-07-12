import React, { useState } from "react";

import axios from "axios";
import RecordMessage from "./RecordMessage";

const Controller = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isResetting, setIsResetting] = useState(false);
  const resetConversation = async () => {
    setIsResetting(true);
    await axios
      .get("http://localhost:8000/reset")
      .then((res) => {
        if (res.status === 200) {
          setMessages([]);
        } else {
          console.error(
            "There was an error with the API request to the backend"
          );
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
    setIsResetting(false);
  };

  function createBlobURL(data) {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  }

  const handleStop = async (blobUrl) => {
    setIsLoading(true);

    // Append recorded message to messages
    const myMessage = { sender: "me", blobUrl };
    const messagesArr = [...messages, myMessage];

    // convert blob url to blob object
    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        // Construct audio to send file
        const formData = new FormData();
        formData.append("file", blob, "myFile.wav");

        // send form data to api endpoint
        await axios
          .post("http://localhost:8000/post-audio", formData, {
            headers: {
              "Content-Type": "audio/mpeg",
            },
            responseType: "arraybuffer", // Set the response type to handle binary data
          })
          .then((res) => {
            const blob = res.data;
            const audio = new Audio();
            audio.src = createBlobURL(blob);

            // Append to audio
            const rachelMessage = { sender: "rachel", blobUrl: audio.src };
            messagesArr.push(rachelMessage);
            setMessages(messagesArr);

            // Play audio
            setIsLoading(false);
            audio.play();
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      });
  };

  return (
    <div className="h-screen overflow-y-hidden text-slate-900">
      {/* Title */}
      {/* <Title setMessages={setMessages} /> */}

      <div className="flex flex-col justify-between h-full overflow-y-scroll pb-96">
        {/* Conversation */}
        <div className="mt-20 px-5">
          {messages.map((audio, index) => {
            return (
              <div
                key={index + audio.sender}
                className={
                  "flex flex-col" +
                  (audio.sender === "rachel" && " flex items-end")
                }
              >
                <div className="mt-4">
                  <p
                    className={
                      audio.sender === "rachel"
                        ? "text-right mr-2 italic text-green-500"
                        : "ml-2 italic text-blue-500"
                    }
                  >
                    {audio.sender}
                  </p>
                  {/* Audio message */}
                  <audio
                    src={audio.blobUrl}
                    className="appearance-none"
                    controls
                  ></audio>
                </div>
              </div>
            );
          })}

          {messages.length === 0 && !isLoading && (
            <div className="text-center font-light italic mt-10">
              Send Rachel a message...
            </div>
          )}
          {isLoading && (
            <div className="text-center font-light italic mt-10 animate-pulse">
              Gimme a few seconds
            </div>
          )}
        </div>

        {/* Recorder */}
        <div className="fixed bottom-0 w-full py-6  ">
          <div className="flex items-center justify-center  w-full  text-center">
            <div className="flex items-center justify-center gap-2 w-full px-4">
              <RecordMessage handleStop={handleStop} />

              <button
                onClick={resetConversation}
                className={`transition-all duration-300 text-blue-300 hover:text-pink-500 bg-slate-900 p-4 rounded-full ml-[-8.5%] ${
                  isResetting ? "animate-pulse" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
