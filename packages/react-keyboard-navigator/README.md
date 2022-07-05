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

1. `directionMap` for customize keyboard mapping, see the [Customization](#customization) section for details.
2. `eventCallback` for catching the active state pass-by, if the caller explicitly returns a `false` value means manually to prevent this pass-by happening.
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

1. `distance calculation strategy` determines how to calculate the distance between the start point and the specified direction. It support `Distance`、 `Cosine`、custom calculation method `(distance: number, angleDegree: number) => number`.
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
    directionMap: DirectionMapPresets.WASDDirectionMap.horizontalProjectFirst
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

const MyDirectionMapping: DirectionMap = StrategiesHelper.horizontalProjectFirst({
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

#### DirectionMapPresets

```ts
import { DirectionMapPresets } from 'react-keyboard-navigator'
```

<details>
<summary>See its structure</summary>
<p>

```json
Object {
  "ArrowDirectionKeyMap": Object {
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
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
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
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
  },
  "HJKLDirectionKeyMap": Object {
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
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
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
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
  },
  "IJKLDirectionKeyMap": Object {
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
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
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
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
  },
  "NumPadDirectionKeyMap": Object {
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
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
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
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "Distance",
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
        "strategy": "Distance",
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
    "verticalDistanceFirst": Object {
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
        "strategy": "Cosine",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Cosine",
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
    "verticalProjectFirst": Object {
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
        "strategy": "Distance",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "Distance",
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
  },
  "WASDDirectionKeyMap": Object {
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
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
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
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Distance",
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
        "strategy": "Distance",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "Cosine",
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
        "strategy": "Cosine",
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
  cosine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  horizontalProjectFirst: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  horizontalDistanceFirst: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  verticalProjectFirst: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  verticalDistanceFirst: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
}
```

</p>
</details>
