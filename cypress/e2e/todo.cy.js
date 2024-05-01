describe("TodoMVC", function () {
  beforeEach(function () {
    cy.visit("localhost:8000");
  });

  it("Loads the TodoMVC app", function () {
    cy.get(".todoapp").should("exist");
    cy.compareSnapshot("home");
  });

  it("Accepts a new todo", function () {
    // Before adding a todo, we should have none.
    cy.get(".todo-count").should("contain", "0 items left");
    cy.get(".todo-list").children("li").should("have.length", 0);

    // Add a new todo item.
    cy.get(".new-todo").should("exist");
    cy.get(".new-todo").type("New fancy todo {enter}");
    // Take a Percy snapshot with different browser widths.
    cy.compareSnapshot({ name: "new-todo" });

    // We should have 1 todo item showing in the todo list and the footer.
    cy.get(".todo-list").children("li").should("have.length", 1);
    cy.get(".todo-count").should("contain", "1 item left");
  });

  it("Lets you check off a todo", function () {
    // Enter a new todo.
    cy.get(".new-todo").type("A thing to accomplish {enter}");
    cy.get(".todo-count").should("contain", "1 item left");

    // Click it off -- it should be marked as completed.
    cy.get(".toggle").click();
    cy.get(".todo-count").should("contain", "0 items left");
    cy.compareSnapshot("todo-count");
  });
});
