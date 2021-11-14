// Define Routes here

export default function(app){
    const wordList = require('../controllers/wordController'); 

    app
    .route("/words")
    .get(wordList.listAllWords)
    .post(wordList.createNewWord);

    app
    .route("/word/:id")
    .get(wordList.findWord)
    .put(wordList.updateWord)
    .delete(wordList.deleteWord);
}   