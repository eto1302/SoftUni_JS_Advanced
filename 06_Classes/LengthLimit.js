class Stringer{
    constructor(string, initialLength){
        this.innerString = string;
        this.innerLength = initialLength;
        this.currentString = string;
    }
    increase(length){
        this.innerLength += length;
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0) this.innerLength = 0;
        this.currentString = this.innerString.substring(0, 
                    (this.innerLength > this.innerString.length) ? this.innerString.length : this.innerLength);
    }
    toString(){
        if(this.currentString.length >= this.innerString.length) return this.currentString;
        else return this.currentString + '...';
    }
}
