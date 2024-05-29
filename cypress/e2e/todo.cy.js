describe("TodoMVC", function () {
  beforeEach(function () {
    cy.visit("localhost:8000");
  });

  it("Loads the TodoMVC app", function () {
    cy.get(".todoapp").should("exist");
    cy.compareSnapshot("home");
    cy.compareSnapshot("home-2");
    cy.compareSnapshot("home-3");
    cy.compareSnapshot("home-4");
    cy.compareSnapshot("home-5");
    cy.compareSnapshot("home-6");
    cy.compareSnapshot("home-7");
    cy.compareSnapshot("home-8");
    cy.compareSnapshot("home-9");
    cy.compareSnapshot("home-10");
    cy.compareSnapshot("home-11");
    cy.compareSnapshot("home-12");
    cy.compareSnapshot("home-13");
    cy.compareSnapshot("home-14");
    cy.compareSnapshot("home-15");
    cy.compareSnapshot("home-16");
    cy.compareSnapshot("home-17");
    cy.compareSnapshot("home-18");
    cy.compareSnapshot("home-19");
    cy.compareSnapshot("home-20");
    cy.compareSnapshot("home-21");
    cy.compareSnapshot("home-22");
    cy.compareSnapshot("home-23");
    cy.compareSnapshot("home-24");
    cy.compareSnapshot("home-25");
    cy.compareSnapshot("home-26");
    cy.compareSnapshot("home-27");
    cy.compareSnapshot("home-28");
    cy.compareSnapshot("home-29");
    cy.compareSnapshot("home-30");
    cy.compareSnapshot("home-31");
    cy.compareSnapshot("home-32");
    cy.compareSnapshot("home-33");
    cy.compareSnapshot("home-34");
    cy.compareSnapshot("home-35");
    cy.compareSnapshot("home-36");
    cy.compareSnapshot("home-37");
    cy.compareSnapshot("home-38");
    cy.compareSnapshot("home-39");
    cy.compareSnapshot("home-40");
    cy.compareSnapshot("home-41");
    cy.compareSnapshot("home-42");
    cy.compareSnapshot("home-43");
    cy.compareSnapshot("home-44");
    cy.compareSnapshot("home-45");
    cy.compareSnapshot("home-46");
    cy.compareSnapshot("home-47");
    cy.compareSnapshot("home-48");
    cy.compareSnapshot("home-49");
    cy.compareSnapshot("home-50");
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
