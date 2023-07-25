import{p as c}from"./_-84723408.js";import{u as r,j as e}from"./index-c2f48b1e.js";function a(t){const n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",pre:"pre",code:"code",ol:"ol",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",h4:"h4",ul:"ul"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{id:"️-react-keyboard-navigator",children:["⌨️ ",e.jsx(n.a,{href:"https://react-keyboard-navigator.zheeeng.me",children:"React Keyboard Navigator"})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://nodei.co/npm/react-keyboard-navigator/",children:e.jsx(n.img,{src:"https://nodei.co/npm/react-keyboard-navigator.png?downloads=true&downloadRank=true&stars=true",alt:"NPM"})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/publish.yml/badge.svg",alt:"publish workflow"}),`
`,e.jsx(n.img,{src:"https://github.com/zheeeng/react-keyboard-navigator/actions/workflows/pages.yml/badge.svg",alt:"pages workflow"}),`
`,e.jsx(n.a,{href:"https://www.npmjs.com/package/react-keyboard-navigator",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/react-keyboard-navigator.svg",alt:"npm version"})})]}),`
`,e.jsx(n.p,{children:"A suite of React components and hook for selecting sibling components through the keyboard."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://user-images.githubusercontent.com/1303154/176628751-dcff5374-5ed3-4556-9b1c-e13a88246e31.png",alt:"react-keyboard-navigator"})}),`
`,e.jsx(n.h2,{id:"--installation",children:"🧩  Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add react-keyboard-navigator (or npm/pnpm)
`})}),`
`,e.jsx(n.h2,{id:"-concept",children:"💡 Concept"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
`})}),`
`,e.jsxs(n.p,{children:["This suite contains two polymorphic higher-order component: ",e.jsx(n.code,{children:"KeyboardNavigatorBoard"})," and ",e.jsx(n.code,{children:"KeyboardNavigatorElement"}),", the former scopes the control zone, and the latter wraps your selectable component. They both receive a special prop ",e.jsx(n.code,{children:"as"}),", which indicates what's the component ultimately rendered as."]}),`
`,e.jsxs(n.p,{children:["There is another necessary React hook in this suite -- ",e.jsx(n.code,{children:"useKeyboardNavigator"}),". It returns a ",e.jsx(n.code,{children:"marker"})," which adheres to the ",e.jsx(n.code,{children:"KeyboardNavigatorBoard"})," and ",e.jsx(n.code,{children:"KeyboardNavigatorElement"})," for connecting them."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const { markRef } = useKeyboardNavigator()

`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<KeyboardNavigatorBoard as="div" markRef={markRef} active={boardActive}>
    {children}
<KeyboardNavigatorBoard />
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`
<KeyboardNavigatorElement as="span" markRef={markRef} active={elementActive} onActiveChange={handleElementActiveChange}>
    {children}
</KeyboardNavigatorElement>
`})}),`
`,e.jsx(n.h2,{id:"-signature",children:"💫 Signature"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"KeyboardNavigatorBoard"}),"'s ",e.jsx(n.code,{children:"active"})," state can be driven by an external prop or internal automatic detecting. An explicitly passed ",e.jsx(n.code,{children:"active"})," prop forces this detection disabled. If you let this ",e.jsx(n.code,{children:"active"})," prop be omitted, the ",e.jsx(n.code,{children:"autoActive"})," detecting mechanism will be enabled with an initial active state ",e.jsx(n.code,{children:"initialActive"}),". It is also a polymorphic higher-order component, so you can pass any props which the ",e.jsx(n.code,{children:"as"})," one takes and the base type definition."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:"type KeyboardNavigatorBoardProps = {\n    markRef: RegistrySymbol,\n    as: React.ElementType,\n    active?: boolean,\n    // if we explicitly passed the `active` prop, it means the `active` state of KeyboardNavigatorBoard is controlled by external, the `autoActive` prop is forced to `false`.\n    // Otherwise, the `autoActive` fallbacks to enabled.\n    autoActive?: boolean,\n    onAutoActiveChange?: (active: boolean) => void,\n    // if the `autoActive` feature is enabled, the initial is used to determine the initial active state, it has the default value of `false`\n    initialActive?: boolean,\n}\n"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"KeyboardNavigatorElement"})," is a active-state-controlled component (see the ",e.jsx(n.a,{href:"https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/",children:"controlled component explanation"}),"), and it is polymorphic higher-order-component, also receives any props which the ",e.jsx(n.code,{children:"as"})," one takes. Therefore it mixes the base type definition with the ",e.jsx(n.code,{children:"as"})," one's props:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type KeyboardNavigatorElementProps = {
    markRef: RegistrySymbol,
    active?: boolean,
    onActiveChange?: (active: boolean) => void,
    as: React.ElementType,
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useKeyboardNavigator"})," receives:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"directionMap"})," for customize keyboard mapping. See the ",e.jsx(n.a,{href:"#customization",children:"Customization"})," section for details."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"eventCallback"})," for catching the active state transition, if the caller explicitly returns a ",e.jsx(n.code,{children:"false"})," value means manually to prevent this pass-by happening. See the ",e.jsx(n.a,{href:"#signature-of-customization-stuff",children:"Signature"})," section for more about built-in event callback presets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"didChange"})," for catching the next tick of active state pass-by, it is convenient to manipulate the relevant elements, e.g. trigger focus, blur, etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rootContainer"})," for set a always existed and active ",e.jsx(n.code,{children:"KeyboardNavigatorBoard"}),", e.g. ",e.jsx(n.code,{children:"document.body"}),". If this option is provided, you don't have to always mark a selectable element through wrapped itself by  ",e.jsx(n.code,{children:"KeyboardNavigatorBoard"}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type UseKeyboardNavigatorOption = {
    directionMap?: DirectionKeyMap | DirectionMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement?: HTMLElement }) => void | false
    didChange?: (fromElement: HTMLElement, toElement: HTMLElement) => void
    rootContainer?: HTMLElement
}
`})}),`
`,e.jsx(n.h2,{id:"--example",children:"📎  Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'

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
`})}),`
`,e.jsxs(n.p,{children:["You can see the live preview here: ",e.jsx(n.a,{href:"https://react-keyboard-navigator.zheeeng.me/#/randomPlacement",children:"Random Placement"}),", and other examples: ",e.jsx(n.a,{href:"https://react-keyboard-navigator.zheeeng.me/#/interestGallery",children:"Interest Gallery"}),", ",e.jsx(n.a,{href:"https://react-keyboard-navigator.zheeeng.me/#/macOSFinder",children:"MacOS Finder"})]}),`
`,e.jsx(n.h2,{id:"customization-",children:"Customization 👇"}),`
`,e.jsxs(n.p,{children:["There are two customizable stuff in keyboard navigation: ",e.jsx(n.code,{children:"distance calculation strategy"})," and ",e.jsx(n.code,{children:"direction mapping"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"distance calculation strategy"})," determines how to calculate the distance between the start point and the specified direction. It support ",e.jsx(n.code,{children:"Distance"}),"、",e.jsx(n.code,{children:"Secant"}),"、",e.jsx(n.code,{children:"Cosine"}),"、",e.jsx(n.code,{children:"Sine"}),"、",e.jsx(n.code,{children:"Tangent"}),"、custom calculation method ",e.jsx(n.code,{children:"(distance: number, angleDegree: number) => number"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://user-images.githubusercontent.com/1303154/177306883-1ffe7039-db9b-4f1b-a503-e2d5048936ef.png",alt:"distance"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"direction mapping"})," binds the keyboard key to the direction. There are total 8 directions and some built-in direction-keyboard mapping has been defined:"]}),`
`]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Group Name"}),e.jsx(n.th,{children:"Direction"}),e.jsx(n.th,{children:"Keyboard Key"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"ArrowDirectionMap"}),e.jsx(n.td,{children:"UP"}),e.jsx(n.td,{children:"ArrowUp"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN"}),e.jsx(n.td,{children:"ArrowDown"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"LEFT"}),e.jsx(n.td,{children:"ArrowLeft"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"RIGHT"}),e.jsx(n.td,{children:"ArrowRight"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"WASDDirectionMap"}),e.jsx(n.td,{children:"UP"}),e.jsx(n.td,{children:"W"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN"}),e.jsx(n.td,{children:"S"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"LEFT"}),e.jsx(n.td,{children:"A"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"RIGHT"}),e.jsx(n.td,{children:"D"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"IJKLDirectionMap"}),e.jsx(n.td,{children:"UP"}),e.jsx(n.td,{children:"I"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN"}),e.jsx(n.td,{children:"K"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"LEFT"}),e.jsx(n.td,{children:"J"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"RIGHT"}),e.jsx(n.td,{children:"L"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"HJKLDirectionMap"}),e.jsx(n.td,{children:"UP"}),e.jsx(n.td,{children:"K"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN"}),e.jsx(n.td,{children:"H"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"LEFT"}),e.jsx(n.td,{children:"J"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"RIGHT"}),e.jsx(n.td,{children:"L"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"NumPadDirectionMap"}),e.jsx(n.td,{children:"UP_LEFT"}),e.jsx(n.td,{children:"7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"UP"}),e.jsx(n.td,{children:"8"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"UP_RIGHT"}),e.jsx(n.td,{children:"9"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"LEFT"}),e.jsx(n.td,{children:"4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"RIGHT"}),e.jsx(n.td,{children:"6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN_LEFT"}),e.jsx(n.td,{children:"1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN"}),e.jsx(n.td,{children:"2"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:"DOWN_RIGHT"}),e.jsx(n.td,{children:"3"})]})]})]}),`
`,e.jsxs(n.p,{children:["By default we use the ",e.jsx(n.code,{children:"ArrowDirectionMap"}),"."]}),`
`,e.jsx(n.p,{children:"An valid custom direction could be mapping from direction to key:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const ArrowDirectionKeyMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}
`})}),`
`,e.jsx(n.p,{children:"or mapping from direction to key and strategy:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const ArrowDirectionMap: DirectionMap = {
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
`})}),`
`,e.jsx(n.p,{children:"We exported all the built-in direction-keyboard mapping presets. They are grouped by preferences, and there all have subgroups with different strategies."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { useKeyboardNavigator, DirectionMapPresets } from 'react-keyboard-navigator'

// execute in A Functional React Component
useKeyboardNavigator({
    directionMap: DirectionMapPresets.WASDDirectionMap.secant
})
`})}),`
`,e.jsx(n.h3,{id:"create-your-own-direction-mapping",children:"Create your own direction mapping"}),`
`,e.jsxs(n.p,{children:["You can create your own mapping with fallback strategy ",e.jsx(n.code,{children:"Cosine"}),". e.g."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const MyDirectionMapping: DirectionKeyMap = {
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
}
`})}),`
`,e.jsxs(n.p,{children:["Or use the ",e.jsx(n.code,{children:"StrategiesHelper"})," to create a ",e.jsx(n.code,{children:"DirectionMap"})," which defined with specific strategy:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { StrategiesHelper } from 'react-keyboard-navigator

const MyDirectionMapping: DirectionMap = StrategiesHelper.secant({
    UP: 'U',
    DOWN: 'D',
    LEFT: 'L',
    RIGHT: 'R',
})
`})}),`
`,e.jsxs(n.p,{children:["If this ",e.jsx(n.code,{children:"StrategiesHelper"})," doesn't satisfy your needs, feel free to use your own calculation."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const YourOwnDirection: DirectionMap = {
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
`})}),`
`,e.jsx(n.h3,{id:"signature-of-customization-stuff",children:"Signature of Customization stuff"}),`
`,e.jsx(n.h4,{id:"eventcallbackpresets",children:"EventCallbackPresets"}),`
`,e.jsx(n.p,{children:"This presets includes some common event callbacks."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { EventCallbackPresets } from 'react-keyboard-navigator'
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DirectionMapPresets.preventDefault"}),": prevent the default behavior of the event, usually is used for prevent from page scrolling when navigating."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DirectionMapPresets.stopPropagation"}),": stop propagation of the event, usually is used for prevent conflicts  with topper DOM's listeners."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DirectionMapPresets.stopImmediatePropagation"}),": same to ",e.jsx(n.code,{children:"stopPropagation"}),", but stop the event propagation immediately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DirectionMapPresets.stopOnActiveInputElement"}),": stop navigating when the current active element is an input element."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DirectionMapPresets.stopOnActiveInputElementAndPreventDefault"}),": same to ",e.jsx(n.code,{children:"stopOnActiveInputElement"}),", but also prevent the default behavior of the event."]}),`
`]}),`
`,e.jsx(n.h4,{id:"directionmappresets",children:"DirectionMapPresets"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { DirectionMapPresets } from 'react-keyboard-navigator'
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"See its structure"}),e.jsx("p",{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`Object {
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
`})})})]}),`
`,e.jsx(n.h4,{id:"strategieshelper",children:"StrategiesHelper"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { StrategiesHelper } from 'react-keyboard-navigator'
`})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"See its structure"}),e.jsx("p",{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`{
  distance: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  secant: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  cosine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  sine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
  tangent: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin?: boolean) => DirectionMap,
}
`})})})]})]})}function o(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}function s(t){return e.jsx(o,{})}function d(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(s,t)})):s()}const l=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),i={};i.outlineInfo=c;i.main=l;export{i as default};
