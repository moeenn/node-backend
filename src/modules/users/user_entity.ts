import { z } from "zod"

export class UserEntity {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    deletedAt: Date | null

    #schema = z.object({
        id: z.uuid(),
        name: z.string(),
        email: z.email(),
        password: z.string(),
        created_at: z.coerce.date(),
        deleted_at: z.coerce.date().nullable(),
    })

    constructor(raw: unknown) {
        const v = this.#schema.parse(raw)
        this.id = v.id
        this.email = v.email
        this.name = v.name
        this.password = v.password
        this.createdAt = v.created_at
        this.deletedAt = v.deleted_at
    }
}