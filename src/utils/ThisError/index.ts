type constructorArgs = {
  status?: number
  message?: string
  error?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class ThisError extends Error {
  status: number

  constructor(args: constructorArgs) {
    const message = args?.message || args.error?.message
    super(message)

    this.message = message
    this.status = args?.status || args.error?.status || 500
  }
}
