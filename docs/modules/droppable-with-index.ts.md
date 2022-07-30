---
title: droppable-with-index.ts
nav_order: 1
parent: Modules
---

## droppable-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [Model](#model)
  - [DroppableWithIndex (interface)](#droppablewithindex-interface)
  - [DroppableWithIndex1 (interface)](#droppablewithindex1-interface)
  - [DroppableWithIndex2 (interface)](#droppablewithindex2-interface)
  - [DroppableWithIndex2C (interface)](#droppablewithindex2c-interface)
  - [DroppableWithIndex3 (interface)](#droppablewithindex3-interface)
  - [DroppableWithIndex3C (interface)](#droppablewithindex3c-interface)
  - [DroppableWithIndex4 (interface)](#droppablewithindex4-interface)
  - [DroppableWithIndex4C (interface)](#droppablewithindex4c-interface)

---

# Model

## DroppableWithIndex (interface)

**Signature**

```ts
export interface DroppableWithIndex<F, I> extends Droppable<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## DroppableWithIndex1 (interface)

**Signature**

```ts
export interface DroppableWithIndex1<F extends URIS, I> extends Droppable1<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## DroppableWithIndex2 (interface)

**Signature**

```ts
export interface DroppableWithIndex2<F extends URIS2, I> extends Droppable2<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableWithIndex2C (interface)

**Signature**

```ts
export interface DroppableWithIndex2C<F extends URIS2, I, E> extends Droppable2C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## DroppableWithIndex3 (interface)

**Signature**

```ts
export interface DroppableWithIndex3<F extends URIS3, I> extends Droppable3<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableWithIndex3C (interface)

**Signature**

```ts
export interface DroppableWithIndex3C<F extends URIS3, E, I> extends Droppable3C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## DroppableWithIndex4 (interface)

**Signature**

```ts
export interface DroppableWithIndex4<F extends URIS4, I> extends Droppable4<F> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## DroppableWithIndex4C (interface)

**Signature**

```ts
export interface DroppableWithIndex4C<F extends URIS4, E, I> extends Droppable4C<F, E> {
  readonly dropWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
