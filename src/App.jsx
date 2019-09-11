import React, { useState, useEffect } from "react";
import "./App.scss";
import jsFileDownload from "js-file-download";
import { getFonts, getImage } from "./api";
import Spinner from "./components/Spinner/Spinner.jsx";

export default () => {
  const [fonts, setFonts] = useState([]);
  const [fontSize, setFontSize] = useState("50");
  const [fontId, setFontId] = useState(1);
  const [text, setText] = useState(`The first line of text
The second line of text
The third line of text`);
  const [isDownloading, setIsDownloading] = useState(false);

  const fetchImage = async () => {
    setIsDownloading(true);
    try {
      const { data } = await getImage({
        fontSize,
        handwritingStyleId: fontId,
        text
      });
      jsFileDownload(data, "preview.png");
    } catch (err) {
      alert(err.message);
    }
    setIsDownloading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getFonts();
        setFonts(data.fonts);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className="form">
        <h1>Font Preview</h1>
        <div className="row">
          <div className="label">Font Size</div>
          <input
            className="input"
            type="text"
            value={fontSize}
            onChange={e => setFontSize(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="label">Font Family</div>
          <select
            className="select"
            value={fontId}
            onChange={e => setFontId(e.target.value)}
          >
            {fonts.map((font, i) => (
              <option value={font.id} key={i}>
                {font.label}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <div className="label">Text</div>
          <textarea
            className="textarea"
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="row row-button">
          {isDownloading ? (
            <Spinner />
          ) : (
            <button className="button" type="button" onClick={fetchImage}>
              Download Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
