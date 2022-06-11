---
title: iterable.ts
nav_order: 2
parent: Modules
---

## iterable overview

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
  - [flatten](#flatten)
- [Combinators](#combinators)
  - [dropLeft](#dropleft)
  - [dropLeftWhile](#dropleftwhile)
  - [dropLeftWhileMap](#dropleftwhilemap)
  - [dropLeftWhileMapWithIndex](#dropleftwhilemapwithindex)
  - [dropLeftWhileWithIndex](#dropleftwhilewithindex)
  - [dropRight](#dropright)
  - [dropRightWhileMap](#droprightwhilemap)
  - [skipRightWhileMapWithIndex](#skiprightwhilemapwithindex)
  - [skipRightWhileWithIndex](#skiprightwhilewithindex)
- [Eq](#eq)
  - [getEq](#geteq)
- [Functor](#functor)
  - [bindTo](#bindto)
  - [flap](#flap)
  - [map](#map)
  - [mapWithIndex](#mapwithindex)
- [Instances](#instances)
  - [Applicative](#applicative)
  - [Apply](#apply-1)
  - [Chain](#chain-1)
  - [Functor](#functor-1)
  - [FunctorWithIndex](#functorwithindex)
  - [Monad](#monad)
  - [Unfoldable](#unfoldable)
- [Model](#model)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
- [NaturalTransformation](#naturaltransformation)
  - [FromReadonlyArray](#fromreadonlyarray)
  - [ToReadonlyArray](#toreadonlyarray)
- [Pointed](#pointed)
  - [Pointed](#pointed-1)
  - [of](#of)
- [Unfoldable](#unfoldable-1)
  - [unfold](#unfold)

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

## flatten

**Signature**

```ts
export declare const flatten: <A1>(fa: Iterable<Iterable<A1>>) => Iterable<A1>
```

# Combinators

## dropLeft

**Signature**

```ts
export declare const dropLeft: (count: number) => <A1>(fa: Iterable<A1>) => Iterable<A1>
```

## dropLeftWhile

**Signature**

```ts
export declare const dropLeftWhile: <A1, A2 extends A1>(
  f: Predicate<A1> | Refinement<A1, A2>
) => (fa: Iterable<A1>) => Iterable<A1>
```

## dropLeftWhileMap

**Signature**

```ts
export declare const dropLeftWhileMap: <A1, A2>(f: (a: A1) => option.Option<A2>) => (fa: Iterable<A1>) => Iterable<A1>
```

## dropLeftWhileMapWithIndex

**Signature**

```ts
export declare const dropLeftWhileMapWithIndex: <A1, A2>(
  f: (index: number, a: A1) => option.Option<A2>
) => (fa: Iterable<A1>) => Iterable<A1>
```

## dropLeftWhileWithIndex

**Signature**

```ts
export declare const dropLeftWhileWithIndex: <A1, A2 extends A1>(
  f: PredicateWithIndex<number, A1> | RefinementWithIndex<number, A1, A2>
) => (fa: Iterable<A1>) => Iterable<A1>
```

## dropRight

**Signature**

```ts
export declare const dropRight: (count: number) => <A1>(fa: Iterable<A1>) => Iterable<A1>
```

## dropRightWhileMap

**Signature**

```ts
export declare const dropRightWhileMap: <A1, A2>(f: (a: A1) => option.Option<A2>) => (fa: Iterable<A1>) => Iterable<A1>
```

## skipRightWhileMapWithIndex

**Signature**

```ts
export declare const skipRightWhileMapWithIndex: <A1, A2>(
  f: (i: number, a: A1) => option.Option<A2>
) => (fa: Iterable<A1>) => Iterable<A1>
```

## skipRightWhileWithIndex

**Signature**

```ts
export declare const skipRightWhileWithIndex: <A1, A2 extends A1>(
  f: PredicateWithIndex<number, A1> | RefinementWithIndex<number, A1, A2>
) => (fa: Iterable<A1>) => Iterable<A1>
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

## mapWithIndex

**Signature**

```ts
export declare const mapWithIndex: <A1, A2>(f: (index: number, a: A1) => A2) => (fa: Iterable<A1>) => Iterable<A2>
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

## FunctorWithIndex

**Signature**

```ts
export declare const FunctorWithIndex: FunctorWithIndex1<'Iterable', number>
```

## Monad

**Signature**

```ts
export declare const Monad: Monad1<'Iterable'>
```

## Unfoldable

**Signature**

```ts
export declare const Unfoldable: Unfoldable1<'Iterable'>
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

# NaturalTransformation

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

# Unfoldable

## unfold

**Signature**

```ts
export declare const unfold: <A, B>(b: B, f: (b: B) => option.Option<[A, B]>) => Iterable<A>
```
