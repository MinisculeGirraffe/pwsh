
import nc from "next-connect";
import cors from "cors";

const handler = nc()
    .use(cors())
    .post(async (req, res) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "scriptblock": req.body
        });
        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("https://api.pwsh.rest", requestOptions)
        res.json(await response.text())



    });



export default handler;