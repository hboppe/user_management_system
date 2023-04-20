import { z } from 'zod'

const createUserRequestSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' }).max(20, { message: 'Name must be not more than 20 characters long.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), {message: 'Password invalid'}),
  admin: z.boolean().optional()
});

const userSchemaResponse = createUserRequestSchema.extend({
  id: z.number().int().positive(),
  active: z.boolean(),
  admin: z.boolean()
}).omit({
  password: true
});

const updateUserRequestSchema = createUserRequestSchema.omit({
  admin: true
}).partial();

const userSchema = createUserRequestSchema.extend({
  id: z.number(),
  active: z.boolean()
})

export {
  createUserRequestSchema,
  userSchemaResponse,
  updateUserRequestSchema,
  userSchema
}