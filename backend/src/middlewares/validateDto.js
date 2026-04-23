export function validateDto(schema, target = 'body') {
  return async function validate(req, res, next) {
    try {
      const parsed = await schema.parseAsync(req[target])
      req[target] = parsed
      next()
    } catch (error) {
      next(error)
    }
  }
}
