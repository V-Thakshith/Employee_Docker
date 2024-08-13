const Employee = require('./employee');

// Node class for linked list
class Node {
    constructor(employee) {
        this.employee = employee;
        this.next = null;
    }
}

// LinkedList class definition
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add an item to the end of the list
    append(employee) {
        const newNode = new Node(employee);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete an item by name
    delete(employeeName) {
        if (!this.head) return false;

        if (this.head.employee.employeeName === employeeName) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.employee.employeeName !== employeeName) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            return true;
        }

        return false;
    }

    // Search for an item by name
    search(employeeName) {
        let current = this.head;
        while (current) {
            if (current.employee.employeeName === employeeName) {
                return current.employee;
            }
            current = current.next;
        }
        return null;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(`Employee Name: ${current.employee.employeeName}, Pay: ${current.employee.netPay}`);
            current = current.next;
        }
    }
}

module.exports = LinkedList;
