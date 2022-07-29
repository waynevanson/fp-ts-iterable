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

export interface TakeableLeft<F> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: HKT<F, A>) => HKT<F, B>
}

export interface TakeableLeft1<F extends URIS> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind<F, A>) => Kind<F, B>
}

export interface TakeableLeft2<F extends URIS2> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

export interface TakeableLeft2C<F extends URIS2, E> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

export interface TakeableLeft3<F extends URIS3> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}

export interface TakeableLeft3C<F extends URIS3, E> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}

export interface TakeableLeft4<F extends URIS4> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}

export interface TakeableLeft4C<F extends URIS4, E> {
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
