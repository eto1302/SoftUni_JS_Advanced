class sortedList{
    constructor(){
        this.size = 0;
        this.list  = [];
    }

    add(element){
        this.list.push(element);
        this.list.sort((a,b) => a - b);
        this.size++;
    }

    remove(index){
        if(index < this.list.length && index >= 0){
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index){
        if(index < this.list.length && index >= 0){
            return this.list[index];
        }
    }

}