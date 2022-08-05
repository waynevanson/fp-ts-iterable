/**
 * @since 0.12.0
 */
import {
  apply,
  chain as chain_,
  eq,
  functor,
  number,
  option,
  ord,
  readonlyArray,
} from "fp-ts"
import type {} from "fp-ts/HKT"
import { Applicative1 } from "fp-ts/lib/Applicative"
import { Apply1 } from "fp-ts/lib/Apply"
import { Chain1 } from "fp-ts/lib/Chain"
import {
  PredicateWithIndex,
  RefinementWithIndex,
} from "fp-ts/lib/FilterableWithIndex"
import { flow, identity, pipe } from "fp-ts/lib/function"
import { Functor1 } from "fp-ts/lib/Functor"
import { FunctorWithIndex1 } from "fp-ts/lib/FunctorWithIndex"
import { Monad1 } from "fp-ts/lib/Monad"
import { NaturalTransformation11 } from "fp-ts/lib/NaturalTransformation"
import { Pointed1 } from "fp-ts/lib/Pointed"
import { Predicate } from "fp-ts/lib/Predicate"
import { Refinement } from "fp-ts/lib/Refinement"
import { Unfoldable1 } from "fp-ts/lib/Unfoldable"
import { Droppable1 } from "./droppable"
import { DroppableWithIndex1 } from "./droppable-with-index"
import { Iteratable1 } from "./iteratable"
import { Takeable1 } from "./takeable"

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
export const map = <A1, A2>(f: (a: A1) => A2) =>
  mapWithIndex((i, a: A1) => f(a))

/**
 * @category Instances
 */
export const Functor: Functor1<URI> = {
  URI,
  map: (fa, f) => map(f)(fa),
}

/* istanbul ignore next */
/**
 * @category Instances
 */
export const FunctorWithIndex: FunctorWithIndex1<URI, number> = {
  ...Functor,
  mapWithIndex: (fa, f) => mapWithIndex(f)(fa),
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
export const flatten = <A1>(fa: Iterable<Iterable<A1>>): Iterable<A1> =>
  pipe(fa, chain(identity))

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
 * @category Combinators
 */
export const dropLeftWhileMapWithIndex: DroppableWithIndex1<
  URI,
  number
>["dropWhileMapWithIndex"] = (f) => (fa) => ({
  *[Symbol.iterator]() {
    let i = 0
    const iterator = fa[Symbol.iterator]()

    while (true) {
      const result = iterator.next()

      if (result.done) {
        return
      }

      if (option.isNone(f(i++, result.value))) {
        yield result.value as never
        break
      }
    }

    while (true) {
      const result = iterator.next()

      if (result.done) {
        return
      }

      yield result.value as never
    }
  },
})

/**
 * @category Combinators
 */
export const dropLeft =
  (count: number) =>
  <A1>(fa: Iterable<A1>) =>
    pipe(
      fa,
      dropLeftWhileWithIndex(
        (i) => i < ord.clamp(number.Ord)(0, Number.MAX_SAFE_INTEGER)(count)
      )
    )

/**
 * @category Combinators
 */
export const dropLeftWhileMap: Droppable1<URI>["dropWhileMap"] = (f) =>
  dropLeftWhileMapWithIndex((i, a) => f(a) as never)

/**
 * @category Instances
 */
export const DroppableLeft: Droppable1<URI> = {
  URI,
  drop: dropLeft,
  dropWhileMap: dropLeftWhileMap,
}

/**
 * @category Instances
 */
export const DroppableLeftWithIndex: DroppableWithIndex1<URI, number> = {
  ...DroppableLeft,
  dropWhileMapWithIndex: dropLeftWhileMapWithIndex,
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

/**
 * @category Combinators
 */
export const dropLeftWhileWithIndex = <A1, A2 extends A1>(
  f: PredicateWithIndex<number, A1> | RefinementWithIndex<number, A1, A2>
) =>
  dropLeftWhileMapWithIndex((i, a: A1) =>
    pipe(
      a,
      option.fromPredicate((a) => f(i, a))
    )
  )

/**
 * @category Combinators
 */
export const dropLeftWhile = <A1, A2 extends A1>(
  f: Predicate<A1> | Refinement<A1, A2>
) => dropLeftWhileWithIndex((i, a: A1) => f(a))

/**
 * @category Combinators
 */
export const dropRightWhileMapWithIndex =
  <A1, A2>(f: (i: number, a: A1) => option.Option<A2>) =>
  (fa: Iterable<A1>): Iterable<A1> => ({
    *[Symbol.iterator]() {
      const result = ToReadonlyArray(fa) as Array<A1>

      for (let i = result.length - 1; i >= 0; i--) {
        const value = f(i, result[i])
        if (option.isSome(value)) {
          result.pop()
        } else {
          break
        }
      }

      yield* FromReadonlyArray(result)
    },
  })

/**
 * @category Combinators
 */
export const dropRightWhileWithIndex =
  <A1, A2 extends A1>(
    f: PredicateWithIndex<number, A1> | RefinementWithIndex<number, A1, A2>
  ) =>
  (fa: Iterable<A1>): Iterable<A1> =>
    dropRightWhileMapWithIndex(flow(f, option.guard))(fa)

/**
 * @category Combinators
 */
export const dropRight =
  (count: number) =>
  <A1>(fa: Iterable<A1>): Iterable<A1> =>
    pipe(fa, ToReadonlyArray, readonlyArray.dropRight(count), FromReadonlyArray)

/**
 * @category Combinators
 */
export const dropRightWhileMap = <A1, A2>(f: (a: A1) => option.Option<A2>) =>
  dropRightWhileMapWithIndex((_, a: A1) => f(a))

/**
 * @category Unfoldable
 */
export const unfold: Unfoldable1<URI>["unfold"] = (b, f) => ({
  *[Symbol.iterator]() {
    let b_ = b
    while (true) {
      const oa = f(b_)
      if (option.isNone(oa)) break

      const [a, b] = oa.value
      b_ = b
      yield a
    }
  },
})

/**
 * @category Instances
 */
export const Unfoldable: Unfoldable1<URI> = { URI, unfold }

/**
 * @category Pointed
 */
export const Do = of({})

/**
 * @category Iteratable
 */
export const iterateWhileMap: Iteratable1<URI>["iterateWhileMap"] =
  (f) => (a) => ({
    *[Symbol.iterator]() {
      yield a
      let optional = f(a)
      while (option.isSome(optional)) {
        const value = optional.value
        yield value
        optional = f(value)
      }
    },
  })

/**
 * @category Instances
 */
export const Iteratable: Iteratable1<URI> = {
  URI,
  iterateWhileMap,
}

/**
 * @category Takeable
 */
export const takeLeft: Takeable1<URI>["take"] = (count) => (fa) => ({
  *[Symbol.iterator]() {
    let i = 0
    for (const a of fa) {
      if (i++ >= count) break
      yield a
    }
  },
})
