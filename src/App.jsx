import React, { useState } from 'react';
import SentenceEditor from './components/SentenceEditor';

const App = () => {
  const [textStyles, setTextStyles] = useState([
    { bold: false, italic: false, underline: false, fontSize: 16, color: '#000000' },
    { bold: false, italic: false, underline: false, fontSize: 16, color: '#000000' },
    { bold: false, italic: false, underline: false, fontSize: 16, color: '#000000' },
    { bold: false, italic: false, underline: false, fontSize: 16, color: '#000000' }
  ]);

  const sentences = [
    "He's not the sharpest knife in the drawer.",
    "The big building was blazing with lights.",
    "Now you must answer some big questions.",
    "Get your act together!"
  ];

  const updateTextStyle = (index, newStyle) => {
    setTextStyles(prevStyles => {
      const newStyles = [...prevStyles];
      newStyles[index] = { ...newStyle };
      return newStyles;
    });
  };

  return (
    <div className='border-2 flex flex-col w-5/6 m-auto justify-center p-5'>
      {sentences.map((sentence, index) => (
        <SentenceEditor
          key={index}
          text={sentence}
          textStyle={textStyles[index]}
          updateTextStyle={newStyle => updateTextStyle(index, newStyle)}
        />
      ))}
    </div>
  );
};

export default App;
