/**
 * ? Utility Type False<F> to construct Truth types
 * @example False<false> is true
 * * Can be used without a Type Parameter
 * * as a shorthad for false
 * @example False is false
 */
export type False<TruthStatement = true> = TruthStatement extends boolean
  ? TruthStatement extends true
    ? false
    : TruthStatement extends false
    ? true
    : false
  : false;
