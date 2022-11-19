const colour = require("node-console-colors");
const winston = require('winston');

class Logger {
    infoPrefix = "[INFO] ";
    warnPrefix = "[WARNING] ";
    errorPrefix = "[ERROR] ";
    interactionPrefix = "[INTERACTION]";
    logfile = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
          new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
          new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
    });
    constructor() {    
        this.info("Logger initialized!", true);
    }
    log(message) {
        this.logfile.log({
            level: 'info',
            message: message,
        });
        console.log(colour.set("fg_default", message));
    }
    info(message, bold = false) {
        this.logfile.log({
            level: 'info',
            message: message,
        });
        if(bold) {
        console.log(colour.set("fg_green", this.infoPrefix)+ colour.set("fg_gray", message));
        } else {
            console.log(colour.set("fg_green", this.infoPrefix) + colour.set("fg_default", message));
        }
    }
    warn(message, bold = false) {
        this.logfile.log({
            level: 'warn',
            message: message,
        });
        if(bold) {
            console.log(colour.set("fg_yellow", this.warnPrefix) + colour.set("fg_gray", "bold", message));
        } else {
            console.log(colour.set("fg_yellow", this.warnPrefix) + colour.set("fg_default", message));
        }
    }
    error(message, bold = false) {
        this.logfile.log({
            level: 'error',
            message: message,
        });
        if(bold) {
            console.log(colour.set("fg_red", this.errorPrefix) + colour.set("fg_gray", "bold", message));
        } else {
            console.log(colour.set("fg_red", this.errorPrefix) + colour.set("fg_default", message));
        }
    }
    interaction(message, interactionType = null, bold = false) {
        if(interactionType) {
            this.logfile.log({
                level: 'info',
                message: message,
            });
        if(bold) {
            console.log(colour.set("fg_purple", this.interactionPrefix) + colour.set("fg_dark_purple", "(" + interactionType + ") ") + colour.set("fg_cyan", message));
        } else {
            console.log(colour.set("fg_purple", this.interactionPrefix) + colour.set("fg_dark_purple", "(" + interactionType + ") ") + colour.set("fg_dark_cyan", message));
        }
    }
}
}

module.exports = Logger;