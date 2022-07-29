---
title: droppable-left-with-index.ts
nav_order: 1
parent: Modules
---

## droppable-left-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DroppableLeftWithIndex (interface)](#droppableleftwithindex-interface)
  - [DroppableLeftWithIndex1 (interface)](#droppableleftwithindex1-interface)
  - [DroppableLeftWithIndex2 (interface)](#droppableleftwithindex2-interface)
  - [DroppableLeftWithIndex2C (interface)](#droppableleftwithindex2c-interface)
  - [DroppableLeftWithIndex3 (interface)](#droppableleftwithindex3-interface)
  - [DroppableLeftWithIndex3C (interface)](#droppableleftwithindex3c-interface)
  - [DroppableLeftWithIndex4 (interface)](#droppableleftwithindex4-interface)
  - [DroppableLeftWithIndex4C (interface)](#droppableleftwithindex4c-interface)

---

# utils

## DroppableLeftWithIndex (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex<F, I> extends DroppableLeft<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## DroppableLeftWithIndex1 (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex1<F extends URIS, I> extends DroppableLeft1<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## DroppableLeftWithIndex2 (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex2<F extends URIS2, I> extends DroppableLeft2<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableLeftWithIndex2C (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex2C<F extends URIS2, I, E> extends DroppableLeft2C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableLeftWithIndex3 (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex3<F extends URIS3, I> extends DroppableLeft3<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableLeftWithIndex3C (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex3C<F extends URIS3, E, I> extends DroppableLeft3C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableLeftWithIndex4 (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex4<F extends URIS4, I> extends DroppableLeft4<F> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## DroppableLeftWithIndex4C (interface)

**Signature**

```ts
export interface DroppableLeftWithIndex4C<F extends URIS4, E, I> extends DroppableLeft4C<F, E> {
  readonly dropLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
