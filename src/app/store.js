import { configureStore } from '@reduxjs/toolkit';
import contentEditorReducer from '../components/ContentEditor/contentEditorSlice';

export default configureStore({
  reducer: {
    contentEditor: contentEditorReducer
  }
});
