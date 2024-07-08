function Chat({ input, setInput, sendMessage, response }) {
  return (
    <div>
      <div>
        <input
          className="h-11 px-4 pt-2.5 sm:pt-2 w-[60%] resize-none border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="font-sans bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 "
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Chat;
