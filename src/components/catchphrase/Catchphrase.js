import React from 'react';

export default function Catchphrase({ catchArr }) {
  const catchphrases = catchArr.map((catchphrase, l) => <p key={l}>{catchphrase}</p>);
  return <div className="catchphrases">{catchphrases}</div>;
}
