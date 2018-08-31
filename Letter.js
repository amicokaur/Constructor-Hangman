//build a construtor
function Letter(char){
    this.char = char;
    this.placeholder = "$"
    this.guess = false
    this.check = function(userguess) {
        if (this.char == userguess){
           this.guess = true 
        }
        else {
            this.guess = false
        }
    };
    this.underlingChar = function(){
        if (this.guess == true){
            return this.char
        }
        else {
            return this.placeholder
        }
    }
}
exports = Letter

