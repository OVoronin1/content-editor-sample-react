export default function ContentEditorLabel({caption = 'Label', visible = true}) {
    return ( visible && <span>{caption}</span>)
}