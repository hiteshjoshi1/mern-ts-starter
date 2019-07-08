/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __webpack_require__(10);
const { combine, timestamp } = winston_1.format;
const logLevel = process.env.LOG_LEVEL || "debug";
const logFormat = winston_1.format.printf((info) => {
    return `${info.timestamp}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n`;
});
exports.logger = winston_1.createLogger({
    level: logLevel,
    format: combine(winston_1.format.colorize(), timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }), logFormat),
    transports: [
        new winston_1.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.transports.Console(),
    ],
});
exports.logger.debug(`Logger configured to level ${logLevel}`);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = __webpack_require__(1);
const logger_1 = __webpack_require__(0);
let UserController = class UserController extends tsoa_1.Controller {
    async getAll() {
        logger_1.logger.info("Testing");
        return { Hitesh: "fddfdsfds" };
    }
    async stupidTest() {
        return { Joshi: "Vendetta" };
    }
};
__decorate([
    tsoa_1.Get("/")
], UserController.prototype, "getAll", null);
__decorate([
    tsoa_1.Get("/test")
], UserController.prototype, "stupidTest", null);
UserController = __decorate([
    tsoa_1.Route("/users")
], UserController);
exports.UserController = UserController;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(__webpack_require__(5));
const http_1 = __importDefault(__webpack_require__(13));
const logger_1 = __webpack_require__(0);
const launchServer = async (server, port) => {
    server.listen(port, async (error) => {
        if (error) {
            logger_1.logger.debug(error);
        }
        else {
            logger_1.logger.info(`Server listening on port ${port}`);
        }
    });
};
function getPort() {
    if (process.env.PORT) {
        logger_1.logger.info(`Port set to ${process.env.PORT} from PORT env var`);
        return parseInt(process.env.PORT, 10);
    }
    else {
        return 3000;
    }
}
if (__webpack_require__.c[__webpack_require__.s] === module) {
    const port = getPort();
    const server = http_1.default.createServer(app_1.default);
    launchServer(server, port);
}
exports.default = launchServer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(__webpack_require__(6));
const body_parser_1 = __importDefault(__webpack_require__(7));
const http_errors_1 = __importDefault(__webpack_require__(8));
const routes_1 = __webpack_require__(9);
const logger_1 = __webpack_require__(0);
__webpack_require__(2);
const swaggerUi = __importStar(__webpack_require__(11));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({
            extended: true,
        }));
        this.app.use(body_parser_1.default.json());
        routes_1.RegisterRoutes(this.app);
        try {
            const swaggerDocument = __webpack_require__(12);
            this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        }
        catch (err) {
            logger_1.logger.log("Unable to load swagger.json", err);
        }
        this.app.use((req, res, next) => {
            next(http_errors_1.default(404));
        });
        this.app.use((err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === "development" ? err : "Some error ocurred";
            const errorResponse = {
                Error: res.locals.error,
            };
            res.status(err.status || 500);
            res.json(errorResponse);
        });
    }
}
exports.default = new App().app;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = __webpack_require__(1);
const UserController_1 = __webpack_require__(2);
const models = {};
const validationService = new tsoa_1.ValidationService(models);
function RegisterRoutes(app) {
    app.get('/users', function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new UserController_1.UserController();
        const promise = controller.getAll.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    app.get('/users/test', function (request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request);
        }
        catch (err) {
            return next(err);
        }
        const controller = new UserController_1.UserController();
        const promise = controller.stupidTest.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, next);
    });
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode;
            if (isController(controllerObj)) {
                const headers = controllerObj.getHeaders();
                Object.keys(headers).forEach((name) => {
                    response.set(name, headers[name]);
                });
                statusCode = controllerObj.getStatus();
            }
            if (data || data === false) {
                response.status(statusCode || 200).json(data);
            }
            else {
                response.status(statusCode || 204).end();
            }
        })
            .catch((error) => next(error));
    }
    function getValidatedArgs(args, request) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors);
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors);
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors);
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.');
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new tsoa_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
}
exports.RegisterRoutes = RegisterRoutes;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"basePath":"/","consumes":["application/json"],"definitions":{},"info":{"title":"mern-ts-starter","version":"0.0.1"},"paths":{"/users":{"get":{"operationId":"GetAll","produces":["application/json"],"responses":{"200":{"description":"Ok","schema":{"type":"object"}}},"security":[],"parameters":[]}},"/users/test":{"get":{"operationId":"StupidTest","produces":["application/json"],"responses":{"200":{"description":"Ok","schema":{"type":"object"}}},"security":[],"parameters":[]}}},"produces":["application/json"],"swagger":"2.0","securityDefinitions":{}}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);