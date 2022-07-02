import { createSlice } from "@reduxjs/toolkit";

export const contentEditorSlice = createSlice({
    name: 'contentEditor',
    initialState: [],
    reducers: {
        reset: (state, action) => {
            return action.payload.content || [];
        },
        update: (state, action) => {
            const { path, value } = action.payload;

            if (!path || !path.length || path.shift() !== 'content' || !path.length)
                return state;

            const newState = [...state];
            const lastKey = path.pop();
            const updated = path.reduce((acc, propKey) => {
                if (!acc || !propKey)
                    return;
                let item = acc[propKey];
                if (!item)
                    return;
                if (Array.isArray(item))
                    item = [...item];
                else if (typeof (item) === 'object')
                    item = { ...item }
                else
                    return;
                acc[propKey] = item;
                return item;
            }, newState);

            if (!updated)
                return state;
            updated[lastKey] = value;
            return newState;
        }
    }
});

export const { reset, update } = contentEditorSlice.actions;
export default contentEditorSlice.reducer;