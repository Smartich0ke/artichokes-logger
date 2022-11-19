const colour = require("node-console-colors");
class Logger {
    infoPrefix = "[INFO] ";
    warnPrefix = "[WARNING] ";
    errorPrefix = "[ERROR] ";
    interactionPrefix = "[INTERACTION]";

    constructor() {    
        this.info("Logger initialized!", true);
    }
    log(message) {
        console.log(colour.set("fg_default", message));
    }
    info(message, bold = false) {
        if(bold) {
        console.log(colour.set("fg_green", this.infoPrefix)+ colour.set("fg_gray", message));
        } else {
            console.log(colour.set("fg_green", this.infoPrefix) + colour.set("fg_default", message));
        }
    }
    warn(message, bold = false) {
        if(bold) {
            console.log(colour.set("fg_yellow", this.warnPrefix) + colour.set("fg_gray", "bold", message));
        } else {
            console.log(colour.set("fg_yellow", this.warnPrefix) + colour.set("fg_default", message));
        }
    }
    error(message, bold = false) {
        if(bold) {
            console.log(colour.set("fg_red", this.errorPrefix) + colour.set("fg_gray", "bold", message));
        } else {
            console.log(colour.set("fg_red", this.errorPrefix) + colour.set("fg_default", message));
        }
    }
    interaction(message, interactionType = null, bold = false) {
        if(bold) {
            console.log(colour.set("fg_purple", this.interactionPrefix) + colour.set("fg_dark_purple", "(" + interactionType + ") ") + colour.set("fg_cyan", message));
        } else {
            console.log(colour.set("fg_purple", this.interactionPrefix) + colour.set("fg_dark_purple", "(" + interactionType + ") ") + colour.set("fg_dark_cyan", message));
        }
    }
}

module.exports = Logger;