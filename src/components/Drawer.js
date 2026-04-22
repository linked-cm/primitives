"use strict";
/**
 * copy from https://ui.shadcn.com/docs/components/drawer
 */
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
exports.Description = exports.Title = exports.Footer = exports.Header = exports.Content = exports.Close = exports.Trigger = exports.Overlay = exports.Portal = exports.Root = exports.Drawer = void 0;
var React = __importStar(require("react"));
var vaul_1 = require("vaul");
var Drawer_module_css_1 = __importDefault(require("./Drawer.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var Root = function (_a) {
    var _b = _a.shouldScaleBackground, shouldScaleBackground = _b === void 0 ? true : _b, props = __rest(_a, ["shouldScaleBackground"]);
    return (React.createElement(vaul_1.Drawer.Root, __assign({ shouldScaleBackground: shouldScaleBackground }, props)));
};
exports.Root = Root;
Root.displayName = 'Root';
var Trigger = vaul_1.Drawer.Trigger;
exports.Trigger = Trigger;
var Portal = vaul_1.Drawer.Portal;
exports.Portal = Portal;
var Close = vaul_1.Drawer.Close;
exports.Close = Close;
var Overlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Overlay, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Overlay, className) }, props)));
});
exports.Overlay = Overlay;
Overlay.displayName = vaul_1.Drawer.Overlay.displayName;
var Content = React.forwardRef(function (_a, ref) {
    var className = _a.className, hideHandle = _a.hideHandle, children = _a.children, props = __rest(_a, ["className", "hideHandle", "children"]);
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(vaul_1.Drawer.Content, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Content, className) }, props),
            !hideHandle && React.createElement("div", { className: Drawer_module_css_1.default.Handle }),
            children)));
});
exports.Content = Content;
Content.displayName = 'Content';
var Header = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Header, className) }, props)));
};
exports.Header = Header;
Header.displayName = 'Header';
var Footer = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Footer, className) }, props)));
};
exports.Footer = Footer;
Footer.displayName = 'Footer';
var Title = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Title, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Title, className) }, props)));
});
exports.Title = Title;
Title.displayName = vaul_1.Drawer.Title.displayName;
var Description = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(vaul_1.Drawer.Description, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Drawer_module_css_1.default.Description, className) }, props)));
});
exports.Description = Description;
Description.displayName = vaul_1.Drawer.Description.displayName;
exports.Drawer = {
    Root: Root,
    Portal: Portal,
    Overlay: Overlay,
    Trigger: Trigger,
    Close: Close,
    Content: Content,
    Header: Header,
    Footer: Footer,
    Title: Title,
    Description: Description,
};
//# sourceMappingURL=Drawer.js.map