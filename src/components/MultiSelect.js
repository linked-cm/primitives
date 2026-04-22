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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.List = exports.Content = exports.Input = exports.Trigger = exports.Root = exports.MultiSelect = void 0;
('use client');
var react_1 = __importStar(require("react"));
var Command_js_1 = require("./Command.js");
var cmdk_1 = require("cmdk");
var Button_js_1 = require("./Button.js");
var MultiSelect_module_css_1 = __importDefault(require("./MultiSelect.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var MultiSelectContext = (0, react_1.createContext)(null);
var useMultiSelect = function () {
    var context = (0, react_1.useContext)(MultiSelectContext);
    if (!context) {
        throw new Error('useMultiSelect must be used within MultiSelectProvider');
    }
    return context;
};
var Root = function (_a) {
    var value = _a.values, onValueChange = _a.onValuesChange, _b = _a.loop, loop = _b === void 0 ? false : _b, className = _a.className, children = _a.children, dir = _a.dir, props = __rest(_a, ["values", "onValuesChange", "loop", "className", "children", "dir"]);
    var _c = __read((0, react_1.useState)(''), 2), inputValue = _c[0], setInputValue = _c[1];
    var _d = __read((0, react_1.useState)(false), 2), open = _d[0], setOpen = _d[1];
    var _e = __read((0, react_1.useState)(-1), 2), activeIndex = _e[0], setActiveIndex = _e[1];
    var onValueChangeHandler = (0, react_1.useCallback)(function (val) {
        if (value.includes(val)) {
            onValueChange(value.filter(function (item) { return item !== val; }));
        }
        else {
            onValueChange(__spreadArray(__spreadArray([], __read(value), false), [val], false));
        }
    }, [value]);
    // TODO : change from else if use to switch case statement
    var handleKeyDown = (0, react_1.useCallback)(function (e) {
        var moveNext = function () {
            var nextIndex = activeIndex + 1;
            setActiveIndex(nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex);
        };
        var movePrev = function () {
            var prevIndex = activeIndex - 1;
            setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex);
        };
        if ((e.key === 'Backspace' || e.key === 'Delete') && value.length > 0) {
            if (inputValue.length === 0) {
                if (activeIndex !== -1 && activeIndex < value.length) {
                    onValueChange(value.filter(function (item) { return item !== value[activeIndex]; }));
                    var newIndex = activeIndex - 1 < 0 ? 0 : activeIndex - 1;
                    setActiveIndex(newIndex);
                }
                else {
                    onValueChange(value.filter(function (item) { return item !== value[value.length - 1]; }));
                }
            }
        }
        else if (e.key === 'Enter') {
            setOpen(true);
        }
        else if (e.key === 'Escape') {
            if (activeIndex !== -1) {
                setActiveIndex(-1);
            }
            else {
                setOpen(false);
            }
        }
        else if (dir === 'rtl') {
            if (e.key === 'ArrowRight') {
                movePrev();
            }
            else if (e.key === 'ArrowLeft' && (activeIndex !== -1 || loop)) {
                moveNext();
            }
        }
        else {
            if (e.key === 'ArrowLeft') {
                movePrev();
            }
            else if (e.key === 'ArrowRight' && (activeIndex !== -1 || loop)) {
                moveNext();
            }
        }
    }, [value, inputValue, activeIndex, loop]);
    return (react_1.default.createElement(MultiSelectContext.Provider, { value: {
            value: value,
            onValueChange: onValueChangeHandler,
            open: open,
            setOpen: setOpen,
            inputValue: inputValue,
            setInputValue: setInputValue,
            activeIndex: activeIndex,
            setActiveIndex: setActiveIndex,
        } },
        react_1.default.createElement(Command_js_1.Command.Root, __assign({ onKeyDown: handleKeyDown, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.Command, className), dir: dir }, props), children)));
};
exports.Root = Root;
Root.displayName = 'MultiSelectorRoot';
var Trigger = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var _b = useMultiSelect(), value = _b.value, onValueChange = _b.onValueChange, activeIndex = _b.activeIndex;
    var mousePreventDefault = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    return (react_1.default.createElement("div", __assign({ ref: ref, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.Root, className) }, props),
        value.map(function (item, index) { return (react_1.default.createElement(Button_js_1.Button, { key: item, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.button, activeIndex === index && MultiSelect_module_css_1.default.isActive) },
            react_1.default.createElement("span", { className: MultiSelect_module_css_1.default.option }, item),
            react_1.default.createElement("button", { "aria-label": "Remove ".concat(item, " option"), "aria-roledescription": "button to remove option", type: "button", onMouseDown: mousePreventDefault, onClick: function () { return onValueChange(item); } },
                react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "white", fillRule: "evenodd", clipRule: "evenodd" }))))); }),
        children));
});
exports.Trigger = Trigger;
Trigger.displayName = 'MultiSelectorTrigger';
var Input = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useMultiSelect(), setOpen = _b.setOpen, inputValue = _b.inputValue, setInputValue = _b.setInputValue, activeIndex = _b.activeIndex, setActiveIndex = _b.setActiveIndex;
    return (react_1.default.createElement(cmdk_1.Command.Input, __assign({}, props, { ref: ref, value: inputValue, onValueChange: activeIndex === -1 ? setInputValue : undefined, onBlur: function () { return setOpen(false); }, onFocus: function () { return setOpen(true); }, onClick: function () { return setActiveIndex(-1); }, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.input, className, activeIndex !== -1 && MultiSelect_module_css_1.default.isActive) })));
});
exports.Input = Input;
Input.displayName = 'MultiSelectorInput';
var Content = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children;
    var open = useMultiSelect().open;
    return (react_1.default.createElement("div", { ref: ref, className: MultiSelect_module_css_1.default.Content }, open && children));
});
exports.Content = Content;
Content.displayName = 'MultiSelectorContent';
var List = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, children = _a.children;
    return (react_1.default.createElement(Command_js_1.Command.List, { ref: ref, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.list, className) },
        children,
        react_1.default.createElement(Command_js_1.Command.Empty, null,
            react_1.default.createElement("span", { className: MultiSelect_module_css_1.default.emptyResult }, "No results found"))));
});
exports.List = List;
List.displayName = 'MultiSelectorList';
var Item = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, value = _a.value, children = _a.children, props = __rest(_a, ["className", "value", "children"]);
    var _b = useMultiSelect(), Options = _b.value, onValueChange = _b.onValueChange, setInputValue = _b.setInputValue;
    var mousePreventDefault = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    var isIncluded = Options.includes(value);
    return (react_1.default.createElement(Command_js_1.Command.Item, __assign({ ref: ref }, props, { onSelect: function () {
            onValueChange(value);
            setInputValue('');
        }, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.Item, className, isIncluded && MultiSelect_module_css_1.default.isIncluded, props.disabled && MultiSelect_module_css_1.default.isDisabled), onMouseDown: mousePreventDefault }),
        children,
        isIncluded && (react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })))));
});
exports.Item = Item;
Item.displayName = 'MultiSelectorItem';
exports.MultiSelect = {
    Root: Root,
    Trigger: Trigger,
    Input: Input,
    Content: Content,
    List: List,
    Item: Item,
};
//# sourceMappingURL=MultiSelect.js.map