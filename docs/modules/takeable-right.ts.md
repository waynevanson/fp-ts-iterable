---
title: takeable-right.ts
nav_order: 10
parent: Modules
---

## takeable-right overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TakeableRight (interface)](#takeableright-interface)
  - [TakeableRight1 (interface)](#takeableright1-interface)
  - [TakeableRight2 (interface)](#takeableright2-interface)
  - [TakeableRight2C (interface)](#takeableright2c-interface)
  - [TakeableRight3 (interface)](#takeableright3-interface)
  - [TakeableRight3C (interface)](#takeableright3c-interface)
  - [TakeableRight4 (interface)](#takeableright4-interface)
  - [TakeableRight4C (interface)](#takeableright4c-interface)

---

# utils

## TakeableRight (interface)

**Signature**

```ts
export interface TakeableRight<F> {
  readonly URI: F
  readonly takeRight: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
}
```

## TakeableRight1 (interface)

**Signature**

```ts
export interface TakeableRight1<F extends URIS> {
  readonly URI: F
  readonly takeRight: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>
}
```

## TakeableRight2 (interface)

**Signature**

```ts
export interface TakeableRight2<F extends URIS2> {
  readonly URI: F
  readonly takeRight: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

## TakeableRight2C (interface)

**Signature**

```ts
export interface TakeableRight2C<F extends URIS2, E> {
  readonly URI: F
  readonly takeRight: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

## TakeableRight3 (interface)

**Signature**

```ts
export interface TakeableRight3<F extends URIS3> {
  readonly URI: F
  readonly takeRight: (count: number) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

## TakeableRight3C (interface)

**Signature**

```ts
export interface TakeableRight3C<F extends URIS3, E> {
  readonly URI: F
  readonly takeRight: (count: number) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

## TakeableRight4 (interface)

**Signature**

```ts
export interface TakeableRight4<F extends URIS4> {
  readonly URI: F
  readonly takeRight: (count: number) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeRightWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

## TakeableRight4C (interface)

**Signature**

```ts
export interface TakeableRight4C<F extends URIS4, E> {
  readonly URI: F
  readonly takeRight: (count: number) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeRightWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```
