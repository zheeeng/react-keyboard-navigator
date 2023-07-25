import { describe, test, expect } from 'vitest'
import { DirectionMapPresets } from '../DirectionMapPresets'

describe('test DirectionMapPresets data structure', () => {
    test('its data structure', () => {
        expect(DirectionMapPresets).toMatchInlineSnapshot(`
          {
            "ArrowDirectionMap": {
              "cosine": {
                "DOWN": {
                  "key": "ArrowDown",
                  "strategy": "Cosine",
                },
                "LEFT": {
                  "key": "ArrowLeft",
                  "strategy": "Cosine",
                },
                "RIGHT": {
                  "key": "ArrowRight",
                  "strategy": "Cosine",
                },
                "UP": {
                  "key": "ArrowUp",
                  "strategy": "Cosine",
                },
              },
              "distance": {
                "DOWN": {
                  "key": "ArrowDown",
                  "strategy": "Distance",
                },
                "LEFT": {
                  "key": "ArrowLeft",
                  "strategy": "Distance",
                },
                "RIGHT": {
                  "key": "ArrowRight",
                  "strategy": "Distance",
                },
                "UP": {
                  "key": "ArrowUp",
                  "strategy": "Distance",
                },
              },
              "secant": {
                "DOWN": {
                  "key": "ArrowDown",
                  "strategy": "Secant",
                },
                "LEFT": {
                  "key": "ArrowLeft",
                  "strategy": "Secant",
                },
                "RIGHT": {
                  "key": "ArrowRight",
                  "strategy": "Secant",
                },
                "UP": {
                  "key": "ArrowUp",
                  "strategy": "Secant",
                },
              },
              "sine": {
                "DOWN": {
                  "key": "ArrowDown",
                  "strategy": "Sine",
                },
                "LEFT": {
                  "key": "ArrowLeft",
                  "strategy": "Sine",
                },
                "RIGHT": {
                  "key": "ArrowRight",
                  "strategy": "Sine",
                },
                "UP": {
                  "key": "ArrowUp",
                  "strategy": "Sine",
                },
              },
              "tangent": {
                "DOWN": {
                  "key": "ArrowDown",
                  "strategy": "Tangent",
                },
                "LEFT": {
                  "key": "ArrowLeft",
                  "strategy": "Tangent",
                },
                "RIGHT": {
                  "key": "ArrowRight",
                  "strategy": "Tangent",
                },
                "UP": {
                  "key": "ArrowUp",
                  "strategy": "Tangent",
                },
              },
            },
            "HJKLDirectionMap": {
              "cosine": {
                "DOWN": {
                  "key": "J",
                  "strategy": "Cosine",
                },
                "LEFT": {
                  "key": "H",
                  "strategy": "Cosine",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Cosine",
                },
                "UP": {
                  "key": "K",
                  "strategy": "Cosine",
                },
              },
              "distance": {
                "DOWN": {
                  "key": "J",
                  "strategy": "Distance",
                },
                "LEFT": {
                  "key": "H",
                  "strategy": "Distance",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Distance",
                },
                "UP": {
                  "key": "K",
                  "strategy": "Distance",
                },
              },
              "secant": {
                "DOWN": {
                  "key": "J",
                  "strategy": "Secant",
                },
                "LEFT": {
                  "key": "H",
                  "strategy": "Secant",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Secant",
                },
                "UP": {
                  "key": "K",
                  "strategy": "Secant",
                },
              },
              "sine": {
                "DOWN": {
                  "key": "J",
                  "strategy": "Sine",
                },
                "LEFT": {
                  "key": "H",
                  "strategy": "Sine",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Sine",
                },
                "UP": {
                  "key": "K",
                  "strategy": "Sine",
                },
              },
              "tangent": {
                "DOWN": {
                  "key": "J",
                  "strategy": "Tangent",
                },
                "LEFT": {
                  "key": "H",
                  "strategy": "Tangent",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Tangent",
                },
                "UP": {
                  "key": "K",
                  "strategy": "Tangent",
                },
              },
            },
            "IJKLDirectionMap": {
              "cosine": {
                "DOWN": {
                  "key": "k",
                  "strategy": "Cosine",
                },
                "LEFT": {
                  "key": "J",
                  "strategy": "Cosine",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Cosine",
                },
                "UP": {
                  "key": "I",
                  "strategy": "Cosine",
                },
              },
              "distance": {
                "DOWN": {
                  "key": "k",
                  "strategy": "Distance",
                },
                "LEFT": {
                  "key": "J",
                  "strategy": "Distance",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Distance",
                },
                "UP": {
                  "key": "I",
                  "strategy": "Distance",
                },
              },
              "secant": {
                "DOWN": {
                  "key": "k",
                  "strategy": "Secant",
                },
                "LEFT": {
                  "key": "J",
                  "strategy": "Secant",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Secant",
                },
                "UP": {
                  "key": "I",
                  "strategy": "Secant",
                },
              },
              "sine": {
                "DOWN": {
                  "key": "k",
                  "strategy": "Sine",
                },
                "LEFT": {
                  "key": "J",
                  "strategy": "Sine",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Sine",
                },
                "UP": {
                  "key": "I",
                  "strategy": "Sine",
                },
              },
              "tangent": {
                "DOWN": {
                  "key": "k",
                  "strategy": "Tangent",
                },
                "LEFT": {
                  "key": "J",
                  "strategy": "Tangent",
                },
                "RIGHT": {
                  "key": "L",
                  "strategy": "Tangent",
                },
                "UP": {
                  "key": "I",
                  "strategy": "Tangent",
                },
              },
            },
            "NumPadDirectionMap": {
              "cosine": {
                "DOWN": {
                  "key": "2",
                  "strategy": "Cosine",
                },
                "DOWN_LEFT": {
                  "key": "1",
                  "strategy": "Cosine",
                },
                "DOWN_RIGHT": {
                  "key": "3",
                  "strategy": "Cosine",
                },
                "LEFT": {
                  "key": "4",
                  "strategy": "Cosine",
                },
                "RIGHT": {
                  "key": "6",
                  "strategy": "Cosine",
                },
                "UP": {
                  "key": "8",
                  "strategy": "Cosine",
                },
                "UP_LEFT": {
                  "key": "7",
                  "strategy": "Cosine",
                },
                "UP_RIGHT": {
                  "key": "9",
                  "strategy": "Cosine",
                },
              },
              "distance": {
                "DOWN": {
                  "key": "2",
                  "strategy": "Distance",
                },
                "DOWN_LEFT": {
                  "key": "1",
                  "strategy": "Distance",
                },
                "DOWN_RIGHT": {
                  "key": "3",
                  "strategy": "Distance",
                },
                "LEFT": {
                  "key": "4",
                  "strategy": "Distance",
                },
                "RIGHT": {
                  "key": "6",
                  "strategy": "Distance",
                },
                "UP": {
                  "key": "8",
                  "strategy": "Distance",
                },
                "UP_LEFT": {
                  "key": "7",
                  "strategy": "Distance",
                },
                "UP_RIGHT": {
                  "key": "9",
                  "strategy": "Distance",
                },
              },
              "secant": {
                "DOWN": {
                  "key": "2",
                  "strategy": "Secant",
                },
                "DOWN_LEFT": {
                  "key": "1",
                  "strategy": "Secant",
                },
                "DOWN_RIGHT": {
                  "key": "3",
                  "strategy": "Secant",
                },
                "LEFT": {
                  "key": "4",
                  "strategy": "Secant",
                },
                "RIGHT": {
                  "key": "6",
                  "strategy": "Secant",
                },
                "UP": {
                  "key": "8",
                  "strategy": "Secant",
                },
                "UP_LEFT": {
                  "key": "7",
                  "strategy": "Secant",
                },
                "UP_RIGHT": {
                  "key": "9",
                  "strategy": "Secant",
                },
              },
              "sine": {
                "DOWN": {
                  "key": "2",
                  "strategy": "Sine",
                },
                "DOWN_LEFT": {
                  "key": "1",
                  "strategy": "Sine",
                },
                "DOWN_RIGHT": {
                  "key": "3",
                  "strategy": "Sine",
                },
                "LEFT": {
                  "key": "4",
                  "strategy": "Sine",
                },
                "RIGHT": {
                  "key": "6",
                  "strategy": "Sine",
                },
                "UP": {
                  "key": "8",
                  "strategy": "Sine",
                },
                "UP_LEFT": {
                  "key": "7",
                  "strategy": "Sine",
                },
                "UP_RIGHT": {
                  "key": "9",
                  "strategy": "Sine",
                },
              },
              "tangent": {
                "DOWN": {
                  "key": "2",
                  "strategy": "Tangent",
                },
                "DOWN_LEFT": {
                  "key": "1",
                  "strategy": "Tangent",
                },
                "DOWN_RIGHT": {
                  "key": "3",
                  "strategy": "Tangent",
                },
                "LEFT": {
                  "key": "4",
                  "strategy": "Tangent",
                },
                "RIGHT": {
                  "key": "6",
                  "strategy": "Tangent",
                },
                "UP": {
                  "key": "8",
                  "strategy": "Tangent",
                },
                "UP_LEFT": {
                  "key": "7",
                  "strategy": "Tangent",
                },
                "UP_RIGHT": {
                  "key": "9",
                  "strategy": "Tangent",
                },
              },
            },
            "WASDDirectionMap": {
              "cosine": {
                "DOWN": {
                  "key": "S",
                  "strategy": "Cosine",
                },
                "LEFT": {
                  "key": "A",
                  "strategy": "Cosine",
                },
                "RIGHT": {
                  "key": "D",
                  "strategy": "Cosine",
                },
                "UP": {
                  "key": "W",
                  "strategy": "Cosine",
                },
              },
              "distance": {
                "DOWN": {
                  "key": "S",
                  "strategy": "Distance",
                },
                "LEFT": {
                  "key": "A",
                  "strategy": "Distance",
                },
                "RIGHT": {
                  "key": "D",
                  "strategy": "Distance",
                },
                "UP": {
                  "key": "W",
                  "strategy": "Distance",
                },
              },
              "secant": {
                "DOWN": {
                  "key": "S",
                  "strategy": "Secant",
                },
                "LEFT": {
                  "key": "A",
                  "strategy": "Secant",
                },
                "RIGHT": {
                  "key": "D",
                  "strategy": "Secant",
                },
                "UP": {
                  "key": "W",
                  "strategy": "Secant",
                },
              },
              "sine": {
                "DOWN": {
                  "key": "S",
                  "strategy": "Sine",
                },
                "LEFT": {
                  "key": "A",
                  "strategy": "Sine",
                },
                "RIGHT": {
                  "key": "D",
                  "strategy": "Sine",
                },
                "UP": {
                  "key": "W",
                  "strategy": "Sine",
                },
              },
              "tangent": {
                "DOWN": {
                  "key": "S",
                  "strategy": "Tangent",
                },
                "LEFT": {
                  "key": "A",
                  "strategy": "Tangent",
                },
                "RIGHT": {
                  "key": "D",
                  "strategy": "Tangent",
                },
                "UP": {
                  "key": "W",
                  "strategy": "Tangent",
                },
              },
            },
          }
        `)
    })
})