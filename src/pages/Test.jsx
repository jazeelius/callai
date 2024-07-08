import React, { useState } from "react";
import axios from "axios";
import useSpeechToText from "../hooks/useSpeechToText";
import VoiceInput from "../components/VoiceInput";
import Chat from "../components/Chat";

function Test() {
  const [text, setText] = React.useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const apiUrl = "https://api.openai.com/v1/chat/completions"; // Update with the correct API endpoint
      const apiKey = ""; // Replace with your actual API key
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const requestBody = {
        messages: [{ role: "user", content: input }],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const { isListening, startListening, stopListening, transcript } =
    useSpeechToText({
      lang: "en-US",
      continuous: true,
    });

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    setText((prev) => prev + " " + (transcript.length ? transcript : ""));
    stopListening();
  };

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <Chat
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        response={response}
      />
      <VoiceInput
        onChange={handleChange}
        text={text}
        transcript={transcript}
        startStopListening={startStopListening}
        isListening={isListening}
      />
    </>
  );
}

export default Test;
