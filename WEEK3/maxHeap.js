class Heap{
    constructor(){
        this.list = [];
    }

    insert(value){
        this.list.push(value)
        this.bubbleUp(this.list.length - 1);
    }

    bubbleUp(index){
        let parent = Math.floor( ( index - 1 ) / 2 );
        while(index>0 && this.list[parent]<this.list[index]){
            [this.list[parent],this.list[index]]=[this.list[index],this.list[parent]];
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }

    shiftDown(index){
        let left = 2*index+1;
        let right = 2*index+2;
        let largest = index;

        if(left<this.list.length && this.list[left]>this.list[largest]){
            largest = left;
        }
        if(right<this.length && this.list[right]>this.list[largest]){
            largest = right;
        }

        if(largest!==index){
            [this.list[index],this.list[largest]]=[this.list[largest],this.list[index]];
            this.shiftDown(largest);
        }
    }

    remove(){
        let max = this.list[0];
        this.list[0]=this.list.pop();
        this.shiftDown(0);
        return max;
    }
}

