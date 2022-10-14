/**
 * 
 * Set the property to optional by picking the set of properties `Keys`.
 * If `Keys` are not provided, all the properties will become `Partial`.
 * 
 * @example
 * ```
 * type A = Partialize<{ a: string, b: string }, 'b'>;
 * // result: {
 * //  a: string;
 * //  b?: string;
 * // }
 * 
 * type B = Partialize<{ a: string, b: string }>;
 * // result: {
 * //  a?: string;
 * //  b?: string;
 * // }
 * ```
 */
export type Partialize<
  T extends object,
  K extends keyof T | undefined = undefined
> = K extends keyof T
  ? {
      [P in K]?: T[P];
    } & Omit<T, K>
  : Partial<T>;
