// -----------module--old-style------------
// const StartNodejs = require("./index");

// StartNodejs();

// ============Module-Ecmascript-Style==============
import { StartNodejs } from "./index.mjs";
import {readFile} from 'fs/Promises'

StartNodejs();
