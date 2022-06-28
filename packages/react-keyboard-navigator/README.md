# React Keyboard Navigator

[![NPM](https://nodei.co/npm/react-keyboard-navigator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-keyboard-navigator/)

![publish workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/react-keyboard-navigator.svg)](https://www.npmjs.com/package/react-keyboard-navigator)

A suite of React components and hook that provides an ability to select sibling React components through keyboard interactive.

## [Demo](https://react-keyboard-navigator.zheeeng.me)

## Installation

```bash
yarn add react-keyboard-navigator (or npm/pnpm)
```

## Concept


```tsx
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
```

This suite contains two polymorphic higher-order component: `KeyboardNavigatorBoard` and `KeyboardNavigatorElement`, the former scopes the control zone, and the latter wraps your selectable component. They both receive a special prop `as`, which indicates what's the component ultimately rendered as.

There is another necessary React hook in this suite -- `useKeyboardNavigator`. It returns a `marker` which adheres to the `KeyboardNavigatorElement` and `KeyboardNavigator` for connecting them.

```ts
const { markRef } = useKeyboardNavigator()

```

```tsx
<KeyboardNavigatorBoard as="div" markRef={markRef} active={boardActive}>
    {children}
<KeyboardNavigatorBoard />
```

```tsx

<KeyboardNavigatorElement as="span" markRef={markRef} active={elementActive} onActiveChange={handleElementActiveChange}>
    {children}
</KeyboardNavigatorElement>
```

## Signature

`KeyboardNavigatorBoard`'s `active` state can be driven by an external prop or internal automatic detecting. An explicitly passed `active` prop forces this detection disabled. If you let this `active` prop be omitted, the `autoActive` detecting mechanism will be enabled with an initial active state `initialActive`. It is also a polymorphic higher-order component, so you can pass any props which the as one takes and the base type definition.

```ts
type KeyboardNavigatorBoardProps = {
    markRef: RegistrySymbol,
    as: React.ElementType,
    active?: boolean,
    // if we explicitly passed the `active` prop, it means the `active` state of KeyboardNavigatorBoard is controlled by external, the `autoActive` prop is forced to `false`.
    // Otherwise, the `autoActive` fallbacks to enabled.
    autoActive?: boolean,
    onAutoActiveChange?: (active: boolean) => void,
    // if the `autoActive` feature is enabled, the initial is used to determine the initial active state, it has the default value of `false`
    initialActive?: boolean,
}
```

`KeyboardNavigatorElement` is a active-state-controlled component (see the [controlled component explanation](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)), and it is polymorphic higher-order-component, also receives any props which the `as` one takes. Therefore it mixes the base type definition with the `as` one's props:

```ts
type KeyboardNavigatorElementProps = {
    markRef: RegistrySymbol,
    active?: boolean,
    onActiveChange?: (active: boolean) => void,
    as: React.ElementType,
}
```

## Example

You can see the live preview here: [link](http://react-keyboard-navigator.zheeeng.me/)

```tsx
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'

const Demo = ({ blocks }: Props) => {
   const { markRef } = useKeyboardNavigator({
      // prevent the default page scrolling behavior when we are using the keyboard to switch the active state between components
      eventCallback: evt => evt.preventDefault()
   })

   const [highlightBlockIndex, setHighlightBockIndex] = useState(0)

   const [boardActive, setBoardActive] = useState(true)

   return (
      <div>
         <div onClick={() => setBoardActive(!boardActive)} style={{ cursor: 'pointer' }}>Active controlled: {boardActive ? '✅' : '❌'}</div>
         <hr />
         <KeyboardNavigatorBoard
            as="div"
            className="wrapper"
            markRef={markRef} active={boardActive}
         >
            {blocks.map((word, index) => (
               <KeyboardNavigatorElement
                  key={word.key}
                  as="span"
                  className="block" style={{ top: word.y, left: word.x, borderColor: index === highlightBlockIndex ? 'orange' : 'lightblue' }} onClick={() => setHighlightBockIndex(index)}
                  markRef={markRef} active={index === highlightBlockIndex} onActiveChange={() => setHighlightBockIndex(index)}
               >
                  {word.text}{' '}
               </KeyboardNavigatorElement>
            ))}
         </KeyboardNavigatorBoard>
      </div>
   )
}
```
