import { useState } from "react";
import { startRecording, stopRecording } from "../aws/helper";

function Test() {
  const [transcription, setTranscription] = useState("");

  return (
    <div>
      <button
        onClick={async () => {
          await startRecording((text) => {
            setTranscription((transcription) => transcription + text);
          });
        }}
      >
        Start Recording
      </button>
      <button
        onClick={() => {
          stopRecording();
          setTranscription("");
        }}
      >
        Stop Recording
      </button>
      <div>{transcription}</div>
    </div>
  );
}

export default Test;
