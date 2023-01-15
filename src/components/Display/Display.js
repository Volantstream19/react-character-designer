import { useState } from 'react';
import Controls from '../Controls/Controls';
import Editor from '../Editor/Editor';
import Catchphrase from '../Catchphrase/Catchphrase';
import './Display.css';

export default function Display() {
  const [head, setHead] = useState('lizzo-head');
  const [headCount, headCountChanged] = useState(0);
  const [body, setBody] = useState('clairo-body');
  const [bodyCount, bodyCountChanged] = useState(0);
  const [shoes, setShoes] = useState('shoe1');
  const [shoeCount, shoeCountChanged] = useState(0);
  const [catchphrase, newCatchphrase] = useState('Nothing is real');
  const [catchArr, setCatchphrase] = useState([]);

  const addCatchphrase = () => {
    setCatchphrase((preCatch) => [...preCatch, catchphrase]);
    newCatchphrase();
  };

  const changeCounter = `You've changed the head ${headCount}, you've changed the body ${bodyCount} you've changed the shoe ${shoeCount} time(s)`;

  const handleChange = (lig) => {
    if (lig === 'head') {
      headCountChanged((state) => state + 1);
    } else if (lig === 'body') {
      bodyCountChanged((state) => state + 1);
    } else if (lig === 'shoes') {
      shoeCountChanged((state) => state + 1);
    }
  };

  return (
    <div className="singer-select">
      <Editor head={head} body={body} shoes={shoes} />

      <Controls
        head={head}
        body={body}
        shoes={shoes}
        handleChange={handleChange}
        setHead={setHead}
        setBody={setBody}
        setShoes={setShoes}
        addCatchphrase={addCatchphrase}
        newCatchphrase={newCatchphrase}
      />

      <div className="change-counter">{changeCounter}</div>

      <Catchphrase catchArr={catchArr} />
    </div>
  );
}
