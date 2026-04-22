"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrow = exports.Content = exports.Portal = exports.Trigger = exports.Root = exports.HoverCard = void 0;
var React = __importStar(require("react"));
var HoverCard_module_css_1 = __importDefault(require("./HoverCard.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var HoverCardPrimitive = __importStar(require("@radix-ui/react-hover-card"));
var Root = HoverCardPrimitive.Root;
exports.Root = Root;
var Trigger = HoverCardPrimitive.Trigger;
exports.Trigger = Trigger;
var Portal = HoverCardPrimitive.Portal;
exports.Portal = Portal;
var Arrow = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(HoverCardPrimitive.Arrow, __assign({ ref: ref, className: (0, ClassNames_1.cl)(HoverCard_module_css_1.default.Arrow, className) }, props)));
});
exports.Arrow = Arrow;
Arrow.displayName = HoverCardPrimitive.Content.displayName;
var Content = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? 'center' : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (React.createElement(HoverCardPrimitive.Content, __assign({ ref: ref, align: align, sideOffset: sideOffset, className: (0, ClassNames_1.cl)(HoverCard_module_css_1.default.Content, className) }, props)));
});
exports.Content = Content;
Content.displayName = HoverCardPrimitive.Content.displayName;
exports.HoverCard = {
    Root: Root,
    Trigger: Trigger,
    Portal: Portal,
    Content: Content,
    Arrow: Arrow,
};
//# sourceMappingURL=HoverCard.js.map