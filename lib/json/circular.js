const seen = new WeakSet();
export const replacer = (key, value) => {
  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return "[Circular]";Ï
    }
    seen.add(value);
  }
  return value;
};

// const obj = { name: "Alice" };
// obj.self = obj;

// console.log(JSON.stringify(obj, replacer, 2));
