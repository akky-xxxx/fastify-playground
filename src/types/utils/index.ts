// import
import { AnyObject } from "../common"

// main
export type CreatePartialQuery<T extends AnyObject> = {
  Querystring?: Partial<T>
}

export type CreateRequireParams<T extends AnyObject> = {
  Params: T
}

export type CreatePartialParams<T extends AnyObject> = {
  Params?: Partial<T>
}
