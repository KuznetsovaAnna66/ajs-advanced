//Task 1

export const obj = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function sortByProperties(obj, propertyOrder) {
  const sortedProperties = [];

  // Process properties in the specified order
  for (const property of propertyOrder) {
    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      sortedProperties.push({ key: property, value: obj[property] });
    }
  }

  //Process remaining properties alphabetically
  const remainingProperties = Object.entries(obj)
    .filter(([key]) => !propertyOrder.includes(key))
    .sort(([a], [b]) => a.localeCompare(b));

  // Add the sorted remaining properties to the array

  sortedProperties.push(
    ...remainingProperties.map(([key, value]) => ({ key, value }))
  );
  return sortedProperties;
}
