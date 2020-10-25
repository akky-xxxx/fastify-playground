export type ServiceInformation = Record<"serviceName" | "endpoint", string>

export type Api2client<S, T> = (data: S) => T
