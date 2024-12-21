export type Or<A extends boolean, B extends boolean> = A extends true
  ? B extends true //? A ^ (B v ~B)
    ? true //? A ^ B
    : true //? A ^ ~B
  : B extends true //? ~A ^ (B v ~B)
  ? true //? ~A ^ B
  : false; //? ~A ^ ~B
