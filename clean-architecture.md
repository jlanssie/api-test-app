# Clean Architecture

### SOLID Principles

* **SRP (Single Responsibility Principle):** A module should be responsible for one, and only one, actor.

* **OCP (Open-Closed Principle):** A software artifact should be open for extension but closed for modification.

* **LSP (Liskov Substitution Principle):** If for each object `o1` of type `S` there is an object `o2` of type `T` such that for all programs `P` defined in terms of `T`, the behavior of `P` is unchanged when `o1` is substituted for `o2`, then `S` is a subtype of `T`.

* **ISP (Interface Segregation Principle):** No code should be forced to depend on methods it does not use.

* **DIP (Dependency Inversion Principle):** High-level modules should not import anything from low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details; details (concrete implementations) should depend on abstractions.
