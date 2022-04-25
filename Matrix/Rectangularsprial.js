function spiralTraversal(N, M, arr) {
    //write code here
    var bag = "";
    var count = 0;
    var top = 0;
    var left = 0;
    var right = arr[0].length
    var bottom = arr.length

    for (; count < N * M;) {
        for (var i = top; i < bottom && count < N * M; i++) {
            bag = bag + arr[i][left] + " ";
            count++;

        }
        left++;

        for (var i = left; i < right && count < N * M; i++) {
            bag = bag + arr[bottom - 1][i] + " ";
            count++;
        }

        bottom--;

        for (var i = bottom - 1; i >= top && count < N * M; i--) {
            bag = bag + arr[i][right - 1] + " ";
            count++;

        }
        right--;

        for (var i = right - 1; i >= left && count < N * M; i--) {
            bag = bag + arr[top][i] + " ";
            count++;
        }
        top++;


    }
    console.log(bag);