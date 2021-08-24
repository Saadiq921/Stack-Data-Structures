
/*
*   Saadiq Abubakar  
* 
*   Data Structures: Stack
*
*   A JavaScript implementation of the stack data structure
*
*   Tuesday August 24, 2021
*/


class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    push(data){
        const newNode = new Node(data);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else {
            const currentTopNode = this.top;
            this.top = newNode;
            newNode.next = currentTopNode;
        } 
        this.length++;
    }
    peek(){
        return this.top;
    }
    pop(){
        let currentTopNode = this.top;
        this.top = currentTopNode.next;
        if(!this.top){
            this.bottom = null;
        }
        this.length--;
        return currentTopNode;
    }
}

