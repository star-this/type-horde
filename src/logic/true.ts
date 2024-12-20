/**
 * ? Utility Type True<T> to construct Truth types
 * @example True<true> is true
 * * Can be used without a Type Parameter
 * * as a shorthad for true
 * @example True is true
 */
export type True<TruthStatement = true> = TruthStatement extends true
  ? true
  : false;
