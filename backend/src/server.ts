import app from "./app";
import http from "http";
import { logger } from "./logger/logger";

const launchServer = async (server: http.Server, port: number) => {
    server.listen(port, async (error: any) => {
        if (error) {
            logger.debug(error);
        } else {
            logger.info(`Server listening on port ${port}`);
        }
    });
};

function getPort(): number {
    if (process.env.PORT) {
        logger.info(`Port set to ${process.env.PORT} from PORT env var`);

        return parseInt(process.env.PORT, 10);
    } else {
        return 3000;
    }
    // else if (config && config.api && config.api.port) {

    //     logger.info(`Port set to ${config.api.port} from config`)

    //     return config.api.port
    // }
    // else {
    //     throw Errors.make({
    //         message: 'Failed to parse HTTP port from config or the PORT env var'
    //     })
    // }
}

if (require.main === module) {
    const port = getPort();

    const server = http.createServer(app);
    launchServer(server, port);
}

export default launchServer;
