new Vue({
    el: '#app',
    data: {
      display: '',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false
    },
    methods: {
      append: function (num) {
        if (this.waitingForSecondOperand) {
          this.display = num;
          this.waitingForSecondOperand = false;
        } else {
          this.display += num;
        }
      },
      operation: function (op) {
        if (this.firstOperand === null) {
          this.firstOperand = parseFloat(this.display);
        } else {
          this.calculate();
          this.firstOperand = parseFloat(this.display);
        }
        this.operator = op;
        this.waitingForSecondOperand = true;
      },
      calculate: function () {
        const secondOperand = parseFloat(this.display);
        let result;
        switch (this.operator) {
          case '+':
            result = this.firstOperand + secondOperand;
            break;
          case '-':
            result = this.firstOperand - secondOperand;
            break;
          case '*':
            result = this.firstOperand * secondOperand;
            break;
          case '/':
            if (secondOperand === 0) {
              result = 'Error: Division by zero';
            } else {
              result = this.firstOperand / secondOperand;
            }
            break;
          default:
            return;
        }
        this.display = result.toString();
        this.firstOperand = result;
        this.operator = null;
        this.waitingForSecondOperand = false;
      },
      clear: function () {
        this.display = '';
        this.firstOperand = null;
        this.operator = null;
        this.waitingForSecondOperand = false;
      }
    }
  });