---
title: iteratable.ts
nav_order: 6
parent: Modules
---

## iteratable overview

Recursively generate values for a structure.

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [iterate](#iterate)
- [Model](#model)
  - [Iteratable (interface)](#iteratable-interface)
  - [Iteratable1 (interface)](#iteratable1-interface)
  - [Iteratable2 (interface)](#iteratable2-interface)
  - [Iteratable2C (interface)](#iteratable2c-interface)
  - [Iteratable3 (interface)](#iteratable3-interface)
  - [Iteratable3C (interface)](#iteratable3c-interface)
  - [Iteratable4 (interface)](#iteratable4-interface)
  - [Iteratable4C (interface)](#iteratable4c-interface)

---

# Constructors

## iterate

**Signature**

```ts
export declare function iterate<F extends URIS4, E>(
  F: Iteratable4C<F, E>
): <A>(f: Endomorphism<A>) => <S, R>(a: A) => Kind4<F, S, R, E, A>
export declare function iterate<F extends URIS4>(
  F: Iteratable4<F>
): <A>(f: Endomorphism<A>) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
export declare function iterate<F extends URIS3, E>(
  F: Iteratable3C<F, E>
): <A>(f: Endomorphism<A>) => <R>(a: A) => Kind3<F, R, E, A>
export declare function iterate<F extends URIS3>(
  F: Iteratable3<F>
): <A>(f: Endomorphism<A>) => <R, E>(a: A) => Kind3<F, R, E, A>
export declare function iterate<F extends URIS2, E>(
  F: Iteratable2C<F, E>
): <A>(f: Endomorphism<A>) => (a: A) => Kind2<F, E, A>
export declare function iterate<F extends URIS2>(
  F: Iteratable2<F>
): <A>(f: Endomorphism<A>) => <E>(a: A) => Kind2<F, E, A>
export declare function iterate<F extends URIS>(F: Iteratable1<F>): <A>(f: Endomorphism<A>) => (a: A) => Kind<F, A>
export declare function iterate<F>(F: Iteratable<F>): <A>(f: Endomorphism<A>) => (a: A) => HKT<F, A>
```

# Model

## Iteratable (interface)

**Signature**

```ts
export interface Iteratable<F> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => (a: A) => HKT<F, A>
}
```

## Iteratable1 (interface)

**Signature**

```ts
export interface Iteratable1<F extends URIS> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => (a: A) => Kind<F, A>
}
```

## Iteratable2 (interface)

**Signature**

```ts
export interface Iteratable2<F extends URIS2> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => <E>(a: A) => Kind2<F, E, A>
}
```

## Iteratable2C (interface)

**Signature**

```ts
export interface Iteratable2C<F extends URIS2, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => (a: A) => Kind2<F, E, A>
}
```

## Iteratable3 (interface)

**Signature**

```ts
export interface Iteratable3<F extends URIS3> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => <R, E>(a: A) => Kind3<F, R, E, A>
}
```

## Iteratable3C (interface)

**Signature**

```ts
export interface Iteratable3C<F extends URIS3, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => <R>(a: A) => Kind3<F, R, E, A>
}
```

## Iteratable4 (interface)

**Signature**

```ts
export interface Iteratable4<F extends URIS4> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => <S, R, E>(a: A) => Kind4<F, S, R, E, A>
}
```

## Iteratable4C (interface)

**Signature**

```ts
export interface Iteratable4C<F extends URIS4, E> {
  readonly URI: F
  readonly iterateWhileMap: <A>(f: (a: A) => Option<A>) => <S, R>(a: A) => Kind4<F, S, R, E, A>
}
```
