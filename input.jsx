import React from 'react';
import { toJson } from 'react-json-parser';

const JSXCode = <div>Hello, world!</div>;

const jsonOutput = toJson(JSXCode);
console.log(jsonOutput);
