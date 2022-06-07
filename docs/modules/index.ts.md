---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.12.0

---

<h2 class="text-delta">Table of contents</h2>

- [Apply](#apply)
  - [ap](#ap)
  - [apFirst](#apfirst)
  - [apS](#aps)
  - [apSecond](#apsecond)
- [Chain](#chain)
  - [bind](#bind)
  - [chain](#chain)
  - [chainFirst](#chainfirst)
- [Eq](#eq)
  - [getEq](#geteq)
- [Functor](#functor)
  - [bindTo](#bindto)
  - [flap](#flap)
  - [map](#map)
- [Instances](#instances)
  - [Applicative](#applicative)
  - [Apply](#apply-1)
  - [Chain](#chain-1)
  - [Functor](#functor-1)
  - [Monad](#monad)
- [Model](#model)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
- [Pointed](#pointed)
  - [Pointed](#pointed-1)
  - [of](#of)
- [utils](#utils)
  - [FromReadonlyArray](#fromreadonlyarray)
  - [ToReadonlyArray](#toreadonlyarray)
  - [skipWhileMapWithIndex](#skipwhilemapwithindex)

---

# Apply

## ap

**Signature**

```ts
export declare const ap: <A1>(fa: Iterable<A1>) => <A2>(fab: Iterable<(a: A1) => A2>) => Iterable<A2>
```

## apFirst

**Signature**

```ts
export declare const apFirst: <B>(second: Iterable<B>) => <A>(first: Iterable<A>) => Iterable<A>
```

## apS

**Signature**

```ts
export declare const apS: <N, A, B>(
  name: Exclude<N, keyof A>,
  fb: Iterable<B>
) => (fa: Iterable<A>) => Iterable<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

## apSecond

**Signature**

```ts
export declare const apSecond: <B>(second: Iterable<B>) => <A>(first: Iterable<A>) => Iterable<B>
```

# Chain

## bind

**Signature**

```ts
export declare const bind: <N, A, B>(
  name: Exclude<N, keyof A>,
  f: (a: A) => Iterable<B>
) => (ma: Iterable<A>) => Iterable<{ readonly [K in N | keyof A]: K extends keyof A ? A[K] : B }>
```

## chain

**Signature**

```ts
export declare const chain: <A1, A2>(f: (a: A1) => Iterable<A2>) => (fa: Iterable<A1>) => Iterable<A2>
```

## chainFirst

**Signature**

```ts
export declare const chainFirst: <A, B>(f: (a: A) => Iterable<B>) => (first: Iterable<A>) => Iterable<A>
```

# Eq

## getEq

**Signature**

```ts
export declare const getEq: <A>(eqa: eq.Eq<A>) => eq.Eq<Iterable<A>>
```

# Functor

## bindTo

**Signature**

```ts
export declare const bindTo: <N>(name: N) => <A>(fa: Iterable<A>) => Iterable<{ readonly [K in N]: A }>
```

## flap

**Signature**

```ts
export declare const flap: <A>(a: A) => <B>(fab: Iterable<(a: A) => B>) => Iterable<B>
```

## map

**Signature**

```ts
export declare const map: <A1, A2>(f: (a: A1) => A2) => (fa: Iterable<A1>) => Iterable<A2>
```

# Instances

## Applicative

**Signature**

```ts
export declare const Applicative: Applicative1<'Iterable'>
```

## Apply

**Signature**

```ts
export declare const Apply: apply.Apply1<'Iterable'>
```

## Chain

**Signature**

```ts
export declare const Chain: chain_.Chain1<'Iterable'>
```

## Functor

**Signature**

```ts
export declare const Functor: functor.Functor1<'Iterable'>
```

## Monad

**Signature**

```ts
export declare const Monad: Monad1<'Iterable'>
```

# Model

## URI

**Signature**

```ts
export declare const URI: 'Iterable'
```

Added in v0.12.0

## URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v0.12.0

# Pointed

## Pointed

**Signature**

```ts
export declare const Pointed: Pointed1<'Iterable'>
```

## of

**Signature**

```ts
export declare const of: <A>(a: A) => Iterable<A>
```

# utils

## FromReadonlyArray

**Signature**

```ts
export declare const FromReadonlyArray: NaturalTransformation11<'ReadonlyArray', 'Iterable'>
```

## ToReadonlyArray

**Signature**

```ts
export declare const ToReadonlyArray: NaturalTransformation11<'Iterable', 'ReadonlyArray'>
```

## skipWhileMapWithIndex

**Signature**

```ts
export declare const skipWhileMapWithIndex: <A1, A2>(
  f: (index: number, a: A1) => option.Option<A2>
) => (fa: Iterable<A1>) => Iterable<A1>
```
