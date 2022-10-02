// Formation Day
/*
You are standing at the foot of a mountain, looking up a peak and wondering if it is a false summit or not. A false summit is a visible highpoint that obscures the true summit from view. For example:
                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - heights
In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because the false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because only the false summit is visible from the first position.
                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 9 10 9 8 7 7 - true (slope < 1)
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations (slope 1)

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen from the first position. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

The function takes an array of elevations. The first elevation will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.

 
[1,2,3,4] -> false (no false summit)
[1,4,2,3]  --> false
[1,4,2,2,2,5] -> true

     .
   . . 
   . .
   . .
x. . .
[1,4,5] -> 
Is there a false summit
true - xxxXxx <-
false - xxxxxxxxx

[1,3,5] - > is this false 
[]
examples - 
 x
[3, 5, 7, 20, 10, 9, 12] => false? [20 is the tallest point] 

                     /\
                    /  \
              /\   /    \
X ___________/  \ /      \

                      /\
                     /  \
   /\               /    \
X /  \_____________/      \

       _
  _   / \
x/ \_/   \_
  1 0  2  0

*/

