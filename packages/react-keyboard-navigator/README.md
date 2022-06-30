# [React Keyboard Navigator](https://react-keyboard-navigator.zheeeng.me)

[![NPM](https://nodei.co/npm/react-keyboard-navigator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-keyboard-navigator/)

![publish workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/publish.yml/badge.svg)
![pages workflow](https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/pages.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/react-keyboard-navigator.svg)](https://www.npmjs.com/package/react-keyboard-navigator)

A suite of React components and hook that provides an ability to select sibling React components through keyboard interactive.

![react-keyboard-navigator](https://user-images.githubusercontent.com/1303154/176628751-dcff5374-5ed3-4556-9b1c-e13a88246e31.png)

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
3. `didChange` for catching the next tick of active state pass-by, it is convenient to manipulate the related elements, e.g. trigger focus, blur, etc.
4. `rootContainer` for set a always existed and active `KeyboardNavigatorBoard`, e.g. `document.body`. If this option is provided, you don't have to always mark a selectable element through wrapped itself by  `KeyboardNavigatorBoard`.

```ts
type UseKeyboardNavigatorOption = {
    directionMap?: DirectionKeyMap | DirectionDetailsMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement?: HTMLElement }) => void | false
    didChange?: (fromElement: HTMLElement, toElement: HTMLElement) => void
    rootContainer?: HTMLElement
}
```

## Example

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

## Customization

There are two customizable stuff in keyboard navigation: `distance calculation strategy` and `direction mapping`.

1. `distance calculation strategy` determines how to calculate the distance between the start point and the specified direction. It support `DISTANCE`、 `PROJECT`、custom calculation method `(distance: number, angleDegree: number) => number`.
2. `direction mapping` binds the keyboard key to the direction. There are total 8 directions and some built-in direction-keyboard mapping has been defined:

| Group Name         | Direction  | Keyboard Key |
| ------------------ | ---------- | ------------ |
| ArrowDirectionMap  | UP         | ArrowUp      |
|                    | DOWN       | ArrowDown    |
|                    | LEFT       | ArrowLeft    |
|                    | RIGHT      | ArrowRight   |
| WasdDirectionMap   | UP         | W            |
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

An valid custom direction could be:

```ts
const ArrowDirectionMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}
```

or

```ts
const ArrowDirectionMapWithVerticalProjectFirstStrategy: DirectionDetailsMap = {
    UP: {
        key: 'ArrowUp',
        strategy: 'PROJECT',
    },
    DOWN: {
        key: 'ArrowDown',
        strategy: 'PROJECT',
    },
    LEFT: {
        key: 'ArrowLeft',
        strategy: 'PROJECT',
    },
    RIGHT: {
        key: 'ArrowRight',
        strategy: 'PROJECT',
    }
}
```

We exported all the built-in direction-keyboard mapping presets. They are grouped by different direction key styles, and there all have subgroups with different strategy scheduling.

First, import `DirectionMapPresets`.  Secondly, use your preferred preset:

```ts
useKeyboardNavigator({
    directionMap: DirectionMapPresets.WasdDirectionMap.horizontalProjectFirst
})
```

### Create your own direction mapping

We can create our own direction mapping:

```ts
const MyDirectionMapping = {
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
}
```

Or through a helper for creating `DirectionDetailsMap`:

```ts
import { StrategiesHelper } from 'react-keyboard-navigator'

const MyDirectionMapping = StrategiesHelper.horizontalProjectFirst({
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
})
```

If this `StrategiesHelper` doesn't satisfy your needs, feel free to use your own calculation.

```ts
const YourOwnDirection: DirectionDetailsMap = {
    UP: {
        key: 'U',
        strategy: 'PROJECT',
    },
    DOWN: {
        key: 'D',
        strategy: 'PROJECT',
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
  "ArrowDirectionMap": Object {
    "distance": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "DISTANCE",
      },
    },
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "PROJECT",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "DISTANCE",
      },
    },
    "project": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "PROJECT",
      },
    },
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "DISTANCE",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "ArrowDown",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "ArrowLeft",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "ArrowRight",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "ArrowUp",
        "strategy": "PROJECT",
      },
    },
  },
  "HJKLDirectionMap": Object {
    "distance": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "K",
        "strategy": "DISTANCE",
      },
    },
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "K",
        "strategy": "PROJECT",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "K",
        "strategy": "DISTANCE",
      },
    },
    "project": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "K",
        "strategy": "PROJECT",
      },
    },
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "K",
        "strategy": "DISTANCE",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "H",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "K",
        "strategy": "PROJECT",
      },
    },
  },
  "IJKLDirectionMap": Object {
    "distance": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "I",
        "strategy": "DISTANCE",
      },
    },
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "I",
        "strategy": "PROJECT",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "I",
        "strategy": "DISTANCE",
      },
    },
    "project": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "I",
        "strategy": "PROJECT",
      },
    },
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "I",
        "strategy": "DISTANCE",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "k",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "J",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "L",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "I",
        "strategy": "PROJECT",
      },
    },
  },
  "NumPadDirectionMap": Object {
    "distance": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "DISTANCE",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "DISTANCE",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "8",
        "strategy": "DISTANCE",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "DISTANCE",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "DISTANCE",
      },
    },
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "PROJECT",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "DISTANCE",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "8",
        "strategy": "PROJECT",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "DISTANCE",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "DISTANCE",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "DISTANCE",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "PROJECT",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "8",
        "strategy": "DISTANCE",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "PROJECT",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "PROJECT",
      },
    },
    "project": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "PROJECT",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "PROJECT",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "8",
        "strategy": "PROJECT",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "PROJECT",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "PROJECT",
      },
    },
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "DISTANCE",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "DISTANCE",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "8",
        "strategy": "DISTANCE",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "DISTANCE",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "DISTANCE",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "2",
        "strategy": "PROJECT",
      },
      "DOWN_LEFT": Object {
        "key": "1",
        "strategy": "PROJECT",
      },
      "DOWN_RIGHT": Object {
        "key": "3",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "4",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "6",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "8",
        "strategy": "PROJECT",
      },
      "UP_LEFT": Object {
        "key": "7",
        "strategy": "PROJECT",
      },
      "UP_RIGHT": Object {
        "key": "9",
        "strategy": "PROJECT",
      },
    },
  },
  "WasdDirectionMap": Object {
    "distance": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "W",
        "strategy": "DISTANCE",
      },
    },
    "horizontalDistanceFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "W",
        "strategy": "PROJECT",
      },
    },
    "horizontalProjectFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "W",
        "strategy": "DISTANCE",
      },
    },
    "project": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "W",
        "strategy": "PROJECT",
      },
    },
    "verticalDistanceFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "DISTANCE",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "PROJECT",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "PROJECT",
      },
      "UP": Object {
        "key": "W",
        "strategy": "DISTANCE",
      },
    },
    "verticalProjectFirst": Object {
      "DOWN": Object {
        "key": "S",
        "strategy": "PROJECT",
      },
      "LEFT": Object {
        "key": "A",
        "strategy": "DISTANCE",
      },
      "RIGHT": Object {
        "key": "D",
        "strategy": "DISTANCE",
      },
      "UP": Object {
        "key": "W",
        "strategy": "PROJECT",
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
  distance: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
  project: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
  horizontalProjectFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
  horizontalDistanceFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
  verticalProjectFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
  verticalDistanceFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin?: boolean) => DirectionDetailsMap,
}
```

</p>
</details>
