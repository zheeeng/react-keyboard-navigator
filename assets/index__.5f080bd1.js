import{c as e}from"./index.37fc0cff.js";const i={},o="wrapper";function n({components:t,...a}){return e(o,{...i,...a,components:t,mdxType:"MDXLayout"},e("h1",null,"\u2328\uFE0F ",e("a",{parentName:"h1",href:"https://react-keyboard-navigator.zheeeng.me"},"React Keyboard Navigator")),e("p",null,e("a",{parentName:"p",href:"https://nodei.co/npm/react-keyboard-navigator/"},e("img",{parentName:"a",src:"https://nodei.co/npm/react-keyboard-navigator.png?downloads=true&downloadRank=true&stars=true",alt:"NPM"}))),e("p",null,e("img",{parentName:"p",src:"https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/publish.yml/badge.svg",alt:"publish workflow"}),`
`,e("img",{parentName:"p",src:"https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/pages.yml/badge.svg",alt:"pages workflow"}),`
`,e("a",{parentName:"p",href:"https://www.npmjs.com/package/react-keyboard-navigator"},e("img",{parentName:"a",src:"https://img.shields.io/npm/v/react-keyboard-navigator.svg",alt:"npm version"}))),e("p",null,"A suite of React components and hook for selecting sibling components through the keyboard."),e("p",null,e("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1303154/176628751-dcff5374-5ed3-4556-9b1c-e13a88246e31.png",alt:"react-keyboard-navigator"})),e("h2",null,"\u{1F9E9}  Installation"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add react-keyboard-navigator (or npm/pnpm)
`)),e("h2",null,"\u{1F4A1} Concept"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
`)),e("p",null,"This suite contains two polymorphic higher-order component: ",e("inlineCode",{parentName:"p"},"KeyboardNavigatorBoard")," and ",e("inlineCode",{parentName:"p"},"KeyboardNavigatorElement"),", the former scopes the control zone, and the latter wraps your selectable component. They both receive a special prop ",e("inlineCode",{parentName:"p"},"as"),", which indicates what's the component ultimately rendered as."),e("p",null,"There is another necessary React hook in this suite -- ",e("inlineCode",{parentName:"p"},"useKeyboardNavigator"),". It returns a ",e("inlineCode",{parentName:"p"},"marker")," which adheres to the ",e("inlineCode",{parentName:"p"},"KeyboardNavigatorElement")," and ",e("inlineCode",{parentName:"p"},"KeyboardNavigator")," for connecting them."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const { markRef } = useKeyboardNavigator()

`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<KeyboardNavigatorBoard as="div" markRef={markRef} active={boardActive}>
    {children}
<KeyboardNavigatorBoard />
`)),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`
<KeyboardNavigatorElement as="span" markRef={markRef} active={elementActive} onActiveChange={handleElementActiveChange}>
    {children}
</KeyboardNavigatorElement>
`)),e("h2",null,"\u{1F4AB} Signature"),e("p",null,e("inlineCode",{parentName:"p"},"KeyboardNavigatorBoard"),"'s ",e("inlineCode",{parentName:"p"},"active")," state can be driven by an external prop or internal automatic detecting. An explicitly passed ",e("inlineCode",{parentName:"p"},"active")," prop forces this detection disabled. If you let this ",e("inlineCode",{parentName:"p"},"active")," prop be omitted, the ",e("inlineCode",{parentName:"p"},"autoActive")," detecting mechanism will be enabled with an initial active state ",e("inlineCode",{parentName:"p"},"initialActive"),". It is also a polymorphic higher-order component, so you can pass any props which the ",e("inlineCode",{parentName:"p"},"as")," one takes and the base type definition."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},"type KeyboardNavigatorBoardProps = {\n    markRef: RegistrySymbol,\n    as: React.ElementType,\n    active?: boolean,\n    // if we explicitly passed the `active` prop, it means the `active` state of KeyboardNavigatorBoard is controlled by external, the `autoActive` prop is forced to `false`.\n    // Otherwise, the `autoActive` fallbacks to enabled.\n    autoActive?: boolean,\n    onAutoActiveChange?: (active: boolean) => void,\n    // if the `autoActive` feature is enabled, the initial is used to determine the initial active state, it has the default value of `false`\n    initialActive?: boolean,\n}\n")),e("p",null,e("inlineCode",{parentName:"p"},"KeyboardNavigatorElement")," is a active-state-controlled component (see the ",e("a",{parentName:"p",href:"https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/"},"controlled component explanation"),"), and it is polymorphic higher-order-component, also receives any props which the ",e("inlineCode",{parentName:"p"},"as")," one takes. Therefore it mixes the base type definition with the ",e("inlineCode",{parentName:"p"},"as")," one's props:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type KeyboardNavigatorElementProps = {
    markRef: RegistrySymbol,
    active?: boolean,
    onActiveChange?: (active: boolean) => void,
    as: React.ElementType,
}
`)),e("p",null,e("inlineCode",{parentName:"p"},"useKeyboardNavigator")," receives:"),e("ol",null,e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"directionMap")," for customize keyboard mapping, see the ",e("a",{parentName:"li",href:"#customization"},"Customization")," section for details."),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"eventCallback")," for catching the active state pass-by, if the caller explicitly returns a ",e("inlineCode",{parentName:"li"},"false")," value means manually to prevent this pass-by happening."),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"didChange")," for catching the next tick of active state pass-by, it is convenient to manipulate the relevant elements, e.g. trigger focus, blur, etc."),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"rootContainer")," for set a always existed and active ",e("inlineCode",{parentName:"li"},"KeyboardNavigatorBoard"),", e.g. ",e("inlineCode",{parentName:"li"},"document.body"),". If this option is provided, you don't have to always mark a selectable element through wrapped itself by  ",e("inlineCode",{parentName:"li"},"KeyboardNavigatorBoard"),".")),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type UseKeyboardNavigatorOption = {
    directionMap?: DirectionKeyMap | DirectionMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement?: HTMLElement }) => void | false
    didChange?: (fromElement: HTMLElement, toElement: HTMLElement) => void
    rootContainer?: HTMLElement
}
`)),e("h2",null,"\u{1F4CE}  Example"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'

const Demo = ({ blocks }: Props) => {
   const { markRef } = useKeyboardNavigator({
      // prevent the default page scrolling behavior when we are using the keyboard to switch the active state between components
      eventCallback: evt => evt.preventDefault()
   })

   const [highlightBlockIndex, setHighlightBockIndex] = useState(0)

   const [boardActive, setBoardActive] = useState(true)

   return (
      <div>
         <div onClick={() => setBoardActive(!boardActive)} style={{ cursor: 'pointer' }}>Active controlled: {boardActive ? '\u2705' : '\u274C'}</div>
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
`)),e("p",null,"You can see the live preview here: ",e("a",{parentName:"p",href:"https://react-keyboard-navigator.zheeeng.me/#/randomPlacement"},"Random Placement"),", and other examples: ",e("a",{parentName:"p",href:"https://react-keyboard-navigator.zheeeng.me/#/interestGallery"},"Interest Gallery"),", ",e("a",{parentName:"p",href:"https://react-keyboard-navigator.zheeeng.me/#/macOSFinder"},"MacOS Finder")),e("h2",null,"Customization \u{1F447}"),e("p",null,"There are two customizable stuff in keyboard navigation: ",e("inlineCode",{parentName:"p"},"distance calculation strategy")," and ",e("inlineCode",{parentName:"p"},"direction mapping"),"."),e("ol",null,e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"distance calculation strategy")," determines how to calculate the distance between the start point and the specified direction. It support ",e("inlineCode",{parentName:"p"},"Distance"),"\u3001",e("inlineCode",{parentName:"p"},"Secant"),"\u3001",e("inlineCode",{parentName:"p"},"Cosine"),"\u3001",e("inlineCode",{parentName:"p"},"Sine"),"\u3001",e("inlineCode",{parentName:"p"},"Tangent"),"\u3001custom calculation method ",e("inlineCode",{parentName:"p"},"(distance: number, angleDegree: number) => number"),"."),e("p",{parentName:"li"},e("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1303154/177306883-1ffe7039-db9b-4f1b-a503-e2d5048936ef.png",alt:"distance"}))),e("li",{parentName:"ol"},e("p",{parentName:"li"},e("inlineCode",{parentName:"p"},"direction mapping")," binds the keyboard key to the direction. There are total 8 directions and some built-in direction-keyboard mapping has been defined:"))),e("table",null,e("thead",{parentName:"table"},e("tr",{parentName:"thead"},e("th",{parentName:"tr",align:null},"Group Name"),e("th",{parentName:"tr",align:null},"Direction"),e("th",{parentName:"tr",align:null},"Keyboard Key"))),e("tbody",{parentName:"table"},e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"ArrowDirectionMap"),e("td",{parentName:"tr",align:null},"UP"),e("td",{parentName:"tr",align:null},"ArrowUp")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN"),e("td",{parentName:"tr",align:null},"ArrowDown")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"LEFT"),e("td",{parentName:"tr",align:null},"ArrowLeft")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"RIGHT"),e("td",{parentName:"tr",align:null},"ArrowRight")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"WASDDirectionMap"),e("td",{parentName:"tr",align:null},"UP"),e("td",{parentName:"tr",align:null},"W")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN"),e("td",{parentName:"tr",align:null},"S")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"LEFT"),e("td",{parentName:"tr",align:null},"A")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"RIGHT"),e("td",{parentName:"tr",align:null},"D")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"IJKLDirectionMap"),e("td",{parentName:"tr",align:null},"UP"),e("td",{parentName:"tr",align:null},"I")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN"),e("td",{parentName:"tr",align:null},"K")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"LEFT"),e("td",{parentName:"tr",align:null},"J")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"RIGHT"),e("td",{parentName:"tr",align:null},"L")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"HJKLDirectionMap"),e("td",{parentName:"tr",align:null},"UP"),e("td",{parentName:"tr",align:null},"K")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN"),e("td",{parentName:"tr",align:null},"H")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"LEFT"),e("td",{parentName:"tr",align:null},"J")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"RIGHT"),e("td",{parentName:"tr",align:null},"L")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null},"NumPadDirectionMap"),e("td",{parentName:"tr",align:null},"UP_LEFT"),e("td",{parentName:"tr",align:null},"7")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"UP"),e("td",{parentName:"tr",align:null},"8")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"UP_RIGHT"),e("td",{parentName:"tr",align:null},"9")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"LEFT"),e("td",{parentName:"tr",align:null},"4")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"RIGHT"),e("td",{parentName:"tr",align:null},"6")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN_LEFT"),e("td",{parentName:"tr",align:null},"1")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN"),e("td",{parentName:"tr",align:null},"2")),e("tr",{parentName:"tbody"},e("td",{parentName:"tr",align:null}),e("td",{parentName:"tr",align:null},"DOWN_RIGHT"),e("td",{parentName:"tr",align:null},"3")))),e("p",null,"By default we use the ",e("inlineCode",{parentName:"p"},"ArrowDirectionMap"),"."),e("p",null,"An valid custom direction could be mapping from direction to key:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const ArrowDirectionKeyMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}
`)),e("p",null,"or mapping from direction to key and strategy:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const ArrowDirectionMap: DirectionMap = {
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
`)),e("p",null,"We exported all the built-in direction-keyboard mapping presets. They are grouped by preferences, and there all have subgroups with different strategies."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { useKeyboardNavigator, DirectionMapPresets } from 'react-keyboard-navigator'

// execute in A Functional React Component
useKeyboardNavigator({
    directionMap: DirectionMapPresets.WASDDirectionMap.secant
})
`)),e("h3",null,"Create your own direction mapping"),e("p",null,"You can create your own mapping with fallback strategy ",e("inlineCode",{parentName:"p"},"Cosine"),". e.g."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const MyDirectionMapping: DirectionKeyMap = {
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
}
`)),e("p",null,"Or use the ",e("inlineCode",{parentName:"p"},"StrategiesHelper")," to create a ",e("inlineCode",{parentName:"p"},"DirectionMap")," which defined with specific strategy:"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { StrategiesHelper } from 'react-keyboard-navigator

const MyDirectionMapping: DirectionMap = StrategiesHelper.secant({
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
})
`)),e("p",null,"If this ",e("inlineCode",{parentName:"p"},"StrategiesHelper")," doesn't satisfy your needs, feel free to use your own calculation."),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`const YourOwnDirection: DirectionMap = {
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
`)),e("h3",null,"Signature of Customization stuff"),e("h4",null,"DirectionMapPresets"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { DirectionMapPresets } from 'react-keyboard-navigator'
`)),e("details",null,e("summary",null,"See its structure"),e("p",null,e("pre",null,e("code",{parentName:"pre",className:"language-json"},`Object {
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
`)))),e("h4",null,"StrategiesHelper"),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`import { StrategiesHelper } from 'react-keyboard-navigator'
`)),e("details",null,e("summary",null,"See its structure"),e("p",null,e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`{
  distance: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  secant: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  cosine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  sine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  tangent: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
}
`)))))}n.isMDXComponent=!0;const l={},c="wrapper";function r({components:t,...a}){return e(c,{...l,...a,components:t,mdxType:"MDXLayout"},e(n,{mdxType:"README"}))}r.isMDXComponent=!0;var s=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}));const p={};p.main=s;export{p as default};
