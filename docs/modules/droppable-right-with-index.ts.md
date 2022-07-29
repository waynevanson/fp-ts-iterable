---
title: droppable-right-with-index.ts
nav_order: 3
parent: Modules
---

## droppable-right-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DroppableRightWithIndex (interface)](#droppablerightwithindex-interface)
  - [DroppableRightWithIndex1 (interface)](#droppablerightwithindex1-interface)
  - [DroppableRightWithIndex2 (interface)](#droppablerightwithindex2-interface)
  - [DroppableRightWithIndex2C (interface)](#droppablerightwithindex2c-interface)
  - [DroppableRightWithIndex3 (interface)](#droppablerightwithindex3-interface)
  - [DroppableRightWithIndex3C (interface)](#droppablerightwithindex3c-interface)
  - [DroppableRightWithIndex4 (interface)](#droppablerightwithindex4-interface)
  - [DroppableRightWithIndex4C (interface)](#droppablerightwithindex4c-interface)

---

# utils

## DroppableRightWithIndex (interface)

**Signature**

```ts
export interface DroppableRightWithIndex<F, I> extends DroppableRight<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## DroppableRightWithIndex1 (interface)

**Signature**

```ts
export interface DroppableRightWithIndex1<F extends URIS, I> extends DroppableRight1<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## DroppableRightWithIndex2 (interface)

**Signature**

```ts
export interface DroppableRightWithIndex2<F extends URIS2, I> extends DroppableRight2<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableRightWithIndex2C (interface)

**Signature**

```ts
export interface DroppableRightWithIndex2C<F extends URIS2, I, E> extends DroppableRight2C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableRightWithIndex3 (interface)

**Signature**

```ts
export interface DroppableRightWithIndex3<F extends URIS3, I> extends DroppableRight3<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableRightWithIndex3C (interface)

**Signature**

```ts
export interface DroppableRightWithIndex3C<F extends URIS3, E, I> extends DroppableRight3C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableRightWithIndex4 (interface)

**Signature**

```ts
export interface DroppableRightWithIndex4<F extends URIS4, I> extends DroppableRight4<F> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## DroppableRightWithIndex4C (interface)

**Signature**

```ts
export interface DroppableRightWithIndex4C<F extends URIS4, E, I> extends DroppableRight4C<F, E> {
  readonly dropRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
