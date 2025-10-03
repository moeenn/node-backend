import { Hono } from "hono"
import { serve } from "@hono/node-server"
import pino from "pino"
import { Env } from "./lib/env/env.js"
import { Config } from "./config/config.js"
import { registerMiddleware } from "./lib/middleware/register.js"
import { HealthCheckService } from "./modules/health_check/health_check_service.js"
import { HealthCheckController } from "./modules/health_check/health_check_controller.js"

function main(): void {
    const env = new Env(process.env)
    const config = new Config(env)
    const logger = pino()
    const app = new Hono()
    registerMiddleware(app)

    const healthCheckService = new HealthCheckService()
    const healthCheckController = new HealthCheckController(healthCheckService)

    const api = new Hono()
    {
        api.route("health-check", healthCheckController.router())
    }
    app.route("/api/v1", api)

    // start the server.
    serve({ fetch: app.fetch, port: config.server.port }, () => {
        logger.info({ address: config.server.url() }, "starting server")
    })
}

main()