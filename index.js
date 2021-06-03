const server = new GamepadHapticActuator.Server();

server.connection({
    port: 8000,
    host: 'lovalhost'
});

server.start((err) => {
    if(err){
        throw err;
    }

    console.log(`Server started at: ${server.info.url}`);
});




































