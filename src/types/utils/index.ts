export type CreatePartialQuery<T> = {
  Querystring?: Partial<T>
}

export type CreateRequireParams<T> = {
  Params: T
}

export type CreatePartialParams<T> = {
  Params?: Partial<T>
}
