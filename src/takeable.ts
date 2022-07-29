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

/**
 * @category Model
 */
export interface Takeable<F> {
  readonly URI: F
  readonly take: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: HKT<F, A>) => HKT<F, B>
}

/**
 * @category Model
 */
export interface Takeable1<F extends URIS> {
  readonly URI: F
  readonly take: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind<F, A>) => Kind<F, B>
}

/**
 * @category Model
 */
export interface Takeable2<F extends URIS2> {
  readonly URI: F
  readonly take: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

/**
 * @category Model
 */
export interface Takeable2C<F extends URIS2, E> {
  readonly URI: F
  readonly take: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

/**
 * @category Model
 */
export interface Takeable3<F extends URIS3> {
  readonly URI: F
  readonly take: (
    count: number
  ) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}

/**
 * @category Model
 */
export interface Takeable3C<F extends URIS3, E> {
  readonly URI: F
  readonly take: (
    count: number
  ) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}

/**
 * @category Model
 */
export interface Takeable4<F extends URIS4> {
  readonly URI: F
  readonly take: (
    count: number
  ) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}

/**
 * @category Model
 */
export interface Takeable4C<F extends URIS4, E> {
  readonly URI: F
  readonly take: (
    count: number
  ) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
