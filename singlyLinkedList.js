class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert at the beginning of the list
    insertBeginning(data) {
        const node = new Node(data);
        const current = this.head;

        if (!current) {
            this.head = node;
        } else {
            node.next = current;
            this.head = node;
        }

        this.size++
    }

    // Insert at the end of a list
    insertEnd(data) {
        const node = new Node(data);
        let current = this.head;

        if (!current) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            
            current.next = node;
        }
        this.size++;
    }

    // Insert at index within the list
    insertAtIndex(data, index) {
        const node = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;

        if (index > this.size) {
            console.log('That index doesn\'t exist');
        } else if (index === 0 && !current) {
            this.head = node;
        }

        while (current) {
            if (index === count) {
                previous.next = node;
                node.next = current;
                current = node;
            }

            previous = current;
            current = current.next;

            count++;
        }
    }

    // Get at index within the list
    getAtIndex(index) {
        
    }

    // Clear the list

    // Print the data
    printData() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }

        if (!this.head) {
            console.log('There is nothing in your list');
        }
    }
};

const myLinkedList = new SinglyLinkedList();

myLinkedList.insertBeginning(1);
myLinkedList.insertEnd(2);
myLinkedList.insertEnd(3);
myLinkedList.insertEnd(4);
myLinkedList.insertAtIndex(9, 2);

myLinkedList.printData();
