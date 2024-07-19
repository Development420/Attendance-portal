import React, { useState } from "react";
import useClipboard from "react-use-clipboard";
import "./createnotes.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Copy, ListRestart, Mic, MicOff } from "lucide-react";
const Createnotes = () => {
  const [textCopy, setTextCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textCopy);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Create Your Notes Here!</h2>
        {/* <br /> */}

        <div className="main-content" onClick={() => setTextCopy(transcript)}>
          {transcript}
          {/* <div className="title"></div> */}
        </div>

        <div className="btn-style">
          <Copy
            onClick={setCopied}
            style={{
              color: "black",
              // padding: "10px 20px",
              margin: "-40px 30px 0px 150px",
              position: "relative",
              marginTop: "-40px",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </Copy>

          <Mic
            onClick={startListening}
            style={{
              color: "black",
              // padding: "10px 20px",
              // margin: "10px",
              margin: "-40px 30px 0px 30px",
              position: "relative",
              marginTop: "-40px",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          />

          <MicOff
            onClick={SpeechRecognition.stopListening}
            style={{
              color: "black",
              // padding: "10px 20px",
              // margin: "10px",
              margin: "-40px 30px 0px 30px",
              position: "relative",
              marginTop: "-40px",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <ListRestart
            onClick={resetTranscript}
            style={{
              color: "black",
              // padding: "10px 20px",
              // margin: "10px",
              margin: "-40px 100px 0px 30px",
              position: "relative",
              marginTop: "-40px",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Createnotes;
