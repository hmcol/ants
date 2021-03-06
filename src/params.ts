export const enum Params {
    MAP_WIDTH = 500,
    MAP_HEIGHT = 375,
    MAP_SIZE = 500,
    MAP_AREA = MAP_WIDTH * MAP_HEIGHT,
    IMAGE_ARRAY_SIZE = MAP_AREA * 4,
    COLONY_SIZE = 1000,
    VIEW_DISTANCE = 20,
    MAX_POTENCY = 0b11111111,
    POTENCY_DECAY = 2**(-3)
}
