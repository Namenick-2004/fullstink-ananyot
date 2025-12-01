function censorWord(sentence , wordtoCensor) {
    const regex = new RegExp(wordtoCensor, 'gi');
    const censoredText = sentence.replace(regex, '****');
    return censoredText;
}


const originalPost = "JavaScript is fun best sometimes JavaScript can be tricky!";
const cleanPost = censorWord(originalPost, "JavaScript");
console.log(cleanPost);
// Output: "**** is fun , but sometimes *** can be tricky!"     
