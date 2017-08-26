/**
 * The following code contans TDD (test driven development) approach.
 * the follwing functions are the part of a TDD-Framework.
 * - describe(...)
 * - it(..)
 *
 * Please concantrate on the body of it(...) functions and fix them!
 */
//.........................ok1
describe('Array', function () {

    describe('#arithmetic', function () {
        it('should result the right number', function () {
            var c = [4, 3, 9, 12];
            c[0].should.equal(4);
        });
        //..........................ok2
        it('should be equal to the second item', function () {
            var c = new Array(23, 46); // do not touch this
            (c[0] + 23).should.equal(c[1]);
        });
        //..........................ok3
        it('should result the fourth element in the array', function () {
            var c = [3, 3, 3, 9]; // do not touch this
            c[1] = 6;
            (c[0] + c[1]).should.equal(c[3]);
        });
        //..........................ok4
        it('should give the result by using the combination of two arrays', function () {
            var c = new Array(2, 3); // do not touch this
            var a = new Array(4, 6); // do not touch this
            a.splice(0, 2, "6", "4");
            (a[0] / 2).should.be.equal(c[1]);
        });
        //..........................ok5
        it('should give the result by using the combination of two arrays', function () {
            var c = new Array("it", "switzerland", "training"); // do not touch this
            var a = ["KZO", "volketswil", "club"]; // do not touch this
            (c[0] + a[2]).should.equal("itclub");
        });
        //..........................ok6
        it('should find the right array slot', function () {
            var c = new Array(5); // do not touch this
            c.unshift(5);
            c[0].should.be.equal(5);
        });
        //..........................ok7
        it('should find and remove the item 2', function () {
            var c = [10, 22, 2, 34, 15, 3]; // do not touch this!
            c.splice(2, 1);
            c.should.be.deepEqual([10, 22, 34, 15, 3]);
        });

    });
    //..........................ok8
    describe('#string-operation', function () {
        it('should create a string with given parameter as seperator', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c.join("+").should.equal("i+t+c+l+u+b");
        });
        //..........................ok9
        it('should create a string with manipulated content', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c = c.join("").replace("c", "C");
            c.should.equal("itClub");
        });
    });
    //..........................ok10
    describe('#join()', function () {
        it('should create a string with given parameter as seprator', function () {
            var c = ['i', 't', 'c', 'l', 'u', 'b']; // do not touch this
            c = c.join("+-").concat("+-");

            c.should.equal("i+-t+-c+-l+-u+-b+-");
        });
    });
    //..........................ok11
    describe('#length', function () {
        it('should give the number of elements in the array', function () {
            var c = ["it", "club", "schweiz", "KZO"]; // do not touch this
            c.push('mesut');
            c.length.should.equal(5);
        });
    });
    //..........................ok12
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            [1, 2].indexOf(3).should.be.equal(-1);
        });
    });
    //..........................ok13
    describe('#sort()', function () {
        it('should sort the array in ascending order', function () {
            var c = [9, 2, 6, 0, -1]; // do not touch this
            c = c.sort();
            c.should.be.deepEqual([-1, 0, 2, 6, 9]);
        });
        //..........................ok14
        it('should sort the array in descending order', function () {
            var c = [-1, 1, 3, 2]; // do not touch this
            c = c.sort(function (a, b) {
                return b - a
            });
            c.should.be.deepEqual([3, 2, 1, -1]);
        });
    });
    //..........................ok15
    describe('#concat()', function () {
        it('should merge the given arrays', function () {
            var c = [4, 5]; // do not touch this
            var a = [8, 9]; // do not touch this
            a.splice(0, 2, 7, 8);
            var processed = c.concat(a);
            processed.should.be.deepEqual([4, 5, 7, 8]);
        });
        //..........................ok16
        it('should merge the given arrays', function () {
            var c = ["A", "B"]; // do not touch this!
            var a = ["C", "D", "E"]; // do not touch this!
            c = c.concat(a);
            var processed = c;
            processed.should.be.deepEqual(["A", "B", "C", "D", "E"]);
        });
        //..........................ok17
    });

    describe('#push()', function () {
        it('should insert item at the end of the array', function () {
            var c = [10]; // do not touch this!
            c.push(11, 12);
            var processed = c;
            processed.should.be.deepEqual([10, 11, 12]);
        });
        //..........................ok18
    });

    describe('#shift()', function () {
        it('should remove item at the front of the array', function () {
            var c = [10, 12, 13]; // do not touch this!
            c.shift(10);
            var processed = c;
            processed.should.be.deepEqual([12, 13]);
        });
        //..........................ok19
    });

    describe('#unshift()', function () {
        it('should insert item in the begin of the array', function () {
            var c = [12, 13]; // do not touch this!
            c.unshift(10);
            var processed = c;
            processed.should.be.deepEqual([10, 12, 13]);
        });
        //..........................ok20
        it('should insert item as the first item in the array', function () {
            var c = [12, 13]; // do not touch this!
            c.splice(0, 2, 1, 10, 13, 12, 13);
            var processed = c; // manuîpulate only this line
            processed.should.be.deepEqual([1, 10, 13, 12, 13]);
        });
        //..........................ok21
    });

    describe('#reverse()', function () {
        it('should change the order of items', function () {
            var c = [2, 101, 55]; // do not touch this!
            c.reverse();
            var processed = c;
            processed.should.be.deepEqual([55, 101, 2]);
        });
        //..........................ok22
        it('should reverse a string', function () {
            var c = "bulcti"; // do not touch this!
            c = c.split("").reverse().join("");
            var processed = c;
            processed.should.be.deepEqual("itclub");
        });
        //..........................ok23
    });


    describe('#array methods', function () {
        it('can be used together', function () {
            var c = new Array(); // do not touch this
            c.push(1);
            c.pop();
            c.push(23);
            c.push(37);
            c.shift();
            c.unshift(5);
            c.shift();
            c.unshift(18);

            (c[1] % c[0]).should.be.equal(1);
        });
        //..........................ok24
        it('should give number of people rest in the queue', function () {
            var c = []; // do not touch this
            c.push('ferdi');
            c.push('cihad');
            c.push('cemil');
            c.pop();
            c.reverse();
            c.shift();
            c.push('mehmet');
            c.reverse();
            c.should.be.deepEqual(['mehmet', 'ferdi']);
        });
        //..........................ok25
    });

    describe('#looping', function () {
        it('should increment the counter one by one', function () {
            var counter = 0; // do not touch this
            for (var index = 0; index < 8; index = index + 1) {
                counter = counter + 1;
            }

            counter.should.be.equal(8);
        });
        //..........................ok26
        it('should increment the counter by array items', function () {
            var c = new Array(1, 2, 3, 4, 5);
            var counter = 0; // do not touch this!

            for (var index = 0; index < 5; index = index + 1) {
                counter = counter + c[index];
            }
            counter.should.be.equal(15);
        });
        //..........................ok27
        it('should increment the counter randomly', function () {
            var c = []; // do not touch this!
            var max = 6;

            for (var index = 0; index < max; index = index + 1) {
                c[index] = index * Math.random();
            }
            c.length.should.be.equal(6);
            c[0].should.be.equal(0);
        });
        //..........................ok28
        it('should change the array items indiviually', function () {
            var c = ["a", 'n', ' ', 'a', 't', "c", "l", 'u', 'b']; // do not touch this!

            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index] == 'a') {
                    c[index] = 'i';
                }

            }
            c = c.join("");

            c.should.be.equal('in itclub');
        });
        //..........................ok29
        it('should select only the even numbers', function () {
            var c = new Array(1, 2, 3, 4, 5, 6); // do not touch this!
            var a = [];

            for (var index = 1; index < c.length; index = index + 2) {
                a.push(c[index]);
            }

            a.should.be.deepEqual([2, 4, 6]);
        });
        //..........................ok30
        it('should help to find the maximum number', function () {
            var c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var max = 0; // get maximum number
            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index] > max) {
                    max = c[index];
                }
            }
            max.should.be.equal(82);
        });
        //..........................ok31
        it('should help to find the minimum number', function () {
            var c = [10, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var min = 100; // get minimum number
            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index] < min) {
                    min = c[index];
                }
            }
            min.should.be.equal(6);
        });
        //..........................ok32
        it('should help to find the median', function () {
            var c = [13, 21, 82, 23, 64, 15, 6]; // do not touch this!
            var median = 0; // get median f.i [6,1,5] => 6+1+5/(number of element = 3) = 4,
            // you can use reduce function but you dont have to.
            for (var index = 0; index < c.length; index = index + 1) {
                median += c[index];

            }
            median /= c.length;
            median.should.be.equal(32);
        });
        //..........................ok33
        it('should help to find the numbers factor of three ', function () {
            var c = [9, 21, 80, 23, 60, 11, 6]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index]%3==0) {
                    theNumbers.push(c[index]);
                }               
            }
            theNumbers.sort(function(a,b){return a>b}).should.be.deepEqual([6, 9, 21, 60]);
        });
        //..........................ok34
        it('should help to find the numbers which can be divided by 2 or 3', function () {
            var c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index]%3==0 || c[index]%2==0 ) {
                    theNumbers.push(c[index]);
                }                
            }
            theNumbers.sort(function(a,b){return a>b}).should.be.deepEqual([4, 6, 9, 21, 60, 80]);
        });
        //..........................ok35
        it('should help to find the numbers which can be divided by both 2 and 3', function () {
            var c = [9, 21, 80, 23, 60, 11, 6, 4]; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index]%3==0 && c[index]%2==0 ) {
                    theNumbers.push(c[index]);
                }   
            }
            theNumbers.sort(function(a,b){return a>b}).should.be.deepEqual([6, 60]);
        });
        //..........................ok36
        it('should help to find the strings whic containing the word "el"', function () {
            var c = ['elveda', 'selami', 'hadi', 'itclub', 'kel', 'heyelan', 'oooo!', 'saral', 'peri', 'deli']; // do not touch this!
            var theNumbers = [];

            for (var index = 0; index < c.length; index = index + 1) {
                // if (c[index].includes("el")){
                  if (c[index].indexOf('el')>-1){
                    theNumbers.push(c[index]);
                }
            }
            theNumbers.should.be.deepEqual(['elveda', 'selami', 'kel', 'heyelan', 'deli']);
        });
        //..........................ok37
        it('should help to find repeating numbers', function () {
            var c = [10, 21, 10, 23, 64, 21, 6]; // do not touch this!
            c.sort(function(a,b) {return a>b });
            var processed = [];
            for (var index = 0; index < c.length; index = index + 1) {
                if (c[index+1] == c[index]) {
                processed.push(c[index]);
                }
            }
            processed.should.be.deepEqual([10, 21]);
        });
        //..........................ok38
        it('should find the numbers less then 100', function () {
            var c = [10, 83, 100, 1000]; // do not touch this!
            var processed = [];
            var index = -1;
            while  (index < c.length) {
                    index = index + 1;
                if (c[index] <= 100){
                    processed.push(c[index]);
                }
            }
            processed.should.be.deepEqual([10, 83, 100]);
        });
        //..........................ok39
    });


    describe('#conditionals', function () {
        it('should choose only one value', function () {
            var c = true; // do not touch this
            var processed = 1;
            // if (c==false)
            if (!c) {
                processed = 2;
            }

            processed.should.be.equal(1);
        });
        //..........................ok40
        it('should evaluate the condition to a boolean', function () {
            var c = Number.isNaN('NaN'); // do not touch this
            var processed = 0;
            if (!c) {
                processed = 0;
            } else {
                processed = 1;
            }

            processed.should.be.equal(0);
        });
        //..........................ok41
        it('should evaluate the condition with else-if to a boolean', function () {
            var c = 'mesut'; // do not touch this
            var processed = null;

            if (c === 'ferdi') {
                processed = 'progress';
            } else if (c === 'mesut') {
                processed = 'take it easy';
            } else {
                processed = 'go forward';
            }

            processed.should.be.equal('take it easy');
        });
        //..........................ok42
        it('should evaluate the ternary operator to a value', function () {
            var c = 'iskender'; // do not touch this
            var processed = c === 'iskender' ? 'ENFESS' : "AC KALDIK YINE" ;

            processed.should.be.equal('ENFESS');
        });
        //..........................ok43
        it('should evaluate the nested ternary operator to a value', function () {
            var c = 'mezut'; // do not touch this
            var processed = c === 'mesut' ?
                'adana' : c === 'ferdi' ?
                'giresun' : c === 'mustafa' ?
                'antalya' : 'adana'

            processed.should.be.equal('adana');
        });
        //..........................ok
        it('should evaluate switch case ', function () {
            var city = 'zurich';
            var country = null;

            switch (city) {
                case 'adana':
                case 'istanbul':
                    country = 'NK';
                    break;
                case 'newyork':
                    country = 'US';
                    break;
                case 'zurich':
                case 'st.gallen':
                case 'luzern':
                    country = 'CH'
            }

            country.should.be.equal('CH');
        });
    });
});
