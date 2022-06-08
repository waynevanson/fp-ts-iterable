/**
 * @since 0.12.0
 */
import {
  array,
  eq,
  readonlyArray,
  apply,
  functor,
  chain as chain_,
  option,
  ord,
  number,
} from "fp-ts"
import type {} from "fp-ts/HKT"
import { Applicative1 } from "fp-ts/lib/Applicative"
import { Apply1 } from "fp-ts/lib/Apply"
import { Chain1 } from "fp-ts/lib/Chain"
import {
  PredicateWithIndex,
  RefinementWithIndex,
} from "fp-ts/lib/FilterableWithIndex"
import { pipe } from "fp-ts/lib/function"
import { Functor1 } from "fp-ts/lib/Functor"
import { Monad1 } from "fp-ts/lib/Monad"
import { NaturalTransformation11 } from "fp-ts/lib/NaturalTransformation"
import { Pointed1 } from "fp-ts/lib/Pointed"
import { Predicate } from "fp-ts/lib/Predicate"
import { Refinement } from "fp-ts/lib/Refinement"

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
export const mapWithIndex =
  <A1, A2>(f: (index: number, a: A1) => A2) =>
  (fa: Iterable<A1>): Iterable<A2> => ({
    *[Symbol.iterator]() {
      let i = 0
      for (const a of fa) {
        yield f(i++, a)
      }
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
 * @category Functor
 */
export const flap = functor.flap(Functor)

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
 * @category Apply
 */
export const apFirst = apply.apFirst(Apply)

/**
 * @category Apply
 */
export const apSecond = apply.apSecond(Apply)

/**
 * @category Apply
 */
export const apS = apply.apS(Apply)

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
 * @category Chain
 */
export const bind = chain_.bind(Chain)

/**
 * @category Chain
 */
export const chainFirst = chain_.chainFirst(Chain)

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

/**
 * @category NaturalTransformation
 */
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

/**
 * @category NaturalTransformation
 */
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

/**
 * @category Combinators
 */
export const skipWhileMapWithIndex =
  <A1, A2>(f: (index: number, a: A1) => option.Option<A2>) =>
  (fa: Iterable<A1>): Iterable<A1> => ({
    *[Symbol.iterator]() {
      let i = 0
      const iterator = fa[Symbol.iterator]()

      while (true) {
        const result = iterator.next()

        if (result.done) {
          return
        }

        if (option.isNone(f(i++, result.value))) {
          yield result.value
          break
        }
      }

      while (true) {
        const result = iterator.next()

        if (result.done) {
          return
        }

        yield result.value
      }
    },
  })

/**
 * @category Combinators
 */
export const skipWhileMap = <A1, A2>(f: (a: A1) => option.Option<A2>) =>
  skipWhileMapWithIndex((i, a: A1) => f(a))

/**
 * @category Combinators
 */
export const skipWhileWithIndex = <A1, A2 extends A1>(
  f: PredicateWithIndex<number, A1> | RefinementWithIndex<number, A1, A2>
) =>
  skipWhileMapWithIndex((i, a: A1) =>
    pipe(
      a,
      option.fromPredicate((a) => f(i, a))
    )
  )

/**
 * @category Combinators
 */
export const skipWhile = <A1, A2 extends A1>(
  f: Predicate<A1> | Refinement<A1, A2>
) => skipWhileWithIndex((i, a: A1) => f(a))

/**
 * @category Combinators
 */
export const skip =
  (count: number) =>
  <A1>(fa: Iterable<A1>) =>
    pipe(
      fa,
      skipWhileWithIndex(
        (i) => i < ord.clamp(number.Ord)(0, Number.MAX_SAFE_INTEGER)(count)
      )
    )
