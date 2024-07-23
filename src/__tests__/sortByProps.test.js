import sortByProperties from "../js/sortByProps";

test.each([
  [
    {
      name: "мечник",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ["name", "attack"],
    [
      { key: "name", value: "мечник" },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
    ],
  ],
  [
    {
      name: "мечник",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ["name"],
    [
      { key: "name", value: "мечник" },
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
    ],
  ],
  [
    {
      name: "мечник",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ["attack", "name", "defence"],
    [
      { key: "attack", value: 80 },
      { key: "name", value: "мечник" },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
    ],
  ],
  [
    {
      name: "мечник",
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    ["speed"],
    [
      { key: "attack", value: 80 },
      { key: "defence", value: 40 },
      { key: "health", value: 10 },
      { key: "level", value: 2 },
      { key: "name", value: "мечник" },
    ],
  ],
])(
  "testing sortByProperties function for object: %o and keyList: %s",
  (obj, keyList, expectedtArray) => {
    const result = sortByProperties(obj, keyList);
    expect(result).toEqual(expectedtArray);
  }
);
