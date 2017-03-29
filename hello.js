/**
 * Created by xubin on 2017/3/28.
 */
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
    console.log(123123);
};

module.exports = Hello;