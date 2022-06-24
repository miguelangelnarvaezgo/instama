(function () {
  'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  //función maestra para inyectar elementos en DOM. Principalmente iconos NAV y HEADER.
  var insertElement = function insertElement() {
    var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no ID';
    var position = arguments.length > 2 ? arguments[2] : undefined;
    var element = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    if (element == '') {
      for (var i = 0; i < quantity; i++) {
        var content = "<div class=\"".concat(id, "\" id=\"").concat(id, "-").concat(i, "\"></div>");
        document.getElementById(id).insertAdjacentHTML('beforeend', content);
      }
    } else {
      for (var _i = 0; _i < quantity; _i++) {
        var _content = element;
        document.getElementById(id).insertAdjacentHTML(position, _content);
      }
    }
  };
  var resizeElement = function resizeElement(target, img) {
    var view = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var side = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'height';
    var s = side;

    if (side == 'width') {
      s = 'width';
    }

    var elem = document.getElementsByClassName(target);
    var imgs = document.getElementsByClassName(img);
    console.log(elem[0].clientWidth);
    var w = elem[0].clientWidth + elem[0].clientWidth * view; // se podría recorrer el elemento "elem" y asignar a cada imagen el alto de su propio contenedor, pero como todos son iguales se reduce la carga de trabajo usando el tamaño del primer elemento

    console.log(w);

    var _iterator = _createForOfIteratorHelper(imgs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _img = _step.value;

        // let w = elem[0].clientWidth + elem[0].clientWidth * view; // se podría recorrer el elemento "elem" y asignar a cada imagen el alto de su propio contenedor, pero como todos son iguales se reduce la carga de trabajo usando el tamaño del primer elemento
        _img.setAttribute(s, w + "px");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var cleanContainer = function cleanContainer(target) {
    var container = document.getElementById(target);

    if (container.hasChildNodes()) {
      while (container.childNodes.length >= 1) {
        container.removeChild(container.firstChild);
      }
    }
  };

  var userData = function userData(data) {
    var user = data.user;
    var element = "";
    var elementMv = "";
    var usMv = "";

    for (var us in user) {
      switch (us) {
        case 'avatar':
          element = "<img src=\"data/".concat(user.avatar, "\">"); // element = `<img src="../data/${user.avatar}">`;

          insertElement(1, us, 'beforeend', element);
          break;

        case 'nombre':
          element = "".concat(user.nombre);
          insertElement(1, us, 'beforeend', element);
          break;

        case 'publicaciones':
          element = "<span class=\"share-num\">".concat(user.publicaciones, "</span>");
          insertElement(1, us, 'afterbegin', element);
          elementMv = "<p>".concat(user.publicaciones, "</p>");
          usMv = "".concat(us, "-mv");
          insertElement(1, usMv, 'afterbegin', elementMv);
          break;

        case 'seguidores':
          element = "<span class=\"share-num\">".concat(user.seguidores, "</span>");
          insertElement(1, us, 'afterbegin', element);
          elementMv = "<p>".concat(user.seguidores, "</p>");
          usMv = "".concat(us, "-mv");
          insertElement(1, usMv, 'afterbegin', elementMv);
          break;

        case 'seguidos':
          element = "<span class=\"share-num\">".concat(user.seguidos, "</span>");
          insertElement(1, us, 'afterbegin', element);
          elementMv = "<p>".concat(user.seguidos, "</p>");
          usMv = "".concat(us, "-mv");
          insertElement(1, usMv, 'afterbegin', elementMv);
          break;

        case 'descripcion':
          var descripcion = user.descripcion;

          for (var des in descripcion) {
            switch (des) {
              case 'nombreCompleto':
                element = "".concat(descripcion.nombreCompleto);
                insertElement(1, des, 'beforeend', element);
                break;

              case 'historia':
                element = "".concat(descripcion.historia);
                insertElement(1, des, 'beforeend', element);
                break;

              case 'lesigue':
                element = "<span>".concat(descripcion.lesigue, "</span>");
                insertElement(1, des, 'afterbegin', element);
                break;

              case 'link':
                element = "<a class=\"link\" href=\"".concat(descripcion.link, "\">").concat(descripcion.link, "</a>"); // element = `<a class="link" href="http://www.${descripcion.link}">${descripcion.link}</a>`;

                insertElement(1, des, 'beforeend', element);
                break;
            }
          }

          break;
      }
    }
  };

  // import * as g from "_globals";
  var insertStorie = function insertStorie(data) {
    var stories = data.stories;

    var _iterator = _createForOfIteratorHelper(stories),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sto = _step.value;
        var url = 'data/' + sto.avatar; // let url = '../data/'+sto.avatar;

        var storie = "\n\t\t\t<div class=\"stories\" id=\"stories-".concat(stories.indexOf(sto), "\">\n\t\t\t\t<div class=\"sto-border\" id=\"sto-border-").concat(stories.indexOf(sto), "\"><img src=\"").concat(url, "\" class=\"sto-img\" id=\"sto-img-").concat(stories.indexOf(sto), "\"></div>\n\t\t\t\t<span class=\"sto-title\" id=\"sto-title-").concat(stories.indexOf(sto), "\">").concat(sto.nombre, "</span>\n\t\t\t</div>");
        document.getElementById("stories").insertAdjacentHTML('beforeend', storie);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var insertPublication = function insertPublication(data) {
    var pubs = data.publicaciones;

    var _iterator = _createForOfIteratorHelper(pubs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pub = _step.value;
        var url = 'data/' + pub.img;
        var download = 'data/' + pub.dw; // let url = '../data/'+pub.img;
        // let download = '../data/'+pub.dw;

        var count = new Number();
        var post = '';
        count = pub.comentarios.length;
        var comments = pub.comentarios;

        for (var i = 0; i < pub.comentarios.length; i++) {
          count = count + comments[i].respuestas.length;
        }

        if (pub.dw == "") {
          post = "<div id=\"publications-".concat(pubs.indexOf(pub), "\" class=\"publications\">\n\t\t\t\t\t\t<img src=\"").concat(url, "\" id=\"pub-img-").concat(pubs.indexOf(pub), "\" class=\"pub-img\">\n\n\t\t\t\t\t\t<div id=\"overlay-data-publication-").concat(pubs.indexOf(pub), "\" class=\"overlay-data-publications\">\n\t\t\t\t\t\t\t<div id=\"likes-info-").concat(pubs.indexOf(pub), "\" class=\"icon-info-1\">\n\t\t\t\t\t\t\t\t<svg width=\"22px\" height=\"22px\" viewBox=\"0 0 512 456\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"like-icon-").concat(pubs.indexOf(pub), "\" class=\"icon-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path class=\"icon-path\" fill=\"#000000\" fill-rule=\"nonzero\" d=\"M471.382812,44.578125 C444.878906,15.832031 408.511719,0 368.972656,0 C339.417969,0 312.351562,9.34375 288.523438,27.769531 C276.5,37.070312 265.605469,48.449219 256,61.730469 C246.398438,48.453125 235.5,37.070312 223.472656,27.769531 C199.648438,9.34375 172.582031,0 143.027344,0 C103.488281,0 67.117188,15.832031 40.613281,44.578125 C14.425781,72.988281 2.84217094e-14,111.800781 2.84217094e-14,153.871094 C2.84217094e-14,197.171875 16.136719,236.808594 50.78125,278.613281 C81.773438,316.007812 126.316406,353.96875 177.898438,397.925781 C195.511719,412.9375 215.476562,429.953125 236.207031,448.078125 C241.683594,452.875 248.710938,455.515625 256,455.515625 C263.285156,455.515625 270.316406,452.875 275.785156,448.085938 C296.515625,429.957031 316.492188,412.933594 334.113281,397.914062 C385.6875,353.964844 430.230469,316.007812 461.222656,278.609375 C495.867188,236.808594 512,197.171875 512,153.867188 C512,111.800781 497.574219,72.988281 471.382812,44.578125 Z\"></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<span is=\"likes-num-").concat(pubs.indexOf(pub), "\" class=\"likes-num\"> ").concat(pub.likes, " </span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div id=\"comments-info-").concat(pubs.indexOf(pub), "\" class=\"icon-info-2\">\n\t\t\t\t\t\t\t\t<svg width=\"22px\" height=\"22px\" viewBox=\"0 0 133 131\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"comment-icon-").concat(pubs.indexOf(pub), "\" class=\"icon-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path class=\"icon-path\" fill=\"#000000\" d=\"M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z\" ></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<span is=\"comments-num-").concat(pubs.indexOf(pub), "\" class=\"comments-num\"> ").concat(count, " </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>");
        } else {
          post = " <div id=\"publications-".concat(pubs.indexOf(pub), "\" class=\"publications\">\n\t\t\t\t\t\t<a href=\"").concat(download, "\" download=\"").concat(pub.dw, "\"><img src=\"").concat(url, "\" id=\"pub-img-").concat(pubs.indexOf(pub), "\" class=\"pub-img\"></a>\n\n\t\t\t\t\t\t<div id=\"overlay-data-publication-").concat(pubs.indexOf(pub), "\" class=\"overlay-data-publications\">\n\t\t\t\t\t\t\t<div id=\"likes-info-").concat(pubs.indexOf(pub), "\" class=\"icon-info-1\">\n\t\t\t\t\t\t\t\t<svg width=\"22px\" height=\"22px\" viewBox=\"0 0 512 456\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"like-icon-").concat(pubs.indexOf(pub), "\" class=\"icon-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path class=\"icon-path\" fill=\"#000000\" fill-rule=\"nonzero\" d=\"M471.382812,44.578125 C444.878906,15.832031 408.511719,0 368.972656,0 C339.417969,0 312.351562,9.34375 288.523438,27.769531 C276.5,37.070312 265.605469,48.449219 256,61.730469 C246.398438,48.453125 235.5,37.070312 223.472656,27.769531 C199.648438,9.34375 172.582031,0 143.027344,0 C103.488281,0 67.117188,15.832031 40.613281,44.578125 C14.425781,72.988281 2.84217094e-14,111.800781 2.84217094e-14,153.871094 C2.84217094e-14,197.171875 16.136719,236.808594 50.78125,278.613281 C81.773438,316.007812 126.316406,353.96875 177.898438,397.925781 C195.511719,412.9375 215.476562,429.953125 236.207031,448.078125 C241.683594,452.875 248.710938,455.515625 256,455.515625 C263.285156,455.515625 270.316406,452.875 275.785156,448.085938 C296.515625,429.957031 316.492188,412.933594 334.113281,397.914062 C385.6875,353.964844 430.230469,316.007812 461.222656,278.609375 C495.867188,236.808594 512,197.171875 512,153.867188 C512,111.800781 497.574219,72.988281 471.382812,44.578125 Z\"></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<span is=\"likes-num-").concat(pubs.indexOf(pub), "\" class=\"likes-num\"> ").concat(pub.likes, " </span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div id=\"comments-info-").concat(pubs.indexOf(pub), "\" class=\"icon-info-2\">\n\t\t\t\t\t\t\t\t<svg width=\"22px\" height=\"22px\" viewBox=\"0 0 133 131\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"comment-icon-").concat(pubs.indexOf(pub), "\" class=\"icon-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path class=\"icon-path\" fill=\"#000000\" d=\"M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z\" ></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t<span is=\"comments-num-").concat(pubs.indexOf(pub), "\" class=\"comments-num\"> ").concat(count, " </span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>");
        }

        document.getElementById("content-container").insertAdjacentHTML('beforeend', post);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    resizeElement('publications', 'pub-img');
  };
  var insertIgtv = function insertIgtv(data) {
    var igtvs = data.igtv;

    var _iterator2 = _createForOfIteratorHelper(igtvs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var igtv = _step2.value;
        var url = 'data/' + igtv.img; // let url = '../data/'+igtv.img;

        var count = new Number();
        count = igtv.comentarios; // count = igtv.comentarios.length;
        // let comments = igtv.comentarios;
        // for (let i = 0; i < igtv.comentarios.length; i++) {
        // 	count = count + comments[i].respuestas.length;
        // }

        var post = "\n      <div id=\"igtv-".concat(igtvs.indexOf(igtv), "\" class=\"igtv\">\n        <img src=\"").concat(url, "\" id=\"igtv-img-").concat(igtvs.indexOf(igtv), "\" class=\"igtv-img\">\n\n        <div id=\"overlay-data-publication-").concat(igtvs.indexOf(igtv), "\" class=\"overlay-data-publications\">\n\n          <div id=\"play-info-").concat(igtvs.indexOf(igtv), "\" class=\"icon-info-1\">\n            <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 372 495\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"play-icon-").concat(igtvs.indexOf(igtv), "\" class=\"icon-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <path class=\"icon-path\" fill=\"#000000\" fill-rule=\"nonzero\" d=\"M344.284,201.188 L69.804,13.28 C57.128,4.596 44.356,0 33.74,0 C13.216,0 0.52,16.472 0.52,44.044 L0.52,450.168 C0.52,477.708 13.2,494.148 33.676,494.148 C44.308,494.148 56.876,489.548 69.58,480.84 L344.188,292.936 C361.848,280.832 371.628001,264.544 371.628001,247.052 C371.632,229.572 361.964,213.288 344.284,201.188 Z\" ></path>\n                </g>\n            </svg>\n            <span is=\"plays-num-").concat(igtvs.indexOf(igtv), "\" class=\"play-num\"> ").concat(igtv.replay, " </span>\n          </div>\n\n          <div id=\"comments-info-").concat(igtvs.indexOf(igtv), "\" class=\"icon-info-2\">\n            <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 133 131\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <g id=\"comment-icon-").concat(igtvs.indexOf(igtv), "\" class=\"icon-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                    <path class=\"icon-path\" fill=\"#000000\" d=\"M62.5,125 C73.0764925,125 83.0393893,122.372885 91.7717343,117.735611 C91.5905781,117.578537 105.333333,121.833333 133,130.5 C124,102.5 119.486762,88.4207618 119.460286,88.2622855 C123.018741,80.4069791 125,71.6848634 125,62.5 C125,27.9822031 97.0177969,0 62.5,0 C27.9822031,0 0,27.9822031 0,62.5 C0,97.0177969 27.9822031,125 62.5,125 Z\" ></path>\n                </g>\n            </svg>\n            <span is=\"comments-num-").concat(igtvs.indexOf(igtv), "\" class=\"comments-num\"> ").concat(count, " </span>\n          </div>\n\n        </div>\n\n      </div>\n    ");
        document.getElementById("content-container").insertAdjacentHTML('beforeend', post);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    resizeElement('igtv', 'igtv-img', 0.644);
  }; //Se detectan cambios en el ancho del navegador pr daptar ajustar el alto de las publicaciones. Las publicaciones deben tener igual ancho que alto con independencia de ancho del navegador.

  window.onresize = function () {
    resizeElement('publications', 'pub-img');
    resizeElement('igtv', 'igtv-img', 0.644);
  };

  var data = {
    "user": {
      "avatar": "54550381.png",
      "nombre": "MANarvaez",
      "publicaciones": "727",
      "seguidores": "42,2k",
      "seguidos": "624",
      "descripcion": {
        "nombreCompleto": "Miguel Ángel Narváez",
        "historia": "Diseñador multimedia.",
        "link": "https://github.com/miguelangelnarvaezgo",
        "lesigue": "uxtipsonline"
      }
    },
    "stories": [
    /*0*/
    {
      "nombre": "Diseño Web",
      "avatar": "web.png"
    },
    /*1*/
    {
      "nombre": "Diseño UI",
      "avatar": "UI.png"
    },
    /*2*/
    {
      "nombre": "Maquetación Web",
      "avatar": "maq.png"
    },
    /*3*/
    {
      "nombre": "Diseño gráfico",
      "avatar": "graph.png"
    },
    /*4*/
    {
      "nombre": "Animación",
      "avatar": "anima.png"
    } // /*5*/ {
    // 			"nombre":"Multimedia",
    // 			"avatar": "multim.png"
    // 		}
    ],
    "publicaciones": [
    /*0*/
    {
      "img": "eucerin.jpg",
      "dw": "eucerin_dwl.jpg",
      "likes": "201",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }, {
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*1*/
    {
      "img": "aldi.jpg",
      "dw": "aldi_dwl.jpg",
      "likes": "754",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*2*/
    {
      "img": "ddi.gif",
      "dw": "ddi.gif",
      "likes": "2343",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*3*/
    {
      "img": "grebulosa.jpg",
      "dw": "",
      "likes": "8765",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*4*/
    {
      "img": "paack.jpg",
      "dw": "paack_dwl.jpg",
      "likes": "126",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*5*/
    {
      "img": "bony.jpg",
      "dw": "",
      "likes": "201",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*6*/
    {
      "img": "nespresso.png",
      "dw": "nespresso_dwl.jpg",
      "likes": "909",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*7*/
    {
      "img": "moto.jpg",
      "dw": "",
      "likes": "12121",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*8*/
    {
      "img": "almirall_2.gif",
      "dw": "almirall_2.gif",
      "likes": "234",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*9*/
    {
      "img": "guitarra.jpg",
      "dw": "",
      "likes": "897",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*10*/
    {
      "img": "COAC.gif",
      "dw": "COAC.gif",
      "likes": "988",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*11*/
    {
      "img": "IMG_5374.jpg",
      "dw": "",
      "likes": "23",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*12*/
    {
      "img": "almirall.jpg",
      "dw": "almirall_dwl.jpg",
      "likes": "345",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*13*/
    {
      "img": "auren.jpg",
      "dw": "auren_dwl.jpg",
      "likes": "87",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*14*/
    {
      "img": "bioiberica.gif",
      "dw": "bioiberica.gif",
      "likes": "67",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*15*/
    {
      "img": "ulldeter.jpg",
      "dw": "",
      "likes": "43",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*16*/
    {
      "img": "gallo.jpg",
      "dw": "gallo_dwl.jpg",
      "likes": "32",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    },
    /*17*/
    {
      "img": "IMG_1423.jpg",
      "dw": "",
      "likes": "83",
      "comentarios": [{
        "avatar": "10724078_1646008278999311_878022079_a.jpg",
        "name": "dgraficopar",
        "coment": "En Facebook están muy ocupados con otra cosas más importantes como compartir nuestros datos, restringir el libre reenvío de información por WhatsApp, etc...en lugar de ocuparse de estas tonterías que solo nos molestan a los diseñadores",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }, {
          "avatar": "90089645_2570311583216887_3121298256085123072_n.jpg",
          "name": "lilianperez_raton",
          "coment": "@dgraficopar totalmente de acuerdo... cada vez están peor"
        }]
      }, {
        "avatar": "81830773_120375342559469_2990012302826143744_n.jpg",
        "name": "itsvictorvalero",
        "coment": "En Europa ya está disponible el modo noche para Facebook?",
        "respuestas": [{
          "avatar": "75280200_2552150741775970_372459770067550208_n.jpg",
          "name": "marcocreativo",
          "coment": "@itsvictorvalero si"
        }]
      }]
    }],
    "igtv": [{
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }, {
      "img": "igtv-test.png",
      "replay": "234",
      "comentarios": "12"
    }]
  };

  var publicaciones = document.getElementById('label-publicaciones');
  publicaciones.addEventListener('click', function (event) {
    cleanContainer('content-container');
    document.getElementById('content-container').setAttribute('style', "display: grid; grid-template-columns: repeat(3, 1fr);");
    insertPublication(data);
    console.log('se ha hecho click en Publicaciones');
  });
  var igtv = document.getElementById('label-igtv');
  igtv.addEventListener('click', function (event) {
    cleanContainer('content-container');
    document.getElementById('content-container').setAttribute('style', "display: grid; grid-template-columns: repeat(4, 1fr);");
    insertIgtv(data);
    console.log('se ha hecho click en IGTV');
  });
  var etiquetadas = document.getElementById('label-etiquetadas');
  etiquetadas.addEventListener('click', function (event) {
    cleanContainer('content-container');
    console.log('se ha hecho click en Etiquetadas');
  }); // Se detecta el evento DOMContentLoaded para sber cuando el documento esta cargado y listo. Función de iniciación del programa.

  document.addEventListener("DOMContentLoaded", function (event) {
    insertElement(5, 'nav-icon', 'beforeend');
    insertPublication(data);
    insertStorie(data);
    userData(data);
  });

})();
//# sourceMappingURL=app.js.map
