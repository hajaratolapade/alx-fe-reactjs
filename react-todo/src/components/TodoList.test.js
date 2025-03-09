import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList"; // Adjust the path based on your structure

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    
    // Check if the initial demo todos are present
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    // Check if the new task is added
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    // Check if it toggles (assuming completed todos have a class or different style)
    expect(todoItem).toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = screen.getByTestId("delete-Learn React");

    // Delete the todo
    fireEvent.click(deleteButton);

    // Ensure it's removed from the DOM
    expect(todoItem).not.toBeInTheDocument();
  });
});
