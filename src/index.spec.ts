import generateJsonSchema from ".";

const in1 = [
  {
    test: { value: "foo", value2: null },
  },
  {
    test: { value: null, value3: null },
  },
];
const out1 = generateJsonSchema(in1);

console.log(JSON.stringify(out1, null, 2));
