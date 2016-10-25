const hapi = require('hapi');
const server = new hapi.Server();

server.connection({
	host: 'localhost',
	port: 8080
});

server.route([ {
	method: 'GET',
	path: '/hello',
	handler: (request, reply) => {
		return reply('hello, world!');
	}
},
{
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		return reply.redirect("/hello").permanent(true);
	}
}]);

server.start((err) => {
	if (err) {
		throw err;
	}

	console.log('Server running at:', server.info.uri);
});
