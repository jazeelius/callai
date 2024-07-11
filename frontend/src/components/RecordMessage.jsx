import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

function RecordMessage({ handleStop }) {
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="mt-2">
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            className="bg-black p-4 rounded-full text-white"
          >
            <RecordIcon
              classText={
                status === "recording"
                  ? " animate-pulse text-red-500"
                  : " text-sky-500"
              }
            />
          </button>
          <p className="mt-2 text-black font-light">{status}</p>
        </div>
      )}
    />
  );
}

export default RecordMessage;