import { useState } from 'react';
import Controls from '../Controls/Controls';
import Editor from '../Editor/Editor';
import './Display.css';

export default function Display() {
  const [head, setHead] = useState('lizzo-head');
  const [headCount, headCountChanged] = useState(0);
  const [body, setBody] = useState('clairo-body');
  const [bodyCount, bodyCountChanged] = useState(0);

  const handleChange = (lig) => {
    if (lig === 'head') {
      headCountChanged((state) => state + 1);
    } else if (lig === 'body') {
      bodyCountChanged((state) => state + 1);
    }
  };

  const changeCounter = `You've changed the head ${headCount}, you've changed the body ${bodyCount} time(s)`;

  return (
    <div className="singer-select">
      <Editor head={head} body={body} />

      <Controls
        head={head}
        body={body}
        handleChange={handleChange}
        setHead={setHead}
        setBody={setBody}
      />

      <div className="change-counter">{changeCounter}</div>
    </div>
  );
}
