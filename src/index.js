console.log('hello world');

// This keeps `process` reference in the bundle
// const { NODE_ENV } = process.env;

// No `process` reference in the bundle
const NODE_ENV = process.env.NODE_ENV;

console.log(NODE_ENV);
