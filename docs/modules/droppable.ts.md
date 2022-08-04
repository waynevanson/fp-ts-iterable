---
title: droppable.ts
nav_order: 2
parent: Modules
---

## droppable overview

---

<h2 class="text-delta">Table of contents</h2>

- [Droppable](#droppable)
  - [dropWhile](#dropwhile)
- [Model](#model)
  - [Droppable (interface)](#droppable-interface)
  - [Droppable1 (interface)](#droppable1-interface)
  - [Droppable2 (interface)](#droppable2-interface)
  - [Droppable2C (interface)](#droppable2c-interface)
  - [Droppable3 (interface)](#droppable3-interface)
  - [Droppable3C (interface)](#droppable3c-interface)
  - [Droppable4 (interface)](#droppable4-interface)
  - [Droppable4C (interface)](#droppable4c-interface)

---

# Droppable

## dropWhile

**Signature**

```ts
export declare function dropWhile<F extends URIS4, E>(
  Droppable: Droppable4C<F, E>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => <S, R>(fa: Kind4<F, S, R, E, A1>) => Kind4<F, S, R, E, A1>
export declare function dropWhile<F extends URIS4, E>(
  Droppable: Droppable4C<F, E>
): <A>(f: Predicate<A>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
export declare function dropWhile<F extends URIS4>(
  Droppable: Droppable4<F>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => <S, R, E>(fa: Kind4<F, S, R, E, A1>) => Kind4<F, S, R, E, A1>
export declare function dropWhile<F extends URIS4>(
  Droppable: Droppable4<F>
): <A>(f: Predicate<A>) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
export declare function dropWhile<F extends URIS3, E>(
  Droppable: Droppable3C<F, E>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => <R>(fa: Kind3<F, R, E, A1>) => Kind3<F, R, E, A1>
export declare function dropWhile<F extends URIS3, E>(
  Droppable: Droppable3C<F, E>
): <A>(f: Predicate<A>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
export declare function dropWhile<F extends URIS3>(
  Droppable: Droppable3<F>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => <R, E>(fa: Kind3<F, R, E, A1>) => Kind3<F, R, E, A1>
export declare function dropWhile<F extends URIS3>(
  Droppable: Droppable3<F>
): <A>(f: Predicate<A>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
export declare function dropWhile<F extends URIS2, E>(
  Droppable: Droppable2C<F, E>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => (fa: Kind2<F, E, A1>) => Kind2<F, E, A1>
export declare function dropWhile<F extends URIS2, E>(
  Droppable: Droppable2C<F, E>
): <A>(f: Predicate<A>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
export declare function dropWhile<F extends URIS2>(
  Droppable: Droppable2<F>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => <E>(fa: Kind2<F, E, A1>) => Kind2<F, E, A1>
export declare function dropWhile<F extends URIS2>(
  Droppable: Droppable2<F>
): <A>(f: Predicate<A>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
export declare function dropWhile<F>(
  Droppable: Droppable<F>
): <A1, A2 extends A1>(f: Refinement<A1, A2>) => (fa: HKT<F, A1>) => HKT<F, A1>
export declare function dropWhile<F>(Droppable: Droppable<F>): <A>(f: Predicate<A>) => (fa: HKT<F, A>) => HKT<F, A>
```

# Model

## Droppable (interface)

**Signature**

```ts
export interface Droppable<F> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, A>
}
```

## Droppable1 (interface)

**Signature**

```ts
export interface Droppable1<F extends URIS> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, A>
}
```

## Droppable2 (interface)

**Signature**

```ts
export interface Droppable2<F extends URIS2> {
  readonly URI: F
  readonly drop: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## Droppable2C (interface)

**Signature**

```ts
export interface Droppable2C<F extends URIS2, E> {
  readonly URI: F
  readonly drop: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## Droppable3 (interface)

**Signature**

```ts
export interface Droppable3<F extends URIS3> {
  readonly URI: F
  readonly drop: (count: number) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## Droppable3C (interface)

**Signature**

```ts
export interface Droppable3C<F extends URIS3, E> {
  readonly URI: F
  readonly drop: (count: number) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## Droppable4 (interface)

**Signature**

```ts
export interface Droppable4<F extends URIS4> {
  readonly URI: F
  readonly drop: (count: number) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```

## Droppable4C (interface)

**Signature**

```ts
export interface Droppable4C<F extends URIS4, E> {
  readonly URI: F
  readonly drop: (count: number) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```
