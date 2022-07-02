import './App.css';
import ContentEditor from './components/ContentEditor/ContentEditor';

// ------ test------
import { reset } from './components/ContentEditor/contentEditorSlice';
import { useDispatch } from 'react-redux';
import initialState from './components/ContentEditor/test-initial-state';
let initiated = false;
// -----------------

function App() {

  // ------ test------
  const dispatch = useDispatch();
  if (!initiated) {
    dispatch(reset({ content: initialState }));
    initiated = true;
  }
  // -----------------

  return (
    <div className="App">
      <ContentEditor className="ContentEditor" />
    </div>
  );
}

export default App;
