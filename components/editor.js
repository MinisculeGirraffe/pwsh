// code-editor.js
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-powershell'
import 'ace-builds/src-noconflict/theme-pastel_on_dark'
import "ace-builds/src-min-noconflict/ext-language_tools"
import 'ace-builds/src-min-noconflict/snippets/powershell'
import 'ace-builds/src-min-noconflict/ext-beautify'
import 'ace-builds/src-min-noconflict/ext-prompt'
import { useInputState } from '../lib/useInputState'
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/keybinding-vscode'

import { executeCode } from '../lib/api'
import React from 'react'

import prism from 'prismjs'
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-powershell.min.js"

export default function CodeEditor() {
    const code = useInputState()
    const [result,setresult] = React.useState()
    const handleSubmit = async () => {
       const res = await executeCode(code.value)
       console.log(res.result)
       setresult(res.result)
    }

    React.useEffect(() => {
        Prism.highlightAll();
      }, [result]);

    return (
        <div className=''>
            <span className='flex'>
            <AceEditor
                mode="powershell"
                theme='pastel_on_dark'
                {...code}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
                style={{width: '100%'}}
                
            />
          

            </span>
            <button className='bg-gray-400' onClick={() => {handleSubmit()}}>Run Code</button>
            <pre lang='powershell' ><code>{result}</code></pre>
        </div>
    )
}