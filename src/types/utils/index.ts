export type CreateQuery<T> = {
  Querystring?: Partial<T>
}

export type CreateRequireParams<T> = {
  Params: T
}

export type CreateParams<T> = {
  Params?: Partial<T>
}
