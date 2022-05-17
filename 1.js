// challenge 2 30 days challenge


// excercises

// output a string
let challenge = "30 days of JavaScript";
console.log(challenge)

// using javascript template literals to output a string length
console.log(`The length of string is ${challenge.length}`)



// using javascript template literals to output a string in UpperCase 
console.log(`The string in uppercase format is ${challenge.toUpperCase()}`)



// using javascript template literals to output a string in lowercase
console.log(`The string in lowercase format is ${challenge.toLowerCase()}`)


// using javascript template literals to output the first word in a string
console.log(`The first word in the string is ${challenge.substring(0, (challenge.search(" ")))}`)



// checking if a word contains a "Script" subscript
if (challenge.includes('Script')) {
    console.log(`The sentence ${challenge} contains Script`)
}


// Outputing a certain substring in a string
console.log(challenge.substring(challenge.search('days'), challenge.search('JavaScript') + 'JavaScript'.length))


// Outputing a list of all the characters in a string
console.log(challenge.split(''))


// Outputing every word in a string
console.log(challenge.split(' '))


// Using JavaScript template literals to output the character at a specified index 
console.log(`The character at index 15 is ${challenge.charAt(15)}`)


// Outputing the character code a character 
console.log(challenge.charCodeAt('J'))


// Outputing the index of the first occurence of a character
console.log(`The index of the first occurence of 'a' is ${challenge.indexOf('a')}`)


// outputing the index of the last index of a character
console.log(`The index of the last occurence of 'a' is ${challenge.lastIndexOf('a')}`)



// returning the characters that match a specified pattern in astring
console.log(challenge.match(/a/gi))


// Outputing the equivalence of two variables using typeof
console.log(`Is '10' same type as 10 ==> ${typeof('10') == typeof(10)}`)



// checking if values are equal
console.log(`Is typeof(parseInt('10')) equal to typeof(10) ==> ${typeof(parseInt('10')) == typeof(10)}`)



// checking if values are equal
console.log(`Is parseFloat('9.8') equal to 10 ==> ${parseFloat('9.8') == 10}`)


// checking if values are equal
console.log(`IS Math.round(parseFloat('9.8')) equal to 10 ${Math.round(parseFloat('9.8')) == 10}`)


// using ternary operator to check if output a string based on conditions
console.log(challenge.includes('Script') ? `The sentence ${challenge} contains Script` : '') // Ternary operator of line 12


// checking a string contains a specified substring 
console.log('I hope this course is not full of jargon'.includes('jargon'))


// Outputing the numbers of a specified pattern or characters or substring present in a string
new_word = 'Love is the best thing in this world.Some found their love and some are still looking for teir love.'
console.log(`There are ${(new_word.match(/love/gi)).length} "love" in the sentence${new_word}`)



// Outputing the numbers of a specified pattern or characters or substring present in a string
another_sentence = 'You cannot end asentence  with because because because is a conjucton'
console.log(`There are ${(another_sentence.match(/because/gi)).length} "because" in the sentence ${another_sentence}`)



// replacing a specified substring in a string with another specifeied string 
text = '%I $am@% a %tea@cher%, &and& I lo%#ve tea%^ching'
console.log(text.replace(/[^A-za-z0-9\s,]/gi, ''))


// returning the characters that match a specified pattern in astring
last_word = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
console.log(last_word.match(/\d+/gi))