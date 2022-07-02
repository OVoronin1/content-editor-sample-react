import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './contentEditorSlice';
import './ContentEditor.scss';
import { useState } from 'react';
import { buildContent } from './ContentEditorPanel';
import { parsePath, parseString } from './parsers';
import TextPad from './ContentEditorTextPad';

export default function ContentEditor() {
  const [path, setPath] = useState('');
  const [value, setValue] = useState('');
  const [hiddenTextPad, setHiddenTextPad] = useState(true);
  const content = useSelector(state => state.contentEditor);
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();
    dispatch(update({
      path: parsePath(path),
      value: parseString(value)
    }));
  };

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'path':
        console.log('path: ', parsePath(e.target.value));
        return setPath(e.target.value);
      case 'value':
        console.log('value: ', parseString(e.target.value));
        return setValue(e.target.value);
    }
  };

  const handleTextPadClick = e => {
    setHiddenTextPad( hiddenTextPad ? false : true);
  };

  return (
    <div className="ContentEditor">
      <form onSubmit={handleSumbit}>
        <label>
          Путь
          <input type="text" name="path" value={path} onChange={handleInputChange} />
        </label>
        <label>
          Новое значение
          <input type="text" name="value" value={value} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Применить" />
      </form>
      <div className="content">
        {buildContent(content)}
      </div>

      <TextPad content={content} onClick={handleTextPadClick} hidden={hiddenTextPad} />

    </div>
  );
}
