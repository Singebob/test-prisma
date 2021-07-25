import Hapi from "@hapi/hapi"
import laabr from "laabr"
import context from "./src/context.js"
import routeApp from "./src/routes/index.js";

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    await server.register({
        plugin: laabr
    })
    await server.start();
    server.route(routeApp)
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init().finally(async () => {
    await context.prisma.$disconnect()
})