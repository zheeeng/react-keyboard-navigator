import { DirectionMapPresets } from '../useKeyboardNavigator'

describe('test DirectionMapPresets data structure', () => {
    test('its data structure', () => {
        expect(DirectionMapPresets).toMatchInlineSnapshot(`
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
`)
    })
})