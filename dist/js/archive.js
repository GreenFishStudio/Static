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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/archive.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/archive.js":
/*!************************!*\
  !*** ./src/archive.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() { //???????????????\n\n    var click = 0; //?????????????????????\n    var paged = 1; //??????????????????\n    var incate = window.cate_id;\n    var name = window.cate_name;\n    var des = window.cate_des;\n\n    /* ????????????(???????????????) */\n    $('.article-list').css('opacity', '1');\n    $('.top1').html(name);\n    $('.top2').html(des);\n    $('.cat-real').attr('style', 'display:inline-block');\n    /* ????????????(???????????????) */\n\n    new Vue({ //axios??????????????????\n        el: '#grid-cell',\n        data() {\n            return {\n\n                site_url : window.site_url,\n\n                exclude_option: window.cate_exclude_option,\n                cate_exclude: window.cate_exclude,\n                exclude_params: '',\n\n                pages: window.index_p,\n                cate_fre: window.cate_fre,\n                cate_wor: window.cate_fre,\n\n                posts: null,\n                posts_id_sticky: '0',\n                cates: null,\n                des: null,\n                loading: true, //v-if?????????????????????\n                loading_des: true,\n                errored: true,\n                loading_css: 'loading-line'\n            }\n        },\n        mounted() {\n            //????????????????????????\n            if(this.cate_exclude == 'true'){\n                this.exclude_params = '?exclude=' + this.exclude_option;\n            }\n\n            //????????????\n            axios.get(this.site_url + '/wp-json/wp/v2/categories' + this.exclude_params)\n                .then(response => {\n                    this.des = response.data;\n                }).then(() => {\n                    this.loading_des = false;\n                });\n\n\n            /*\n            * ??????????????????\n            * ???????????????????????????????????????\n            */\n\n            //??????????????????\n            axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=1&categories=' + incate)\n                .then(res_sticky => {\n                    this.posts = res_sticky.data;\n\n                    //?????????????????? IDs ?????????????????????????????????\n                    for(var s = 0;s< this.posts.length; ++s){\n                        this.posts_id_sticky += (',' + this.posts[s].id); \n                    }\n\n                    axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&categories=' + incate + '&exclude='+ this.posts_id_sticky + '&per_page=' + this.pages + '&page=' + paged)\n                    .then(res_normal => {\n                        //??????????????????\n                        this.posts = this.posts.concat(res_normal.data);\n                    })\n                })\n                .catch(e => {\n                    this.errored = false\n                })\n                .then(() => {\n                    this.loading = false;\n                    paged++; //?????????1??????????????????\n                    //??????????????????????????????????????????\n                    $(window).scroll(function() {\n                        var scrollTop = $(window).scrollTop();\n                        var scrollHeight = $('.bottom').offset().top - 500;\n                        if (scrollTop >= scrollHeight) {\n                            if (click == 0) { //?????????????????????????????????\n                                $('#scoll_new_list').click();\n                                click++; //??????????????????\n                            }\n                        }\n                    });\n\n                })\n        },\n        methods: { //????????????\n            new_page: function() { //???????????????????????????\n                $('#view-text').html('-&nbsp;?????????&nbsp;-');\n                axios.get(this.site_url + '/wp-json/wp/v2/posts?sticky=0&exclude='+ this.posts_id_sticky + '&per_page=' + this.pages + '&page=' + paged + '&categories=' + incate)\n                    .then(response => {\n                        if (!!response.data.length && response.data.length !== 0) { //????????????????????????\n                            $('#view-text').html('-&nbsp;????????????&nbsp;-');\n                            this.posts.push.apply(this.posts, response.data); //????????????????????????\n                            click = 0;\n                            paged++;\n                        } else {\n                            this.loading_css = '';\n                            $('#view-text').html('-&nbsp;????????????&nbsp;-');\n                            $('.bottom h5').html('????????????????????? O__O \"???').css({\n                                'background': '#fff',\n                                'color': '#999'\n                            });\n                        }\n                    }).catch(e => {\n                        this.loading_css = '';\n                        $('#view-text').html('-&nbsp;????????????&nbsp;-');\n                        $('.bottom h5').html('????????????????????? O__O \"???').css({\n                            'background': '#fff',\n                            'color': '#999'\n                        });\n                    })\n            }\n        },\n        filters: {\n            link_page: function(cate_id) {\n                if (cate_id == this.cate_fre) {\n                    return '????????? ';\n                } else if (cate_id == this.cate_wor) {\n                    return '????????? ';\n                } else {\n                    return '';\n                }\n            },\n            link_style: function(cate_id) {\n                if (cate_id == this.cate_fre || cate_id == this.cate_wor) {\n                    return 'display: flex;';\n                } else {\n                    return '';\n                }\n            }\n        }\n    });\n\n\n})\n\n//# sourceURL=webpack:///./src/archive.js?");

/***/ })

/******/ });