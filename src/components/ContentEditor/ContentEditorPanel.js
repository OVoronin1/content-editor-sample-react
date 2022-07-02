import ContentEditorLabel from "./ContentEditorLabel";
import ContentEditorButton from "./ContentEditorButton";

let lastKey = 0;

export function createElement(type = '', props = {}, content, key) {
    switch (type.toLowerCase()) {
        case 'panel':
            return <ContentEditorPanel {...props} key={key} content={content} />;
        case 'label':
            return <ContentEditorLabel {...props} key={key} />
        case 'button':
            return <ContentEditorButton {...props} key={key} />
        default:
            return;
    }
}

export function addMeasure(value) {
    return Number(value) ? value + 'px' : value;
}

export function buildContent(content) {
    if (content && Array.isArray(content))
        return content.map((item, i) => {
            if (item)
                return createElement(item.type, item.props, item.content, i);
            return '';
        });
}

export default function ContentEditorPanel({ width = 400, height = 400, visible = true, content }) {
    return (
        visible &&
        <div style={{
            border: '1px solid', width: addMeasure(width), height: addMeasure(height), background: 'white'
        }}>
            {buildContent(content)}
        </div>
    );
}