export type Rectangle = { x: number, y: number, width: number, height: number }

export type Position =
    | 'center'
    | 'left-edge' | 'right-edge' | 'top-edge' | 'bottom-edge'
    | 'top-right-corner' | 'top-left-corner' | 'bottom-right-corner' | 'bottom-left-corner'

export const calculatePositionPoint = ({ x, y, width, height }: Rectangle, position: Position): [x: number, y: number] => {
    switch (position) {
        case 'center': {
            return [x + width / 2, y + height / 2]
        }
        case 'left-edge': {
            return [x, y + height / 2]
        }
        case 'right-edge': {
            return [x + width, y + height / 2]
        }
        case 'top-edge': {
            return [x + width / 2, y]
        }
        case 'bottom-edge': {
            return [x + width / 2, y + height]
       }
       case 'top-right-corner': {
        return [x + width, y]
       }
       case 'top-left-corner': {
        return [x, y]
       }
       case 'bottom-right-corner': {
        return [x + width, y + height]
       }
       case 'bottom-left-corner': {
        return [x, y + height]
       }
    }
}