# The Librarian: Test-Driven Development

### TDD Test:
- add a test
- run all test and see if new test fails
- write some code
- run test and refactor code
- repeat

#### Two levels of TDD:
- Acceptance TDD: 
- Developer TDD: unit test 

##### Scaling TDD via Agile Model Development (AMDD)
- Iteration 0: envisioning initial architecture, scope  and initial requirements,
explore usage model, initial domain model, user interface (UI) model
tech diagrams, UI flow, domain models and change cases

- Iteration 1: Development
Iteration Modeling
Model Storming (JIT modeling): customer QA sessions
TDD (acceptance test, unit test, 
reviews(code inspection, model reviews


### Library module with books and memberships.

#### Project
- start with gradle project with build.gradle
- Project requirement user story:
  - As a librarian I want book-loving persons to become members of the library So that I can lend out books to them in the future
  - As an accountant,
I want a person being able to register for a membership just once
So that I don't end up having multiple memberships for the same person
  - library, person, (becoming) a member, (lending) books

# Steps:
1. First, make failing test in LibraryTest class 
2. create Library class to register members ...