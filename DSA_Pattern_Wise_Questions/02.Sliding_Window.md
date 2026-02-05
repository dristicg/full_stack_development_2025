# Sliding Window Pattern – DSA (Fixed & Variable)

**Sliding Window** is a super useful technique for array and string problems.  
Instead of checking every possible subarray (which is slow, O(n²)), we maintain a "window" that slides over the data step by step. This makes most problems run in **O(n)** time — very fast!

There are **two main types**:

1. **Fixed Size Sliding Window** (window size k is always the same)
2. **Variable Size Sliding Window** (window size changes based on conditions)

Think of it like a camera lens sliding along a film strip — you only look at a small part at a time and update as you move.

---

## Pattern 1: Fixed Size Sliding Window

**What happens?**  
- Window size **k** is given and **never changes**  
- Start with elements 0 to k-1  
- Slide right by 1 each time: remove leftmost, add new rightmost  
- Update your answer (max, min, sum, count, etc.)

**Super simple example**  
Array: [1, 12, -5, -6, 50, 3], k = 4  
Windows: [1,12,-5,-6] → sum=2  
         [12,-5,-6,50] → sum=51  
         [-5,-6,50,3] → sum=42  
Find max average → 51/4 = 12.75

**When should you think of this pattern?** (Beginner checklist)

- The problem says "subarray of size k", "exactly k elements", "window of length k"
- Ask for **max/min/sum/average/count** in all subarrays of **fixed length k**
- Words like "consecutive", "contiguous", "substring of length k"
- You need to look at every group of exactly k items

**Real-life analogy**  
Looking through a fixed-size magnifying glass sliding along a number line — always same zoom level.

### LeetCode Problems – Fixed Size Sliding Window (20 Problems)

| No. | Problem Name                                           | LeetCode Link                                                                 | Difficulty | Quick Tip for Beginners                                      |
|-----|--------------------------------------------------------|-------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| 1   | Maximum Average Subarray I                             | https://leetcode.com/problems/maximum-average-subarray-i/                     | Easy       | Compute initial sum, then slide & update max                 |
| 2   | Maximum Sum of Distinct Subarrays With Length K        | https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/| Medium     | Use set or map to track distinct elements in window          |
| 3   | Find All Anagrams in a String                          | https://leetcode.com/problems/find-all-anagrams-in-a-string/                  | Medium     | Count freq of chars — slide & compare counts                 |
| 4   | Permutation in String                                  | https://leetcode.com/problems/permutation-in-string/                          | Medium     | Same as anagrams — fixed window of size = pattern length     |
| 5   | Defuse the Bomb                                        | https://leetcode.com/problems/defuse-the-bomb/                                | Easy       | Circular — use modulo for wrap-around                        |
| 6   | Diet Plan Performance                                  | https://leetcode.com/problems/diet-plan-performance/                          | Easy       | Sum calories in k days, count good/bad days                  |
| 7   | Maximum Number of Vowels in a Substring of Given Length| https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/ | Easy   | Count vowels in fixed window                                 |
| 8   | Find K-Length Substrings With No Repeated Characters   | https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/ | Medium | Use set to check uniqueness                                  |
| 9   | Substring of Size Three with Distinct Characters       | https://leetcode.com/problems/substring-of-size-three-with-distinct-characters/ | Easy   | Fixed k=3, check distinct                                    |
| 10  | Grumpy Bookstore Owner                                 | https://leetcode.com/problems/grumpy-bookstore-owner/                         | Medium     | Fixed window of grumpy minutes — maximize satisfied          |
| 11  | Maximum Points You Can Obtain from Cards               | https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/       | Medium     | Take k from ends — equivalent to leave n-k in middle         |
| 12  | Sliding Window Maximum                                 | https://leetcode.com/problems/sliding-window-maximum/                         | Hard       | Use deque to keep decreasing order (important technique)     |
| 13  | Minimum Recolors to Get K Consecutive Black Blocks     | https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/ | Easy   | Count white in window — min recolors = min whites            |
| 14  | K Radius Subarray Averages                             | https://leetcode.com/problems/k-radius-subarray-averages/                     | Medium     | Window size 2k+1, compute averages                           |
| 15  | Maximum Sum of Almost Unique Subarray                  | https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/          | Medium     | Almost unique = at most 1 duplicate                          |
| 16  | Count Number of Nice Subarrays                         | https://leetcode.com/problems/count-number-of-nice-subarrays/                 | Medium     | Fixed k odds — count subarrays with exactly k odds           |
| 17  | Maximum Sum Circular Subarray                          | https://leetcode.com/problems/maximum-sum-circular-subarray/                  | Medium     | Kadane + total - min subarray (circular trick)               |
| 18  | Minimum Swaps to Group All 1s Together                 | https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/         | Medium     | Fixed window of size = number of 1s, min zeros in it         |
| 19  | Maximum Erasure Value                                  | https://leetcode.com/problems/maximum-erasure-value/                          | Medium     | Max sum subarray with distinct elements                      |
| 20  | Maximum Number of Occurrences of a Substring           | https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/   | Medium     | Fixed max size + min distinct chars                          |

---

## Pattern 2: Variable Size Sliding Window

**What happens?**  
- Window size is **not fixed** — it grows and shrinks  
- Move right pointer to **expand** window  
- When condition breaks (sum too big, too many distinct chars, etc.) → move left pointer to **shrink**  
- Keep track of best answer (longest, shortest, count, etc.)

**Super simple example**  
Longest substring without repeating chars: "abcabcbb"  
Expand right → "abc" (good) → "abca" (repeat 'a') → shrink left until no repeat → continue

**When should you think of this pattern?** (Beginner checklist)

- Window size **not given** — you have to find it
- Ask for **longest** or **shortest** subarray/substring that satisfies something
- Condition like "sum ≤ target", "at most k distinct", "no repeating", "exactly k something"
- You expand as much as possible, shrink when invalid
- Words: "longest", "minimum length", "at most k", "subarray with sum = k"

**Real-life analogy**  
Fishing net — you cast it wide (expand), but if too many bad fish → pull it in (shrink) until only good ones remain.

### LeetCode Problems – Variable Size Sliding Window (20 Problems)

| No. | Problem Name                                           | LeetCode Link                                                                 | Difficulty | Quick Tip for Beginners                                      |
|-----|--------------------------------------------------------|-------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| 1   | Longest Substring Without Repeating Characters         | https://leetcode.com/problems/longest-substring-without-repeating-characters/ | Medium     | Use map for last seen index — classic!                       |
| 2   | Minimum Window Substring                               | https://leetcode.com/problems/minimum-window-substring/                       | Hard       | Two maps: needed vs current count — shrink when valid        |
| 3   | Longest Repeating Character Replacement                | https://leetcode.com/problems/longest-repeating-character-replacement/        | Medium     | Max freq + k replacements → longest window                  |
| 4   | Max Consecutive Ones III                               | https://leetcode.com/problems/max-consecutive-ones-iii/                       | Medium     | Flip at most k zeros → longest 1s                            |
| 5   | Subarray Sum Equals K                                  | https://leetcode.com/problems/subarray-sum-equals-k/                          | Medium     | Prefix sum + hashmap (count occurrences)                     |
| 6   | Fruit Into Baskets                                     | https://leetcode.com/problems/fruit-into-baskets/                             | Medium     | At most 2 types — use map for fruit count                    |
| 7   | Longest Subarray of 1's After Deleting One Element     | https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/ | Medium | Max consecutive 1s with one flip                             |
| 8   | Binary Subarrays With Sum                              | https://leetcode.com/problems/binary-subarrays-with-sum/                      | Medium     | Prefix sum for exactly k ones                                |
| 9   | Minimum Size Subarray Sum                              | https://leetcode.com/problems/minimum-size-subarray-sum/                      | Medium     | Shrink when sum >= target → track min length                 |
| 10  | Longest Nice Subarray                                  | https://leetcode.com/problems/longest-nice-subarray/                          | Medium     | Bitwise AND of subarray == 0                                 |
| 11  | Subarrays with K Different Integers                    | https://leetcode.com/problems/subarrays-with-k-different-integers/            | Medium     | Count subarrays with exactly k distinct                      |
| 12  | Count Number of Nice Subarrays                         | https://leetcode.com/problems/count-number-of-nice-subarrays/                 | Medium     | Exactly k odd numbers                                        |
| 13  | Replace the Substring for Balanced String              | https://leetcode.com/problems/replace-the-substring-for-balanced-string/      | Medium     | Min window to make string balanced                           |
| 14  | Longest Continuous Subarray With Absolute Diff ≤ Limit | https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/ | Medium | Use multiset/deque for max-min in window                     |
| 15  | Longest Turbulent Subarray                             | https://leetcode.com/problems/longest-turbulent-subarray/                     | Medium     | > or < alternating                                           |
| 16  | Subarray Product Less Than K                           | https://leetcode.com/problems/subarray-product-less-than-k/                   | Medium     | Count subarrays with product < k                             |
| 17  | Minimum Operations to Reduce X to Zero                 | https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/         | Medium     | Longest subarray sum = total - x                             |
| 18  | Longest Substring with At Most Two Distinct Characters | https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/ | Medium | At most 2 chars — map count                                  |
| 19  | Longest Substring with At Most K Distinct Characters   | https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/ | Medium | Generalize — map + shrink when >k distinct                   |
| 20  | Maximum Length of a Subarray With Positive Product     | https://leetcode.com/problems/maximum-length-of-a-subarray-with-positive-product/ | Medium | Count negatives — handle zeros                               |

**Tips for Beginners**
- Start with fixed size — easier to code (no shrink logic)
- Practice initial window sum/count first, then slide
- For variable: always expand right, check condition, shrink left while invalid
- Use hashmap/set/deque for tracking state in window
- Draw small array (8–10 elements) and simulate pointers
- Solve 5 easy + 5 medium from each type first
