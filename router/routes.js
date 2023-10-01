const router = require("express").Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  try {
    // Fetch all todos from the database
    const todos = await Todo.find();

    // Render the template and pass the todos data
    res.render("../views/index.ejs", { todos });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).send("Error fetching todos");
  }
});

router.post("/todosend", async (req, res) => {
  const data = req.body.todo;

  try {
    const newTodo = new Todo({ todo: data });
    await newTodo.save();
    console.log("Todo saved successfully");
    res.redirect("/");
  } catch (err) {
    console.error("Error saving todo:", err);
    res.status(500).send("Error saving todo");
  }
});

// router.delete("/deletetodo/:id", async (req, res) => {
//   try {
//     const todoId = req.params.id;

//     // Use Mongoose to find and delete the todo item by ID
//     await Todo.findByIdAndRemove(todoId);

//     console.log("Todo deleted successfully");
//     res.redirect("/");
//   } catch (err) {
//     console.error("Error deleting todo:", err);
//     res.status(500).send("Error deleting todo");
//   }
// });

module.exports = router;
