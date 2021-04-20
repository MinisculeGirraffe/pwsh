// code-editor.js
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-powershell'
import 'ace-builds/src-noconflict/theme-pastel_on_dark'

const handleOnChange = () => {
    console.log('Changed!')
}

export default function CodeEditor() {
    return (
        <AceEditor
            mode="powershell"
            theme="pastel_on_dark"
            onChange={handleOnChange}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
        />


    )
}