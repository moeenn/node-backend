import { Hono, type Context } from "hono";
import type { HealthCheckService } from "./health_check_service.js";

export class HealthCheckController {
    constructor(
        private healthCheckService: HealthCheckService,
    ) { }

    // TODO: add route protection.
    router(): Hono {
        const router = new Hono()
        router.get("/", this.healthCheck.bind(this))
        router.get("/memory", this.memoryUsage.bind(this))
        return router
    }

    async healthCheck(ctx: Context) {
        const res = await this.healthCheckService.healthcheck()
        return ctx.json(res)
    }

    async memoryUsage(ctx: Context) {
        const res = this.healthCheckService.memoryUsage()
        return ctx.json(res)
    }
}