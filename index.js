var http = require('http');
const fs = require("fs");
const { parse } = require('querystring');

var server = http.createServer(function(req, res) {
    if(req.method==="POST"){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        
        req.on('end', () => {
            var postData = parse(body);
            /*Read all tag->value from database.json file*/
            var storedData = JSON.parse(fs.readFileSync("database.json").toString("utf-8"));
            var message = 'Not_found';
			
			/*Get Value*/
            if(req.url === "/tinywebdb/getvalue"){
                message = '["VALUE","'+ postData['tag'] + '","';
                if(storedData[postData['tag']]){
                    message+= storedData[postData['tag']] + '"]';
                }else{
                    message+='Not_found"]';
                }
            }
			
            /*Store Value*/
            if(req.url === "/tinywebdb/storeavalue"){
                storedData[postData['tag']] = postData['value'].split('"').join('').split(' ').join('_');
                fs.writeFileSync("database.json", JSON.stringify(storedData, null, 2), (err)=>{
                    console.log("Internal Error Occured," + err);
                })
                message = '["STORED","'+ postData['tag'] +'","Successfully_Stored."]';
            }
            
            /*Response to client*/
            res.end(message);
        });
    }else{
        var message = 'This is TinyWebDB Node server.';
        res.end(message);
    }

});

server.listen();

