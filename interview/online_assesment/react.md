# React Interview Questions

## Long-Answer Questions

1. Explain the difference between controlled and uncontrolled components in React. What are the advantages and disadvantages of each approach?
2. Describe the React component lifecycle and how hooks like useEffect have changed the way we manage side effects compared to class components.
3. Compare and contrast useState and useReducer hooks. When would you choose one over the other?
4. Explain how React's Virtual DOM works and why it's beneficial for application performance.
5. Describe the concept of "lifting state up" in React. Why is it important for component communication?
6. What are React props and state? How do they differ in terms of mutability and usage patterns?
7. Explain the concept of conditional rendering in React and describe three different approaches to implement it.
8. What is the purpose of the key prop when rendering lists in React? What problems can occur if keys are not used properly?
9. Describe React's Context API. How does it help solve prop drilling, and what are its limitations?
10. Explain how React Router manages routing in single-page applications. How does it differ from traditional server-side routing?
11. What are React hooks? Describe the rules of hooks and explain why these rules are important.
12. Compare and contrast Redux and React's built-in state management (useState, useReducer, Context). When would you choose one over the other?
13. Explain the concept of code splitting in React applications. How does it improve performance, and what tools can be used to implement it?
14. What is memoization in React? Explain how useMemo and useCallback work and when they should be used.
15. Describe the principles of "composition over inheritance" in React. How does this approach influence component design?
16. What are Higher-Order Components (HOCs) and Render Props? How have hooks changed these patterns?
17. Explain how you would optimize performance in a React application. Discuss techniques like memoization, virtualization, and lazy loading.
18. What is the purpose of useEffect's dependency array? Explain the behavior with empty dependencies, no dependencies, and specific dependencies.
19. Describe how to handle forms in React. Compare controlled components to libraries like Formik or React Hook Form.
20. What are custom hooks in React? Explain how they promote code reuse and provide an example of a custom hook you might create.
21. Explain how you would implement authentication in a React application using React Router and Context API.
22. Compare different state management solutions in React: local component state, Context API, Redux, and newer alternatives like Recoil or Zustand.
23. Describe the concept of "presentational" versus "container" components. How has this pattern evolved with hooks?
24. Explain how you would test React components using tools like Jest and React Testing Library. What are the best practices?
25. Describe the modern React application architecture. How would you structure a large-scale React application for maintainability and performance?

## Coding Questions

1. Implement a toggle button component that switches between "ON" and "OFF" states when clicked.
2. Create a countdown timer component that starts at 60 seconds and counts down to 0, with pause and reset functionality.
3. Build a search filter component that filters a list of items based on user input in real-time.
4. Implement a character counter for a textarea that displays the remaining characters (limit of 280).
5. Create a simple todo list with the ability to add, remove, and mark items as complete.
6. Build an accordion component that displays questions and shows/hides answers when the questions are clicked.
7. Implement a dark mode toggle that changes the theme of your application using Context API.
8. Create a custom hook called useLocalStorage that persists state to localStorage and syncs between tabs.
9. Build a pagination component that displays 5 items per page from a list of 50 items.
10. Implement a form with validation for email, password, and name fields using controlled components.
11. Create a component that fetches data from an API on mount and displays loading, error, and success states.
12. Build a dynamic dropdown menu component that can be reused throughout an application.
13. Implement a simple shopping cart using useReducer for state management.
14. Create a multi-step form wizard with progress indicator and navigation between steps.
15. Build a debounced search input that only triggers the search after the user stops typing for 500ms.
16. Implement a modal component that can be opened and closed, with proper focus management.
17. Create a custom hook that handles API requests with loading, error, and data states.
18. Build a star rating component that allows users to select a rating from 1-5 stars.
19. Implement an infinite scroll component that loads more data as the user scrolls down.
20. Create a tab component that switches between different content panels when tabs are clicked.
21. Build a file upload component with drag and drop functionality and progress indication.
22. Implement a React Router configuration with protected routes that redirect unauthenticated users.
23. Create a Redux Toolkit slice for a shopping cart with actions for adding, removing, and updating item quantities.
24. Build a data table component with sorting, filtering, and pagination functionality.
25. Implement a theme switcher that allows users to select from multiple predefined themes using Redux Toolkit.
