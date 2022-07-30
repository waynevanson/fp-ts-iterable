---
title: takeable-with-index.ts
nav_order: 7
parent: Modules
---

## takeable-with-index overview

---

<h2 class="text-delta">Table of contents</h2>

- [Model](#model)
  - [TakeableWithIndex (interface)](#takeablewithindex-interface)
  - [TakeableWithIndex1 (interface)](#takeablewithindex1-interface)
  - [TakeableWithIndex2 (interface)](#takeablewithindex2-interface)
  - [TakeableWithIndex2C (interface)](#takeablewithindex2c-interface)
  - [TakeableWithIndex3 (interface)](#takeablewithindex3-interface)
  - [TakeableWithIndex3C (interface)](#takeablewithindex3c-interface)
  - [TakeableWithIndex4 (interface)](#takeablewithindex4-interface)
  - [TakeableWithIndex4C (interface)](#takeablewithindex4c-interface)

---

# Model

## TakeableWithIndex (interface)

**Signature**

```ts
export interface TakeableWithIndex<F, I> extends Takeable<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: HKT<F, A1>) => HKT<F, A2>
}
```

## TakeableWithIndex1 (interface)

**Signature**

```ts
export interface TakeableWithIndex1<F extends URIS, I> extends Takeable1<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => (fa: Kind<F, A1>) => Kind<F, A2>
}
```

## TakeableWithIndex2 (interface)

**Signature**

```ts
export interface TakeableWithIndex2<F extends URIS2, I> extends Takeable2<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, E>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableWithIndex2C (interface)

**Signature**

```ts
export interface TakeableWithIndex2C<F extends URIS2, I, E> extends Takeable2C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(f: (i: I, a: A1) => Option<A2>) => <A>(fa: Kind2<F, E, A>) => Kind2<F, E, A2>
}
```

## TakeableWithIndex3 (interface)

**Signature**

```ts
export interface TakeableWithIndex3<F extends URIS3, I> extends Takeable3<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableWithIndex3C (interface)

**Signature**

```ts
export interface TakeableWithIndex3C<F extends URIS3, E, I> extends Takeable3C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, R>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, A2>
}
```

## TakeableWithIndex4 (interface)

**Signature**

```ts
export interface TakeableWithIndex4<F extends URIS4, I> extends Takeable4<F> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```

## TakeableWithIndex4C (interface)

**Signature**

```ts
export interface TakeableWithIndex4C<F extends URIS4, E, I> extends Takeable4C<F, E> {
  readonly takeWhileMapWithIndex: <A1, A2>(
    f: (i: I, a: A1) => Option<A2>
  ) => <A, S, R>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, A2>
}
```
