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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// BUDGET CONTROLLER\nvar budgetController = (function() {\n    \n    var Expense = function(id, description, value) {\n        this.id = id;\n        this.description = description;\n        this.value = value;\n        this.percentage = -1;\n    };\n    \n    \n    Expense.prototype.calcPercentage = function(totalIncome) {\n        if (totalIncome > 0) {\n            this.percentage = Math.round((this.value / totalIncome) * 100);\n        } else {\n            this.percentage = -1;\n        }\n    };\n    \n    \n    Expense.prototype.getPercentage = function() {\n        return this.percentage;\n    };\n    \n    \n    var Income = function(id, description, value) {\n        this.id = id;\n        this.description = description;\n        this.value = value;\n    };\n    \n    \n    var calculateTotal = function(type) {\n        var sum = 0;\n        data.allItems[type].forEach(function(cur) {\n            sum += cur.value;\n        });\n        data.totals[type] = sum;\n    };\n    \n    \n    var data = {\n        allItems: {\n            exp: [],\n            inc: []\n        },\n        totals: {\n            exp: 0,\n            inc: 0\n        },\n        budget: 0,\n        percentage: -1\n    };\n    \n    \n    return {\n        addItem: function(type, des, val) {\n            var newItem, ID;\n            \n            //[1 2 3 4 5], next ID = 6\n            //[1 2 4 6 8], next ID = 9\n            // ID = last ID + 1\n            \n            // Create new ID\n            if (data.allItems[type].length > 0) {\n                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;\n            } else {\n                ID = 0;\n            }\n            \n            // Create new item based on 'inc' or 'exp' type\n            if (type === 'exp') {\n                newItem = new Expense(ID, des, val);\n            } else if (type === 'inc') {\n                newItem = new Income(ID, des, val);\n            }\n            \n            // Push it into our data structure\n            data.allItems[type].push(newItem);\n            \n            // Return the new element\n            return newItem;\n        },\n        \n        \n        deleteItem: function(type, id) {\n            var ids, index;\n            \n            // id = 6\n            //data.allItems[type][id];\n            // ids = [1 2 4  8]\n            //index = 3\n            \n            ids = data.allItems[type].map(function(current) {\n                return current.id;\n            });\n\n            index = ids.indexOf(id);\n\n            if (index !== -1) {\n                data.allItems[type].splice(index, 1);\n            }\n            \n        },\n        \n        \n        calculateBudget: function() {\n            \n            // calculate total income and expenses\n            calculateTotal('exp');\n            calculateTotal('inc');\n            \n            // Calculate the budget: income - expenses\n            data.budget = data.totals.inc - data.totals.exp;\n            \n            // calculate the percentage of income that we spent\n            if (data.totals.inc > 0) {\n                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);\n            } else {\n                data.percentage = -1;\n            }            \n            \n            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100\n        },\n        \n        calculatePercentages: function() {\n            \n            /*\n            a=20\n            b=10\n            c=40\n            income = 100\n            a=20/100=20%\n            b=10/100=10%\n            c=40/100=40%\n            */\n            \n            data.allItems.exp.forEach(function(cur) {\n               cur.calcPercentage(data.totals.inc);\n            });\n        },\n        \n        \n        getPercentages: function() {\n            var allPerc = data.allItems.exp.map(function(cur) {\n                return cur.getPercentage();\n            });\n            return allPerc;\n        },\n        \n        \n        getBudget: function() {\n            return {\n                budget: data.budget,\n                totalInc: data.totals.inc,\n                totalExp: data.totals.exp,\n                percentage: data.percentage\n            };\n        },\n        \n        testing: function() {\n            console.log(data);\n        }\n    };\n    \n})();\n\n\n\n\n// UI CONTROLLER\nvar UIController = (function() {\n    \n    var DOMstrings = {\n        inputType: '.add__type',\n        inputDescription: '.add__description',\n        inputValue: '.add__value',\n        inputBtn: '.add__btn',\n        incomeContainer: '.income__list',\n        expensesContainer: '.expenses__list',\n        budgetLabel: '.budget__value',\n        incomeLabel: '.budget__income--value',\n        expensesLabel: '.budget__expenses--value',\n        percentageLabel: '.budget__expenses--percentage',\n        container: '.container',\n        expensesPercLabel: '.item__percentage',\n        dateLabel: '.budget__title--month'\n    };\n    \n    \n    var formatNumber = function(num, type) {\n        var numSplit, int, dec, type;\n        /*\n            + or - before number\n            exactly 2 decimal points\n            comma separating the thousands\n\n            2310.4567 -> + 2,310.46\n            2000 -> + 2,000.00\n            */\n\n        num = Math.abs(num);\n        num = num.toFixed(2);\n\n        numSplit = num.split('.');\n\n        int = numSplit[0];\n        if (int.length > 3) {\n            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510\n        }\n\n        dec = numSplit[1];\n\n        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;\n\n    };\n    \n    \n    var nodeListForEach = function(list, callback) {\n        for (var i = 0; i < list.length; i++) {\n            callback(list[i], i);\n        }\n    };\n    \n    \n    return {\n        getInput: function() {\n            return {\n                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp\n                description: document.querySelector(DOMstrings.inputDescription).value,\n                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)\n            };\n        },\n        \n        \n        addListItem: function(obj, type) {\n            var html, newHtml, element;\n            // Create HTML string with placeholder text\n            \n            if (type === 'inc') {\n                element = DOMstrings.incomeContainer;\n                \n                html = '<div class=\"item clearfix\" id=\"inc-%id%\"> <div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__delete\"><button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button></div></div></div>';\n            } else if (type === 'exp') {\n                element = DOMstrings.expensesContainer;\n                \n                html = '<div class=\"item clearfix\" id=\"exp-%id%\"><div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__percentage\">21%</div><div class=\"item__delete\"><button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button></div></div></div>';\n            }\n            \n            // Replace the placeholder text with some actual data\n            newHtml = html.replace('%id%', obj.id);\n            newHtml = newHtml.replace('%description%', obj.description);\n            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));\n            \n            // Insert the HTML into the DOM\n            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);\n        },\n        \n        \n        deleteListItem: function(selectorID) {\n            \n            var el = document.getElementById(selectorID);\n            el.parentNode.removeChild(el);\n            \n        },\n        \n        \n        clearFields: function() {\n            var fields, fieldsArr;\n            \n            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);\n            \n            fieldsArr = Array.prototype.slice.call(fields);\n            \n            fieldsArr.forEach(function(current, index, array) {\n                current.value = \"\";\n            });\n            \n            fieldsArr[0].focus();\n        },\n        \n        \n        displayBudget: function(obj) {\n            var type;\n            obj.budget > 0 ? type = 'inc' : type = 'exp';\n            \n            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);\n            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');\n            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');\n            \n            if (obj.percentage > 0) {\n                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';\n            } else {\n                document.querySelector(DOMstrings.percentageLabel).textContent = '---';\n            }\n            \n        },\n        \n        \n        displayPercentages: function(percentages) {\n            \n            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);\n            \n            nodeListForEach(fields, function(current, index) {\n                \n                if (percentages[index] > 0) {\n                    current.textContent = percentages[index] + '%';\n                } else {\n                    current.textContent = '---';\n                }\n            });\n            \n        },\n        \n        \n        displayMonth: function() {\n            var now, months, month, year;\n            \n            now = new Date();\n            //var christmas = new Date(2016, 11, 25);\n            \n            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n            month = now.getMonth();\n            \n            year = now.getFullYear();\n            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;\n        },\n        \n        \n        changedType: function() {\n            \n            var fields = document.querySelectorAll(\n                DOMstrings.inputType + ',' +\n                DOMstrings.inputDescription + ',' +\n                DOMstrings.inputValue);\n            \n            nodeListForEach(fields, function(cur) {\n               cur.classList.toggle('red-focus'); \n            });\n            \n            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');\n            \n        },\n        \n        \n        getDOMstrings: function() {\n            return DOMstrings;\n        }\n    };\n    \n})();\n\n\n\n\n// GLOBAL APP CONTROLLER\nvar controller = (function(budgetCtrl, UICtrl) {\n    \n    var setupEventListeners = function() {\n        var DOM = UICtrl.getDOMstrings();\n        \n        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);\n\n        document.addEventListener('keypress', function(event) {\n            if (event.keyCode === 13 || event.which === 13) {\n                ctrlAddItem();\n            }\n        });\n        \n        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);\n        \n        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);        \n    };\n    \n    \n    var updateBudget = function() {\n        \n        // 1. Calculate the budget\n        budgetCtrl.calculateBudget();\n        \n        // 2. Return the budget\n        var budget = budgetCtrl.getBudget();\n        \n        // 3. Display the budget on the UI\n        UICtrl.displayBudget(budget);\n    };\n    \n    \n    var updatePercentages = function() {\n        \n        // 1. Calculate percentages\n        budgetCtrl.calculatePercentages();\n        \n        // 2. Read percentages from the budget controller\n        var percentages = budgetCtrl.getPercentages();\n        \n        // 3. Update the UI with the new percentages\n        UICtrl.displayPercentages(percentages);\n    };\n    \n    \n    var ctrlAddItem = function() {\n        var input, newItem;\n        \n        // 1. Get the field input data\n        input = UICtrl.getInput();        \n        \n        if (input.description !== \"\" && !isNaN(input.value) && input.value > 0) {\n            // 2. Add the item to the budget controller\n            newItem = budgetCtrl.addItem(input.type, input.description, input.value);\n\n            // 3. Add the item to the UI\n            UICtrl.addListItem(newItem, input.type);\n\n            // 4. Clear the fields\n            UICtrl.clearFields();\n\n            // 5. Calculate and update budget\n            updateBudget();\n            \n            // 6. Calculate and update percentages\n            updatePercentages();\n        }\n    };\n    \n    \n    var ctrlDeleteItem = function(event) {\n        var itemID, splitID, type, ID;\n        \n        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;\n        \n        if (itemID) {\n            \n            //inc-1\n            splitID = itemID.split('-');\n            type = splitID[0];\n            ID = parseInt(splitID[1]);\n            \n            // 1. delete the item from the data structure\n            budgetCtrl.deleteItem(type, ID);\n            \n            // 2. Delete the item from the UI\n            UICtrl.deleteListItem(itemID);\n            \n            // 3. Update and show the new budget\n            updateBudget();\n            \n            // 4. Calculate and update percentages\n            updatePercentages();\n        }\n    };\n    \n    \n    return {\n        init: function() {\n            console.log('Application has started.');\n            UICtrl.displayMonth();\n            UICtrl.displayBudget({\n                budget: 0,\n                totalInc: 0,\n                totalExp: 0,\n                percentage: -1\n            });\n            setupEventListeners();\n        }\n    };\n    \n})(budgetController, UIController);\n\n\ncontroller.init();\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });