const http = require('http');

//creating http server with the variable

const server = http.createServer(function(req, res){
    //headers
    //res.writeHead(200, {'content-Type': 'text/plain'});

    //res.writeHead(200, {'content-Type': 'application/json'});

    res.writeHead(200, {'content-Type': 'text/html'});

    //send back the response
    //res.end('Welcome to Zuri internship!')
    // res.end(`
    //     {
    //         "name": "Thompson",
    //         "school": "FUTO",
    //         "Occupation": Civil Engineer"
    //     }
    // `)

    res.end(`
        <html>
            <body style="background-color:black; text-align:center; color:white;" >
                <h1>I am very happy to be in this class</h1>
                <p>Really nice to meet you all</p>
            
            </body>
        </html>
    `)
});

//create a port
server.listen(4000, '127.0.0.1');

console.log("Yes you have created a server!")