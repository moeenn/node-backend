import { Env } from "#src/lib/env/env.js"
import { DatabaseConfig } from "./database_config.js"
import { ServerConfig } from "./server_config.js"

export class Config {
    server: ServerConfig
    database: DatabaseConfig

    constructor(env: Env) {
        this.server = new ServerConfig(env)
        this.database = new DatabaseConfig(env)
    }
}