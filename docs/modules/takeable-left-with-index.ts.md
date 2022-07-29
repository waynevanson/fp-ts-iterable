---
title: takeable-left-with-index.ts
nav_order: 7
parent: Modules
---

## takeable-left-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TakeableLeftWithIndex (interface)](#takeableleftwithindex-interface)
  - [TakeableLeftWithIndex1 (interface)](#takeableleftwithindex1-interface)
  - [TakeableLeftWithIndex2 (interface)](#takeableleftwithindex2-interface)
  - [TakeableLeftWithIndex2C (interface)](#takeableleftwithindex2c-interface)
  - [TakeableLeftWithIndex3 (interface)](#takeableleftwithindex3-interface)
  - [TakeableLeftWithIndex3C (interface)](#takeableleftwithindex3c-interface)
  - [TakeableLeftWithIndex4 (interface)](#takeableleftwithindex4-interface)
  - [TakeableLeftWithIndex4C (interface)](#takeableleftwithindex4c-interface)

---

# utils

## TakeableLeftWithIndex (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex<F, I> extends TakeableLeft<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## TakeableLeftWithIndex1 (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex1<F extends URIS, I> extends TakeableLeft1<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## TakeableLeftWithIndex2 (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex2<F extends URIS2, I> extends TakeableLeft2<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableLeftWithIndex2C (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex2C<F extends URIS2, I, E> extends TakeableLeft2C<F, E> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableLeftWithIndex3 (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex3<F extends URIS3, I> extends TakeableLeft3<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableLeftWithIndex3C (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex3C<F extends URIS3, E, I> extends TakeableLeft3C<F, E> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableLeftWithIndex4 (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex4<F extends URIS4, I> extends TakeableLeft4<F> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## TakeableLeftWithIndex4C (interface)

**Signature**

```ts
export interface TakeableLeftWithIndex4C<F extends URIS4, E, I> extends TakeableLeft4C<F, E> {
  readonly takeLeftWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
