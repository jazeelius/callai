function VoiceInput({
  text,
  transcript,
  isListening,
  startStopListening,
  onChange,
}) {
  return (
    <div className="flex items-center justify-center text-stone-800 px-6 py-4 gap-3 sm:gap-5">
      <textarea
        className="h-11 px-4 pt-2.5 sm:pt-2 w-[60%] resize-none border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        // if listening, show the text + transcript ( adds whitespace if text > 0), otherwise just the text
        value={
          isListening
            ? text + (transcript.length ? " " + transcript : "")
            : text
        }
        disabled={isListening}
        onChange={onChange}
        placeholder="Start Recording..."
      ></textarea>
      <button
        onClick={() => startStopListening()}
        className="font-sans bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 "
      >
        {isListening ? "Stop recording" : "Start recording"}
      </button>
    </div>
  );
}

export default VoiceInput;
