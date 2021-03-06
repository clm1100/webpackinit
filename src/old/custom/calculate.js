function Calculate(cId) {
        this.container = document.getElementById(cId);
        this.btn = this.container.getElementsByTagName('input')[2];
        this.a = this.container.getElementsByTagName('input')[0];
        this.b = this.container.getElementsByTagName('input')[1];
        this.flag = this.container.getElementsByTagName('select')[0];
        this.result = this.container.getElementsByTagName('div')[0];
    }


    Calculate.prototype.init = function() {
        // 原型方法中的this与构造函数中的this指向相同，都指向构造函数的实例
        var that = this;
        this.btn.onclick = function() {
            // 事件方法中的this指向绑定事件的对象
            var a = that.a.value;
            var b = that.b.value;
            var flag = that.flag.value;
            var result = 0;
            switch (parseInt(flag)) {
                case 1:
                    result = that.sum(a, b);
                    break;
                case 2:
                    result = that.abstract(a, b);
                    break;
                case 3:
                    result = that.multiply(a, b);
                    break;
                case 4:
                    result = that.divide(a, b);
                    break;
                case 5:
                    result = that.mod(a, b);
                    break;
            }
            console.log(that.result);
            that.result.innerHTML = result;
        }
    };

    Calculate.prototype.sum = function(a,b){
        return parseInt(a) + parseInt(b);
    }
    Calculate.prototype.abstract = function(a,b){
        return parseInt(a) - parseInt(b);
    }
    Calculate.prototype.multiply = function(a,b){
        return parseInt(a) * parseInt(b);
    }
    Calculate.prototype.divide = function(a,b){
        return parseInt(a) / parseInt(b);
    }
    Calculate.prototype.mod = function(a,b){
        return parseInt(a) % parseInt(b);
    }

export default Calculate