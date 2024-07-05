import { useEffect, useRef, useState } from "react";

function useSpeechToText(options = {}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(function () {
    if (!("webkitSpeechRecognition" in window)) {
      alert("This browser does not support speech recognition");
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || "en-US";
    recognition.continuous = options.continuous || false;

    if ("webkitSpeechGrammarList" in window) {
      const grammar =
        options.grammar ||
        "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! ;";
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = function (event) {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }

      setTranscript(text);
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error detected: " + event.error);
    };

    recognition.onend = function () {
      setIsListening(false);
      setTranscript("");
    };

    return function () {
      recognition.stop();
    };
  }, []);

  function startListening() {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }

  function stopListening() {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  }

  return { isListening, transcript, startListening, stopListening };
}

export default useSpeechToText;
