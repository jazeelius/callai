import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";

function RecordMessage({ handleStop }) {
  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <div className="m-auto">
          <button
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            className="bg-slate-900 p-4 rounded-full text-white transition-all hover:bg-gray-800"
          >
            <RecordIcon
              classText={
                status === "recording"
                  ? " animate-pulse text-red-500"
                  : " text-sky-500"
              }
            />
          </button>
        </div>
      )}
    />
  );
}

export default RecordMessage;
