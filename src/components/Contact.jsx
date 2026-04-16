import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    setSent(true);
    setMessage("");

    setTimeout(() => {
      setSent(false);
    }, 2000);
  };

  return (
    <section id="contact" className="w-full px-10 py-16 text-center backdrop-blur-md bg-black/40 border-t border-violet-900/30" >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl mb-8 text-center text-white font-bold">Contact Information</h2>
        <div className="flex flex-col justify-center items-center gap-2 text-sm text-gray-300">
          <a href="#">🖂 Email: rochellesmenzi@gmail.com</a>
          <a href="#">✆ Phone No.: 09456242982</a>
        </div>
        
        <div className="flex justify-center items-center gap-6 text-sm text-gray-300">
          <a className="hover:text-violet-400 transition" href="#">Facebook</a>
          <span className="text-gray-600">|</span>
          <a className="hover:text-violet-400 transition" href="#">Instagram</a>
          <span className="text-gray-600">|</span>
          <a className="hover:text-violet-400 transition" href="#">GitHub</a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your Message"
            className="p-3 rounded-md w-full sm:w-auto bg-black/40 backdrop-blur-md text-white border border-violet-900/30 focus:outline-none focus:border-violet-500 transition"
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
          <button onClick={handleSend}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 transition rounded-md text-white font-medium"
          >Send</button>
        </div>

        {sent && (
          <p className="text-white-400 mt-10">Message sent successfully.</p>
        )}
        <p className="text-gray-200">Feel free to leave your message or contact me anytime!</p>
      </div>
    </section>
  );
}