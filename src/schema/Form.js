const validate = (register) => {
  const schema = {};
  schema.age = register("age", {
    required: true,
    max: 21,
    min: 3,
    maxLength: 2,
  });

  schema.Phone_number = register("Phone_number", {
    required: true,
    maxLength: 12,
    minLength: 10,
  });
  return schema;
};
export default validate;
