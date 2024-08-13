const LinkedList = require('./linkedList');
const Employee = require('./employee');

const list = new LinkedList();
list.append(new Employee('Shivam','IT' ,10000));
list.append(new Employee('Rahul', 'HR',50000));
list.append(new Employee('Neha', 'CS',12000));

list.printList();
