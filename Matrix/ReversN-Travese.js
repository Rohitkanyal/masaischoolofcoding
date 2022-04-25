function nTraversal(matrix) {
    var bag = "";
    for (var i = 0; i < matrix.length; i++) {
        bag = bag + matrix[i][0] + " ";
    }
    for (var i = matrix.length - 2, j = 1; i > 0 && j < matrix.length; i--, j++) {
        bag = bag + matrix[i][j] + " ";
    }

    for (var i = 0; i < matrix.length; i++) {
        bag = bag + matrix[i][matrix.length - 1] + " ";
    }
    console.log(bag);
}
