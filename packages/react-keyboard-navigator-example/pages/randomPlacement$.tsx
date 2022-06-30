/**
 * @title Random Placement
 * @order 1
 */
import { useState } from 'react'
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
import './randomPlacement.scss'

const textSegments = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(' ')

const genRandom = (max: number) => Math.floor(Math.random() * max)
const genRandomCard = () => ({
   key: genRandom(1000000),
   text: textSegments[genRandom(textSegments.length)],
   x: `${genRandom(100)}%`, y: `${genRandom(100)}%`,
})

type Props = {
   blocks: {
      key: number;
      text: string | undefined;
      x: string;
      y: string;
  }[]
}

const Controlled = ({ blocks }: Props) => {
   const { markRef } = useKeyboardNavigator({
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

const Auto = ({ blocks }: Props) => {
   const { markRef } = useKeyboardNavigator({
      eventCallback: evt => evt.preventDefault()
   })

   const [highlightBlockIndex, setHighlightBockIndex] = useState(0)

   return (
      <div>
         <div>AutoActive: click or focus this zone actives this board automatically</div>
         <hr />
         <KeyboardNavigatorBoard
            as="main"
            markRef={markRef}
            tabIndex={5}
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

const RandomPlacement = () => {

   const [blocks, setBlocks] = useState(
      () => Array.from({ length: genRandom(10) + 5 })
         .map(() => genRandomCard())
   )

   const handleAddBlock = () => {
      setBlocks(blocks.concat(genRandomCard()))
   }

   const handleDeleteBlock = () => {
      setBlocks(blocks.slice(0, blocks.length - 1))
   }

   return (
      <div className="randomPlacement">
         <button onClick={handleAddBlock}>Add Block</button>
         <button onClick={handleDeleteBlock}>Delete Block</button>
         <hr />
         <div className="comparison">
            <Controlled blocks={blocks} />
            <Auto blocks={blocks} />
         </div>
      </div>
   )
}

export default RandomPlacement