function typeCheck(obj) {
  const validators = {
    string: (value) => typeof value === "string",
    int: (value) => Number.isInteger(value),
    float: (value) => typeof value === "number" && !Number.isInteger(value),
    number: (value) => typeof value === "number",
    bool: (value) => typeof value === "boolean",
  };

  const validateProperty = (prop, value) => {
    const [name, type] = prop.split("_");
    if (type && validators[type] && !validators[type](value)) {
      throw new Error(`Invalid type for property ${prop}: expected ${type}`);
    }
  };

  for (const prop in obj) {
    validateProperty(prop, obj[prop]);
  }

  const handler = {
    set(target, prop, value) {
      validateProperty(prop, value);
      target[prop] = value;
      return true;
    },
    defineProperty(target, prop, descriptor) {
      validateProperty(prop, descriptor.value);
      Object.defineProperty(target, prop, descriptor);
      return true;
    },
  };

  return new Proxy(obj, handler);
}

module.exports = typeCheck;
