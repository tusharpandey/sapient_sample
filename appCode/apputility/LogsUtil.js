class Logger {
    className = "Logger"
    constructor(name) {
        this.className = name
    }

    showLogs(message) {
        console.log(this.className, message)
    }

    showTable(message) {
        console.table(message)
    }
}

export default Logger