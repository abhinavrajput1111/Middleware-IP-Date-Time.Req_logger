import url from "url";
import fs from "fs";
import { timeLog } from "console";
import { start } from "repl";

const createLog = (req, res, next) => {

    // console.log(req);
    // console.log(req);
    // const urlTo = url.params;
    // console.log(urlTo)

    // console.log(req.ip);
    // console.log(req.url);
    // console.log(req.method);

    const startTime = Date.now();

    const { ip, url, method } = req;

    const date = new Date().toLocaleString();


    res.on("finish", () => {

        let endTime = Date.now();
        const elapsedTime = endTime - startTime;

        let str = `IP - ${ip} , URL - ${url} , Method: ${method} , Date & Time: ${date}, Processing Time: ${elapsedTime}ms\n`;

    console.log(str);

    fs.appendFile("access.log", str, (err) => {
        if (err) {console.log(err)};
    })

    })


    next();
    
};

export {createLog};