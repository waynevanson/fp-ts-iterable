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
  TakeableLeft,
  TakeableLeft1,
  TakeableLeft2,
  TakeableLeft2C,
  TakeableLeft3,
  TakeableLeft3C,
  TakeableLeft4,
  TakeableLeft4C,
} from "./takeable-left"

export interface TakeableLeftWithIndex<F, I> extends TakeableLeft<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

export interface TakeableLeftWithIndex1<F extends URIS, I>
  extends TakeableLeft1<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

export interface TakeableWithIndex2<F extends URIS2, I>
  extends TakeableLeft2<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableLeftWithIndex2C<F extends URIS2, I, E>
  extends TakeableLeft2C<F, E> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableLeftWithIndex3<F extends URIS3, I>
  extends TakeableLeft3<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableLeftWithIndex3C<F extends URIS3, E, I>
  extends TakeableLeft3C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableLeftWithIndex4<F extends URIS4, I>
  extends TakeableLeft4<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

export interface TakeableLeftWithIndex4C<F extends URIS4, E, I>
  extends TakeableLeft4C<F, E> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
