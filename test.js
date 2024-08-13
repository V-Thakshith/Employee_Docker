const assert = require('assert');
const LinkedList = require('./linkedList');
const Employee = require('./employee');

describe('LinkedList Tests', () => {
    it('should append employees correctly', () => {
        const list = new LinkedList();
        list.append(new Employee('John Doe', 'IT', 5000));
        list.append(new Employee('Jane Smith', 'HR', 6000));

        let employees = [];
        let current = list.head;
        while (current) {
            employees.push(current.employee);
            current = current.next;
        }

        assert.strictEqual(employees[0].employeeName, 'John Doe');
        assert.strictEqual(employees[0].department, 'IT');
        assert.strictEqual(employees[0].netPay, 5000);
        assert.strictEqual(employees[1].employeeName, 'Jane Smith');
        assert.strictEqual(employees[1].department, 'HR');
        assert.strictEqual(employees[1].netPay, 6000);
    });

    it('should delete an employee correctly', () => {
        const list = new LinkedList();
        list.append(new Employee('John Doe', 'IT', 5000));
        list.append(new Employee('Jane Smith', 'HR', 6000));
        list.append(new Employee('Bob Johnson', 'Finance', 7000));

        assert.strictEqual(list.delete('Jane Smith'), true);
        assert.strictEqual(list.search('Jane Smith'), null);

        assert.strictEqual(list.delete('John Doe'), true);
        assert.strictEqual(list.search('John Doe'), null);

        assert.strictEqual(list.delete('Bob Johnson'), true);
        assert.strictEqual(list.search('Bob Johnson'), null);

        assert.strictEqual(list.delete('Nonexistent Employee'), false);
    });

    it('should search for an employee correctly', () => {
        const list = new LinkedList();
        list.append(new Employee('John Doe', 'IT', 5000));
        list.append(new Employee('Jane Smith', 'HR', 6000));

        const john = list.search('John Doe');
        assert.strictEqual(john.employeeName, 'John Doe');
        assert.strictEqual(john.department, 'IT');
        assert.strictEqual(john.netPay, 5000);

        const jane = list.search('Jane Smith');
        assert.strictEqual(jane.employeeName, 'Jane Smith');
        assert.strictEqual(jane.department, 'HR');
        assert.strictEqual(jane.netPay, 6000);

        const nonexistent = list.search('Nonexistent Employee');
        assert.strictEqual(nonexistent, null);
    });

    it('should handle an empty list', () => {
        const list = new LinkedList();
        
        assert.strictEqual(list.delete('John Doe'), false);
        assert.strictEqual(list.search('John Doe'), null);
    });
});
