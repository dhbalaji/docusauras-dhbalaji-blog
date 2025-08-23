# Rule based vs Model based AI

**TL;DR**  
- **Rule-based = you write the rules.**  
- **Model-based = you give examples, and the system learns the rules.**  

Let me start with a story from library days. The librarian used to get a box of books. The librarian used intuition and metadata to catalog them into the respective category and later stock them on the shelves. Meanwhile, enthusiasts like me would place requests for titles the librarian had never heard of. After an eye roll, they would ask why this book was needed and how it was relevant.  

If we were to write a program to automate cataloging of books, the program would be deterministic — similar to the kind of programs most FE and BE developers write. Then comes the enthusiast’s request, which would stump our rules program, forcing a change request to the software vendor or an append-only patch to update the knowledge of the rules program.  

However, if we use data-driven AI for cataloging books, there would not be a deterministic, if-then program. Instead, it would be a **model** trained on **labeled data**. During this process, the model learns hidden patterns. Unlike human-readable `if-then` rules, the knowledge is stored as numbers/weights inside the model. Each parameter is like a spice, each adding its own subtle impact when mixed with others. Only when all spices combine do you get the final dish — which is the model’s knowledge.  

Machine Learning (ML) is an enabler for computers to learn from data. Similar to how children learn the difference between apples and tomatoes despite hundreds of variations in shape, size, and color. Technically, we are not memorizing anything (ideally, though sometimes models do memorize), but learning from the data. Once learned, they can adapt to the task.  

In the rule-based world, the program needs to be patched or updated to accommodate unforeseen genres like prompt engineering. With models, however, retraining on new data helps them see patterns and catalog books accordingly.  

---

### Let’s draw some analogy:  

| Item              | Rule based                   | Data Driven AI          |
|-------------------|-----------------------------|-------------------------|
| Input             | Code                        | Labeled data            |
| Core logic        | Explicit instructions       | Finding patterns        |
| Output            | Fixed result                | Predicted result        |
| Updates           | Modify code                 | Update labeled data     |
| Futuristic        | No                          | Yes                     |
| Conventional      | Yes                         | No                      |
| Implementation    | Easy to start, hard to scale| Hard to start, scales better |
| Contents of logic | if-then rules               | Weights (parameters)    |  

## Input data

Let’s revisit the goal of this AI program: for any given book, we want to derive the correct catalog category. For example, *How to Sell Yourself* by Joe Girard should go into “Self-Help.”  

If you’ve looked at a book cover (which you surely have if you lived long before AI), you’d notice metadata like title, author, publisher, price, and ISBN. These are **features** that describe the book, but they are not labels.  

In the world of machine learning, **labeled data** means that an experienced librarian (or system) has already assigned each book to a category used in library practice — e.g., “Self-Help,” “Philosophy,” or “Children’s Literature.”  

For simplicity in this library example, we’ll use the term “labeled data.” But real-world classification is messy. For instance, an illustrated sex-education book may not neatly fit into “Children,” “Education,” or “Graphic Novels,” and might instead be placed under “Adult Education.” ML models trained on such datasets can inherit these ambiguities and end up with biases or misclassifications.  

> It’s also worth noting that in practice there is no such thing as perfectly clean input data or bias-free labeled data. Real-world data is messy, and labels reflect human judgment, which can vary across cultures, contexts, or even individual librarians. Models trained on such data will inevitably carry some of these imperfections — the goal is to minimize, not eliminate them.
