"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpPathHelper = void 0;
const axios_exception_model_1 = require("../exception/axios-exception.model");
class HttpPathHelper {
    static buildFinalPath(path) {
        if (this.hasPath(path)) {
            return this.reducePathToBuild(path);
        }
        return '';
    }
    static hasPath(path) {
        return path !== undefined && (path === null || path === void 0 ? void 0 : path.length) > 0;
    }
    static reducePathToBuild(path) {
        return path === null || path === void 0 ? void 0 : path.reduce((buildPath, currentValue) => {
            this.checkCurrentValueFromPath(currentValue);
            if (!currentValue.startsWith('/')) {
                currentValue += '/';
            }
            if (currentValue.endsWith('/')) {
                currentValue = currentValue.substring(0, currentValue.length - 1);
            }
            return buildPath + '/' + currentValue;
        }, '');
    }
    static checkCurrentValueFromPath(currentValue) {
        if (this.checkCurrentValueFromPathIsNullOrEmpty(currentValue)) {
            throw new axios_exception_model_1.AxiosException().withMessage('current value cannot be null or empty');
        }
    }
    static checkCurrentValueFromPathIsNullOrEmpty(currentValue) {
        if (!currentValue) {
            return true;
        }
        return false;
    }
}
exports.HttpPathHelper = HttpPathHelper;
//# sourceMappingURL=http-path.helper.js.map