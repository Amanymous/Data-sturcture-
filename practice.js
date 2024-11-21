class Node{
	constructor(value){
		this.value = value,
		this.next = null
	}
}

class singlyLinkedList{
	constructor(){
		this.head = null 
		this.tail = null
		this.length = 0
	}
	push(val){
		let newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = this.head
		}
		else{
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
	}

	pop(){
        if(!this.head) return undefined
		let currentVal = this.head
		let tailVal = currentVal
		while(currentVal.next){
			tailVal = currentVal
			currentVal = currentVal.next
		}
		this.tail = tailVal
		this.tail.next = null
		this.length--
		if(this.length === 0){
			this.head,this.tail =null
		}
		// return currentVal

    }

	shift(){
		if(!this.head) return  undefined
		let currentHead = this.head
		this.head = currentHead.next
		this.length--
		if(this.length === 0){
			this.tail = null
		}
		return currentHead
	}
	unshift(val){
		let newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = this.head
		}
		newNode.next = this.head
		this.head = newNode
		this.length++

	}
}
let n = new singlyLinkedList()
n.push("aman")
n.push("mirza")
n.push("mughal")
n.push(1)
n.pop()
n.shift()
n.unshift("aa")
console.log(n);