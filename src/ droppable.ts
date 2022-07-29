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

export interface Droppable<F> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: HKT<F, A>) => HKT<F, A>
}

export interface Droppable1<F extends URIS> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind<F, A>) => Kind<F, A>
}

export interface Droppable2<F extends URIS2> {
  readonly URI: F
  readonly drop: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

export interface Droppable2C<F extends URIS2, E> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

export interface Droppable3<F extends URIS3> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

export interface Droppable3C<F extends URIS3, E> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

export interface Droppable4<F extends URIS4> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}

export interface Droppable4C<F extends URIS4, E> {
  readonly URI: F
  readonly drop: (
    count: number
  ) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
