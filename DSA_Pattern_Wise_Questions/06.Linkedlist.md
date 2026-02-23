# Linked-List  Patterns

**Linked List** problems on LeetCode test your ability to master pointer manipulation, handle many edge cases (null head, single node, two nodes, cycles, duplicates), perform in-place operations, and prefer O(1) extra space when possible. They reward clean, bug-free code over brute force — most run in **O(n)** time with **O(1)** space (except when merging k lists or using hash maps).

There are **three main patterns** commonly seen in linked list-tagged problems:
1. **Two Pointers / Fast-Slow Pointers**  
2. **In-Place Reversal & Pointer Re-arrangement**  
3. **Dummy Node + Modification / Construction**

Let's break them down with analogies, triggers, and curated problem lists (≥20 each).

---

## Pattern 1: Two Pointers / Fast-Slow Pointers
**Core idea**  
Use two (or more) pointers at different speeds or starting positions to traverse, detect, find positions, or partition in one pass without extra space or length calculation.

**Super simple example**  
Middle of the Linked List → fast moves 2×, slow moves 1×; when fast ends, slow is at middle.

**When to think of this pattern**  
- "cycle", "middle", "nth from end", "intersection", "palindrome"
- One-pass requirement or constant space
- Detect meeting point, length parity, partitioning
- Floyd's tortoise & hare appears often

**Real-life analogy**  
Two runners on a track: the faster one laps the slower one if it's a loop, or they meet at key points.

### LeetCode Problems – Two Pointers / Fast-Slow Pointers (22 popular ones)
| #  | Problem Name                                | Link                                                                                 | Difficulty | Quick Tip / Key Insight                                      |
|----|---------------------------------------------|--------------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| 1  | Linked List Cycle                           | https://leetcode.com/problems/linked-list-cycle/                                     | Easy       | Tortoise-Hare: fast meets slow → cycle                       |
| 2  | Middle of the Linked List                   | https://leetcode.com/problems/middle-of-the-linked-list/                             | Easy       | Fast 2× → slow at middle (handles even/odd length)           |
| 3  | Remove Nth Node From End of List            | https://leetcode.com/problems/remove-nth-node-from-end-of-list/                      | Medium     | Fast ahead by n, then both move → delete slow.next           |
| 4  | Palindrome Linked List                      | https://leetcode.com/problems/palindrome-linked-list/                                | Easy       | Fast-slow to middle → reverse second half → compare          |
| 5  | Intersection of Two Linked Lists            | https://leetcode.com/problems/intersection-of-two-linked-lists/                      | Easy       | A→B + B→A vs C→D + D→C → meet at intersection or null        |
| 6  | Linked List Cycle II                        | https://leetcode.com/problems/linked-list-cycle-ii/                                  | Medium     | Meet → reset slow to head, both 1× → cycle start             |
| 7  | Find the Duplicate Number                   | https://leetcode.com/problems/find-the-duplicate-number/                             | Medium     | Treat array as LL (nums[i] → next) + cycle detection         |
| 8  | Happy Number                                | https://leetcode.com/problems/happy-number/                                          | Easy       | Floyd cycle on sum of squares of digits                      |
| 9  | Odd Even Linked List                        | https://leetcode.com/problems/odd-even-linked-list/                                  | Medium     | Odd & even pointers → connect odd tail to even head          |
|10  | Reorder List                                | https://leetcode.com/problems/reorder-list/                                          | Medium     | Middle (fast-slow) → reverse second → merge zip              |
|11  | Remove Linked List Elements                 | https://leetcode.com/problems/remove-linked-list-elements/                           | Easy       | Prev + curr; skip when curr.val == val                       |
|12  | Swapping Nodes in a Linked List             | https://leetcode.com/problems/swapping-nodes-in-a-linked-list/                       | Medium     | Find kth & (n-k+1)th with two pointers                       |
|13  | Linked List Random Node                     | https://leetcode.com/problems/linked-list-random-node/                               | Medium     | Reservoir sampling (or count length first)                   |
|14  | Delete the Middle Node of a Linked List     | https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/               | Medium     | Fast-slow to find prev of middle                             |
|15  | Maximum Twin Sum of a Linked List           | https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/                     | Medium     | Middle → reverse second half → compare pairs                 |
|16  | Split Linked List in Parts                  | https://leetcode.com/problems/split-linked-list-in-parts/                            | Medium     | Count length → compute sizes → split with pointers           |
|17  | Remove Zero Sum Consecutive Nodes ...       | https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/    | Medium     | Prefix sum + hash (but two pointers variant possible)        |
|18  | Nodes Between Critical Points               | https://leetcode.com/problems/nodes-between-critical-points/                         | Medium     | Two pointers to find min/max distance                        |
|19  | Insert Greatest Common Divisors in Linked List | https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/     | Medium     | Traverse + insert new nodes                                  |
|20  | Merge Nodes in Between Zeros                | https://leetcode.com/problems/merge-nodes-in-between-zeros/                          | Medium     | Slow (at zero) + fast (sum until next zero)                  |
|21  | Double a Number Represented as a Linked List| https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/          | Medium     | Reverse or two pointers for carry                            |
|22  | Find the Minimum and Maximum Number ...     | https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes.../       | Medium     | Fast-slow variants for critical points                       |

---

## Pattern 2: In-Place Reversal & Pointer Re-arrangement
**Core idea**  
Change `.next` pointers to reverse sublists, groups, or reorder nodes using constant space (usually 3–4 pointers: prev, curr, next, etc.).

**Super simple example**  
Reverse Linked List → while curr: next = curr.next; curr.next = prev; prev = curr; curr = next

**When to think of this pattern**  
- "reverse", "swap pairs", "k-group", "rotate"
- "reorder", "sort" (merge sort variant), "palindrome" (reverse half)
- In-place structural change without array

**Real-life analogy**  
Re-linking a chain of people holding hands — just update who holds whose hand without extra people.

### LeetCode Problems – In-Place Reversal & Pointer Re-arrangement (21 popular ones)
| #  | Problem Name                                | Link                                                                                 | Difficulty | Quick Tip / Key Insight                                      |
|----|---------------------------------------------|--------------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| 1  | Reverse Linked List                         | https://leetcode.com/problems/reverse-linked-list/                                   | Easy       | Classic 3-pointer reversal                                   |
| 2  | Reverse Linked List II                      | https://leetcode.com/problems/reverse-linked-list-ii/                                | Medium     | Isolate [left,right] → reverse → reconnect                   |
| 3  | Swap Nodes in Pairs                         | https://leetcode.com/problems/swap-nodes-in-pairs/                                   | Medium     | Reverse every 2 nodes (k=2 case)                             |
| 4  | Reverse Nodes in k-Group                    | https://leetcode.com/problems/reverse-nodes-in-k-group/                              | Hard       | Reverse groups of k + recursive/iterative connect            |
| 5  | Rotate List                                 | https://leetcode.com/problems/rotate-list/                                           | Medium     | Find break point → old tail → head → new tail.next = null    |
| 6  | Reorder List                                | https://leetcode.com/problems/reorder-list/                                          | Medium     | Reverse second half + merge alternately                      |
| 7  | Palindrome Linked List                      | https://leetcode.com/problems/palindrome-linked-list/                                | Easy       | Reverse second half + compare (in-place)                     |
| 8  | Sort List                                   | https://leetcode.com/problems/sort-list/                                             | Medium     | Merge sort: split (fast-slow) + merge                        |
| 9  | Remove Duplicates from Sorted List          | https://leetcode.com/problems/remove-duplicates-from-sorted-list/                    | Easy       | Skip while curr.val == curr.next.val                         |
|10  | Remove Duplicates from Sorted List II       | https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/                 | Medium     | Skip all duplicates (use prev)                               |
|11  | Odd Even Linked List                        | https://leetcode.com/problems/odd-even-linked-list/                                  | Medium     | Rearrange odd/even pointers                                  |
|12  | Reverse Doubly Linked List (variants exist) | (many company variants)                                                              | Medium     | Swap prev & next in doubly LL                                |
|13  | Reverse Pairs (in linked list)              | https://leetcode.com/problems/reverse-pairs/ (array but LL variant)                  | Hard       | Sometimes reversed merge sort                                |
|14  | Swap Nodes in Pairs (recursive)             | https://leetcode.com/problems/swap-nodes-in-pairs/                                   | Medium     | Recursive version                                            |
|15  | Reverse Print (but in-place variants)       | (many print variants)                                                                | Easy       | Reverse then print or recursion                              |
|16  | Flattening a Linked List ( multilevel )     | https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/               | Medium     | Pointer rearrangement + child handling                       |
|17  | Copy List with Random Pointer               | https://leetcode.com/problems/copy-list-with-random-pointer/                         | Medium     | Interleave → set random → separate                           |
|18  | Rotate List (multiple k)                    | variants                                                                             | Medium     | Mod length + connect                                         |
|19  | Reverse Between (sub-list)                  | many company variants                                                                | Medium     | Same as Reverse II                                           |
|20  | Reverse Every K Nodes (variant)             | https://leetcode.com/problems/reverse-nodes-in-k-group/                              | Hard       | Core reversal pattern                                        |
|21  | Zigzag / Spiral traversal variants          | (premium / company)                                                                  | Hard       | Pointer jumping & reversal                                   |

---

## Pattern 3: Dummy Node + Modification / Construction
**Core idea**  
Use a sentinel/dummy node to handle head changes easily, then build new lists or modify by linking nodes (great for merges, inserts, deletes, partitions).

**Super simple example**  
Merge Two Sorted Lists → dummy → while both: link smaller → advance

**When to think of this pattern**  
- Head may be removed/changed
- Building new list (add, merge, partition, copy)
- Many inserts/deletes or edge cases (empty list, all removed)

**Real-life analogy**  
Adding a temporary "placeholder" ticket at the front of a queue so the first real person can be removed without breaking the line.

### LeetCode Problems – Dummy Node + Modification / Construction (23 popular ones)
| #  | Problem Name                                | Link                                                                                 | Difficulty | Quick Tip / Key Insight                                      |
|----|---------------------------------------------|--------------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| 1  | Merge Two Sorted Lists                      | https://leetcode.com/problems/merge-two-sorted-lists/                                | Easy       | Dummy + pick smaller repeatedly                              |
| 2  | Add Two Numbers                             | https://leetcode.com/problems/add-two-numbers/                                       | Medium     | Dummy + carry; new nodes                                     |
| 3  | Merge k Sorted Lists                        | https://leetcode.com/problems/merge-k-sorted-lists/                                  | Hard       | Min-heap or repeated dummy merge                             |
| 4  | Partition List                              | https://leetcode.com/problems/partition-list/                                        | Medium     | Two dummy chains: < x and ≥ x → connect                      |
| 5  | Remove Duplicates from Sorted List II       | https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/                 | Medium     | Dummy + skip all duplicate groups                            |
| 6  | Remove Linked List Elements                 | https://leetcode.com/problems/remove-linked-list-elements/                           | Easy       | Dummy helps if head removed                                  |
| 7  | Remove Nth Node From End                    | https://leetcode.com/problems/remove-nth-node-from-end-of-list/                      | Medium     | Dummy + fast-slow                                            |
| 8  | Copy List with Random Pointer               | https://leetcode.com/problems/copy-list-with-random-pointer/                         | Medium     | Interleave (construction) or hash map                        |
| 9  | Design Linked List                          | https://leetcode.com/problems/design-linked-list/                                    | Medium     | Implement with dummy for index ops                           |
|10  | Add Two Numbers II                          | https://leetcode.com/problems/add-two-numbers-ii/                                    | Medium     | Reverse or stack + dummy                                     |
|11  | Sort List                                   | https://leetcode.com/problems/sort-list/                                             | Medium     | Merge uses dummy                                             |
|12  | Flatten a Multilevel Doubly Linked List     | https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/               | Medium     | Dummy + rearrange child pointers                             |
|13  | Insert into a Sorted Circular Linked List   | https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/             | Medium     | Dummy simplifies circular insert                             |
|14  | LRU Cache (doubly LL part)                  | https://leetcode.com/problems/lru-cache/                                             | Medium     | Doubly LL + dummy heads/tails                                |
|15  | LFU Cache (similar)                         | variants                                                                             | Hard       | Frequency buckets + doubly LL                                |
|16  | Merge Nodes in Between Zeros                | https://leetcode.com/problems/merge-nodes-in-between-zeros/                          | Medium     | Dummy + sum between zeros                                    |
|17  | Reorder List (merge part)                   | https://leetcode.com/problems/reorder-list/                                          | Medium     | Dummy helps in alternate merge                               |
|18  | Split Linked List in Parts                  | https://leetcode.com/problems/split-linked-list-in-parts/                            | Medium     | Dummy for each sublist head                                  |
|19  | Reverse Print (build reversed)              | variants                                                                             | Easy       | Dummy + insert at front                                      |
|20  | Delete Nodes From Linked List ...           | company variants                                                                     | Medium     | Dummy + conditional skip                                     |
|21  | Greatest Common Divisor Nodes Insert        | https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/        | Medium     | Dummy + insert between                                       |
|22  | Double Number as Linked List                | https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/          | Medium     | Dummy + carry from right (reverse first)                     |
|23  | Basic Calculator (expression → LL variant)  | rare variants                                                                        | Hard       | Sometimes LL used for digits                                 |

---

## Quick Tips for Linked List Problems
- Master these building blocks:
  - Fast-slow pointer template (`slow = fast = head; while fast and fast.next:`)
  - Reversal template (`prev = null; while curr: next = curr.next; curr.next = prev; ...`)
  - Dummy node (`dummy = ListNode(0); tail = dummy; ... return dummy.next`)
  - Cycle detection & start finding
  - Merge two sorted lists template
- Always draw small cases (3–6 nodes) on paper — test head change, single node, even/odd length.
- Handle edges: null head, one node, all same value, cycle at head/tail.
- Practice order: 6–8 easy → 8–10 medium per pattern, then hards.
- Many problems mix patterns (fast-slow + reversal, dummy + merge, etc.).

