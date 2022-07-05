import { DirectionMapPresets } from '../DirectionMapPresets'

describe('test DirectionMapPresets data structure', () => {
    test('its data structure', () => {
        expect(DirectionMapPresets).toMatchInlineSnapshot(`
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
`)
    })
})