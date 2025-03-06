import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Adjust path if needed

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    
    // Assuming initial todos exist in your component state
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    // Assuming completed items have a class or style indicating completion
    expect(todoItem).toHaveClass("completed"); 
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = todoItem.nextSibling; // Assuming delete button is next to the todo item

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});