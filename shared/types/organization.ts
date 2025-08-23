import * as z from 'zod'

export const createTeamSchema = z.object({
    name: z.string().min(1, 'Team name is required'),
    slug: z.string().min(1, 'Team slug is required'),
    logo: z.string().optional(),
    // metadata: z.record(z.any()).optional(),
})

export type createTeamSchema = z.infer<typeof createTeamSchema>;