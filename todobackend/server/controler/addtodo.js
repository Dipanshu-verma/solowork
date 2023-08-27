import Todo from "../model/todo.js";

export const addtodo= async (req,res)=>{

    try{
        const newTodo= await Todo.create({
            data:req.body.data,
            createdAt:Date.now()
         })
    
         await newTodo.save();
        return res.status(200).json(newTodo)
    }catch(error){
        return res.status(500).josn(error.message)
    }
  


    }