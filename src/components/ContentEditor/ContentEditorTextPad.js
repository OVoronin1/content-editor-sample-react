import { formatString } from "./parsers";
import './ContentEditorTextPad.scss';

export default function TextPad({ hidden = false, content = '', onClick = () => { } }) {
    return (
        <>
            {!hidden &&
                <div className='textpad-curtain' onClick={onClick}>
                    <textarea readOnly className='textpad-pad' value={formatString(JSON.stringify(content))} />
                </div>
            }
            <button className='textpad-button-show' onClick={onClick}>
                {hidden ? 'Текст' : 'Скрыть'}
            </button>
        </>
    )
}