import { DirectionMapPresets } from '../useKeyboardNavigator'

describe('test DirectionMapPresets data structure', () => {
    test('its data structure', () => {
        expect(DirectionMapPresets).toMatchInlineSnapshot(`
Object {
  "ArrowDirectionMap": Object {
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
  "HJKLDirectionMap": Object {
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
  "IJKLDirectionMap": Object {
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
  "NumPadDirectionMap": Object {
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
  "WASDDirectionMap": Object {
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
`)
    })
})