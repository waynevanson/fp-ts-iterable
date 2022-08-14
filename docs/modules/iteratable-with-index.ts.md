---
title: iteratable-with-index.ts
nav_order: 5
parent: Modules
---

## iteratable-with-index overview

Recursively generate values for a structure.

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [iterateWithIndex](#iteratewithindex)
- [Model](#model)
  - [IteratableWithIndex (interface)](#iteratablewithindex-interface)
  - [IteratableWithIndex1 (interface)](#iteratablewithindex1-interface)
  - [IteratableWithIndex2 (interface)](#iteratablewithindex2-interface)
  - [IteratableWithIndex2C (interface)](#iteratablewithindex2c-interface)
  - [IteratableWithIndex3 (interface)](#iteratablewithindex3-interface)
  - [IteratableWithIndex3C (interface)](#iteratablewithindex3c-interface)
  - [IteratableWithIndex4 (interface)](#iteratablewithindex4-interface)
  - [IteratableWithIndex4C (interface)](#iteratablewithindex4c-interface)

---

# Constructors

## iterateWithIndex

**Signature**

```ts
export declare function iterateWithIndex<F extends URIS4, E, I>(
  F: IteratableWithIndex4C<F, E, I>
): <A>(f: (i: I, a: A) => A) => <S, R>(a: A) => Kind4<F, S, R, E, A>
export declare function iterateWithIndex<F extends URIS4, I>(
  F: IteratableWithIndex4<F, I>
): <A>(f: (i: I, a: A) => A) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
export declare function iterateWithIndex<F extends URIS3, E, I>(
  F: IteratableWithIndex3C<F, E, I>
): <A>(f: (i: I, a: A) => A) => <R>(a: A) => Kind3<F, R, E, A>
export declare function iterateWithIndex<F extends URIS3, I>(
  F: IteratableWithIndex3<F, I>
): <A>(f: (i: I, a: A) => A) => <R, E>(a: A) => Kind3<F, R, E, A>
export declare function iterateWithIndex<F extends URIS2, E, I>(
  F: IteratableWithIndex2C<F, E, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => Kind2<F, E, A>
export declare function iterateWithIndex<F extends URIS2, I>(
  F: IteratableWithIndex2<F, I>
): <A>(f: (i: I, a: A) => A) => <E>(a: A) => Kind2<F, E, A>
export declare function iterateWithIndex<F extends URIS, I>(
  F: IteratableWithIndex1<F, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => Kind<F, A>
export declare function iterateWithIndex<F, I>(
  F: IteratableWithIndex<F, I>
): <A>(f: (i: I, a: A) => A) => (a: A) => HKT<F, A>
```

# Model

## IteratableWithIndex (interface)

**Signature**

```ts
export interface IteratableWithIndex<F, I> extends Iteratable<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => (a: A) => HKT<F, A>
}
```

## IteratableWithIndex1 (interface)

**Signature**

```ts
export interface IteratableWithIndex1<F extends URIS, I> extends Iteratable1<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => (a: A) => Kind<F, A>
}
```

## IteratableWithIndex2 (interface)

**Signature**

```ts
export interface IteratableWithIndex2<F extends URIS2, I> extends Iteratable2<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => <E>(a: A) => Kind2<F, E, A>
}
```

## IteratableWithIndex2C (interface)

**Signature**

```ts
export interface IteratableWithIndex2C<F extends URIS2, I, E> extends Iteratable2C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => (a: A) => Kind2<F, E, A>
}
```

## IteratableWithIndex3 (interface)

**Signature**

```ts
export interface IteratableWithIndex3<F extends URIS3, I> extends Iteratable3<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => <R, E>(a: A) => Kind3<F, R, E, A>
}
```

## IteratableWithIndex3C (interface)

**Signature**

```ts
export interface IteratableWithIndex3C<F extends URIS3, I, E> extends Iteratable3C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => <R>(a: A) => Kind3<F, R, E, A>
}
```

## IteratableWithIndex4 (interface)

**Signature**

```ts
export interface IteratableWithIndex4<F extends URIS4, I> extends Iteratable4<F> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
}
```

## IteratableWithIndex4C (interface)

**Signature**

```ts
export interface IteratableWithIndex4C<F extends URIS4, I, E> extends Iteratable4C<F, E> {
  readonly URI: F
  readonly iterateWhileMapWithIndex: <A>(f: (i: I, a: A) => Option<A>) => <S, R>(a: A) => Kind4<F, S, R, E, A>
}
```
