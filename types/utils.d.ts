export type QueryResultEntity<T> = T extends { [K in keyof T]: Array<infer U> }
  ? U
  : never
