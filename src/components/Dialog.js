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
exports.Close = exports.Footer = exports.Header = exports.Description = exports.Title = exports.Overlay = exports.Content = exports.Trigger = exports.Root = exports.Dialog = void 0;
var React = __importStar(require("react"));
var Dialog_module_css_1 = __importDefault(require("./Dialog.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
function extend(Component, baseClassName) {
    var extended = React.forwardRef(function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return React.createElement(Component, __assign({ ref: ref, className: (0, ClassNames_1.cl)(baseClassName, className) }, props));
    });
    extended.displayName = Component.displayName;
    return extended;
}
var Root = DialogPrimitive.Root;
exports.Root = Root;
var Trigger = DialogPrimitive.Trigger;
exports.Trigger = Trigger;
var Portal = DialogPrimitive.Portal;
var Overlay = extend(DialogPrimitive.Overlay, Dialog_module_css_1.default.Overlay);
exports.Overlay = Overlay;
var Close = extend(DialogPrimitive.Close, Dialog_module_css_1.default.Close);
exports.Close = Close;
var Title = extend(DialogPrimitive.Title, Dialog_module_css_1.default.Title);
exports.Title = Title;
var Description = extend(DialogPrimitive.Description, Dialog_module_css_1.default.Description);
exports.Description = Description;
var Content = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, hideCloseIcon = _a.hideCloseIcon, props = __rest(_a, ["className", "children", "hideCloseIcon"]);
    return (React.createElement(Portal, null,
        React.createElement(Overlay, null),
        React.createElement(DialogPrimitive.Content, __assign({ ref: ref, className: (0, ClassNames_1.cl)(Dialog_module_css_1.default.Content, className) }, props),
            children,
            !hideCloseIcon && (React.createElement(Close, { className: Dialog_module_css_1.default.Close },
                React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))))));
});
exports.Content = Content;
Content.displayName = DialogPrimitive.Content.displayName;
var Header = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: (0, ClassNames_1.cl)(Dialog_module_css_1.default.Header, className) }, props)));
};
exports.Header = Header;
Header.displayName = 'DialogHeader';
var Footer = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: (0, ClassNames_1.cl)(Dialog_module_css_1.default.Footer, className) }, props)));
};
exports.Footer = Footer;
Footer.displayName = 'DialogFooter';
exports.Dialog = {
    Root: Root,
    Trigger: Trigger,
    Content: Content,
    Overlay: Overlay,
    Title: Title,
    Description: Description,
    Header: Header,
    Footer: Footer,
    Close: Close,
};
//# sourceMappingURL=Dialog.js.map