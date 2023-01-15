import { useState } from 'react';
import Controls from '../Controls/Controls';
import Editor from '../Editor/Editor';
import './Display.css';

export default function Display() {
  const [head, setHead] = useState('lizzo-head');
  const [headCount, headCountChanged] = useState(0);

  const handleChange = (lig) => {
    if (lig === 'head') {
      headCountChanged((state) => state + 1);
    }
  };

  const changeCounter = `you have changed the head ${headCount} time(s)`;

  return (
    <div className="singer-select">
      <Editor head={head} />

      <Controls head={head} setHead={setHead} handleChange={handleChange} />

      <div className="change-counter">{changeCounter}</div>
    </div>
  );
}
