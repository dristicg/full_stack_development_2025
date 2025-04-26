# C++ STL Coding Questions for Beginners and Moderate Level

The following questions are designed to learn and apply C++ STL Containers (`vector`, `list`, `set`, `map`), Iterators, and Algorithms (`sort`, `find`, `accumulate`, etc.)

The **25 beginner-friendly questions** focus on simple, single-container operations with minimal setup, ideal for students new to C++ or STL. 

The **15 moderate-level questions** introduce slightly more complexity, combining containers or algorithms to bridge to LeetCode’s easy-to-medium problems.

## Beginner-Friendly Questions (25)

1. **Add elements to a vector**  
   Write a function to add 5 user-input integers to a `std::vector<int>` using `push_back` and print the vector.

2. **Print a vector**  
   Create a function to print all elements of a `std::vector<std::string>` using a range-based for loop.

3. **Find an element in a vector**  
   Write a function to check if a given integer exists in a `std::vector<int>` using `std::find`.

4. **Sort a vector**  
   Implement a function to sort a `std::vector<int>` in ascending order using `std::sort`.

5. **Reverse a vector**  
   Write a function to reverse a `std::vector<double>` using `std::reverse`.

6. **Sum of vector elements**  
   Create a function to compute the sum of a `std::vector<int>` using `std::accumulate`.

7. **Count occurrences in a vector**  
   Write a function to count how many times a specific number appears in a `std::vector<int>` using `std::count`.

8. **Add elements to a list**  
   Implement a function to add 3 user-input strings to a `std::list<std::string>` using `push_back` and print the list.

9. **Remove element from a list**  
   Write a function to remove a specific value from a `std::list<int>` using the `remove` member function.

10. **Check if a list is empty**  
    Create a function to check if a `std::list<double>` is empty using the `empty` member function.

11. **Insert into a set**  
    Write a function to insert 5 integers into a `std::set<int>` and print the set in sorted order.

12. **Check if a set contains a value**  
    Implement a function to check if a given string exists in a `std::set<std::string>` using `find`.

13. **Count elements in a set**  
    Write a function to return the number of elements in a `std::set<int>` using the `size` member function.

14. **Add key-value pairs to a map**  
    Create a function to add 3 student names and their scores to a `std::map<std::string, int>` and print the map.

15. **Find a key in a map**  
    Write a function to check if a given key exists in a `std::map<std::string, int>` using `find`.

16. **Replace elements in a vector**  
    Implement a function to replace all occurrences of a specific value in a `std::vector<int>` with another value using `std::replace`.

17. **Print a list in reverse**  
    Write a function to print a `std::list<int>` in reverse order using reverse iterators.

18. **Maximum element in a vector**  
    Create a function to find the maximum element in a `std::vector<double>` using `std::max_element`.

19. **Minimum element in a list**  
    Write a function to find the minimum element in a `std::list<int>` using `std::min_element`.

20. **Clear a vector**  
    Implement a function to clear all elements from a `std::vector<std::string>` using the `clear` member function.

21. **Double vector elements**  
    Write a function to double each element in a `std::vector<int>` using `std::transform` and a lambda.

22. **Check if a vector is sorted**  
    Create a function to check if a `std::vector<int>` is sorted in ascending order using `std::is_sorted`.

23. **Remove duplicates from a sorted vector**  
    Write a function to remove duplicates from a sorted `std::vector<int>` using `std::unique` (assume the vector is already sorted).

24. **Copy vector to list**  
    Implement a function to copy all elements from a `std::vector<int>` to a `std::list<int>` using `std::copy`.

25. **Fill a vector with sequence**  
    Write a function to fill a `std::vector<int>` with numbers 1 to 5 using `std::generate` and a lambda.

## Moderate-Level Questions (15)

These questions are slightly more challenging, combining multiple STL components or requiring deeper understanding of iterators and algorithms. 

1. **Merge two sorted vectors**  
   Write a function to merge two sorted `std::vector<int>` into a new sorted vector using `std::merge`.

2. **Filter even numbers**  
   Implement a function to copy all even numbers from a `std::vector<int>` to a new vector using `std::copy_if` and a lambda.

3. **Intersection of two sets**  
   Create a function to find the intersection of two `std::set<int>` using `std::set_intersection` and store the result in a new set.

4. **Sort a vector of pairs**  
   Write a function to sort a `std::vector<std::pair<std::string, int>>` by the second element (integer) using `std::sort` with a lambda.

5. **Count words in a map**  
   Implement a function to count the frequency of words in a `std::vector<std::string>` and store results in a `std::map<std::string, int>`.

6. **Remove elements from a list**  
   Write a function to remove all elements less than a given threshold from a `std::list<float>` using `std::remove_if` and `erase`.

7. **Rotate a vector**  
   Create a function to rotate a `std::vector<int>` by a given number of positions using `std::rotate`.

8. **Find first element greater than value**  
   Implement a function to find the first element in a `std::vector<int>` greater than a given value using `std::find_if`.

9. **Partition a vector**  
   Write a function to partition a `std::vector<int>` so even numbers come before odd numbers using `std::partition`.

10. **Transform strings to uppercase**  
    Create a function to convert all strings in a `std::vector<std::string>` to uppercase using `std::transform` and `std::toupper`.

11. **Union of two sets**  
    Write a function to compute the union of two `std::set<std::string>` using `std::set_union`.

12. **Reverse a list segment**  
    Implement a function to reverse a specific range of elements in a `std::list<int>` using iterators and `std::reverse`.

13. **Sort map by value**  
    Create a function to sort a `std::map<std::string, int>` by values (ascending) and return a `std::vector<std::pair<std::string, int>>`.

14. **Check palindrome in a vector**  
    Write a function to check if a `std::vector<char>` represents a palindrome using iterators.

15. **Random shuffle a vector**  
    Implement a function to randomly shuffle a `std::vector<int>` using `std::shuffle` and a random number generator.