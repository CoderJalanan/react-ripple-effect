"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Ripple = function (_a) {
    var _b = _a.pointer, pointer = _b === void 0 ? true : _b, _c = _a.radius, radius = _c === void 0 ? "50%" : _c, _d = _a.color, color = _d === void 0 ? "#FFF" : _d, _e = _a.endWidth, endWidth = _e === void 0 ? "500px" : _e, _f = _a.endHeight, endHeight = _f === void 0 ? "500px" : _f, _g = _a.animationEasing, animationEasing = _g === void 0 ? "linear" : _g, _h = _a.animationDuration, animationDuration = _h === void 0 ? 700 : _h, onClick = _a.onClick, children = _a.children;
    var buttonRef = react_1.default.useRef(null);
    var addRipple = function (e) {
        var _a;
        var x = e.clientX - e.target.getBoundingClientRect().left;
        var y = e.clientY - e.target.getBoundingClientRect().top;
        var ripples = document.createElement("span");
        ripples.style.left = "".concat(x, "px");
        ripples.style.top = "".concat(y, "px");
        // add style
        ripples.style.width = endWidth;
        ripples.style.height = endHeight;
        ripples.style.background = color;
        ripples.style.borderRadius = radius;
        ripples.style.position = "absolute";
        ripples.style.pointerEvents = "none";
        ripples.style.transform = "translate(-50%, -50%)";
        if (KeyframeEffect && Animation) {
            var rippleKeyFrame = new KeyframeEffect(ripples, [
                {
                    width: "0px",
                    height: "0px",
                    opacity: 0.5,
                },
                {
                    opacity: 0,
                },
            ], { duration: animationDuration, fill: "forwards", easing: animationEasing });
            var rippleAnimation = new Animation(rippleKeyFrame, document.timeline);
            rippleAnimation.play();
        }
        else {
            ripples.style.animation = "wave-animate ".concat(animationDuration, "ms ").concat(animationEasing, " forwards");
        }
        setTimeout(function () {
            ripples.remove();
        }, animationDuration);
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(ripples);
        if (onClick) {
            onClick();
        }
    };
    return (react_1.default.createElement("div", { ref: buttonRef, onClick: addRipple, style: {
            //width: "max-content",
            height: "max-content",
            overflow: "hidden",
            position: "relative",
            cursor: "".concat(pointer && "pointer"),
        } }, children));
};
exports.default = Ripple;
//# sourceMappingURL=index.js.map