function zTraversal(N, arr) {
    //write code here
    var bag = "";
    for (var i = 0, j = 0; j <= arr.length - 1; j++) {
        bag = bag + arr[i][j] + " ";
    }
    for (var i = 1, j = arr.length - 2; i <= arr.length - 1 && j >= 0; i++, j--) {
        bag = bag + arr[i][j] + " ";
    }

    for (var i = arr.length - 1, j = 1; j < arr.length; j++) {
        bag = bag + arr[i][j] + " ";
    }
    console.log(bag);

}