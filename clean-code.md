# Clean Code

### Meaningful Names

* **Do:** Be intention-revealing, pronounceable, and searchable.
* **Don't:** Use encodings, mental mapping, or funny names.

### Functions

* **Do:** Be small, do one thing, maintain one level of abstraction, be descriptive, limit arguments (no more than 3), and throw exceptions. Adhere to the DRY principle (Don't Repeat Yourself).
* **Don't:** Have side effects or return error codes.

### Classes

* **Do:** Adhere to the **Single Responsibility Principle**.

### Comments

* **Do:** Use for legal notices, informative notes, clarification, `TODO` items, or amplification.
* **Don't:** Be redundant, misleading, used as a journal, or contain too much information.

### Objects and Data Structures

* **Do:** Prefer objects (data types + functions) if you want flexibility in data. Prefer data structures (data types, e.g., DTOs) if you want flexibility in behaviors.

### Error Handling

* **Do:** Use exceptions, write `try-catch` statements first, and use unchecked exceptions.
* **Don't:** Return error codes, return `null`, or pass `null`.

### Boundaries

* **Do:** Keep third-party details out of your code by using interfaces and adapters.

### Unit Tests

* **Do:** Use Test-Driven Development (TDD) and ensure readability is key.
* **Don't:** Use more than one assert per test.
