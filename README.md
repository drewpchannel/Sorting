Create a README.md file and for each algorithm include the following:

* Explain to a five year old how the algorithm works (3-4 sentences max)
* In your own words, describe the performance of the alogirthm for the following cases:
     * Best case scenario
     * Worst case scenario


###### Quick Sort

One number is chosen to be the pivot number.

All the numbers that are smaller go into a pile on the left and the larger numbers on the right.

The left pile has the pivot number added to it and it broken into smaller piles, with the smaller numbers going to the left.

The right pile is also seperated into smaller piles with the smaller numbers going to the left and then these piles are brought together.


###### Bubble Sort

The algorithm looks at the first two numbers in a list of numbers.

It compares the numbers and switches them if the first number is bigger.

The algorithm continues to run until it can not find any numbers to change.

This happens when all the first numbers are smaller than the second number.


###### Merge Sort

Merge sort breaks down all the numbers into indvidual groups.

These numbers get paired up and the larger number goes right, swapping places with the smaller number.

The pairs are joined up with another pair and the larger numbers go to the right again, swapping with the smaller number(s).

These piles are then brought together and the larger numbers are pushed right for the last time, still swapping places with the numbers next to them.


###### Insertion Sort

Each number is compared to every other number in a list.

When a number on the list is bigger, the number being compared is placed 1 spot further down the list.

When the number is the same and further down the list, than the compared number, every number gets moved one spot further down the list.

After every number is checked your list is in order.


###### Selection Sort

The first number is compared to the list of numbers.

The program checks for all numbers smaller than the compared number.

The compared number gets switched with the smallest or the smaller numbers.

This continues for the entire list.