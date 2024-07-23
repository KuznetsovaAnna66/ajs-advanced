// Task 2
export default function getSpecialAttacks({ special }) {
  const specialAttacks = special.map((item) => {
    const { id, name, icon, description = "Описание недоступно" } = item;
    return {
      id,
      name,
      icon,
      description,
    };
  });
  return specialAttacks;
}
