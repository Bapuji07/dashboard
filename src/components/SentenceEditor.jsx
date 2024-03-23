import React from 'react';

const SentenceEditor = ({ text, textStyle, updateTextStyle }) => {
  const handleBoldClick = () => {
    updateTextStyle({ bold: !textStyle.bold });
  };

  const handleItalicClick = () => {
    updateTextStyle({ italic: !textStyle.italic });
  };

  const handleUnderlineClick = () => {
    updateTextStyle({ underline: !textStyle.underline });
  };

  const handleFontSizeChange = event => {
    if(event.target.value<30 && event.target.value>10){
        updateTextStyle({ fontSize: parseInt(event.target.value) });
    }
   
  };

  const handleColorChange = event => {
    updateTextStyle({ color: event.target.value });
  };

  const textStyleClass = `${textStyle.bold ? 'font-bold' : ''} ${textStyle.italic ? 'italic' : ''} ${textStyle.underline ? 'underline' : ''}`;

  return (
    <div className='flex flex-col md:flex-row md:gap-10 p-5 items-center'>
      <div className='border-2 w-full gap-1 md:gap-5 flex flex-wrap p-3 justify-center items-center'>
        <button onClick={handleBoldClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none text-sm md:text-md">Bold</button>
        <button onClick={handleItalicClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none text-sm md:text-md">Italic</button>
        <button onClick={handleUnderlineClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md focus:outline-none text-sm md:text-md">Underline</button>
        <input type="number" value={textStyle.fontSize} onChange={handleFontSizeChange} className="rounded-md shadow-md focus:outline-none w-10" />
        <input type="color" value={textStyle.color} onChange={handleColorChange} className="rounded-md shadow-md focus:outline-none" />
      </div>
      <div className='border-2 w-full py-4 px-2 flex justify-center'>
        <p className={textStyleClass} style={{ fontSize: `${textStyle.fontSize}px`, color: textStyle.color }}>{text}</p>
      </div>
    </div>
  );
};

export default SentenceEditor;
