/**
 * @since 0.12.0
 */
import { eq } from "fp-ts"
import type {} from "fp-ts/HKT"
import { Apply1 } from "fp-ts/lib/Apply"
import { Functor1 } from "fp-ts/lib/Functor"
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
 * @category Pointed
 */
export const of: Pointed1<URI>["of"] = (a) => ({
  *[Symbol.iterator]() {
    yield a
  },
})

/**
 * @category Functor
 */
export const map =
  <A1, A2>(f: (a: A1) => A2) =>
  (fa: Iterable<A1>): Iterable<A2> => ({
    *[Symbol.iterator]() {
      for (const a of fa) {
        yield f(a)
      }
    },
  })

/**
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: (fa, f) => map(f)(fa),
}

/**
 * @category Apply
 */
export const ap =
  <A1>(fa: Iterable<A1>) =>
  <A2>(fab: Iterable<(a: A1) => A2>): Iterable<A2> => ({
    *[Symbol.iterator]() {
      for (const ab of fab) {
        for (const a of fa) {
          yield ab(a)
        }
      }
    },
  })

/**
 * @category Instances
 */
export const Apply: Apply1<URI> = { ...Functor, ap: (fab, fa) => ap(fa)(fab) }

/**
 * @category Eq
 */
export const getEq = <A>(eqa: eq.Eq<A>): eq.Eq<Iterable<A>> =>
  eq.fromEquals((xs, ys) => {
    const xi = xs[Symbol.iterator]()
    const yi = ys[Symbol.iterator]()

    // same size, same element at each index
    while (true) {
      const x = xi.next()
      const y = yi.next()

      // both done, they match
      /* istanbul ignore next */
      if (x.done && y.done) {
        return true
      }

      // one completed before the other, not a match
      if (x.done !== y.done) {
        return false
      }

      // does not equal, not a match
      if (!eqa.equals(x.value, y.value)) {
        return false
      }

      // both are not at the end of iteration,
      // everything iterated so far matches
      continue
    }
  })
