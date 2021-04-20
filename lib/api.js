export const executeCode = async (script) => {
    const res = await fetch('/api/exec', {
        method: 'post',
        body: encodeBase64(script),
    })

    return await res.json()
}
const encodeBase64 = (string) => {
    let buff = Buffer.from(string,'utf-8')
    return buff.toString('base64')
}

