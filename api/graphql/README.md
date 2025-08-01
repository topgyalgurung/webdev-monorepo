# GraphQL Exercise

-  retrieve and manipulate data with GraphQL from  [Star Wars API (SWAPI)](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home)
-  [Explorer](https://studio.apollographql.com/public/star-wars-swapi/variant/current/explorer)

## Basic Task 

### 1. List all Films 
```Graphql
query Query {
    allFilms {
      films {
        title
      }
      }
  }
  ```
### 2. Fetch a specific character: Get the name of a specific character using their unique ID.
```graphql
{
  allPeople {
    people {
      id
      name
    }
  }
}
```
#### response

```JSON
    {
    "data": {
        "allPeople": {
        "people": [
            {
            "id": "cGVvcGxlOjE=",
            "name": "Luke Skywalker"
            },
            {
            "id": "cGVvcGxlOjI=",
            "name": "C-3PO"
            },
            {
            "id": "cGVvcGxlOjM=",
            "name": "R2-D2"
            },
```
pick one name you want to get using their unique id 
```graphql
    {
        person(id: "cGVvcGxlOjIw") {
        name
        }
    }
```
### response
```json
{
  "data": {
    "person": {
      "name": "Yoda"
    }
  }
}
```
### 3. Explore Planets. Get the names of the first 5 planets in the Star Wars universe.

```graphql
{
  allPlanets(first:5){
    planets{
      name
    }
  }
}
```
### response
```json
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "name": "Tatooine"
        },
        {
          "name": "Alderaan"
        },
        {
          "name": "Yavin IV"
        },
        {
          "name": "Hoth"
        },
        {
          "name": "Dagobah"
        }
      ]
    }
  }
}
```
#### 4. Starships Information: Fetch names and models of 3 starships.
```graphql
{
  allStarships(first:3){
    starships{
      name
      model
    }
  }
}
```
### response
```json
{
  "data": {
    "allStarships": {
      "starships": [
        {
          "name": "CR90 corvette",
          "model": "CR90 corvette"
        },
        {
          "name": "Star Destroyer",
          "model": "Imperial I-class Star Destroyer"
        },
        {
          "name": "Sentinel-class landing craft",
          "model": "Sentinel-class landing craft"
        }
      ]
    }
  }
}
```

## Intermediate Tasks

#### 1. Character and Their Starships: For each of the first 5 characters, list the names of starships they've piloted.
```graphql
{
  allPeople(first: 5) {
    people {
      name
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "starshipConnection": {
            "starships": [
              {
                "name": "X-wing"
              },
              {
                "name": "Imperial shuttle"
              }
            ]
          }
        },
        {
          "name": "C-3PO",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "R2-D2",
          "starshipConnection": {
            "starships": []
          }
        },
        {
          "name": "Darth Vader",
          "starshipConnection": {
            "starships": [
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "name": "Leia Organa",
          "starshipConnection": {
            "starships": []
          }
        }
      ]
    }
  }
}
```

#### 2.Species and Their Languages: Retrieve names and languages of 5 species.
```graphql
{
  allSpecies(first:5) {
    species {
      name
      language
    }
  }
}
```
#### response
```json
{
  "data": {
    "allSpecies": {
      "species": [
        {
          "name": "Human",
          "language": "Galactic Basic"
        },
        {
          "name": "Droid",
          "language": "n/a"
        },
        {
          "name": "Wookie",
          "language": "Shyriiwook"
        },
        {
          "name": "Rodian",
          "language": "Galatic Basic"
        },
        {
          "name": "Hutt",
          "language": "Huttese"
        }
      ]
    }
  }
}
```

#### 3. Planets and Their Climates: Query for the names and climates of 5 planets.
```graphql
{
  allPlanets(first: 5) {
    planets {
      name
      climates
    }
  }
}
```
#### response
```json
{
  "data": {
    "allPlanets": {
      "planets": [
        {
          "name": "Tatooine",
          "climates": [
            "arid"
          ]
        },
        {
          "name": "Alderaan",
          "climates": [
            "temperate"
          ]
        },
        {
          "name": "Yavin IV",
          "climates": [
            "temperate",
            "tropical"
          ]
        },
        {
          "name": "Hoth",
          "climates": [
            "frozen"
          ]
        },
        {
          "name": "Dagobah",
          "climates": [
            "murky"
          ]
        }
      ]
    }
  }
}
```

#### 4. Vehicles and Their Costs: Get names and cost in credits for 3 vehicles.
```graphql
{
  allVehicles(last:3) {
    vehicles {
      name
      costInCredits
    }
  }
}
```
#### response
```json
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Corporate Alliance tank droid",
          "costInCredits": 49000
        },
        {
          "name": "Droid gunship",
          "costInCredits": 60000
        },
        {
          "name": "AT-RT",
          "costInCredits": 40000
        }
      ]
    }
  }
}
```
### Advanced Tasks

1. **Characters in a Specific Film**: List all characters appearing in a given film by ID.
```graphql
{
  film(id:"ZmlsbXM6MQ=="){
    characterConnection {
      characters {
        name
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "film": {
      "characterConnection": {
        "characters": [
          {
            "name": "Luke Skywalker"
          },
          {
            "name": "C-3PO"
          },
          {
            "name": "R2-D2"
          },
          {
            "name": "Darth Vader"
          },
          {
            "name": "Leia Organa"
          },
          {
            "name": "Owen Lars"
          },
          {
            "name": "Beru Whitesun lars"
          },
          {
            "name": "R5-D4"
          },
          {
            "name": "Biggs Darklighter"
          },
          {
            "name": "Obi-Wan Kenobi"
          },
          {
            "name": "Wilhuff Tarkin"
          },
          {
            "name": "Chewbacca"
          },
          {
            "name": "Han Solo"
          },
          {
            "name": "Greedo"
          },
          {
            "name": "Jabba Desilijic Tiure"
          },
          {
            "name": "Wedge Antilles"
          },
          {
            "name": "Jek Tono Porkins"
          },
          {
            "name": "Raymus Antilles"
          }
        ]
      }
    }
  }
}
```
2. **Multi-Film Characters**: Find characters that appear in more than one film.
```graphql
{
  allPeople {
    people {
      filmConnection{
        totalCount
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "allPeople": {
      "people": [
        {
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 6
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 4
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "filmConnection": {
            "totalCount": 5
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 3
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 2
          }
        },
        {
          "filmConnection": {
            "totalCount": 1
          }
        }
      ]
    }
  }
}
```
3. **Aggregate Film Statistics**: Calculate the total number of characters across all films.
 ```graphql
 {
  allFilms {
    totalCount
  }
}
```
#### response
```json
{
  "data": {
    "allFilms": {
      "totalCount": 6
    }
  }
}
```

### Complex Tasks
1. **Full Character Profiles**: Compile a full profile for a given character, including their films, starships, and homeworld.
```graphql
{
  person(id:"cGVvcGxlOjE="){
    name
    gender
    birthYear
    filmConnection {
      films {
        title
      }
    }
    starshipConnection {
      starships {
        name
      }
    }
    homeworld {
      name
    }
  }
}
```
#### response
```json
{
  "data": {
    "person": {
      "name": "Luke Skywalker",
      "gender": "male",
      "birthYear": "19BBY",
      "filmConnection": {
        "films": [
          {
            "title": "A New Hope"
          },
          {
            "title": "The Empire Strikes Back"
          },
          {
            "title": "Return of the Jedi"
          },
          {
            "title": "Revenge of the Sith"
          }
        ]
      },
      "starshipConnection": {
        "starships": [
          {
            "name": "X-wing"
          },
          {
            "name": "Imperial shuttle"
          }
        ]
      },
      "homeworld": {
        "name": "Tatooine"
      }
    }
  }
}
```

2. **Link Characters with Their Planets**: Query the first 5 characters, including the name and population of their homeworld.
```graphql
{
  allPeople(first:5) {
    people{
      name
      homeworld {
        name
        population
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "allPeople": {
      "people": [
        {
          "name": "Luke Skywalker",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "C-3PO",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "R2-D2",
          "homeworld": {
            "name": "Naboo",
            "population": 4500000000
          }
        },
        {
          "name": "Darth Vader",
          "homeworld": {
            "name": "Tatooine",
            "population": 200000
          }
        },
        {
          "name": "Leia Organa",
          "homeworld": {
            "name": "Alderaan",
            "population": 2000000000
          }
        }
      ]
    }
  }
}
```
3. **Vehicles, Their Pilots, and Pilots' Species**: For the first 3 vehicles, list their names, pilots, and the species of those pilots.
```graphql
{
  allVehicles(first:3) {
    vehicles {
      name
      pilotConnection {
        pilots {
          name
          species {
            name
          }
        }
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "allVehicles": {
      "vehicles": [
        {
          "name": "Sand Crawler",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "T-16 skyhopper",
          "pilotConnection": {
            "pilots": []
          }
        },
        {
          "name": "X-34 landspeeder",
          "pilotConnection": {
            "pilots": []
          }
        }
      ]
    }
  }
}
```
4. **Films and Their Associated Entities**: For the first 3 films, list all related characters, planets, and starships.
```graphql
{
  allFilms(first:3){
    films{
      title
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
}
```
#### response
```json
{
  "data": {
    "allFilms": {
      "films": [
        {
          "title": "A New Hope",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Owen Lars"
              },
              {
                "name": "Beru Whitesun lars"
              },
              {
                "name": "R5-D4"
              },
              {
                "name": "Biggs Darklighter"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Wilhuff Tarkin"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Greedo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Jek Tono Porkins"
              },
              {
                "name": "Raymus Antilles"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Alderaan"
              },
              {
                "name": "Yavin IV"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Sentinel-class landing craft"
              },
              {
                "name": "Death Star"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "TIE Advanced x1"
              }
            ]
          }
        },
        {
          "title": "The Empire Strikes Back",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "IG-88"
              },
              {
                "name": "Bossk"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Lobot"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Hoth"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Bespin"
              },
              {
                "name": "Ord Mantell"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Slave 1"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              }
            ]
          }
        },
        {
          "title": "Return of the Jedi",
          "characterConnection": {
            "characters": [
              {
                "name": "Luke Skywalker"
              },
              {
                "name": "C-3PO"
              },
              {
                "name": "R2-D2"
              },
              {
                "name": "Darth Vader"
              },
              {
                "name": "Leia Organa"
              },
              {
                "name": "Obi-Wan Kenobi"
              },
              {
                "name": "Chewbacca"
              },
              {
                "name": "Han Solo"
              },
              {
                "name": "Jabba Desilijic Tiure"
              },
              {
                "name": "Wedge Antilles"
              },
              {
                "name": "Yoda"
              },
              {
                "name": "Palpatine"
              },
              {
                "name": "Boba Fett"
              },
              {
                "name": "Lando Calrissian"
              },
              {
                "name": "Ackbar"
              },
              {
                "name": "Mon Mothma"
              },
              {
                "name": "Arvel Crynyd"
              },
              {
                "name": "Wicket Systri Warrick"
              },
              {
                "name": "Nien Nunb"
              },
              {
                "name": "Bib Fortuna"
              }
            ]
          },
          "planetConnection": {
            "planets": [
              {
                "name": "Tatooine"
              },
              {
                "name": "Dagobah"
              },
              {
                "name": "Endor"
              },
              {
                "name": "Naboo"
              },
              {
                "name": "Coruscant"
              }
            ]
          },
          "starshipConnection": {
            "starships": [
              {
                "name": "CR90 corvette"
              },
              {
                "name": "Star Destroyer"
              },
              {
                "name": "Millennium Falcon"
              },
              {
                "name": "Y-wing"
              },
              {
                "name": "X-wing"
              },
              {
                "name": "Executor"
              },
              {
                "name": "Rebel transport"
              },
              {
                "name": "Imperial shuttle"
              },
              {
                "name": "EF76 Nebulon-B escort frigate"
              },
              {
                "name": "Calamari Cruiser"
              },
              {
                "name": "A-wing"
              },
              {
                "name": "B-wing"
              }
            ]
          }
        }
      ]
    }
  }
}
```