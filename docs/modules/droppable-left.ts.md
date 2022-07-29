---
title: droppable-left.ts
nav_order: 1
parent: Modules
---

## droppable-left overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DroppableLeft (interface)](#droppableleft-interface)
  - [DroppableLeft1 (interface)](#droppableleft1-interface)
  - [DroppableLeft2 (interface)](#droppableleft2-interface)
  - [DroppableLeft2C (interface)](#droppableleft2c-interface)
  - [DroppableLeft3 (interface)](#droppableleft3-interface)
  - [DroppableLeft3C (interface)](#droppableleft3c-interface)
  - [DroppableLeft4 (interface)](#droppableleft4-interface)
  - [DroppableLeft4C (interface)](#droppableleft4c-interface)

---

# utils

## DroppableLeft (interface)

**Signature**

```ts
export interface DroppableLeft<F> {
  readonly URI: F
  readonly dropLeft: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, A>
}
```

## DroppableLeft1 (interface)

**Signature**

```ts
export interface DroppableLeft1<F extends URIS> {
  readonly URI: F
  readonly dropLeft: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, A>
}
```

## DroppableLeft2 (interface)

**Signature**

```ts
export interface DroppableLeft2<F extends URIS2> {
  readonly URI: F
  readonly dropLeft: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## DroppableLeft2C (interface)

**Signature**

```ts
export interface DroppableLeft2C<F extends URIS2, E> {
  readonly URI: F
  readonly dropLeft: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, A>
}
```

## DroppableLeft3 (interface)

**Signature**

```ts
export interface DroppableLeft3<F extends URIS3> {
  readonly URI: F
  readonly dropLeft: (count: number) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## DroppableLeft3C (interface)

**Signature**

```ts
export interface DroppableLeft3C<F extends URIS3, E> {
  readonly URI: F
  readonly dropLeft: (count: number) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
}
```

## DroppableLeft4 (interface)

**Signature**

```ts
export interface DroppableLeft4<F extends URIS4> {
  readonly URI: F
  readonly dropLeft: (count: number) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```

## DroppableLeft4C (interface)

**Signature**

```ts
export interface DroppableLeft4C<F extends URIS4, E> {
  readonly URI: F
  readonly dropLeft: (count: number) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly dropLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
}
```
