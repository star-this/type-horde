/**
 * ? Utility Type to construct True types
 * @example True<true> is true
 * @example True is true
 */
export type True<TruthValue = true> = TruthValue extends true ? true : false;
