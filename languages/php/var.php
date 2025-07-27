$x = 5;
$y = "John";

$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}
myTest();


 <!-- strings  -->
$x = "Hello World!";
echo strtoupper($x);


<!-- Split the string into an array. -->
$x = "Hello World!";
$y = explode(" ", $x);