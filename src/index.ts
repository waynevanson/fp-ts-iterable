/**
 * @since 0.12.0
 */
import { array, eq, readonlyArray, apply, functor } from "fp-ts"
import type {} from "fp-ts/HKT"
import { Applicative1 } from "fp-ts/lib/Applicative"
import { Apply1 } from "fp-ts/lib/Apply"
import { Chain1 } from "fp-ts/lib/Chain"
import { Functor1 } from "fp-ts/lib/Functor"
import { Monad1 } from "fp-ts/lib/Monad"
import { NaturalTransformation11 } from "fp-ts/lib/NaturalTransformation"
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
 * @category Pointed
 */
export const Pointed: Pointed1<URI> = { URI, of }

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
 * @category Functor
 */
export const bindTo = functor.bindTo(Functor)

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
 * @category Instances
 */
export const Applicative: Applicative1<URI> = { ...Pointed, ...Apply }

/**
 * @category Chain
 */
export const chain =
  <A1, A2>(f: (a: A1) => Iterable<A2>) =>
  (fa: Iterable<A1>): Iterable<A2> => ({
    *[Symbol.iterator]() {
      for (const a1 of fa) {
        for (const a2 of f(a1)) {
          yield a2
        }
      }
    },
  })

/**
 * @category Instances
 */
export const Chain: Chain1<URI> = { ...Apply, chain: (fa, f) => chain(f)(fa) }

/**
 * @category Instances
 */
export const Monad: Monad1<URI> = { ...Chain, ...Applicative }

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

export const ToReadonlyArray: NaturalTransformation11<
  URI,
  readonlyArray.URI
> = (ax) => {
  const result = []

  for (const a of ax) {
    result.push(a)
  }

  return result
}

export const FromReadonlyArray: NaturalTransformation11<
  readonlyArray.URI,
  URI
> = (ax) => ({
  *[Symbol.iterator]() {
    for (const a of ax) {
      yield a
    }
  },
})

// {skip,take}{,While,WhileMap}{,WithIndex}{,right}
