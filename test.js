describe("Tests", () => {

    describe("function sumOfSalaries", () => {
        it("sum = 0", () => {
            assert.equal(sumOfSalaries({}), 0);
        });

        it("sum != 0", () => {
            assert.equal(sumOfSalaries({
                a: 50,
                b: 20,
                c: 30,
            }), 100);
        });
    });

    describe("function pow", () => {
        it("2 в степени 3 будет 8", () => {
            assert.equal(pow(2, 3), 8);
        });

        it("3 в степени 4 будет 81", () => {
            assert.equal(pow(3, 4), 81);
        });
    });

    describe("function isEmpty()", () => {
        it("Object is empty", () => {
            assert.isTrue(isEmpty({}))
        })

        it("Object is NOT empty", () => {
            assert.isFalse(isEmpty({
                something: true,
            }));
        });
    });

    describe("function multiplyNumeric()", () => {
        it("multiply numbers by 2", () => {
            let menu = {
                width: 200,
                height: 400,
                title: "Menu",
            }
            multiplyNumeric(menu);
            assert.equal(menu.width, 400);
            assert.equal(menu.height, 800);
            assert.equal(menu.title, "Menu");
        });

        it("object is empty", () => {
            assert.isUndefined(multiplyNumeric({}))
        });
    });

    describe("function-constructor Calculator", () => {
        let counter = 0;
        let calculator = new Calculator();

        it("function read()", () => {
            for (let key in calculator) {
                if (key === "a" || key === "b") {
                    counter++;
                }
            }
            assert.equal(counter, 2);
        });

        it("function sum()", () => {
            assert.equal(calculator.sum(), calculator.a + calculator.b);
        });

        it("function mul()", () => {
            assert.equal(calculator.mul(), calculator.a * calculator.b);
        });
    });

    describe("object ladder", () => {
        beforeEach(() => {
            ladder.step = 0;
        });

        it("function up() return object ladder", () => {
            assert.equal(ladder.up(), ladder);
        });

        it("function down() return object ladder", () => {
            assert.equal(ladder.down(), ladder);
        });

        it("function up() must increase step by 1", () => {
            assert.equal(ladder.up().step, 1);
        });

        it("function down() must decrease step by 1", () => {
            assert.equal(ladder.down().step, -1);
        });

        it("ladder.up().down().up().up().down() return 1", () => {
            assert.equal(ladder.up().down().up().up().down().step, 1);
        });

        // it("fuction showStep must call alert", () => {
        //     ladder.showStep();
        //     assert(alert.called);
        // });
    });

    describe("function upFirst()", () => {
        it("str < after transformation", () => {
            let str = "banan";
            str2 = upFirst(str);
            assert.isTrue(str2 < str);
        });
        it("if str = ' '", () => {
            let str = "";
            assert.isString(upFirst(str));
        });
    });

    describe("function checkSpam()", () => {
        it("str has spam elements, return true", () => {
            let str = "dwadwaXXXXdw"
            assert.isTrue(checkSpam(str));
        });

        it("str does not have spam elements, return false", () => {
            let str = "dwadsadwfw";
            assert.isFalse(checkSpam(str));
        });
    });

    describe("function truncate()", () => {
        let str = "When i was young my mum used to";
        let len = 10;

        it("str.lenght == maxLenght if str.lenght > maxLenght", () => {
            str = truncate(str, len);
            assert.equal(len, str.length);
        });

        it("str.lenght < maxLenght", () => {
            len = 30;
            str = truncate(str, len);
            assert.isTrue(str.length < len);
        });
    });

    describe("camelize", function () {

        it("leaves an empty line as is", function () {
            assert.equal(camelize(""), "");
        });

        it("turns background-color into backgroundColor", function () {
            assert.equal(camelize("background-color"), "backgroundColor");
        });

        it("turns list-style-image into listStyleImage", function () {
            assert.equal(camelize("list-style-image"), "listStyleImage");
        });

        it("turns -webkit-transition into WebkitTransition", function () {
            assert.equal(camelize("-webkit-transition"), "WebkitTransition");
        });

    });

    describe("myCamelize", function () {

        it("leaves an empty line as is", function () {
            assert.equal(myCamelize(""), "");
        });

        it("turns background-color into backgroundColor", function () {
            assert.equal(myCamelize("background-color"), "backgroundColor");
        });

        it("turns list-style-image into listStyleImage", function () {
            assert.equal(myCamelize("list-style-image"), "listStyleImage");
        });

        it("turns -webkit-transition into WebkitTransition", function () {
            assert.equal(myCamelize("-webkit-transition"), "WebkitTransition");
        });

    });

    describe("function filterRange(arr, a, b)", () => {
        it("array is empty", () => {
            assert.equal(filterRange([], 1, 2), "");
        });

        it("array has no values between a and b", () => {
            assert.equal(filterRange([1, 2, 3], 4, 7), "")
        });

        it("array includes values between a and b", () => {
            assert.deepEqual(filterRange([1, 5, 3], 2, 4), [3])
        });
    });

    describe("function filterRangeInPlace(arr, a, b)", () => {
        it("there are no values between a and b", () => {
            assert.equal(filterRangeInPlace([1, 2, 3], 4, 7), undefined)
        });

        it("there are values between a and b", () => {
            let arr = [1, 2, 3];
            filterRangeInPlace(arr, 2, 3)
            assert.deepEqual(arr, [2, 3])
        });
    });

    describe("function aclean()", () => {
        function intersection(arr1, arr2) {
            return arr1.filter(item => arr2.includes(item));
        }

        it("returns exactly 1 word from each anagram set", () => {
            let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
            let result = aclean(arr);

            assert.equal(result.length, 3);
            assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
            assert.equal(intersection(result, ["teachers", "cheaters", "hectares"]).length, 1);
            assert.equal(intersection(result, ["ear", "era"]).length, 1);
        });

        it("is case-insensitive", function () {
            let arr = ["era", "EAR"];
            assert.equal(aclean(arr).length, 1);
        });
    });

    describe("function unique()", function () {
        it("removes non-unique elements", function () {
            let strings = ["Igor", "WSB", "Igor", "WSB",
                "WSB", "WSB", "Igor", "Igor", ":-O"
            ];

            assert.deepEqual(unique(strings), ["Igor", "WSB", ":-O"]);
        });

        it("does not change the source array", function () {
            let strings = ["WSB", "WSB", "Igor", "Igor"];
            unique(strings);
            assert.deepEqual(strings, ["WSB", "WSB", "Igor", "Igor"]);
        });
    });

    describe("function getLastDayOfMonth()", function () {
        it("last date of 01.01.2012 - 31", function () {
            assert.equal(getLastDayOfMonth(2012, 0), 31);
        });

        it("last date of 01.02.2012 - 29 (leap year)", function () {
            assert.equal(getLastDayOfMonth(2012, 1), 29);
        });

        it("last date of 01.02.2013 - 28", function () {
            assert.equal(getLastDayOfMonth(2013, 1), 28);
        });
    });

    describe("function inArray()", function () {
        let arr = [1, 2, 3, 4, 5, 6, 7];

        it("returns the filter for values in array", function () {
            let filter = inArray(arr);
            assert.isTrue(filter(5));
            assert.isFalse(filter(0));
        });
    });

    describe("function inBetween()", function () {
        it("returns the filter for values between", function () {
            let filter = inBetween(3, 6);
            assert.isTrue(filter(5));
            assert.isFalse(filter(0));
        });
    });
});