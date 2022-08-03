# ⌨️ [React Keyboard Navigator](https://react-keyboard-navigator.zheeeng.me)

[![NPM](https://nodei.co/npm/react-keyboard-navigator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-keyboard-navigator/)

![publish workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/react-keyboard-navigator.svg)](https://www.npmjs.com/package/react-keyboard-navigator)

A suite of React components and hook for selecting sibling components through the keyboard.

![react-keyboard-navigator](https://user-images.githubusercontent.com/1303154/176628751-dcff5374-5ed3-4556-9b1c-e13a88246e31.png)

## 🧩  Installation

```bash
yarn add react-keyboard-navigator (or npm/pnpm)
```

## 💡 Concept

```tsx
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
```

This suite contains two polymorphic higher-order component: `KeyboardNavigatorBoard` and `KeyboardNavigatorElement`, the former scopes the control zone, and the latter wraps your selectable component. They both receive a special prop `as`, which indicates what's the component ultimately rendered as.

There is another necessary React hook in this suite -- `useKeyboardNavigator`. It returns a `marker` which adheres to the `KeyboardNavigatorBoard` and `KeyboardNavigatorElement` for connecting them.

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

## 💫 Signature

`KeyboardNavigatorBoard`'s `active` state can be driven by an external prop or internal automatic detecting. An explicitly passed `active` prop forces this detection disabled. If you let this `active` prop be omitted, the `autoActive` detecting mechanism will be enabled with an initial active state `initialActive`. It is also a polymorphic higher-order component, so you can pass any props which the `as` one takes and the base type definition.

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

`useKeyboardNavigator` receives:

1. `directionMap` for customize keyboard mapping. See the [Customization](#customization) section for details.
2. `eventCallback` for catching the active state transition, if the caller explicitly returns a `false` value means manually to prevent this pass-by happening. See the [Signature](#signature-of-customization-stuff) section for more about built-in event callback presets.
3. `didChange` for catching the next tick of active state pass-by, it is convenient to manipulate the relevant elements, e.g. trigger focus, blur, etc.
4. `rootContainer` for set a always existed and active `KeyboardNavigatorBoard`, e.g. `document.body`. If this option is provided, you don't have to always mark a selectable element through wrapped itself by  `KeyboardNavigatorBoard`.

```ts
type UseKeyboardNavigatorOption = {
    directionMap?: DirectionKeyMap | DirectionMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement?: HTMLElement }) => void | false
    didChange?: (fromElement: HTMLElement, toElement: HTMLElement) => void
    rootContainer?: HTMLElement
}
```

## 📎  Example

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
            as="main"
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

You can see the live preview here: [Random Placement](https://react-keyboard-navigator.zheeeng.me/#/randomPlacement), and other examples: [Interest Gallery](https://react-keyboard-navigator.zheeeng.me/#/interestGallery), [MacOS Finder](https://react-keyboard-navigator.zheeeng.me/#/macOSFinder)

## Customization 👇

There are two customizable stuff in keyboard navigation: `distance calculation strategy` and `direction mapping`.

1. `distance calculation strategy` determines how to calculate the distance between the start point and the specified direction. It support `Distance`、`Secant`、`Cosine`、`Sine`、`Tangent`、custom calculation method `(distance: number, angleDegree: number) => number`.

   ![distance](https://user-images.githubusercontent.com/1303154/177306883-1ffe7039-db9b-4f1b-a503-e2d5048936ef.png)

2. `direction mapping` binds the keyboard key to the direction. There are total 8 directions and some built-in direction-keyboard mapping has been defined:

| Group Name         | Direction  | Keyboard Key |
| ------------------ | ---------- | ------------ |
| ArrowDirectionMap  | UP         | ArrowUp      |
|                    | DOWN       | ArrowDown    |
|                    | LEFT       | ArrowLeft    |
|                    | RIGHT      | ArrowRight   |
| WASDDirectionMap   | UP         | W            |
|                    | DOWN       | S            |
|                    | LEFT       | A            |
|                    | RIGHT      | D            |
| IJKLDirectionMap   | UP         | I            |
|                    | DOWN       | K            |
|                    | LEFT       | J            |
|                    | RIGHT      | L            |
| HJKLDirectionMap   | UP         | K            |
|                    | DOWN       | H            |
|                    | LEFT       | J            |
|                    | RIGHT      | L            |
| NumPadDirectionMap | UP_LEFT    | 7            |
|                    | UP         | 8            |
|                    | UP_RIGHT   | 9            |
|                    | LEFT       | 4            |
|                    | RIGHT      | 6            |
|                    | DOWN_LEFT  | 1            |
|                    | DOWN       | 2            |
|                    | DOWN_RIGHT | 3            |

By default we use the `ArrowDirectionMap`.

An valid custom direction could be mapping from direction to key:

```ts
const ArrowDirectionKeyMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}
```

or mapping from direction to key and strategy:

```ts
const ArrowDirectionMap: DirectionMap = {
    UP: {
        key: 'ArrowUp',
        strategy: 'Cosine',
    },
    DOWN: {
        key: 'ArrowDown',
        strategy: 'Cosine',
    },
    LEFT: {
        key: 'ArrowLeft',
        strategy: 'Distance',
    },
    RIGHT: {
        key: 'ArrowRight',
        strategy: 'Distance',
    }
}
```

We exported all the built-in direction-keyboard mapping presets. They are grouped by preferences, and there all have subgroups with different strategies.

```ts
import { useKeyboardNavigator, DirectionMapPresets } from 'react-keyboard-navigator'

// execute in A Functional React Component
useKeyboardNavigator({
    directionMap: DirectionMapPresets.WASDDirectionMap.secant
})
```

### Create your own direction mapping

You can create your own mapping with fallback strategy `Cosine`. e.g.

```ts
const MyDirectionMapping: DirectionKeyMap = {
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
}
```

Or use the `StrategiesHelper` to create a `DirectionMap` which defined with specific strategy:

```ts
import { StrategiesHelper } from 'react-keyboard-navigator

const MyDirectionMapping: DirectionMap = StrategiesHelper.secant({
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
})
```

If this `StrategiesHelper` doesn't satisfy your needs, feel free to use your own calculation.

```ts
const YourOwnDirection: DirectionMap = {
    UP: {
        key: 'U',
        strategy: 'Cosine',
    },
    DOWN: {
        key: 'D',
        strategy: 'Cosine',
    },
    LEFT: {
        key: 'L',
        strategy: (distance: number, angleDegree: number) => angleDegree < 10 ? 0 : distance * Math.log(angleDegree) / Math.log(10),
    },
    RIGHT: {
        key: 'R',
        strategy: (distance: number, angleDegree: number) => angleDegree < 10 ? 0 : distance * Math.log(angleDegree) / Math.log(10),
    }
}
```

### Signature of Customization stuff

#### EventCallbackPresets

This presets includes some common event callbacks.

```ts
import { EventCallbackPresets } from 'react-keyboard-navigator'
```

* `DirectionMapPresets.preventDefault`: prevent the default behavior of the event, usually is used for prevent from page scrolling when navigating.
* `DirectionMapPresets.stopPropagation`: stop propagation of the event, usually is used for prevent conflicts  with topper DOM's listeners.
* `DirectionMapPresets.stopImmediatePropagation`: same to `stopPropagation`, but stop the event propagation immediately.
* `DirectionMapPresets.stopOnActiveInputElement`: stop navigating when the current active element is an input element.
* `DirectionMapPresets.stopOnActiveInputElementAndPreventDefault`: same to `stopOnActiveInputElement`, but also prevent the default behavior of the event.

#### DirectionMapPresets

```ts
import { DirectionMapPresets } from 'react-keyboard-navigator'
```

<details>
<summary>See its structure</summary>
<p>

```json
Object {
  "ArrowDirectionMap": Object {
    "cosine": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Cosine",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "Cosine",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "Cosine",
      },
    },
    "distance": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Distance",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "Distance",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "Distance",
      },
    },
    "secant": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Secant",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "Secant",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "Secant",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "Secant",
      },
    },
    "sine": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Sine",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "Sine",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "Sine",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "Sine",
      },
    },
    "tangent": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Tangent",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "Tangent",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "Tangent",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "Tangent",
      },
    },
  },
  "HJKLDirectionMap": Object {
    "cosine": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Cosine",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Cosine",
      },
      "UP": Object {
        "key": "K",
        "strategy": "Cosine",
      },
    },
    "distance": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Distance",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Distance",
      },
      "UP": Object {
        "key": "K",
        "strategy": "Distance",
      },
    },
    "secant": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Secant",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "Secant",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Secant",
      },
      "UP": Object {
        "key": "K",
        "strategy": "Secant",
      },
    },
    "sine": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Sine",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "Sine",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Sine",
      },
      "UP": Object {
        "key": "K",
        "strategy": "Sine",
      },
    },
    "tangent": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Tangent",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "Tangent",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Tangent",
      },
      "UP": Object {
        "key": "K",
        "strategy": "Tangent",
      },
    },
  },
  "IJKLDirectionMap": Object {
    "cosine": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Cosine",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Cosine",
      },
      "UP": Object {
        "key": "I",
        "strategy": "Cosine",
      },
    },
    "distance": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Distance",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Distance",
      },
      "UP": Object {
        "key": "I",
        "strategy": "Distance",
      },
    },
    "secant": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Secant",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "Secant",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Secant",
      },
      "UP": Object {
        "key": "I",
        "strategy": "Secant",
      },
    },
    "sine": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Sine",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "Sine",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Sine",
      },
      "UP": Object {
        "key": "I",
        "strategy": "Sine",
      },
    },
    "tangent": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Tangent",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "Tangent",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "Tangent",
      },
      "UP": Object {
        "key": "I",
        "strategy": "Tangent",
      },
    },
  },
  "NumPadDirectionMap": Object {
    "cosine": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Cosine",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "Cosine",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "Cosine",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Cosine",
      },
      "UP": Object {
        "key": "8",
        "strategy": "Cosine",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "Cosine",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "Cosine",
      },
    },
    "distance": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Distance",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "Distance",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "Distance",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Distance",
      },
      "UP": Object {
        "key": "8",
        "strategy": "Distance",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "Distance",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "Distance",
      },
    },
    "secant": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Secant",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "Secant",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "Secant",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "Secant",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Secant",
      },
      "UP": Object {
        "key": "8",
        "strategy": "Secant",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "Secant",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "Secant",
      },
    },
    "sine": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Sine",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "Sine",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "Sine",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "Sine",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Sine",
      },
      "UP": Object {
        "key": "8",
        "strategy": "Sine",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "Sine",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "Sine",
      },
    },
    "tangent": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Tangent",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "Tangent",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "Tangent",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "Tangent",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Tangent",
      },
      "UP": Object {
        "key": "8",
        "strategy": "Tangent",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "Tangent",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "Tangent",
      },
    },
  },
  "WASDDirectionMap": Object {
    "cosine": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Cosine",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "Cosine",
      },
      "UP": Object {
        "key": "W",
        "strategy": "Cosine",
      },
    },
    "distance": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Distance",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "Distance",
      },
      "UP": Object {
        "key": "W",
        "strategy": "Distance",
      },
    },
    "secant": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Secant",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "Secant",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "Secant",
      },
      "UP": Object {
        "key": "W",
        "strategy": "Secant",
      },
    },
    "sine": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Sine",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "Sine",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "Sine",
      },
      "UP": Object {
        "key": "W",
        "strategy": "Sine",
      },
    },
    "tangent": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Tangent",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "Tangent",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "Tangent",
      },
      "UP": Object {
        "key": "W",
        "strategy": "Tangent",
      },
    },
  },
}
```

</p>
</details>

#### StrategiesHelper

```ts
import { StrategiesHelper } from 'react-keyboard-navigator'
```

<details>
<summary>See its structure</summary>
<p>

```ts
{
  distance: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  secant: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  cosine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  sine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  tangent: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
}
```

</p>
</details>
