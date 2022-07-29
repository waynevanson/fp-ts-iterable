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
  DroppableRight,
  DroppableRight1,
  DroppableRight2,
  DroppableRight2C,
  DroppableRight3,
  DroppableRight3C,
  DroppableRight4,
  DroppableRight4C,
} from "./droppable-right"

export interface DroppableRightWithIndex<F, I> extends DroppableRight<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

export interface DroppableRightWithIndex1<F extends URIS, I>
  extends DroppableRight1<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

export interface DroppableRightWithIndex2<F extends URIS2, I>
  extends DroppableRight2<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface DroppableRightWithIndex2C<F extends URIS2, I, E>
  extends DroppableRight2C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface DroppableRightWithIndex3<F extends URIS3, I>
  extends DroppableRight3<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface DroppableRightWithIndex3C<F extends URIS3, E, I>
  extends DroppableRight3C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface DroppableRightWithIndex4<F extends URIS4, I>
  extends DroppableRight4<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

export interface DroppableRightWithIndex4C<F extends URIS4, E, I>
  extends DroppableRight4C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
