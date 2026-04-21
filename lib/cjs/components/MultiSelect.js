"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Item = exports.List = exports.Content = exports.Input = exports.Trigger = exports.Root = exports.MultiSelect = void 0;
('use client');
const react_1 = __importStar(require("react"));
const Command_js_1 = require("./Command.js");
const cmdk_1 = require("cmdk");
const Button_js_1 = require("./Button.js");
const MultiSelect_module_css_1 = __importDefault(require("./MultiSelect.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const MultiSelectContext = (0, react_1.createContext)(null);
const useMultiSelect = () => {
    const context = (0, react_1.useContext)(MultiSelectContext);
    if (!context) {
        throw new Error('useMultiSelect must be used within MultiSelectProvider');
    }
    return context;
};
const Root = (_a) => {
    var { values: value, onValuesChange: onValueChange, loop = false, className, children, dir } = _a, props = __rest(_a, ["values", "onValuesChange", "loop", "className", "children", "dir"]);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [open, setOpen] = (0, react_1.useState)(false);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(-1);
    const onValueChangeHandler = (0, react_1.useCallback)((val) => {
        if (value.includes(val)) {
            onValueChange(value.filter((item) => item !== val));
        }
        else {
            onValueChange([...value, val]);
        }
    }, [value]);
    // TODO : change from else if use to switch case statement
    const handleKeyDown = (0, react_1.useCallback)((e) => {
        const moveNext = () => {
            const nextIndex = activeIndex + 1;
            setActiveIndex(nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex);
        };
        const movePrev = () => {
            const prevIndex = activeIndex - 1;
            setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex);
        };
        if ((e.key === 'Backspace' || e.key === 'Delete') && value.length > 0) {
            if (inputValue.length === 0) {
                if (activeIndex !== -1 && activeIndex < value.length) {
                    onValueChange(value.filter((item) => item !== value[activeIndex]));
                    const newIndex = activeIndex - 1 < 0 ? 0 : activeIndex - 1;
                    setActiveIndex(newIndex);
                }
                else {
                    onValueChange(value.filter((item) => item !== value[value.length - 1]));
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
            value,
            onValueChange: onValueChangeHandler,
            open,
            setOpen,
            inputValue,
            setInputValue,
            activeIndex,
            setActiveIndex,
        } },
        react_1.default.createElement(Command_js_1.Command.Root, Object.assign({ onKeyDown: handleKeyDown, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.Command, className), dir: dir }, props), children)));
};
exports.Root = Root;
Root.displayName = 'MultiSelectorRoot';
const Trigger = (0, react_1.forwardRef)((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    const { value, onValueChange, activeIndex } = useMultiSelect();
    const mousePreventDefault = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    return (react_1.default.createElement("div", Object.assign({ ref: ref, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.Root, className) }, props),
        value.map((item, index) => (react_1.default.createElement(Button_js_1.Button, { key: item, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.button, activeIndex === index && MultiSelect_module_css_1.default.isActive) },
            react_1.default.createElement("span", { className: MultiSelect_module_css_1.default.option }, item),
            react_1.default.createElement("button", { "aria-label": `Remove ${item} option`, "aria-roledescription": "button to remove option", type: "button", onMouseDown: mousePreventDefault, onClick: () => onValueChange(item) },
                react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "white", fillRule: "evenodd", clipRule: "evenodd" })))))),
        children));
});
exports.Trigger = Trigger;
Trigger.displayName = 'MultiSelectorTrigger';
const Input = (0, react_1.forwardRef)((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { setOpen, inputValue, setInputValue, activeIndex, setActiveIndex } = useMultiSelect();
    return (react_1.default.createElement(cmdk_1.Command.Input, Object.assign({}, props, { ref: ref, value: inputValue, onValueChange: activeIndex === -1 ? setInputValue : undefined, onBlur: () => setOpen(false), onFocus: () => setOpen(true), onClick: () => setActiveIndex(-1), className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.input, className, activeIndex !== -1 && MultiSelect_module_css_1.default.isActive) })));
});
exports.Input = Input;
Input.displayName = 'MultiSelectorInput';
const Content = (0, react_1.forwardRef)(({ children }, ref) => {
    const { open } = useMultiSelect();
    return (react_1.default.createElement("div", { ref: ref, className: MultiSelect_module_css_1.default.Content }, open && children));
});
exports.Content = Content;
Content.displayName = 'MultiSelectorContent';
const List = (0, react_1.forwardRef)(({ className, children }, ref) => {
    return (react_1.default.createElement(Command_js_1.Command.List, { ref: ref, className: (0, ClassNames_1.cl)(MultiSelect_module_css_1.default.list, className) },
        children,
        react_1.default.createElement(Command_js_1.Command.Empty, null,
            react_1.default.createElement("span", { className: MultiSelect_module_css_1.default.emptyResult }, "No results found"))));
});
exports.List = List;
List.displayName = 'MultiSelectorList';
const Item = (0, react_1.forwardRef)((_a, ref) => {
    var { className, value, children } = _a, props = __rest(_a, ["className", "value", "children"]);
    const { value: Options, onValueChange, setInputValue } = useMultiSelect();
    const mousePreventDefault = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);
    const isIncluded = Options.includes(value);
    return (react_1.default.createElement(Command_js_1.Command.Item, Object.assign({ ref: ref }, props, { onSelect: () => {
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
    Root,
    Trigger,
    Input,
    Content,
    List,
    Item,
};
//# sourceMappingURL=MultiSelect.js.map