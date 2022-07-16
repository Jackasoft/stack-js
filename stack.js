class Stack{
    constructor(){
        this.storage = [];
        this.count = 0;
    }
    push(element){
        this.storage[this.count] = element;
        console.log(`${element} added to ${this.count + 1}`);
        this.count += 1;
        return this.count - 1;
    }
    pop(){
        if(this.count == 0) {
            return undefined;
            }
        let deleteItem = this.storage[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }
    peek(){
        console.log(`top element is:${this.storage[this.count - 1]}`);
        return this.storage[this.count - 1];
    }
    isEmpty(){
        console.log(this.count == 0 ? 'stack is empty' : '');
        return this.count == 0;
    }

    size(){
        console.log(`${this.count} elements in stack`);
        return this.count;
    }
    print(){
        let str = '';
        for(let i=0; i<this.count; i++){
            str += this.storage[i] + ' . ';
        }
        return console.log("stack: . "+ str);
    }
    clear(){
        this.storage = [];
        this.count = 0;
        console.log('stack cleared..');
    }
}


const stack = new Stack();

const input = document.querySelector('#input');
const add =document.querySelector('#addbtn');
const remove =document.querySelector('#removebtn');

add.addEventListener('click',addStack);
remove.addEventListener('click',removeStack);


function addStack(e){
    e.preventDefault();

    if (!input.value == '') {
    stack.push(input.value); 
    stack.print();
    stack.size();
    input.value = '';
    }else{
      console.log('cannot be empty');
    }
    
}

function removeStack(e){
    e.preventDefault();
 
    if (!stack.isEmpty()) {
        
        stack.pop();
        stack.print();
        stack.size();
    }else;
}
