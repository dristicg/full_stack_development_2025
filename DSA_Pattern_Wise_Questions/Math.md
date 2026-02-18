# Math-Based LeetCode Patterns

**Math** problems on LeetCode test your ability to recognize mathematical properties, use number theory, apply clever formulas, optimize with math instead of simulation, and handle digits, primes, geometry, bits, modular arithmetic, etc.

They reward **insight** over brute force — many can be solved in O(1), O(log n), O(√n) instead of O(n).

There are **three main patterns** commonly seen in math-tagged problems:

1. **Digit & Number Manipulation**  
2. **Number Theory & Primes**  
3. **Math Formulas & Clever Insights**

Let's break them down with analogies, triggers, and curated problem lists.

---

## Pattern 1: Digit & Number Manipulation

**Core idea**  
Treat the number as a sequence of digits. Repeatedly use `% 10` and `/ 10` to extract, reverse, sum, multiply, count, or rebuild numbers.

**Super simple example**  
Reverse Integer → build reversed number digit-by-digit while checking overflow.

**When to think of this pattern**  
- "digit", "reverse", "sum of digits", "product of digits"  
- "palindrome number", "happy number", "add digits repeatedly"  
- "plus one" on digits, "rotate digits"  
- Problems that ask to manipulate individual digits without string conversion

**Real-life analogy**  
Manually calculating check digits on a barcode or reversing numbers on a calculator.

### LeetCode Problems – Digit & Number Manipulation (~20 popular ones)

| #  | Problem Name                                      | Link                                                                 | Difficulty | Quick Tip / Key Insight                              |
|----|---------------------------------------------------|----------------------------------------------------------------------|------------|------------------------------------------------------|
| 1  | Palindrome Number                                 | https://leetcode.com/problems/palindrome-number/                     | Easy       | Reverse only half the number                         |
| 2  | Reverse Integer                                   | https://leetcode.com/problems/reverse-integer/                       | Medium     | Check overflow before adding next digit              |
| 3  | Add Digits                                        | https://leetcode.com/problems/add-digits/                            | Easy       | Digital root = `1 + (n - 1) % 9`                     |
| 4  | Subtract the Product and Sum of Digits...         | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/ | Easy | Simple loop with `%10` and `/10`                     |
| 5  | Happy Number                                      | https://leetcode.com/problems/happy-number/                          | Easy       | Floyd's cycle detection on sum of squares            |
| 6  | Excel Sheet Column Number                         | https://leetcode.com/problems/excel-sheet-column-number/             | Easy       | Base-26 (A=1, not 0)                                 |
| 7  | Excel Sheet Column Title                          | https://leetcode.com/problems/excel-sheet-column-title/              | Easy       | Reverse base-26 conversion                           |
| 8  | Plus One                                          | https://leetcode.com/problems/plus-one/                              | Easy       | Simulate big-integer +1 from right                   |
| 9  | Single Number                                     | https://leetcode.com/problems/single-number/                         | Easy       | XOR all elements                                     |
| 10 | Missing Number                                    | https://leetcode.com/problems/missing-number/                        | Easy       | Gauss sum `n*(n+1)/2` minus actual sum               |
| 11 | Sum of Square Numbers                             | https://leetcode.com/problems/sum-of-square-numbers/                 | Medium     | Two pointers on sorted squares                       |
| 12 | Power of Three                                    | https://leetcode.com/problems/power-of-three/                        | Easy       | `log(n) / log(3)` is integer                         |
| 13 | Power of Two                                      | https://leetcode.com/problems/power-of-two/                          | Easy       | `n > 0 && (n & (n-1)) == 0`                          |
| 14 | Number of 1 Bits                                  | https://leetcode.com/problems/number-of-1-bits/                      | Easy       | Brian Kernighan: `n &= n-1` in loop                  |
| 15 | Reverse Bits                                      | https://leetcode.com/problems/reverse-bits/                          | Easy       | Bit manipulation shift & mask                        |
| 16 | Bitwise AND of Numbers Range                      | https://leetcode.com/problems/bitwise-and-of-numbers-range/          | Medium     | Find common prefix bits                              |
| 17 | Hamming Distance                                  | https://leetcode.com/problems/hamming-distance/                      | Easy       | XOR then count set bits                              |
| 18 | Add Binary                                        | https://leetcode.com/problems/add-binary/                            | Easy       | Simulate binary addition from right                  |
| 19 | Multiply Strings                                  | https://leetcode.com/problems/multiply-strings/                      | Medium     | Grade-school multiplication simulation               |
| 20 | Divide Two Integers                               | https://leetcode.com/problems/divide-two-integers/                   | Medium     | Bit-shifting subtraction (fast division)             |

---

## Pattern 2: Number Theory & Primes

**Core idea**  
Use fundamental theorems: Euclid’s GCD, LCM, prime factorization, sieve, divisibility rules, modular arithmetic basics.

**Super simple example**  
Ugly Number → keep dividing by 2, 3, 5 until 1.

**When to think of this pattern**  
- "GCD", "LCM", "prime", "factor", "divisible by", "ugly number"  
- "Count primes less than n"  
- Fraction simplification, recurring decimals  
- Games where moves depend on divisors

**Real-life analogy**  
Finding greatest common meeting time (GCD) or checking if a number can be reduced to 1 by dividing by certain factors.

### LeetCode Problems – Number Theory & Primes

| #  | Problem Name                                      | Link                                                                 | Difficulty | Quick Tip / Key Insight                              |
|----|---------------------------------------------------|----------------------------------------------------------------------|------------|------------------------------------------------------|
| 1  | Greatest Common Divisor of Strings                | https://leetcode.com/problems/greatest-common-divisor-of-strings/    | Easy       | GCD of lengths + check repetition                    |
| 2  | Count Primes                                      | https://leetcode.com/problems/count-primes/                          | Medium     | Sieve of Eratosthenes (O(n log log n))               |
| 3  | Ugly Number                                       | https://leetcode.com/problems/ugly-number/                           | Easy       | Divide by 2,3,5 until 1                              |
| 4  | Ugly Number II                                    | https://leetcode.com/problems/ugly-number-ii/                        | Medium     | 3-pointer DP or min-heap                             |
| 5  | Super Ugly Number                                 | https://leetcode.com/problems/super-ugly-number/                     | Medium     | DP with k primes                                     |
| 6  | Perfect Squares                                   | https://leetcode.com/problems/perfect-squares/                       | Medium     | DP or check Lagrange's four-square theorem           |
| 7  | Integer Break                                     | https://leetcode.com/problems/integer-break/                         | Medium     | Greedy: break mostly into 3s                         |
| 8  | Nim Game                                          | https://leetcode.com/problems/nim-game/                              | Easy       | Winning if `n % 4 != 0`                              |
| 9  | Divisor Game                                      | https://leetcode.com/problems/divisor-game/                          | Easy       | First player wins iff n is even                      |
| 10 | Water and Jug Problem                             | https://leetcode.com/problems/water-and-jug-problem/                 | Medium     | Bezout’s identity: can measure iff GCD divides z     |
| 11 | Factorial Trailing Zeroes                         | https://leetcode.com/problems/factorial-trailing-zeroes/             | Medium     | Count number of 5s in prime factorization            |

---

## Pattern 3: Math Formulas & Clever Insights

**Core idea**  
Apply closed-form formulas, binary exponentiation, geometry conditions, series sums, combinatorial identities, bit tricks as math.

**Super simple example**  
Pow(x, n) → binary exponentiation (O(log n))

**When to think of this pattern**  
- "fast power", "square root", "geometric", "combinatorial count"  
- Stair-climbing / path counting → Fibonacci or binomial  
- Sum/product of series, modular exponentiation  
- Problems where brute force is too slow but math gives O(1)/O(log n)

**Real-life analogy**  
Using compound interest formula instead of adding interest year-by-year.

### LeetCode Problems – Math Formulas & Clever Insights (~20 popular)

| #  | Problem Name                                      | Link                                                                 | Difficulty | Quick Tip / Key Insight                              |
|----|---------------------------------------------------|----------------------------------------------------------------------|------------|------------------------------------------------------|
| 1  | Pow(x, n)                                         | https://leetcode.com/problems/powx-n/                                | Medium     | Binary exponentiation (iterative)                    |
| 2  | Sqrt(x)                                           | https://leetcode.com/problems/sqrtx/                                 | Easy       | Binary search for floor sqrt                         |
| 3  | Climb Stairs                                      | https://leetcode.com/problems/climbing-stairs/                       | Easy       | Fibonacci (or closed form insight)                   |
| 4  | Unique Paths                                      | https://leetcode.com/problems/unique-paths/                          | Medium     | Binomial coefficient C(m+n-2, m-1)                   |
| 5  | Valid Perfect Square                              | https://leetcode.com/problems/valid-perfect-square/                  | Easy       | Binary search or Newton’s method                     |
| 6  | Reach a Number                                    | https://leetcode.com/problems/reach-a-number/                        | Medium     | Find smallest triangular number ≥ target             |
| 7  | Super Pow                                         | https://leetcode.com/problems/super-pow/                             | Medium     | Modular exponentiation + Euler's theorem             |
| 8  | Roman to Integer                                  | https://leetcode.com/problems/roman-to-integer/                      | Easy       | Handle subtractive notation                          |
| 9  | Integer to Roman                                  | https://leetcode.com/problems/integer-to-roman/                      | Medium     | Greedy with value-symbol list                        |
| 10 | Fraction to Recurring Decimal                     | https://leetcode.com/problems/fraction-to-recurring-decimal/         | Medium     | Simulate long division + hash remainders             |
| 11 | Basic Calculator                                  | https://leetcode.com/problems/basic-calculator/                      | Hard       | Two stacks (numbers + operators)                     |
| 12 | Basic Calculator II                               | https://leetcode.com/problems/basic-calculator-ii/                   | Medium     | Handle * / before + -                                |
| 13 | Sum of Two Integers                               | https://leetcode.com/problems/sum-of-two-integers/                   | Medium     | Simulate addition with XOR & carry                   |
| 14 | Rectangle Area                                    | https://leetcode.com/problems/rectangle-area/                        | Medium     | Inclusion-exclusion on overlapping area              |
| 15 | Largest Palindrome Product                        | https://leetcode.com/problems/largest-palindrome-product/            | Hard       | Generate palindromes and check factors               |

---

## Quick Tips for Math Problems

- Master these building blocks:
  - Digit extraction loop (`while n > 0 { d = n%10; n/=10; }`)
  - Euclid’s GCD
  - Binary exponentiation
  - Sieve of Eratosthenes
  - Bit manipulation tricks (`n & -n`, `n & (n-1)`, etc.)
  - Gauss sum, triangular numbers, digital root

- Always ask: "Is there a mathematical formula or property that avoids O(n) simulation?"

- Draw small cases (n = 1 to 20) → look for pattern or formula.

- Practice order: 5–6 easy → 5–6 medium per pattern.

- Many problems combine patterns (math + binary search, math + hash, etc.).

