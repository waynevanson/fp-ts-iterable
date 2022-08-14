/**
 * Recursively generate values for a structure.
 */

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
import { Endomorphism } from "fp-ts/lib/Endomorphism"
import { Option } from "fp-ts/lib/Option"
import {
  Iteratable,
  Iteratable1,
  Iteratable2,
  Iteratable2C,
  Iteratable3,
  Iteratable3C,
  Iteratable4,
  Iteratable4C,
} from "./iteratable"

/**
 * @category Model
 */
export interface IteratableWithIndex<F, I> extends Iteratable<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => (a: A) => HKT<F, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex1<F extends URIS, I>
  extends Iteratable1<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => (a: A) => Kind<F, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex2<F extends URIS2, I>
  extends Iteratable2<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => <E>(a: A) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex2C<F extends URIS2, I, E>
  extends Iteratable2C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => (a: A) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex3<F extends URIS3, I>
  extends Iteratable3<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => <R, E>(a: A) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex3C<F extends URIS3, I, E>
  extends Iteratable3C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => <R>(a: A) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex4<F extends URIS4, I>
  extends Iteratable4<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
}

/**
 * @category Model
 */
export interface IteratableWithIndex4C<F extends URIS4, I, E>
  extends Iteratable4C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(
    f: (i: I, a: A) => Option<A>
  ) => <S, R>(a: A) => Kind4<F, S, R, E, A>
}

/**
 * @category Constructors
 */
export function iterateWithIndex<F extends URIS4, E, I>(
  F: IteratableWithIndex4C<F, E, I>
): <A>(f: (i: I, a: A) => A) => <S, R>(a: A) => Kind4<F, S, R, E, A>
export function iterateWithIndex<F extends URIS4, I>(
  F: IteratableWithIndex4<F, I>
): <A>(f: (i: I, a: A) => A) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
export function iterateWithIndex<F extends URIS3, E, I>(
  F: IteratableWithIndex3C<F, E, I>
): <A>(f: (i: I, a: A) => A) => <R>(a: A) => Kind3<F, R, E, A>
export function iterateWithIndex<F extends URIS3, I>(
  F: IteratableWithIndex3<F, I>
): <A>(f: (i: I, a: A) => A) => <R, E>(a: A) => Kind3<F, R, E, A>
export function iterateWithIndex<F extends URIS2, E, I>(
  F: IteratableWithIndex2C<F, E, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => Kind2<F, E, A>
export function iterateWithIndex<F extends URIS2, I>(
  F: IteratableWithIndex2<F, I>
): <A>(f: (i: I, a: A) => A) => <E>(a: A) => Kind2<F, E, A>
export function iterateWithIndex<F extends URIS, I>(
  F: IteratableWithIndex1<F, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => Kind<F, A>
export function iterateWithIndex<F, I>(
  F: IteratableWithIndex<F, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => HKT<F, A>
export function iterateWithIndex<F, I>(
  F: IteratableWithIndex<F, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => HKT<F, A> {
  return (f) => F.iterateWhileMapWithIndex((i, a) => option.some(f(i, a)))
}
