export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true //? A ^ (B v ~B)
    ? true //? A ^ B
    : false //? A ^ ~B
  : B extends true //? ~A ^ (B v ~B)
  ? false //? ~A ^ B
  : false; //? ~A ^ ~B
