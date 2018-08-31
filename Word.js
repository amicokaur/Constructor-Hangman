var Letter = require("./Letter.js")// it carries code from the other filefunction Letter(char){
    function Letter(word){
        this.wordArray = []            
        for (var i=0; i<word.length; i++){
            var letterOfWord = new Letter(word[i])//create letter object
           this.wordArray[i] = letterOfWord;//inserting each letter object into my array
        }

     this.returnString = function(){
         var result = ""
         for (var i=0; i<wordArray.length; i++){
             result = this.wordArray[i].underlingChar()+result 
             
        }

    }

    this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i].char == guessLet){
				this.wordArray[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};


     
}
module.exports = Word;
// I couldn't finish the rest of the homework