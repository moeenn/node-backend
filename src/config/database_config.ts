import type { Env } from "../lib/env/env.js"

export class DatabaseConfig {
    url: string

    constructor(env: Env) {
        this.url = env.mustReadString("DATABASE_URL")
    }
}