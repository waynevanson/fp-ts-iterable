import { option } from "fp-ts"
import {
  HKT,
  Kind,
  Kind2,
  Kind3,
  Kind4,
  URIS,
  URIS2,
  URIS3,
  URIS4,
} from "fp-ts/HKT"
import { Option } from "fp-ts/lib/Option"
import { Predicate } from "fp-ts/lib/Predicate"
import { Refinement } from "fp-ts/lib/Refinement"

/**
 * @category Model
 */
export interface Droppable<F> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: HKT<F, A>) => HKT<F, A>
}

/**
 * @category Model
 */
export interface Droppable1<F extends URIS> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind<F, A>) => Kind<F, A>
}

/**
 * @category Model
 */
export interface Droppable2<F extends URIS2> {
  readonly URI: F
  readonly drop: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface Droppable2C<F extends URIS2, E> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface Droppable3<F extends URIS3> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface Droppable3C<F extends URIS3, E> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface Droppable4<F extends URIS4> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}

/**
 * @category Model
 */
export interface Droppable4C<F extends URIS4, E> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}

/**
 * @category Droppable
 */
export function dropWhile<F extends URIS4, E>(
  Droppable: Droppable4C<F, E>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => <S, R>(fa: Kind4<F, S, R, E, A1>) => Kind4<F, S, R, E, A1>
export function dropWhile<F extends URIS4, E>(
  Droppable: Droppable4C<F, E>
): <A>(
  f: Predicate<A>
) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
export function dropWhile<F extends URIS4>(
  Droppable: Droppable4<F>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => <S, R, E>(fa: Kind4<F, S, R, E, A1>) => Kind4<F, S, R, E, A1>
export function dropWhile<F extends URIS4>(
  Droppable: Droppable4<F>
): <A>(
  f: Predicate<A>
) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
export function dropWhile<F extends URIS3, E>(
  Droppable: Droppable3C<F, E>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => <R>(fa: Kind3<F, R, E, A1>) => Kind3<F, R, E, A1>
export function dropWhile<F extends URIS3, E>(
  Droppable: Droppable3C<F, E>
): <A>(f: Predicate<A>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
export function dropWhile<F extends URIS3>(
  Droppable: Droppable3<F>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => <R, E>(fa: Kind3<F, R, E, A1>) => Kind3<F, R, E, A1>
export function dropWhile<F extends URIS3>(
  Droppable: Droppable3<F>
): <A>(f: Predicate<A>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
export function dropWhile<F extends URIS2, E>(
  Droppable: Droppable2C<F, E>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => (fa: Kind2<F, E, A1>) => Kind2<F, E, A1>
export function dropWhile<F extends URIS2, E>(
  Droppable: Droppable2C<F, E>
): <A>(f: Predicate<A>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
export function dropWhile<F extends URIS2>(
  Droppable: Droppable2<F>
): <A1, A2 extends A1>(
  f: Refinement<A1, A2>
) => <E>(fa: Kind2<F, E, A1>) => Kind2<F, E, A1>
export function dropWhile<F extends URIS2>(
  Droppable: Droppable2<F>
): <A>(f: Predicate<A>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
export function dropWhile<F>(
  Droppable: Droppable<F>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => (fa: HKT<F, A1>) => HKT<F, A1>
export function dropWhile<F>(
  Droppable: Droppable<F>
): <A>(f: Predicate<A>) => (fa: HKT<F, A>) => HKT<F, A>
export function dropWhile<F>(
  Droppable: Droppable<F>
): <A>(f: Predicate<A>) => (fa: HKT<F, A>) => HKT<F, A> {
  return (predicate) => Droppable.dropWhileMap(option.fromPredicate(predicate))
}
