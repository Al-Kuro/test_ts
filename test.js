var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var AClass = /** @class */ (function () {
  function AClass(n) {
    this.numbers = [];
    this.fill(n);
  }
  AClass.prototype.fill = function (n) {
    for (var i = 0; i < n; i++) {
      this.numbers.push(Math.round(Math.random() * 10));
    }
  };
  AClass.prototype.factorial = function (array) {
    var factorialNumber = function (n) {
      return n != 1 ? n * factorialNumber(n - 1) : 1;
    };
    return array.map(function (arr) {
      return factorialNumber(arr);
    });
  };
  return AClass;
})();
var Class1 = /** @class */ (function (_super) {
  __extends(Class1, _super);
  function Class1(n) {
    return _super.call(this, n) || this;
  }
  Class1.prototype.sort = function () {
    return this.factorial(
      this.numbers.sort(function (a, b) {
        return b - a;
      })
    );
  };
  return Class1;
})(AClass);
var Class2 = /** @class */ (function (_super) {
  __extends(Class2, _super);
  function Class2(n) {
    return _super.call(this, n) || this;
  }
  Class2.prototype.sort = function () {
    return this.factorial(
      this.numbers.sort(function (a, b) {
        return a - b;
      })
    );
  };
  return Class2;
})(AClass);
var class1 = new Class1(2);
console.log(class1.sort());
var class2 = new Class2(3);
console.log(class2.sort());
