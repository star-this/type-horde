/**
 * ? Not: turns true to false, and false to true
 */
export type Not<P> = P extends boolean
  ? P extends true
    ? false
    : true
  : never;
