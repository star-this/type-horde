/**
 * If the type in the Cond section extends true,
 * * result type will be the Then branch, otherwise,
 * * result type will be the Else branch
 * @example
 * If<IsNever<T>, NeverNeverLand<T>, True>
 */
export type If<Cond, Then, Else> = Cond extends true ? Then : Else;
