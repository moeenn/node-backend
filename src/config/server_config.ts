import type { Env } from "#src/lib/env/env.js"

export class ServerConfig {
    host: string
    port: number

    constructor(env: Env) {
        this.host = env.mustReadString("SERVER_HOST", "localhost")
        this.port = env.mustReadNumber("SERVER_PORT", 8000)
    }

    url(): string {
        return `${this.host}:${this.port}`
    }
}