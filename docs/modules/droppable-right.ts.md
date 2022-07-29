---
title: droppable-right.ts
nav_order: 4
parent: Modules
---

## droppable-right overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DroppableRight (interface)](#droppableright-interface)
  - [DroppableRight1 (interface)](#droppableright1-interface)
  - [DroppableRight2 (interface)](#droppableright2-interface)
  - [DroppableRight2C (interface)](#droppableright2c-interface)
  - [DroppableRight3 (interface)](#droppableright3-interface)
  - [DroppableRight3C (interface)](#droppableright3c-interface)
  - [DroppableRight4 (interface)](#droppableright4-interface)
  - [DroppableRight4C (interface)](#droppableright4c-interface)

---

# utils

## DroppableRight (interface)

**Signature**

```ts
export interface DroppableRight<F> {
  readonly URI: F
  readonly dropRight: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, A>
}
```

## DroppableRight1 (interface)

**Signature**

```ts
export interface DroppableRight1<F extends URIS> {
  readonly URI: F
  readonly dropRight: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, A>
}
```

## DroppableRight2 (interface)

**Signature**

```ts
export interface DroppableRight2<F extends URIS2> {
  readonly URI: F
  readonly dropRight: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## DroppableRight2C (interface)

**Signature**

```ts
export interface DroppableRight2C<F extends URIS2, E> {
  readonly URI: F
  readonly dropRight: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## DroppableRight3 (interface)

**Signature**

```ts
export interface DroppableRight3<F extends URIS3> {
  readonly URI: F
  readonly dropRight: (count: number) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## DroppableRight3C (interface)

**Signature**

```ts
export interface DroppableRight3C<F extends URIS3, E> {
  readonly URI: F
  readonly dropRight: (count: number) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## DroppableRight4 (interface)

**Signature**

```ts
export interface DroppableRight4<F extends URIS4> {
  readonly URI: F
  readonly dropRight: (count: number) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```

## DroppableRight4C (interface)

**Signature**

```ts
export interface DroppableRight4C<F extends URIS4, E> {
  readonly URI: F
  readonly dropRight: (count: number) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```
