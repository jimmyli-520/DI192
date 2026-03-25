// Function to validate if a value matches one of the allowed types
function validateUnionType(value: any, allowedTypes: string[]): boolean {
  for (let type of allowedTypes) {
    if (typeof value === type) {
      return true;
    }
  }
  return false;
}

// Test with different values and allowed types
const numValue = 42;
const strValue = "Hello";
const boolValue = true;
const objValue = { name: "Alice" };

// Validate number
console.log(validateUnionType(numValue, ["string", "number"]));  // true
console.log(validateUnionType(numValue, ["string", "boolean"])); // false

// Validate string
console.log(validateUnionType(strValue, ["string", "number"]));  // true
console.log(validateUnionType(strValue, ["boolean", "number"])); // false

// Validate boolean
console.log(validateUnionType(boolValue, ["boolean", "string"])); // true
console.log(validateUnionType(boolValue, ["string", "number"]));  // false

// Validate object
console.log(validateUnionType(objValue, ["object", "string"]));  // true
console.log(validateUnionType(objValue, ["string", "number"]));  // false