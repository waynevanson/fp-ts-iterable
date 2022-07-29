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
  Takeable,
  Takeable1,
  Takeable2,
  Takeable2C,
  Takeable3,
  Takeable3C,
  Takeable4,
  Takeable4C,
} from "./takeable"

export interface TakeableWithIndex<F, I> extends Takeable<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

export interface TakeableWithIndex1<F extends URIS, I> extends Takeable1<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

export interface TakeableWithIndex2<F extends URIS2, I> extends Takeable2<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableWithIndex2C<F extends URIS2, I, E>
  extends Takeable2C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface TakeableWithIndex3<F extends URIS3, I> extends Takeable3<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableWithIndex3C<F extends URIS3, E, I>
  extends Takeable3C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface TakeableWithIndex4<F extends URIS4, I> extends Takeable4<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

export interface TakeableWithIndex4C<F extends URIS4, E, I>
  extends Takeable4C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
