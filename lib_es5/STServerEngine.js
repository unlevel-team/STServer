"use strict";

// require our modules
var STServer = require('./serverEngine/ST_Server.js');

/**
 * ST Server Main loop
 */
var stServer = new STServer();
try {
	stServer.init_Server();
	stServer.init_NodesControlService();

	stServer.init_NodesNetManager();
	stServer.init_NodesNetService();

	stServer.init_ServerControlService();

	stServer.init_MiniCLI();
} catch (e) {
	// TODO: handle exception
	console.log("Something happens.");
	console.log(e);
}
//# sourceMappingURL=STServerEngine.js.map
