import { createLogger, format, transports } from "winston";
const { combine, timestamp } = format;

const logLevel = process.env.LOG_LEVEL || "debug";

const logFormat = format.printf((info) => {
    return `${info.timestamp}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n`;
});
export const logger = createLogger({
    level: logLevel,
    format: combine(
        format.colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        logFormat
    ),
    transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        // new transports.File({ filename: "combined.log" }),
        new transports.Console(),
    ],
});

logger.debug(`Logger configured to level ${logLevel}`);
