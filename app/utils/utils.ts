export function calculateAge(): number {
  const birthdateArray: number[] = "03.02.1995".split(".").map(Number);
  const birthdateObject: Date = new Date(
    birthdateArray[2],
    birthdateArray[1] - 1,
    birthdateArray[0]
  );
  const currentDate: Date = new Date();

  let age: number = currentDate.getFullYear() - birthdateObject.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthdateObject.getMonth() ||
    (currentDate.getMonth() === birthdateObject.getMonth() &&
      currentDate.getDate() < birthdateObject.getDate())
  ) {
    age--;
  }

  return age;
}
