// Node Modules
var express = require("express"),
  _ = require("underscore"),
  when = require("when"),
  log4js = require("log4js");

  // Local vars
var app = express(),
  http = require("http").createServer(app),
  configs = {}, log;
  // io = require("socket.io").listen(http);

log4js.configure({
  appenders: [
    { type: "console" }
  ],
  replaceConsole: true
});

    //,
    // {
    //   "type": "file",
    //   "filename": "logs/log.file"
    // }

log = log4js.getLogger("Express");

configs.server = {
  ip:"localhost",
  port:8080
}

  // Path to our public directory
var pub = __dirname + '/public';

app.use(express.static(pub));
app.use(express.bodyParser());

app.use(log4js.connectLogger(log, { level: log4js.levels.INFO}));

// Custom methods
server = http.listen(configs.server.port, configs.server.ip, function(){
  log.info("====================================================");
  log.info("=========== [ Starting up Web service ] ============");
  log.info("=========== [ IP: %s         ] ===========", server.address().address);
  log.info("=========== [ listening on port: %s ] ============", server.address().port );
  log.info("====================================================");
});

/****    *******
**  Web pages   **
*****   ******/
app.get('/', function(req,rsp){
  rsp.sendfile('./public/index.html');
});