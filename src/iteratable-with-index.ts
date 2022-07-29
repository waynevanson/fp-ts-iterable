/**
 * Recursively generate values for a structure.
 */

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
