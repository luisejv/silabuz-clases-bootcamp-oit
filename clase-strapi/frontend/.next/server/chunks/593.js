"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 8593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ articles)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/card.js






const Card = ({
  article
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/article/${article.attributes.slug}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "uk-link-reset",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-card uk-card-muted",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-card-media-top",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            image: article.attributes.image
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-card-body",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            id: "category",
            className: "uk-text-uppercase",
            children: article.attributes.category.name
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            id: "title",
            className: "uk-text-large",
            children: article.attributes.title
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const card = (Card);
;// CONCATENATED MODULE: ./components/articles.js





const Articles = ({
  articles
}) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-child-width-1-2@s",
      "data-uk-grid": "true",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: leftArticles.map((article, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(card, {
            article: article
          }, `article__left__${article.attributes.slug}`);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-child-width-1-2@m uk-grid-match",
          "data-uk-grid": true,
          children: rightArticles.map((article, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx(card, {
              article: article
            }, `article__left__${article.attributes.slug}`);
          })
        })
      })]
    })
  });
};

/* harmony default export */ const articles = (Articles);

/***/ })

};
;