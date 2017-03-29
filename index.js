/**
 * Created by xubin on 2017/3/28.
 */
var server = require("./server");
var router = require("./route");

server.start(router.route);