
**Greedy Algorithm** follows the **"Take the locally optimal choice at each step"** hoping it leads to a global optimum.  
No backtracking. Extremely fast — usually **O(n log n)** due to sorting.

**When Greedy Works:**
- Optimal substructure + Greedy choice property
- Activity selection, interval scheduling, coin change (canonical), Huffman coding, MST, etc.
- Problems asking for **minimum / maximum** something with constraints

**Four Main Patterns** (covers 90%+ of Greedy questions on LeetCode):

---

## Pattern 1: Sort + Greedy (Most Common)

**What happens?**  
Sort the array/input first, then make greedy decisions while iterating.

**When to spot?**
- "Minimum cost", "Maximum profit", "Schedule activities"
- Interval problems, meeting rooms, task scheduling
- "Assign cookies", "Minimum platforms"

**C++ Template**
```cpp
int greedySort(vector<int>& nums) {
    sort(nums.begin(), nums.end());        // or custom comparator
    int result = 0;
    
    for(int i = 0; i < nums.size(); i++) {
        // Make greedy choice
        if (/* condition */) {
            result += /* optimal choice */;
        }
    }
    return result;
}
```

### LeetCode Problems – Sort + Greedy (12 Problems)

| No. | Problem Name                                      | LeetCode Link                                                                 | Difficulty | Quick Tip                              |
|-----|---------------------------------------------------|-------------------------------------------------------------------------------|------------|----------------------------------------|
| 1   | Assign Cookies                                    | https://leetcode.com/problems/assign-cookies/                                 | Easy       | Sort both + two pointers               |
| 2   | Non-overlapping Intervals                         | https://leetcode.com/problems/non-overlapping-intervals/                      | Medium     | Sort by end time, remove overlapping   |
| 3   | Minimum Number of Arrows to Burst Balloons        | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/     | Medium     | Sort by end, greedy shooting           |
| 4   | Meeting Rooms II                                  | https://leetcode.com/problems/meeting-rooms-ii/                               | Medium     | Sort + min-heap (or sweep line)        |
| 5   | Task Scheduler                                    | https://leetcode.com/problems/task-scheduler/                                 | Medium     | Greedy on frequency + cooldown         |
| 6   | Partition Labels                                  | https://leetcode.com/problems/partition-labels/                               | Medium     | Greedy on last occurrence              |
| 7   | Queue Reconstruction by Height                    | https://leetcode.com/problems/queue-reconstruction-by-height/                 | Medium     | Sort by height then k                  |
| 8   | Minimum Platforms (similar to Meeting Rooms II)   | Use 253 pattern                                                               | Medium     | Classic interval greedy                |
| 9   | Boats to Save People                              | https://leetcode.com/problems/boats-to-save-people/                           | Medium     | Sort + two pointers (light + heavy)    |
|10   | Minimum Cost to Connect Sticks                    | https://leetcode.com/problems/minimum-cost-to-connect-sticks/                 | Medium     | Sort + priority queue                  |
|11   | Largest Number                                    | https://leetcode.com/problems/largest-number/                                 | Medium     | Custom sort comparator                 |
|12   | Candy                                             | https://leetcode.com/problems/candy/                                          | Hard       | Two pass greedy (left + right)         |

---

## Pattern 2: Interval Greedy (Scheduling / Selection)

**What happens?**  
Select maximum number of non-overlapping intervals or minimize resources.

**When to spot?**
- "Maximum number of meetings", "Burst balloons", "Arrow shooting"
- Any "non-overlapping" or "minimum removal" problem

**Key Trick:** Always sort by **ending time** (not start time).

**C++ Template – Activity Selection**
```cpp
int maxActivities(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end(), [](vector<int>& a, vector<int>& b){
        return a[1] < b[1];        // sort by end time
    });
    
    int count = 1;
    int end = intervals[0][1];
    
    for(int i = 1; i < intervals.size(); i++) {
        if(intervals[i][0] >= end) {
            count++;
            end = intervals[i][1];
        }
    }
    return count;
}
```

### LeetCode Problems – Interval Greedy (10 Problems)

| No. | Problem Name                                      | LeetCode Link                                                                 | Difficulty | Quick Tip                              |
|-----|---------------------------------------------------|-------------------------------------------------------------------------------|------------|----------------------------------------|
| 1   | Non-overlapping Intervals                         | https://leetcode.com/problems/non-overlapping-intervals/                      | Medium     | Remove minimum to make non-overlapping |
| 2   | Minimum Number of Arrows to Burst Balloons        | https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/     | Medium     | Sort by end                            |
| 3   | Meeting Rooms II                                  | https://leetcode.com/problems/meeting-rooms-ii/                               | Medium     | Sort start + min-heap for end          |
| 4   | Interval List Intersections                       | https://leetcode.com/problems/interval-list-intersections/                    | Medium     | Two pointers                           |
| 5   | Maximum Length of Pair Chain                      | https://leetcode.com/problems/maximum-length-of-pair-chain/                   | Medium     | Similar to activity selection          |
| 6   | Video Stitching                                   | https://leetcode.com/problems/video-stitching/                                | Medium     | Greedy farthest reach                  |
| 7   | Jump Game II                                      | https://leetcode.com/problems/jump-game-ii/                                   | Medium     | Greedy farthest + current end          |
| 8   | Remove Covered Intervals                          | https://leetcode.com/problems/remove-covered-intervals/                       | Medium     | Sort by start, track max end           |
| 9   | Car Pooling                                       | https://leetcode.com/problems/car-pooling/                                    | Medium     | Sweep line / difference array          |
|10   | Minimum Number of Taps to Open to Water a Garden  | https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/ | Hard     | Jump Game II style                     |

---

## Pattern 3: Greedy on Priority / Frequency

**What happens?**  
Use max-heap (priority queue) to always pick the locally best option.

**When to spot?**
- "Rearrange string", "Task scheduler", "Huffman style"
- "Maximum / Minimum" with frequency constraints

**C++ Template**
```cpp
int greedyWithPQ(vector<int>& nums) {
    priority_queue<int> pq;           // max-heap
    for(int x : nums) pq.push(x);
    
    int result = 0;
    while(!pq.empty()) {
        // Always take the largest available
        int top = pq.top(); pq.pop();
        // greedy logic
    }
    return result;
}
```

### LeetCode Problems – Priority/Frequency Greedy (10 Problems)

| No. | Problem Name                                      | LeetCode Link                                                                 | Difficulty | Quick Tip                              |
|-----|---------------------------------------------------|-------------------------------------------------------------------------------|------------|----------------------------------------|
| 1   | Task Scheduler                                    | https://leetcode.com/problems/task-scheduler/                                 | Medium     | Frequency + idle time                  |
| 2   | Reorganize String                                 | https://leetcode.com/problems/reorganize-string/                              | Medium     | Max heap on frequency                  |
| 3   | Least Number of Unique Integers after K Removals  | https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/ | Medium   | Min-heap on frequency                  |
| 4   | Maximum Score From Removing Stones                | https://leetcode.com/problems/maximum-score-from-removing-stones/             | Medium     | Always reduce two largest              |
| 5   | Reduce Array Size to The Half                     | https://leetcode.com/problems/reduce-array-size-to-the-half/                  | Medium     | Greedy on frequency                    |
| 6   | Minimum Deletions to Make Character Frequencies Unique | https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/ | Medium | Greedy frequency sort                  |
| 7   | Longest Happy String                              | https://leetcode.com/problems/longest-happy-string/                           | Medium     | Max heap (a,b,c)                       |
| 8   | Construct String With Repeat Limit                | https://leetcode.com/problems/construct-string-with-repeat-limit/             | Medium     | Greedy with count                      |
| 9   | Maximum Number of Events That Can Be Attended     | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/  | Medium     | Sort + priority queue                  |
|10   | Single-Threaded CPU                               | https://leetcode.com/problems/single-threaded-cpu/                            | Medium     | Sort + min-heap                        |

---

## Pattern 4: Greedy on Value / Ratio (Fractional Knapsack Style)

**What happens?**  
Sort by value/weight ratio, or by some profit/cost metric.

**When to spot?**
- "Maximum profit", "Minimum cost", "Maximum value"
- Problems where you can take "partial" benefit (or simulate it)

**C++ Template**
```cpp
double maxValue(vector<Item>& items, int capacity) {
    sort(items.begin(), items.end(), [](Item& a, Item& b){
        return (double)a.value/a.weight > (double)b.value/b.weight;
    });
    
    double total = 0;
    for(auto& item : items) {
        if(capacity >= item.weight) {
            total += item.value;
            capacity -= item.weight;
        } else {
            total += (double)item.value * capacity / item.weight;
            break;
        }
    }
    return total;
}
```

### LeetCode Problems – Value/Ratio Greedy (8 Problems)

| No. | Problem Name                                      | LeetCode Link                                                                 | Difficulty | Quick Tip                              |
|-----|---------------------------------------------------|-------------------------------------------------------------------------------|------------|----------------------------------------|
| 1   | Maximum Profit in Job Scheduling                  | https://leetcode.com/problems/maximum-profit-in-job-scheduling/               | Hard       | Sort by end time + DP (greedy insight) |
| 2   | IPO                                               | https://leetcode.com/problems/ipo/                                            | Hard       | Two heaps (capital + profit)           |
| 3   | Maximum Performance of a Team                     | https://leetcode.com/problems/maximum-performance-of-a-team/                  | Hard       | Sort by efficiency + min-heap          |
| 4   | Video Stitching                                   | https://leetcode.com/problems/video-stitching/                                | Medium     | Greedy farthest                        |
| 5   | Jump Game II                                      | https://leetcode.com/problems/jump-game-ii/                                   | Medium     | Greedy max reach                       |
| 6   | Gas Station                                       | https://leetcode.com/problems/gas-station/                                    | Medium     | Track total & current sum              |
| 7   | Candy                                             | https://leetcode.com/problems/candy/                                          | Hard       | Two pass (left to right + right to left)|
| 8   | Delete Columns to Make Sorted II                  | https://leetcode.com/problems/delete-columns-to-make-sorted-ii/               | Medium     | Greedy column by column                |

---

**Tips for Beginners (C++)**

- **Sort first** — 70% of greedy problems become easy after sorting.
- Always ask: *"If I take the locally best choice now, does it prevent a better solution later?"*
- When in doubt, **sort by ending time** for intervals.
- Use **priority_queue** when you need to always pick max/min frequently.
- Greedy + Binary Search is a very powerful combination (many hard problems).
- Draw small examples and prove why greedy works.
- If greedy fails on some test case → probably needs DP.
- Practice: **5 easy + 12 medium** per pattern.

**Pro Tip:**  
Many "Greedy" problems are actually **"Sort + Greedy"** or **"Greedy + Binary Search on Answer"**.
