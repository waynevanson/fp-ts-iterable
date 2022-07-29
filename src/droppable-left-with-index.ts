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
  DroppableLeft,
  DroppableLeft1,
  DroppableLeft2,
  DroppableLeft2C,
  DroppableLeft3,
  DroppableLeft3C,
  DroppableLeft4,
  DroppableLeft4C,
} from "./droppable-left"

export interface DroppableLeftWithIndex<F, I> extends DroppableLeft<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

export interface DroppableLeftWithIndex1<F extends URIS, I>
  extends DroppableLeft1<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

export interface DroppableLeftWithIndex2<F extends URIS2, I>
  extends DroppableLeft2<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface DroppableLeftWithIndex2C<F extends URIS2, I, E>
  extends DroppableLeft2C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

export interface DroppableLeftWithIndex3<F extends URIS3, I>
  extends DroppableLeft3<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface DroppableLeftWithIndex3C<F extends URIS3, E, I>
  extends DroppableLeft3C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

export interface DroppableLeftWithIndex4<F extends URIS4, I>
  extends DroppableLeft4<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

export interface DroppableLeftWithIndex4C<F extends URIS4, E, I>
  extends DroppableLeft4C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
