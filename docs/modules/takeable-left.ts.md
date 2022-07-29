---
title: takeable-left.ts
nav_order: 4
parent: Modules
---

## takeable-left overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TakeableLeft (interface)](#takeableleft-interface)
  - [TakeableLeft1 (interface)](#takeableleft1-interface)
  - [TakeableLeft2 (interface)](#takeableleft2-interface)
  - [TakeableLeft2C (interface)](#takeableleft2c-interface)
  - [TakeableLeft3 (interface)](#takeableleft3-interface)
  - [TakeableLeft3C (interface)](#takeableleft3c-interface)
  - [TakeableLeft4 (interface)](#takeableleft4-interface)
  - [TakeableLeft4C (interface)](#takeableleft4c-interface)

---

# utils

## TakeableLeft (interface)

**Signature**

```ts
export interface TakeableLeft<F> {
  readonly URI: F
  readonly takeLeft: (count: number) => <A>(fa: HKT<F, A>) => HKT<F, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: HKT<F, A>) => HKT<F, B>
}
```

## TakeableLeft1 (interface)

**Signature**

```ts
export interface TakeableLeft1<F extends URIS> {
  readonly URI: F
  readonly takeLeft: (count: number) => <A>(fa: Kind<F, A>) => Kind<F, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind<F, A>) => Kind<F, B>
}
```

## TakeableLeft2 (interface)

**Signature**

```ts
export interface TakeableLeft2<F extends URIS2> {
  readonly URI: F
  readonly takeLeft: (count: number) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

## TakeableLeft2C (interface)

**Signature**

```ts
export interface TakeableLeft2C<F extends URIS2, E> {
  readonly URI: F
  readonly takeLeft: (count: number) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}
```

## TakeableLeft3 (interface)

**Signature**

```ts
export interface TakeableLeft3<F extends URIS3> {
  readonly URI: F
  readonly takeLeft: (count: number) => <R, E, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

## TakeableLeft3C (interface)

**Signature**

```ts
export interface TakeableLeft3C<F extends URIS3, E> {
  readonly URI: F
  readonly takeLeft: (count: number) => <R, A>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}
```

## TakeableLeft4 (interface)

**Signature**

```ts
export interface TakeableLeft4<F extends URIS4> {
  readonly URI: F
  readonly takeLeft: (count: number) => <S, R, E, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeLeftWhileMap: <A, B>(
    f: (a: A) => Option<B>
  ) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```

## TakeableLeft4C (interface)

**Signature**

```ts
export interface TakeableLeft4C<F extends URIS4, E> {
  readonly URI: F
  readonly takeLeft: (count: number) => <S, R, A>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A>
  readonly takeLeftWhileMap: <A, B>(f: (a: A) => Option<B>) => <S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}
```
