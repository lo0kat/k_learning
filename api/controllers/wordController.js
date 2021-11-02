
// Handle req and response here
import Word, { find, findOneAndUpdate, deleteOne, findById } from '../models/wordModel';

export function listAllWords(req,res){
    find({},(err,word)=>{
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).json(word);
        }
    });
};

export function createNewWord(req,res){
    const newWord = new Word({
        kor : req.body.kor,
        eng : req.body.eng,
        wordType : req.body.wordType
    })
    
    newWord.save((err,word)=>{
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).json(word);
        }
    });
};

export function updateWord(req,res){
    findOneAndUpdate({_id : req.params.wordId},req.body,{new:true},(err,word)=>{
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).json(word);
        }
    });
};

export function deleteWord(req,res){
    deleteOne({_id : req.params.wordId},(err)=>{
        if (err){
            res.status(404).send(err);
        }
        else {
            res.status(200).json({message : "Word deleted successfully !"});
        }
    });
};

export function findWord(req,res){
    findById({_id : req.params.wordId},(err,word)=>{
        if (err){
            res.status(500).send(err);
        }
        else {
            res.status(200).json(word);
        }
    });
};
