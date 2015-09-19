# Lookup and Reference functions

Syntax and practical examples of support functions in the library.

## ADDRESS<a id="sec-1" name="sec-1"></a>

Returns a cell reference given a row and column.

    ADDRESS(1, 1) = "$A$1"

    ADDRESS(1, 2, 2) = "B$1"

    ADDRESS(3, 2, 3) = "$B3"

## COLUMN<a id="sec-2" name="sec-2"></a>

Returns the column number of a specified cell.

    COLUMN(A1) = "A"

    COLUMN("A1") = "A"

## COLUMNS<a id="sec-3" name="sec-3"></a>

Returns the number of columns in a specified array or range.

    COLUMNS({1,2,3,4,5}) = 5

All columns must be same size.

    COLUMNS({1,2,3,4,5;1,2,3,4,5}) = 5

When they are not the same size then ##VALUE? is returned.

    ISERROR(COLUMNS({1,2,3,4,5;1,2}))

## HLOOKUP<a id="sec-4" name="sec-4"></a>

Lookup a value in a table hortizonally on the first row and retreive a value from the matching column and specified row.

#### Syntax<a id="sec-4-1" name="sec-4-1"></a>

HLOOKUP(lookup\_value, lookup\_array, index, exactmatch)

#### Examples<a id="sec-4-2" name="sec-4-2"></a>

    HLOOKUP("C", {{"A","B","C"},{1,2,3}}, 2) = 3

## INDEX<a id="sec-5" name="sec-5"></a>

Lookup an index in an array or reference.

#### Array Form<a id="sec-5-1" name="sec-5-1"></a>

###### Syntax<a id="sec-5-1-1" name="sec-5-1-1"></a>

INDEX(array, row\_num, [column\_num])

###### Examples<a id="sec-5-1-2" name="sec-5-1-2"></a>

    INDEX({{"A","B","C"}}, 1, 1) = "A"

    INDEX({{"A","B","C"}}, 1, 2) = "B"

    INDEX({{"A","B","C"}, {"D"}}, 2) = "D"

    INDEX({"A","B","C";"D"}, 1, 3) = "C"

#### Referenced Form<a id="sec-5-2" name="sec-5-2"></a>

###### Syntax<a id="sec-5-2-1" name="sec-5-2-1"></a>

INDEX(reference, row\_offset, [column\_offset])

## INDIRECT<a id="sec-6" name="sec-6"></a>

Returns a cell reference given a string.

    ISCELL(INDIRECT("A1"))

## LOOKUP<a id="sec-7" name="sec-7"></a>

#### Vector Form<a id="sec-7-1" name="sec-7-1"></a>

###### Syntax<a id="sec-7-1-1" name="sec-7-1-1"></a>

LOOKUP(lookup\_value, lookup\_vector, lookup\_array)

###### Examples<a id="sec-7-1-2" name="sec-7-1-2"></a>

    LOOKUP("C", {"A","B","C"}, {1,2,3}) = 3

#### TODO Array Form<a id="sec-7-2" name="sec-7-2"></a>

The array form searches the array by row or column depending on the dimensions of the array.

If the array is wider then tall then the search is on the first row; the result being from the matching row and last column.

If the array is taller then wide then the search is on the first column; the result being from the last row and matching column.

###### Syntax<a id="sec-7-2-1" name="sec-7-2-1"></a>

LOOKUP(lookup\_value, lookup\_array)

###### Examples<a id="sec-7-2-2" name="sec-7-2-2"></a>

Wide Array:

    LOOKUP("C", {"A","B","C","D","E","F";"foo";1,2,3,4,5,6}) = 3

Tall Array:

    LOOKUP("C", {"A",1;"B",2;"C",3;"D",4;"E",5;"F",6}) = 3

## MATCH<a id="sec-8" name="sec-8"></a>

Returns the column matched by a **lookup\_value** in a **lookup\_reference**.

#### Syntax<a id="sec-8-1" name="sec-8-1"></a>

MATCH(lookup\_value, lookup\_reference, match\_type)

#### Examples<a id="sec-8-2" name="sec-8-2"></a>

    =MATCH("b",{"a","b","c"},0) = 2

    =MATCH("a",{"aa","bb","cc"},0) = NA()

    =MATCH("a?",{"aa","bb","cc"},0) = 1

    =MATCH("?b",{"aa","bb","cc"},0) = 2

    =MATCH("b~",{"aa","b?","cc"},0) = 2

    =MATCH("c*c",{"aa","b?","cfoobarc"},0) = 3

## OFFSET<a id="sec-9" name="sec-9"></a>

Returns a reference to a cell a given number of rows and columns from a reference.

#### Syntax<a id="sec-9-1" name="sec-9-1"></a>

OFFSET(ref, rows, cols, height, width)

## ROW<a id="sec-10" name="sec-10"></a>

Returns the row number of a specified cell.

    ROW(A1) = 1

    ROW("B10") = 10

## ROWS<a id="sec-11" name="sec-11"></a>

Returns the number of rows in a specified array or range.

    ROWS({1;2;3;4;5;6}) = 6

## VLOOKUP<a id="sec-12" name="sec-12"></a>

Lookup a value in a table hortizonally on the first row and retreive a value from the matching row and specified column.

#### Syntax<a id="sec-12-1" name="sec-12-1"></a>

VLOOKUP(lookup\_value, lookup\_reference, index, [exactmatch])

#### Examples<a id="sec-12-2" name="sec-12-2"></a>

    VLOOKUP("C", {"A",1;"B",2;"C",3}, 2) = 3
