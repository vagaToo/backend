import { ZodError } from 'zod'

export const resolveZodValidationError = (error: ZodError): string => {
  let fullMessage = ''
  error.issues.forEach((issue) => {
    const path = issue.path.join('.')

    if (fullMessage) fullMessage += '. '
    fullMessage += `${path}=${issue.message}`
  })
  return fullMessage.trimEnd()
}
