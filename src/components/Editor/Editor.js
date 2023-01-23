import './Editor.css';

export default function Singer({ head, body, shoes }) {
  return (
    <div className="editor">
      <img className="head" src={`${process.env.PUBLIC_URL}/Singers-Clothing/${head}.png`} />
      <img className="body" src={`${process.env.PUBLIC_URL}/Singers-Clothing/${body}.png`} />
      <img className="shoes" src={`${process.env.PUBLIC_URL}/Singers-Clothing/${shoes}.png`} />
    </div>
  );
}
