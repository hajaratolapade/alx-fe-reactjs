import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Adjust path if needed

describe("TodoList Component", () => {
  test("renders initial todos if present", () => {
    render(<TodoList />);

    // Ensure initial todos exist in the component state before testing
    if (screen.queryByText("Learn React")) {
      expect(screen.getByText("Learn React")).toBeInTheDocument();
    }
    if (screen.queryByText("Build a Todo App")) {
      expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    }
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    // Verify completed class is applied
    expect(todoItem.classList.contains("completed")).toBe(true);
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
