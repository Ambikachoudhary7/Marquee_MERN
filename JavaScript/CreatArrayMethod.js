class MyArray {
    constructor() {
        this.arr = [];
    }
   
    push(value) {
        this.arr.push(value);
    }

    getElement(value) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === value) {
                return this.arr[i];
            }
        }
        return "Not present in Array!";
    }

    print() {
        console.log(arr);
    }
}


const arr = new MyArray();

arr.push(34);
arr.push(68);
arr.push(90);

// arr.print();
console.log(arr);

console.log(arr.getElement(68));   
console.log(arr.getElement(100));  