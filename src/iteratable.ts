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

/**
 * @category Model
 */
export interface Iteratable<F> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => (a: A) => HKT<F, A>
}

/**
 * @category Model
 */
export interface Iteratable1<F extends URIS> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => (a: A) => Kind<F, A>
}

/**
 * @category Model
 */
export interface Iteratable2<F extends URIS2> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => <E>(a: A) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface Iteratable2C<F extends URIS2, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => (a: A) => Kind2<F, E, A>
}

/**
 * @category Model
 */
export interface Iteratable3<F extends URIS3> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => <R, E>(a: A) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface Iteratable3C<F extends URIS3, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => <R>(a: A) => Kind3<F, R, E, A>
}

/**
 * @category Model
 */
export interface Iteratable4<F extends URIS4> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
}

/**
 * @category Model
 */
export interface Iteratable4C<F extends URIS4, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(
    f: (a: A) => Option<A>
  ) => <S, R>(a: A) => Kind4<F, S, R, E, A>
}

/**
 * @category Constructors
 */
export function iterate<F extends URIS4, E>(
  F: Iteratable4C<F, E>
): <A>(f: Endomorphism<A>) => <S, R>(a: A) => Kind4<F, S, R, E, A>
export function iterate<F extends URIS4>(
  F: Iteratable4<F>
): <A>(f: Endomorphism<A>) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
export function iterate<F extends URIS3, E>(
  F: Iteratable3C<F, E>
): <A>(f: Endomorphism<A>) => <R>(a: A) => Kind3<F, R, E, A>
export function iterate<F extends URIS3>(
  F: Iteratable3<F>
): <A>(f: Endomorphism<A>) => <R, E>(a: A) => Kind3<F, R, E, A>
export function iterate<F extends URIS2, E>(
  F: Iteratable2C<F, E>
): <A>(f: Endomorphism<A>) => (a: A) => Kind2<F, E, A>
export function iterate<F extends URIS2>(
  F: Iteratable2<F>
): <A>(f: Endomorphism<A>) => <E>(a: A) => Kind2<F, E, A>
export function iterate<F extends URIS>(
  F: Iteratable1<F>
): <A>(f: Endomorphism<A>) => (a: A) => Kind<F, A>
export function iterate<F>(
  F: Iteratable<F>
): <A>(f: Endomorphism<A>) => (a: A) => HKT<F, A>
export function iterate<F>(
  F: Iteratable<F>
): <A>(f: Endomorphism<A>) => (a: A) => HKT<F, A> {
  return (f) => F.iterateWhileMap((a) => option.some(f(a)))
}
