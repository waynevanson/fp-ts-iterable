---
title: takeable-right-with-index.ts
nav_order: 9
parent: Modules
---

## takeable-right-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TakeableRightWithIndex (interface)](#takeablerightwithindex-interface)
  - [TakeableRightWithIndex1 (interface)](#takeablerightwithindex1-interface)
  - [TakeableRightWithIndex2 (interface)](#takeablerightwithindex2-interface)
  - [TakeableRightWithIndex2C (interface)](#takeablerightwithindex2c-interface)
  - [TakeableRightWithIndex3 (interface)](#takeablerightwithindex3-interface)
  - [TakeableRightWithIndex3C (interface)](#takeablerightwithindex3c-interface)
  - [TakeableRightWithIndex4 (interface)](#takeablerightwithindex4-interface)
  - [TakeableRightWithIndex4C (interface)](#takeablerightwithindex4c-interface)

---

# utils

## TakeableRightWithIndex (interface)

**Signature**

```ts
export interface TakeableRightWithIndex<F, I> extends TakeableRight<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## TakeableRightWithIndex1 (interface)

**Signature**

```ts
export interface TakeableRightWithIndex1<F extends URIS, I> extends TakeableRight1<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## TakeableRightWithIndex2 (interface)

**Signature**

```ts
export interface TakeableRightWithIndex2<F extends URIS2, I> extends TakeableRight2<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableRightWithIndex2C (interface)

**Signature**

```ts
export interface TakeableRightWithIndex2C<F extends URIS2, I, E> extends TakeableRight2C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableRightWithIndex3 (interface)

**Signature**

```ts
export interface TakeableRightWithIndex3<F extends URIS3, I> extends TakeableRight3<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableRightWithIndex3C (interface)

**Signature**

```ts
export interface TakeableRightWithIndex3C<F extends URIS3, E, I> extends TakeableRight3C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableRightWithIndex4 (interface)

**Signature**

```ts
export interface TakeableRightWithIndex4<F extends URIS4, I> extends TakeableRight4<F> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## TakeableRightWithIndex4C (interface)

**Signature**

```ts
export interface TakeableRightWithIndex4C<F extends URIS4, E, I> extends TakeableRight4C<F, E> {
  readonly takeRightWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
