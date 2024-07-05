import React from "react";
import useSpeechToText from "../hooks/useSpeechToText";
import VoiceInput from "../components/VoiceInput";

function Test() {
  const [text, setText] = React.useState("");
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
    <VoiceInput
      onChange={handleChange}
      text={text}
      transcript={transcript}
      startStopListening={startStopListening}
      isListening={isListening}
    />
  );
}

export default Test;
