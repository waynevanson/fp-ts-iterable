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

export interface DroppableRight<F> {
  readonly URI: F
  readonly dropRight: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: HKT<F, A>) => HKT<F, A>
}

export interface DroppableRight1<F extends URIS> {
  readonly URI: F
  readonly dropRight: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind<F, A>) => Kind<F, A>
}

export interface DroppableRight2<F extends URIS2> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

export interface DroppableRight2C<F extends URIS2, E> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}

export interface DroppableRight3<F extends URIS3> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

export interface DroppableRight3C<F extends URIS3, E> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}

export interface DroppableRight4<F extends URIS4> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}

export interface DroppableRight4C<F extends URIS4, E> {
  readonly URI: F
  readonly dropRight: (
    count: number
  ) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
