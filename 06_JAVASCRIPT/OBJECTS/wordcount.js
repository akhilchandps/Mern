//print the word count from the given text

text="one two one two one"

//o/p = one:3 two:2


words=text.split(" ")  //['one' 'two', 'one' ...] words[5]
console.log(words); //array

wordcount={} //empty object key value pairs ={one:3 two:2}

words.map(word=> word in wordcount? wordcount[word]+=1 : wordcount[word]=1)

console.log(wordcount);