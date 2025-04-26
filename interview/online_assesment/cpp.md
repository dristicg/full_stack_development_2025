# C++/STL Questions

## Long-Answer Questions

1. Explain the concept of object slicing in C++ and how to prevent it.
2. What is the Rule of Five? When is it needed and how does it differ from the Rule of Three?
3. Describe how virtual functions are implemented internally (vtable mechanism).
4. Compare and contrast static_cast, dynamic_cast, const_cast, and reinterpret_cast.
5. Explain perfect forwarding in C++ and its relationship with universal references.
6. What are move semantics? How do std::move and rvalue references enable them?
7. Describe RAII (Resource Acquisition Is Initialization) and its importance in C++.
8. How do smart pointers (unique_ptr, shared_ptr, weak_ptr) differ? When would you use each?
9. Explain SFINAE (Substitution Failure Is Not An Error) and its role in template metaprogramming.
10. What are C++20 concepts? How do they improve template code over SFINAE?
11. Compare compile-time polymorphism (templates) with runtime polymorphism (virtual functions).
12. Explain the CRTP (Curiously Recurring Template Pattern) and its typical use cases.
13. What are lambda expressions in C++? Explain capture modes and mutable lambdas.
14. Describe the iterator invalidation rules for vector, deque, map, and unordered_map.
15. Compare std::string and std::string_view. When should you prefer each?
16. What are allocators in STL? When would you need a custom allocator?
17. Explain exception safety guarantees (basic, strong, noexcept) with examples.
18. How does argument-dependent lookup (ADL) work? What are its advantages and pitfalls?
19. What is type erasure? How is it implemented in std::function?
20. Explain constexpr and consteval in modern C++. How do they differ from const?
21. Describe the template argument deduction process and how it interacts with auto.
22. What are fold expressions? Show how they simplify variadic template code.
23. Compare std::map and std::unordered_map in terms of implementation and performance.
24. Explain how std::initializer_list works and its role in constructor overloading.
25. What are transparent comparators (std::less<>) and why are they useful?

## Coding Questions

1. Implement a thread-safe singleton using std::call_once and std::mutex.
2. Write a RAII wrapper for a database connection (connect on construction, disconnect on destruction).
3. Create a custom array class with bounds checking and iterator support.
4. Implement a compile-time Fibonacci sequence calculator using constexpr.
5. Write a template function that works with any STL sequence container and reverses elements.
6. Create a move-aware matrix class demonstrating move constructor/assignment.
7. Implement a type-safe variant using std::variant and std::visit.
8. Write a template metaprogram that checks if a type is an STL associative container.
9. Create a factory function that perfect-forwards arguments to construct derived objects.
10. Implement a simple std::bind-like class that stores callables with placeholders.
11. Write a CRTP base class that adds cloning capability to derived classes.
12. Create a type traits class that detects if a type has push_back()/pop_back() methods.
13. Implement a compile-time string to uppercase converter using templates.
14. Write a custom allocator that tracks total memory allocated.
15. Create a template polynomial class with operator overloading (+,-,*).
16. Implement a visitor pattern for a hierarchy of geometric shapes using std::variant.
17. Write a constexpr vector class supporting push_back at compile time.
18. Create a worker thread pool using std::async and std::future.
19. Implement a scope guard that logs when scope is exited.
20. Write a benchmark comparing std::list vs std::vector for insertion operations.
21. Create a template function that times how long a function takes to execute.
22. Implement a simple serialization system using templates and SFINAE.
23. Write a custom iterator that transforms elements from another iterator.
24. Create a compile-time type map with insert/find operations.
25. Implement a block allocator optimized for small object allocations.
