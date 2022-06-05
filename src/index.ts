/**
 * @since 0.12.0
 */
import type {} from "fp-ts/HKT"
import { Pointed1 } from "fp-ts/lib/Pointed"

/**
 * @category Model
 * @since 0.12.0
 */
export const URI = "Iterable"

/**
 * @category Model
 * @since 0.12.0
 */
export type URI = typeof URI

declare module "fp-ts/HKT" {
  export interface URItoKind<A> {
    readonly [URI]: Iterable<A>
  }
}

/**
 * @category Constructors
 */
export const of: Pointed1<URI>["of"] = (a) => ({
  *[Symbol.iterator]() {
    yield a
  },
})
