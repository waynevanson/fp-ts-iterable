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
  Droppable,
  Droppable1,
  Droppable2,
  Droppable2C,
  Droppable3,
  Droppable3C,
  Droppable4,
  Droppable4C,
} from "./droppable"

/**
 * @category Model
 */
export interface DroppableWithIndex<F, I> extends Droppable<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: HKT<F, A1>) => HKT<F, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex1<F extends URIS, I> extends Droppable1<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => (fa: Kind<F, A1>) => Kind<F, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex2<F extends URIS2, I> extends Droppable2<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex2C<F extends URIS2, I, E>
  extends Droppable2C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex3<F extends URIS3, I> extends Droppable3<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex3C<F extends URIS3, E, I>
  extends Droppable3C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex4<F extends URIS4, I> extends Droppable4<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}

/**
 * @category Model
 */
export interface DroppableWithIndex4C<F extends URIS4, E, I>
  extends Droppable4C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
