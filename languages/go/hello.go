package main

import "fmt"

func main() {
	var name string = "Jeff"
	// name:="Jeff"
	name,age := "Jeff", 30

	myArray:=[3]string
	myArray[0] = "Hello"
	myArray[1] = "World"
	myArray[2] = "!"

	for x:= 0; x < len(myArray); x++ {
		fmt.Println(myArray[x])
	}

	myMap = map[string]string 
	myMap["name"] = "Jeff"
	myMap["age"] = "30"
	
	animal:= "Dog"
	if animal == "Dog" {
		fmt.Println("It's a dog!")
	} else {
		fmt.Println("It's not a dog.")
	}

	// store memory address of variable using pointer 
	var year int = 2021;
	var p * int = &year


	// also support concurrency with goroutines
	

	fmt.Println("Hello, World!")
}
