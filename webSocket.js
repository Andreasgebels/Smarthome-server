const websocket = require('ws');
const http = require('http');

//const WS_PORT = 8080;
//let wss = new websocket.Server({port: WS_PORT});

//server = https.createServer(httpsOptions);
const server = http.createServer()
const wss = new websocket.Server({server});
module.exports =  wss;

//wss.on('connection', (ws, req) => {
//	ws.id = req.headers.cookie;
//	ws.on('close', err => {
//		terminateOthers(ws);
//		console.log('disconnected on error:',err);
//	});
//	
//	console.log('Client connected!')
//	ws.send('connected!');
//});


wss.listen = WS_PORT =>{
	server.listen(WS_PORT);
}

wss.terminateOthers = ws =>{
	wss.clients.forEach(client => {
		if (client.id === ws.id) {
			client.terminate();
		}
	});
}

wss.terminateUser = user =>{
	wss.clients.forEach(client => {
		client.terminate();
	});
}


wss.sendToOthers = (message, ws) => {
	wss.clients.forEach(client =>{
		if (ws !== client){
			client.send(message);
		}
	});	
}

wss.sendToOwners = (device, message) => {
	wss.clients.forEach(client =>{
		client.send(message);
	});	
}

wss.sendToUser = (user, message) => {
	wss.clients.forEach(client =>{
		client.send(message);
	});	
}

wss.setClientId = (ws, req) =>{
	ws.id = req.headers.cookie;
}

wss.sendToAll = message =>{
	wss.clients.forEach(client =>{
		client.send(message);
	});
}


//function sendToAll(message) {
//	wss.clients.forEach(client =>{
//		client.send(message);
//	});
//}

//function sendToOthers(message, ws) {
//	wss.clients.forEach(client =>{
//			if (ws !== client){
//				client.send(message);
//			}
//		});	
//}


//exports.wss = wss;
//exports.sendToAll = sendToAll;
//exports.sendToOthers = sendToOthers;

