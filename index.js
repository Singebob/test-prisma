import Hapi from "@hapi/hapi"
import context from "./src/context.js"
import routeApp from "./src/routes/index.js";

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    await server.start();
    server.route(routeApp)
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init().finally(async () => {
    await context.prisma.$disconnect()
})