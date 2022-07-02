import { addMeasure } from "./ContentEditorPanel";

export default function ContentEditrorButton({width = 70, height = 25 , visible = true, caption = 'Button'}) {
    return (
        visible &&
        <button style={{ width: addMeasure(width), height: addMeasure(height)}}>
            {caption}
        </button>
    );
}