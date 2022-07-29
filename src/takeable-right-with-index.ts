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
  TakeableRight,
  TakeableRight1,
  TakeableRight2,
  TakeableRight2C,
  TakeableRight3,
  TakeableRight3C,
  TakeableRight4,
  TakeableRight4C,
} from "./takeable-right"

export interface TakeableRightWithIndex<F, I> extends TakeableRight<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

export interface TakeableRightWithIndex1<F extends URIS, I>
  extends TakeableRight1<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

export interface TakeableRightWithIndex2<F extends URIS2, I>
  extends TakeableRight2<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableRightWithIndex2C<F extends URIS2, I, E>
  extends TakeableRight2C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableRightWithIndex3<F extends URIS3, I>
  extends TakeableRight3<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableRightWithIndex3C<F extends URIS3, E, I>
  extends TakeableRight3C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableRightWithIndex4<F extends URIS4, I>
  extends TakeableRight4<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

export interface TakeableRightWithIndex4C<F extends URIS4, E, I>
  extends TakeableRight4C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
