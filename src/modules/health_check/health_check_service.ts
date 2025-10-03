export class HealthCheckService {
    /**
     * check memory usage of the running server, make sure this endpoint is protected.
     */
    memoryUsage() {
        const toMB = (n: number) => Math.round((n / 1024 / 1024) * 100) / 100
        const used = process.memoryUsage()

        const heapTotal = toMB(used.heapTotal)
        const heapUsed = toMB(used.heapUsed)

        return {
            heap_total: heapTotal + " MB",
            heap_used: heapUsed + " MB",
        }
    }

    /**
     * check status of the API and its connection with the database
     *
     */
    async healthcheck() {
        // TODO: implement.
        const isDbConnected = true
        const seconds = Math.floor(process.uptime())

        return {
            status: "OK",
            uptime: `${seconds}s`,
            timestamp: Date.now(),
            database: isDbConnected ? "CONNECTED" : "DISCONNECTED",
        }
    }
}