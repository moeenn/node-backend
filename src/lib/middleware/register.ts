import type { Hono } from "hono"
import { trimTrailingSlash } from "hono/trailing-slash"
import { secureHeaders } from "hono/secure-headers"
import { logger } from "hono/logger"

export function registerMiddleware(app: Hono) {
    app.use(logger())
    app.use(secureHeaders())
    app.use(trimTrailingSlash())
}