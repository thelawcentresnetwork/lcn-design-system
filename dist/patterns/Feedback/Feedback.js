"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NPSFeedback = NPSFeedback;
exports.RatingFeedback = RatingFeedback;
exports.TextFeedback = TextFeedback;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHookForm = require("react-hook-form");
var _axios = _interopRequireDefault(require("axios"));
var _reactFocusLock = _interopRequireDefault(require("react-focus-lock"));
var _react2 = require("@chakra-ui/react");
var _lawCentresDesignSystem = require("law-centres-design-system");
var _MicroHeader = _interopRequireDefault(require("~/Elements/MicroHeader"));
var _RadioGroup = require("~/Elements/RadioGroup");
function RatingFeedback(_ref) {
  var _ref$prompt = _ref.prompt,
    prompt = _ref$prompt === void 0 ? 'Was this helpful?' : _ref$prompt,
    originType = _ref.originType,
    originId = _ref.originId,
    originUrl = _ref.originUrl,
    originName = _ref.originName;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    rating = _useState2[0],
    setRating = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_MicroHeader["default"], {
    mb: "4"
  }, prompt), /*#__PURE__*/React.createElement(_react2.HStack, {
    spacing: "3"
  }, /*#__PURE__*/React.createElement(_react2.Popover, {
    isOpen: rating == 'thumbs-up',
    onOpen: function onOpen(e) {
      return setRating('thumbs-up');
    },
    onClose: function onClose(e) {
      return setRating(null);
    },
    placement: "top",
    closeOnBlur: true
  }, /*#__PURE__*/React.createElement(_react2.PopoverTrigger, null, /*#__PURE__*/React.createElement(_react2.Box, null, /*#__PURE__*/React.createElement(ActionButton, {
    boxShadow: "none",
    borderColor: "green.100",
    bg: rating == 'thumbs-up' ? 'green.800' : 'green.100',
    _hover: {
      borderColor: 'green.800',
      bg: 'green.800'
    }
  }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
    _groupHover: {
      color: 'white',
      animation: 'bounce 0.75s'
    },
    color: rating == 'thumbs-up' ? 'white' : 'green.800',
    icon: ['fas', 'thumbs-up']
  })))), /*#__PURE__*/React.createElement(_react2.PopoverContent, {
    p: 3,
    _focus: {
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement(_reactFocusLock["default"], {
    returnFocus: true,
    persistentFocus: false
  }, /*#__PURE__*/React.createElement(_react2.PopoverArrow, null), /*#__PURE__*/React.createElement(FeedbackForm, {
    originType: originType,
    originId: originId,
    originUrl: originUrl,
    originName: originName,
    rating: rating,
    isOpen: rating == 'thumbs-up',
    placeholder: "Great, any other feedback?",
    onCancel: function onCancel(e) {
      return setRating(null);
    }
  })))), /*#__PURE__*/React.createElement(_react2.Popover, {
    isOpen: rating == 'thumbs-down',
    onOpen: function onOpen(e) {
      return setRating('thumbs-down');
    },
    onClose: function onClose(e) {
      return setRating(null);
    },
    placement: "top",
    closeOnBlur: true
  }, /*#__PURE__*/React.createElement(_react2.PopoverTrigger, null, /*#__PURE__*/React.createElement(_react2.Box, null, /*#__PURE__*/React.createElement(ActionButton, {
    borderColor: "green.100",
    boxShadow: "none",
    bg: rating == 'thumbs-down' ? 'green.800' : 'green.100',
    _hover: {
      borderColor: 'green.800',
      bg: 'green.800'
    }
  }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
    _groupHover: {
      color: 'white',
      animation: 'bounce 0.75s'
    },
    color: rating == 'thumbs-down' ? 'white' : 'green.800',
    icon: ['fas', 'thumbs-down']
  })))), /*#__PURE__*/React.createElement(_react2.PopoverContent, {
    p: 3,
    _focus: {
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement(_reactFocusLock["default"], {
    returnFocus: true,
    persistentFocus: false
  }, /*#__PURE__*/React.createElement(_react2.PopoverArrow, null), /*#__PURE__*/React.createElement(FeedbackForm, {
    originType: originType,
    originId: originId,
    originUrl: originUrl,
    originName: originName,
    rating: rating,
    placeholder: "How could it be improved?",
    isOpen: rating == 'thumbs-down',
    onCancel: function onCancel(e) {
      return setRating(null);
    }
  }))))));
}
function TextFeedback(props) {
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpen = _useDisclosure.isOpen,
    onToggle = _useDisclosure.onToggle;
  return /*#__PURE__*/React.createElement(_react2.Popover, {
    isOpen: isOpen,
    onOpen: onToggle,
    onClose: onToggle,
    placement: "bottom",
    closeOnBlur: true
  }, /*#__PURE__*/React.createElement(_react2.PopoverTrigger, null, /*#__PURE__*/React.createElement(_react2.Box, {
    display: "inline-block"
  }, props.children)), /*#__PURE__*/React.createElement(_react2.PopoverContent, {
    p: 3,
    _focus: {
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement(_reactFocusLock["default"], {
    returnFocus: true,
    persistentFocus: false
  }, /*#__PURE__*/React.createElement(_react2.PopoverArrow, null), /*#__PURE__*/React.createElement(FeedbackForm, {
    originUrl: props.originUrl,
    placeholder: props.placeholder,
    originType: props.originType,
    originId: props.originId,
    originName: props.originName,
    confirmation: props.confirmation,
    isOpen: isOpen,
    onCancel: onToggle
  }))));
}
function NPSFeedback(props) {
  var _useDisclosure2 = (0, _react2.useDisclosure)(),
    isOpen = _useDisclosure2.isOpen,
    onToggle = _useDisclosure2.onToggle;
  return /*#__PURE__*/React.createElement(_react2.Popover, {
    isOpen: isOpen,
    onOpen: onToggle,
    onClose: onToggle,
    placement: "left",
    closeOnBlur: true
  }, /*#__PURE__*/React.createElement(_react2.PopoverTrigger, null, /*#__PURE__*/React.createElement(_react2.Box, {
    display: "inline-block"
  }, props.children)), /*#__PURE__*/React.createElement(_react2.PopoverContent, {
    boxShadow: "lg",
    p: 3,
    _focus: {
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement(_reactFocusLock["default"], {
    returnFocus: true,
    persistentFocus: false
  }, /*#__PURE__*/React.createElement(NPSForm, {
    originUrl: props.originUrl,
    placeholder: props.placeholder,
    originType: props.originType,
    originId: props.originId,
    originName: props.originName,
    confirmation: props.confirmation,
    isOpen: isOpen,
    onCancel: onToggle
  }))));
}
function NPSForm(_ref2) {
  var firstFieldRef = _ref2.firstFieldRef,
    onCancel = _ref2.onCancel,
    confirmation = _ref2.confirmation,
    _ref2$placeholder = _ref2.placeholder,
    placeholder = _ref2$placeholder === void 0 ? 'Feedback, ideas, suggestions...' : _ref2$placeholder,
    originType = _ref2.originType,
    originId = _ref2.originId,
    originName = _ref2.originName,
    originUrl = _ref2.originUrl,
    isOpen = _ref2.isOpen;
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    score = _useState4[0],
    setScore = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors,
    register = _useForm.register,
    reset = _useForm.reset,
    _useForm$formState = _useForm.formState,
    isSubmitted = _useForm$formState.isSubmitted,
    isSubmitting = _useForm$formState.isSubmitting;
  (0, _react.useEffect)(function () {
    if (!isOpen) reset();
  }, [isOpen]);
  var onSubmit = function onSubmit(values) {
    return new Promise(function (resolve) {
      _axios["default"].post('/api/actions/feedback', Object.assign(values, {
        tag: originType,
        origin: originName,
        origin_id: originId,
        url: originUrl,
        score: score
      })).then(function (_ref3) {
        var data = _ref3.data;
        resolve();
        window.gtag('event', 'nps', {
          score: score
        });
        setStatus(confirmation || 'Thanks for your feedback, it will be used to inform future updates.');
      })["catch"](function (_ref4) {
        var err = _ref4.err;
        resolve();
        setStatus('Sorry, there was an error submitting your feedback.');
      });
    });
  };
  if (isSubmitted) {
    return /*#__PURE__*/React.createElement(_react2.Box, {
      p: "5",
      textAlign: "center"
    }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
      size: "3x",
      mb: "2",
      color: "brand.Green",
      icon: ['fas', 'circle-check']
    }), /*#__PURE__*/React.createElement(_react2.Text, {
      fontSize: "sm",
      fontWeight: "600",
      color: "gray.600"
    }, status));
  } else {
    return /*#__PURE__*/React.createElement(_react2.Box, {
      p: "1",
      pt: "3"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/React.createElement(_react2.Box, {
      textAlign: "center",
      px: "5"
    }, /*#__PURE__*/React.createElement(_react2.Text, {
      fontSize: "sm",
      color: "gray.500",
      mb: "4",
      pr: "4"
    }, "How likely are you to recommend this platform to a colleague?"), /*#__PURE__*/React.createElement(_RadioGroup.RadioGroup, {
      name: "score",
      options: ['1', '2', '3', '4', '5'],
      onChange: function onChange(e) {
        setScore(e);
      }
    })), /*#__PURE__*/React.createElement(_react2.FormControl, {
      isInvalid: errors === null || errors === void 0 ? void 0 : errors.name,
      pb: "4",
      pt: "5"
    }, /*#__PURE__*/React.createElement(_react2.Textarea, (0, _extends2["default"])({
      _focus: {
        outline: '1px solid brand.Green'
      },
      name: "feedback",
      size: "sm",
      _placeholder: {
        color: 'gray.500'
      },
      borderRadius: "md"
    }, register('feedback'), {
      placeholder: placeholder
    }))), /*#__PURE__*/React.createElement(_react2.ButtonGroup, {
      d: "flex",
      justifyContent: "flex-end",
      mb: "1"
    }, /*#__PURE__*/React.createElement(ActionButton, {
      bg: "gray.50",
      color: "gray.400",
      _hover: {
        color: 'gray.700'
      },
      onClick: onCancel
    }, "Cancel"), /*#__PURE__*/React.createElement(ActionButton, {
      as: "button",
      loadingText: "Sending",
      isLoading: isSubmitting,
      bg: "brand.Green",
      color: "white",
      borderColor: "brand.Green",
      fontWeight: "600",
      _hover: {
        bg: 'green.700',
        borderColor: 'green.700'
      },
      type: "submit"
    }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
      mr: "3",
      icon: ['fas', 'paper-plane'],
      color: "white"
    }), "Send"))));
  }
}
function FeedbackForm(_ref5) {
  var firstFieldRef = _ref5.firstFieldRef,
    onCancel = _ref5.onCancel,
    confirmation = _ref5.confirmation,
    _ref5$placeholder = _ref5.placeholder,
    placeholder = _ref5$placeholder === void 0 ? 'Feedback...' : _ref5$placeholder,
    rating = _ref5.rating,
    originType = _ref5.originType,
    originId = _ref5.originId,
    originName = _ref5.originName,
    originUrl = _ref5.originUrl,
    isOpen = _ref5.isOpen;
  var _useState7 = (0, _react.useState)(),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    status = _useState8[0],
    setStatus = _useState8[1];
  var _useForm2 = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm2.handleSubmit,
    errors = _useForm2.errors,
    register = _useForm2.register,
    reset = _useForm2.reset,
    _useForm2$formState = _useForm2.formState,
    isSubmitted = _useForm2$formState.isSubmitted,
    isSubmitting = _useForm2$formState.isSubmitting;
  (0, _react.useEffect)(function () {
    if (!isOpen) reset();
  }, [isOpen]);
  var onSubmit = function onSubmit(values) {
    return new Promise(function (resolve) {
      _axios["default"].post('/api/actions/feedback', Object.assign(values, {
        tag: originType,
        origin: originName,
        origin_id: originId,
        url: originUrl,
        rating: rating
      })).then(function (_ref6) {
        var data = _ref6.data;
        resolve();
        setStatus(confirmation || 'Thanks for your feedback, it will be used to inform future updates.');
      })["catch"](function (_ref7) {
        var err = _ref7.err;
        console.log(err);
        resolve();
        setStatus('Sorry, there was an error submitting your feedback.');
      });
    });
  };
  if (isSubmitted) {
    return /*#__PURE__*/React.createElement(_react2.Box, {
      p: "5",
      textAlign: "center"
    }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
      size: "3x",
      mb: "2",
      color: "brand.Green",
      icon: ['fas', 'circle-check']
    }), /*#__PURE__*/React.createElement(_react2.Text, {
      fontSize: "sm",
      fontWeight: "600",
      color: "gray.600"
    }, status));
  } else {
    return /*#__PURE__*/React.createElement(_react2.Box, {
      p: "1",
      pt: "3"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/React.createElement(_react2.FormControl, {
      isInvalid: errors === null || errors === void 0 ? void 0 : errors.name,
      pb: "4"
    }, /*#__PURE__*/React.createElement(_react2.Textarea, (0, _extends2["default"])({
      _focus: {
        outline: '1px solid brand.Green'
      },
      name: "feedback",
      size: "sm",
      _placeholder: {
        color: 'gray.500'
      },
      borderRadius: "md"
    }, register('feedback'), {
      placeholder: placeholder
    }))), /*#__PURE__*/React.createElement(_react2.ButtonGroup, {
      d: "flex",
      justifyContent: "flex-end",
      mb: "1"
    }, /*#__PURE__*/React.createElement(ActionButton, {
      bg: "gray.50",
      color: "gray.400",
      _hover: {
        color: 'gray.700'
      },
      onClick: onCancel
    }, "Cancel"), /*#__PURE__*/React.createElement(ActionButton, {
      as: "button",
      loadingText: "Sending",
      isLoading: isSubmitting,
      bg: "brand.Green",
      color: "white",
      borderColor: "brand.Green",
      fontWeight: "600",
      _hover: {
        bg: 'green.700',
        borderColor: 'green.700'
      },
      type: "submit"
    }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
      mr: "3",
      icon: ['fas', 'paper-plane'],
      color: "white"
    }), "Send"))));
  }
}