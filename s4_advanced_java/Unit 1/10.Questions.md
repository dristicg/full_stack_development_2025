# UNIT 1: Foundations of Enterprise Java & JDBC

---

## Q1. Define Enterprise Java. How is it different from Core Java?

### Enterprise Java (Java EE / Jakarta EE)
Enterprise Java is a **collection of APIs and technologies** built on top of Core Java, designed for developing **large-scale, distributed, multi-tier, and secure applications** for businesses and organizations.

### Key Differences

| Aspect | Core Java (Java SE) | Enterprise Java (Java EE) |
|--------|---------------------|---------------------------|
| **Purpose** | Desktop apps, standalone programs | Web apps, enterprise systems |
| **Scale** | Small to medium applications | Large-scale distributed systems |
| **Architecture** | Single-tier | Multi-tier (Presentation, Business, Data) |
| **APIs** | Basic (I/O, Collections, Threads) | Advanced (Servlets, JSP, EJB, JPA) |
| **Server** | Not required | Requires Application Server (Tomcat, GlassFish) |
| **Database** | Basic JDBC | JPA, Connection Pooling, Transactions |
| **Security** | Basic security | Enterprise-level authentication & authorization |

### Example
- **Core Java**: A calculator application
- **Enterprise Java**: An online banking system with thousands of users

---

## Q2. What is MVC Architecture? Explain its components with a neat labeled diagram.

### Definition
MVC (Model-View-Controller) is a **software design pattern** that separates an application into three interconnected components to promote organized code and separation of concerns.

### Components

#### 1. Model (Data Layer)
- **Purpose**: Handles data and business logic
- **Responsibilities**:
  - Database operations (CRUD)
  - Business rules and validations
  - Data processing
- **Example**: Student.java (Java Bean), StudentDAO.java

#### 2. View (Presentation Layer)
- **Purpose**: Displays data to the user
- **Responsibilities**:
  - User interface (UI)
  - Rendering HTML/JSP pages
  - Showing results
- **Example**: student.jsp, index.html

#### 3. Controller (Control Layer)
- **Purpose**: Acts as intermediary between Model and View
- **Responsibilities**:
  - Receives user requests
  - Calls appropriate Model methods
  - Selects View for response
- **Example**: StudentServlet.java

### MVC Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER/BROWSER                            │
│                    (Sends Request / Views Response)             │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONTROLLER                                 │
│                   (Servlet / Action)                            │
│         • Receives HTTP Request                                 │
│         • Processes User Input                                  │
│         • Calls Model for Data                                  │
│         • Selects View for Response                             │
└──────────────┬─────────────────────────────┬────────────────────┘
               │                             │
               │ 2. Request Data             │ 4. Forward to View
               ▼                             ▼
┌──────────────────────────┐    ┌──────────────────────────────────┐
│         MODEL            │    │            VIEW                  │
│    (Java Bean + DAO)     │    │         (JSP / HTML)             │
│                          │    │                                  │
│ • Business Logic         │    │ • Display Data                   │
│ • Database Operations    │    │ • User Interface                 │
│ • Data Validation        │    │ • Forms & Tables                 │
│                          │    │                                  │
└──────────────┬───────────┘    └──────────────────────────────────┘
               │
               │ 3. Return Data
               │
               ▼
        ┌─────────────┐
        │  DATABASE   │
        └─────────────┘
```

### Flow of MVC
1. User sends request to Controller
2. Controller calls Model for data
3. Model fetches/processes data from Database
4. Controller receives data and forwards to View
5. View displays result to User

---

## Q5. What is JDBC? Explain the JDBC Architecture with a diagram.

### Definition
JDBC (Java Database Connectivity) is a **Java API** that provides a standard way to connect Java applications with databases. It allows you to execute SQL queries and retrieve results.

### JDBC Architecture Components

#### 1. JDBC API
- Set of interfaces and classes in `java.sql` and `javax.sql` packages
- Provides methods for connecting, querying, and managing databases
- Key interfaces: `Connection`, `Statement`, `ResultSet`, `PreparedStatement`

#### 2. JDBC Driver Manager
- **Class**: `java.sql.DriverManager`
- Acts as a **layer between application and drivers**
- Manages list of database drivers
- Establishes connection using `getConnection()` method

#### 3. JDBC Driver API
- Interface that database vendors must implement
- Handles actual database communication
- Converts JDBC calls to database-specific calls

#### 4. JDBC Drivers
- Software components provided by database vendors
- Translates Java calls to database protocol
- Four types: Type-1, Type-2, Type-3, Type-4

### JDBC Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      JAVA APPLICATION                           │
│              (Your Java Program with JDBC code)                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         JDBC API                                │
│        (java.sql package: Connection, Statement, ResultSet)     │
│                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐     │
│   │ Connection   │  │  Statement   │  │    ResultSet     │     │
│   └──────────────┘  └──────────────┘  └──────────────────┘     │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DRIVER MANAGER                              │
│              (java.sql.DriverManager class)                     │
│         • Loads appropriate driver                              │
│         • Establishes database connection                       │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      JDBC DRIVER API                            │
│              (Driver interface implementation)                  │
└─────────────────────────────┬───────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  MySQL Driver │    │ Oracle Driver │    │  PostgreSQL   │
│               │    │               │    │    Driver     │
└───────┬───────┘    └───────┬───────┘    └───────┬───────┘
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│     MySQL     │    │    Oracle     │    │  PostgreSQL   │
│   Database    │    │   Database    │    │   Database    │
└───────────────┘    └───────────────┘    └───────────────┘
```

### Two-Tier vs Three-Tier Architecture

**Two-Tier**: Java App → JDBC Driver → Database

**Three-Tier**: Java App → Application Server → Database

---

## Q6. List and explain the four types of JDBC drivers with advantages and disadvantages.

### Type-1: JDBC-ODBC Bridge Driver

**How it works**: Converts JDBC calls → ODBC calls → Database

```
Java App → JDBC API → ODBC Driver → Database
```

| Advantages | Disadvantages |
|------------|---------------|
| Easy to use, comes with JDK | Slow performance (multiple conversions) |
| Can connect to any ODBC-supported database | Not suitable for web applications |
| Good for testing and learning | ODBC driver must be installed on client |
| | Platform dependent |

---

### Type-2: Native-API Driver (Partially Java)

**How it works**: Uses native database client libraries

```
Java App → JDBC API → Native API (C/C++) → Database
```

| Advantages | Disadvantages |
|------------|---------------|
| Faster than Type-1 | Native library required on client |
| Better performance | Platform dependent |
| | Not suitable for internet applications |

---

### Type-3: Network Protocol Driver (Middleware)

**How it works**: Uses middleware server to connect to database

```
Java App → Middleware Server → Database
```

| Advantages | Disadvantages |
|------------|---------------|
| No client-side library needed | Requires middleware server |
| Platform independent | Extra network call (slower) |
| Good for internet applications | Middleware maintenance cost |
| Can connect to multiple databases | |

---

### Type-4: Thin Driver (Pure Java)

**How it works**: Directly converts JDBC calls to database protocol

```
Java App → JDBC API → Database Protocol → Database
```

| Advantages | Disadvantages |
|------------|---------------|
| **Fastest performance** | Different driver for each database |
| Platform independent | |
| No native library required | |
| Best for web applications | |
| Most commonly used today | |

### Driver Comparison Summary

| Feature | Type-1 | Type-2 | Type-3 | Type-4 |
|---------|--------|--------|--------|--------|
| Speed | Slowest | Fast | Medium | Fastest |
| Platform Independent | No | No | Yes | Yes |
| Client Installation | ODBC | Native Lib | Nothing | Nothing |
| Best For | Testing | Desktop | Enterprise | Web Apps |

**Exam Tip**: Type-4 (Thin Driver) is most commonly used in real projects!

---

## Q7. Explain the step-by-step process of connecting a Java application to a database using JDBC.

### 6 Steps to Connect Java with Database

```
Step 1: Load Driver → Step 2: Establish Connection → Step 3: Create Statement 
    → Step 4: Execute Query → Step 5: Process Results → Step 6: Close Connection
```

---

### Step 1: Load the JDBC Driver

```java
// For MySQL
Class.forName("com.mysql.cj.jdbc.Driver");

// For Oracle
Class.forName("oracle.jdbc.driver.OracleDriver");

// For PostgreSQL
Class.forName("org.postgresql.Driver");
```

**Purpose**: Registers the driver with DriverManager

---

### Step 2: Establish Connection

```java
String url = "jdbc:mysql://localhost:3306/mydb";
String username = "root";
String password = "password";

Connection con = DriverManager.getConnection(url, username, password);
```

**URL Format**: `jdbc:mysql://host:port/database`

---

### Step 3: Create Statement Object

```java
// Simple Statement
Statement stmt = con.createStatement();

// PreparedStatement (Recommended)
PreparedStatement pstmt = con.prepareStatement("SELECT * FROM students WHERE id=?");
```

---

### Step 4: Execute Query

```java
// For SELECT queries
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

// For INSERT, UPDATE, DELETE
int rowsAffected = stmt.executeUpdate("DELETE FROM students WHERE id=5");
```

---

### Step 5: Process ResultSet

```java
while(rs.next()) {
    int id = rs.getInt("id");
    String name = rs.getString("name");
    int marks = rs.getInt("marks");
    
    System.out.println(id + " - " + name + " - " + marks);
}
```

---

### Step 6: Close All Connections

```java
rs.close();      // Close ResultSet
stmt.close();    // Close Statement
con.close();     // Close Connection
```

**Important**: Always close in reverse order of creation!

---

### Complete Example Program

```java
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;
        
        try {
            // Step 1: Load Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver loaded successfully!");
            
            // Step 2: Establish Connection
            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/school", "root", "password");
            System.out.println("Connected to database!");
            
            // Step 3: Create Statement
            stmt = con.createStatement();
            
            // Step 4: Execute Query
            rs = stmt.executeQuery("SELECT * FROM students");
            
            // Step 5: Process Results
            System.out.println("ID\tName\tMarks");
            System.out.println("------------------------");
            while(rs.next()) {
                System.out.println(rs.getInt(1) + "\t" + 
                                   rs.getString(2) + "\t" + 
                                   rs.getInt(3));
            }
            
        } catch(ClassNotFoundException e) {
            System.out.println("Driver not found: " + e.getMessage());
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        } finally {
            // Step 6: Close Connections
            try {
                if(rs != null) rs.close();
                if(stmt != null) stmt.close();
                if(con != null) con.close();
                System.out.println("Connections closed!");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

---

---

## Q8. What is the purpose of `Class.forName()` method in JDBC?

### Purpose
`Class.forName()` is used to **dynamically load the JDBC driver class** into memory at runtime.

### How it Works

```java
Class.forName("com.mysql.cj.jdbc.Driver");
```

**Behind the scenes:**
1. JVM loads the driver class into memory
2. Driver class has a **static block** that automatically registers itself with DriverManager
3. No need to manually create driver object

### Static Block in Driver Class

```java
// Inside MySQL Driver class (simplified)
public class Driver implements java.sql.Driver {
    static {
        try {
            DriverManager.registerDriver(new Driver());
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
```

### What happens if Driver class is not found?

**ClassNotFoundException** is thrown!

```java
try {
    Class.forName("com.mysql.cj.jdbc.Driver");
} catch (ClassNotFoundException e) {
    System.out.println("Error: MySQL driver JAR not found!");
    System.out.println("Add mysql-connector-java.jar to classpath");
}
```

**Common Causes:**
- Driver JAR file not added to project
- Wrong driver class name
- JAR file corrupted

### Note (JDBC 4.0+)
From JDBC 4.0 onwards, `Class.forName()` is **optional**. Drivers are loaded automatically if present in classpath. But it's still used for backward compatibility.

---

## Q9. Explain the role of `DriverManager` class. How does `getConnection()` method work?

### DriverManager Class

**Package**: `java.sql.DriverManager`

**Role**: Acts as a **factory class** that manages database drivers and creates database connections.

### Key Responsibilities

1. **Maintains list of registered drivers**
2. **Establishes connections** using appropriate driver
3. **Handles login timeout** for connections
4. **Provides logging** for JDBC operations

### Important Methods

| Method | Description |
|--------|-------------|
| `getConnection(url, user, pass)` | Creates database connection |
| `registerDriver(driver)` | Registers a JDBC driver |
| `deregisterDriver(driver)` | Removes a driver |
| `getDrivers()` | Returns list of loaded drivers |
| `setLoginTimeout(seconds)` | Sets connection timeout |

### How getConnection() Works

```java
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/mydb",  // URL
    "root",                                // Username
    "password"                             // Password
);
```

**Step-by-step process:**

```
1. DriverManager receives connection request
           ↓
2. Loops through all registered drivers
           ↓
3. Asks each driver: "Can you handle this URL?"
           ↓
4. Matching driver creates Connection object
           ↓
5. Connection object returned to application
```

### URL Format for Different Databases

```java
// MySQL
"jdbc:mysql://localhost:3306/database_name"

// Oracle
"jdbc:oracle:thin:@localhost:1521:database_name"

// PostgreSQL
"jdbc:postgresql://localhost:5432/database_name"

// SQL Server
"jdbc:sqlserver://localhost:1433;databaseName=db_name"
```

### Overloaded getConnection() Methods

```java
// Method 1: Separate parameters
Connection con = DriverManager.getConnection(url, username, password);

// Method 2: Using Properties object
Properties props = new Properties();
props.setProperty("user", "root");
props.setProperty("password", "password");
Connection con = DriverManager.getConnection(url, props);

// Method 3: Embedded in URL
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/mydb?user=root&password=password"
);
```

---

## Q10. What is `Connection` interface? List and explain its important methods.

### Definition
`Connection` interface represents a **session/connection** with a specific database. All SQL operations are performed through this connection object.

**Package**: `java.sql.Connection`

### How to Get Connection Object

```java
Connection con = DriverManager.getConnection(url, user, password);
```

### Important Methods of Connection Interface

#### 1. Statement Creation Methods

```java
// Simple Statement
Statement stmt = con.createStatement();

// PreparedStatement (for parameterized queries)
PreparedStatement pstmt = con.prepareStatement("INSERT INTO students VALUES(?,?,?)");

// CallableStatement (for stored procedures)
CallableStatement cstmt = con.prepareCall("{call myProcedure(?)}");
```

#### 2. Transaction Management Methods

```java
// Disable auto-commit (for manual transaction control)
con.setAutoCommit(false);

// Save changes permanently
con.commit();

// Undo changes
con.rollback();

// Create savepoint
Savepoint sp = con.setSavepoint("point1");
con.rollback(sp);  // Rollback to savepoint
```

#### 3. Connection Management Methods

```java
// Close connection
con.close();

// Check if connection is closed
boolean closed = con.isClosed();

// Check if connection is valid
boolean valid = con.isValid(5);  // 5 second timeout
```

#### 4. Metadata Methods

```java
// Get database information
DatabaseMetaData dbInfo = con.getMetaData();

System.out.println("Database: " + dbInfo.getDatabaseProductName());
System.out.println("Version: " + dbInfo.getDatabaseProductVersion());
System.out.println("Driver: " + dbInfo.getDriverName());
```

### Summary Table

| Method | Return Type | Purpose |
|--------|-------------|---------|
| `createStatement()` | Statement | Creates simple statement |
| `prepareStatement(sql)` | PreparedStatement | Creates parameterized statement |
| `prepareCall(sql)` | CallableStatement | Calls stored procedure |
| `setAutoCommit(boolean)` | void | Enable/disable auto-commit |
| `commit()` | void | Save transaction |
| `rollback()` | void | Undo transaction |
| `close()` | void | Close connection |
| `isClosed()` | boolean | Check connection status |
| `getMetaData()` | DatabaseMetaData | Get database info |

---

## Q11. Differentiate between Statement, PreparedStatement, and CallableStatement.

### Comparison Table

| Feature | Statement | PreparedStatement | CallableStatement |
|---------|-----------|-------------------|-------------------|
| **Purpose** | Simple static SQL | Parameterized SQL | Stored Procedures |
| **Performance** | Slow (compiled each time) | Fast (pre-compiled) | Fast |
| **SQL Injection** | Vulnerable | **Safe** | Safe |
| **Parameters** | No (concatenation) | Yes (? placeholders) | Yes (IN, OUT, INOUT) |
| **Best For** | Simple, one-time queries | Repeated queries | Complex DB operations |

---

### 1. Statement (Simple Queries)

```java
Statement stmt = con.createStatement();

// Problem: SQL Injection vulnerable!
String name = "John";
ResultSet rs = stmt.executeQuery("SELECT * FROM users WHERE name='" + name + "'");
```

**When to use**: DDL operations, simple one-time queries

---

### 2. PreparedStatement (Parameterized Queries) 

```java
// Pre-compiled query with placeholders
PreparedStatement pstmt = con.prepareStatement(
    "SELECT * FROM users WHERE name = ? AND age > ?"
);

// Set parameter values
pstmt.setString(1, "John");   // First ?
pstmt.setInt(2, 25);          // Second ?

ResultSet rs = pstmt.executeQuery();
```

**When to use**: 
- INSERT, UPDATE, DELETE operations
- Queries executed multiple times
- When security is important (prevents SQL Injection)

---

### 3. CallableStatement (Stored Procedures)

```java
// SQL Stored Procedure
// CREATE PROCEDURE getStudent(IN sid INT, OUT sname VARCHAR(50))

CallableStatement cstmt = con.prepareCall("{call getStudent(?, ?)}");

// IN parameter
cstmt.setInt(1, 101);

// OUT parameter
cstmt.registerOutParameter(2, Types.VARCHAR);

cstmt.execute();

// Get OUT parameter value
String studentName = cstmt.getString(2);
System.out.println("Name: " + studentName);
```

**When to use**: Calling stored procedures/functions in database

---

### Visual Comparison

```
┌─────────────────────────────────────────────────────────────┐
│                      Statement Types                        │
├─────────────────┬─────────────────┬─────────────────────────┤
│   Statement     │ PreparedStatemen│   CallableStatement     │
├─────────────────┼─────────────────┼─────────────────────────┤
│ "SELECT * FROM  │ "SELECT * FROM  │ "{call procedure(?)}"   │
│  users WHERE    │  users WHERE    │                         │
│  name='John'"   │  name = ?"      │ IN, OUT, INOUT params   │
├─────────────────┼─────────────────┼─────────────────────────┤
│  SQL Injection  │  Safe           │  Safe                   │
│  Slow           │  Fast           │  Fast                   │
└─────────────────┴─────────────────┴─────────────────────────┘
```

---

## Q12. What is SQL Injection? How does PreparedStatement prevent it?

### What is SQL Injection?

SQL Injection is a **code injection attack** where malicious SQL code is inserted into input fields to manipulate or access the database illegally.

### How SQL Injection Works (Vulnerable Code)

```java
// DANGEROUS CODE - Never do this!
String username = request.getParameter("username");  // User input
String password = request.getParameter("password");

String sql = "SELECT * FROM users WHERE username='" + username + 
             "' AND password='" + password + "'";

Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery(sql);
```

### Attack Scenario

**Normal Input:**
- Username: `john`
- Password: `secret123`

**Generated SQL:**
```sql
SELECT * FROM users WHERE username='john' AND password='secret123'
```
 Works correctly

---

**Malicious Input (SQL Injection):**
- Username: `admin' --`
- Password: `anything`

**Generated SQL:**
```sql
SELECT * FROM users WHERE username='admin' --' AND password='anything'
```

**What happens:**
- `--` is SQL comment, ignores password check
- Attacker logs in as admin without password! 

---

**Even Worse Attack:**
- Username: `'; DROP TABLE users; --`

**Generated SQL:**
```sql
SELECT * FROM users WHERE username=''; DROP TABLE users; --'
```
- Deletes entire users table! 

---

### How PreparedStatement Prevents SQL Injection

```java
// SAFE CODE - Always use this!
String username = request.getParameter("username");
String password = request.getParameter("password");

String sql = "SELECT * FROM users WHERE username = ? AND password = ?";
PreparedStatement pstmt = con.prepareStatement(sql);

pstmt.setString(1, username);  // Treated as DATA, not SQL code
pstmt.setString(2, password);

ResultSet rs = pstmt.executeQuery();
```

### Why PreparedStatement is Safe

| Step | What Happens |
|------|--------------|
| 1 | SQL query structure is **compiled first** (without values) |
| 2 | Values are passed **separately** as parameters |
| 3 | Database treats parameters as **pure data**, not SQL code |
| 4 | Special characters are **automatically escaped** |

**With malicious input `admin' --`:**
```
Query: SELECT * FROM users WHERE username = ? AND password = ?
Param 1: "admin' --"  → Treated as literal string
Param 2: "anything"

Result: No user found with username "admin' --"  SAFE!
```

### Summary

```
┌─────────────────────────────────────────┐
│           SQL Injection Prevention       │
├─────────────────────────────────────────┤
│  (Wrong) Statement (String concatenation)    │
│     → User input becomes part of SQL    │
│     → VULNERABLE                         │
├─────────────────────────────────────────┤
│  (Correct) PreparedStatement (Parameterized)   │
│     → SQL compiled separately           │
│     → Values treated as data only       │
│     → SAFE                              │
└─────────────────────────────────────────┘
```

---

## Q13. Explain execute(), executeQuery(), and executeUpdate() methods.

### Summary Table

| Method | Return Type | Used For | Example |
|--------|-------------|----------|---------|
| `executeQuery()` | ResultSet | SELECT queries | Retrieve data |
| `executeUpdate()` | int | INSERT, UPDATE, DELETE, DDL | Modify data |
| `execute()` | boolean | Any SQL | Unknown query type |

---

### 1. executeQuery() - For SELECT

**Returns**: `ResultSet` (table of results)

**Used for**: Retrieving data from database

```java
Statement stmt = con.createStatement();

// Returns ResultSet containing matching rows
ResultSet rs = stmt.executeQuery("SELECT * FROM students WHERE marks > 80");

while(rs.next()) {
    System.out.println(rs.getString("name") + ": " + rs.getInt("marks"));
}
```

---

### 2. executeUpdate() - For DML & DDL

**Returns**: `int` (number of rows affected)

**Used for**: 
- DML: INSERT, UPDATE, DELETE
- DDL: CREATE, ALTER, DROP

```java
Statement stmt = con.createStatement();

// INSERT - returns 1 (one row inserted)
int rows1 = stmt.executeUpdate("INSERT INTO students VALUES(1, 'John', 85)");
System.out.println(rows1 + " row inserted");

// UPDATE - returns number of rows updated
int rows2 = stmt.executeUpdate("UPDATE students SET marks = 90 WHERE id = 1");
System.out.println(rows2 + " row(s) updated");

// DELETE - returns number of rows deleted
int rows3 = stmt.executeUpdate("DELETE FROM students WHERE marks < 40");
System.out.println(rows3 + " row(s) deleted");

// CREATE TABLE - returns 0 (DDL doesn't affect rows)
int rows4 = stmt.executeUpdate("CREATE TABLE test(id INT)");
```

---

### 3. execute() - For Any SQL

**Returns**: `boolean`
- `true` → If result is a ResultSet (SELECT)
- `false` → If result is an update count (INSERT/UPDATE/DELETE)

**Used for**: When you don't know the query type at compile time

```java
Statement stmt = con.createStatement();
String sql = getUserInput();  // Could be SELECT or UPDATE

boolean hasResultSet = stmt.execute(sql);

if(hasResultSet) {
    // It was a SELECT query
    ResultSet rs = stmt.getResultSet();
    while(rs.next()) {
        System.out.println(rs.getString(1));
    }
} else {
    // It was INSERT/UPDATE/DELETE
    int count = stmt.getUpdateCount();
    System.out.println(count + " rows affected");
}
```

---

### Visual Comparison

```
┌──────────────────────────────────────────────────────────────────┐
│                    Execute Methods Comparison                     │
├────────────────┬──────────────┬───────────────────────────────────┤
│    Method      │  Returns     │            Use Case               │
├────────────────┼──────────────┼───────────────────────────────────┤
│ executeQuery() │  ResultSet   │  SELECT * FROM students           │
├────────────────┼──────────────┼───────────────────────────────────┤
│executeUpdate() │  int         │  INSERT INTO students VALUES(...) │
│                │ (row count)  │  UPDATE students SET marks = 100  │
│                │              │  DELETE FROM students WHERE id=1  │
│                │              │  CREATE TABLE test(id INT)        │
├────────────────┼──────────────┼───────────────────────────────────┤
│   execute()    │  boolean     │  Dynamic/Unknown SQL type         │
│                │              │  true = SELECT, false = Others    │
└────────────────┴──────────────┴───────────────────────────────────┘
```

---

## Q14. What is ResultSet? Explain its types and concurrency modes.

### What is ResultSet?

`ResultSet` is a **table of data** representing the result of a SELECT query. It acts like a cursor that points to rows of data.

```java
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

// Initially cursor is BEFORE first row
while(rs.next()) {  // Moves cursor to next row
    int id = rs.getInt("id");
    String name = rs.getString("name");
}
```

### ResultSet Types (Scrollability)

#### 1. TYPE_FORWARD_ONLY (Default)
- Cursor moves **only forward**
- **Fastest** performance
- Cannot go back to previous rows

```java
Statement stmt = con.createStatement(
    ResultSet.TYPE_FORWARD_ONLY,
    ResultSet.CONCUR_READ_ONLY
);
```

#### 2. TYPE_SCROLL_INSENSITIVE
- Cursor can move **forward and backward**
- **Does NOT reflect** database changes after ResultSet creation
- Like a **snapshot** of data

```java
Statement stmt = con.createStatement(
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_READ_ONLY
);

ResultSet rs = stmt.executeQuery("SELECT * FROM students");
rs.last();      // Go to last row
rs.first();     // Go to first row
rs.absolute(5); // Go to 5th row
rs.previous();  // Go back one row
```

#### 3. TYPE_SCROLL_SENSITIVE
- Cursor can move **forward and backward**
- **Reflects** database changes (if someone updates DB, you see changes)
- Slower than INSENSITIVE

```java
Statement stmt = con.createStatement(
    ResultSet.TYPE_SCROLL_SENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);
```

### Concurrency Modes (Updateability)

#### 1. CONCUR_READ_ONLY (Default)
- ResultSet is **read-only**
- Cannot modify data through ResultSet

#### 2. CONCUR_UPDATABLE
- Can **modify data** directly through ResultSet
- Changes reflected in database

```java
Statement stmt = con.createStatement(
    ResultSet.TYPE_SCROLL_INSENSITIVE,
    ResultSet.CONCUR_UPDATABLE
);

ResultSet rs = stmt.executeQuery("SELECT * FROM students");

// Update a row
rs.absolute(3);
rs.updateInt("marks", 95);
rs.updateRow();  // Save changes to DB

// Insert a new row
rs.moveToInsertRow();
rs.updateInt("id", 100);
rs.updateString("name", "New Student");
rs.updateInt("marks", 88);
rs.insertRow();

// Delete a row
rs.absolute(5);
rs.deleteRow();
```

### Navigation Methods

| Method | Description |
|--------|-------------|
| `next()` | Move to next row |
| `previous()` | Move to previous row (scrollable only) |
| `first()` | Move to first row |
| `last()` | Move to last row |
| `absolute(n)` | Move to nth row |
| `relative(n)` | Move n rows from current position |
| `beforeFirst()` | Move before first row |
| `afterLast()` | Move after last row |

### Summary Table

| Type | Direction | Reflects DB Changes |
|------|-----------|---------------------|
| TYPE_FORWARD_ONLY | Forward only | N/A |
| TYPE_SCROLL_INSENSITIVE | Both directions | No (Snapshot) |
| TYPE_SCROLL_SENSITIVE | Both directions | Yes (Live) |

| Concurrency | Can Modify? |
|-------------|-------------|
| CONCUR_READ_ONLY | No |
| CONCUR_UPDATABLE | Yes |

---

---

## Q17. Explain Transaction Management in JDBC.

### What is a Transaction?

A **transaction** is a set of SQL operations that should be executed as a **single unit**. Either ALL operations succeed, or NONE of them are applied.

### ACID Properties

| Property | Meaning |
|----------|---------|
| **A**tomicity | All or nothing - complete transaction or rollback |
| **C**onsistency | Database remains in valid state |
| **I**solation | Transactions don't interfere with each other |
| **D**urability | Committed changes are permanent |

### Key Methods for Transaction Management

#### 1. setAutoCommit(boolean)

By default, JDBC is in **auto-commit mode** (each SQL is a separate transaction).

```java
// Disable auto-commit to start manual transaction
con.setAutoCommit(false);

// Enable auto-commit (default)
con.setAutoCommit(true);
```

#### 2. commit()

**Saves all changes** made since the last commit/rollback permanently to database.

```java
con.commit();  // Make changes permanent
```

#### 3. rollback()

**Undoes all changes** made since the last commit/rollback.

```java
con.rollback();  // Undo all changes
```

### Transaction Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRANSACTION FLOW                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   setAutoCommit(false)  ─────►  Start Transaction              │
│            │                                                    │
│            ▼                                                    │
│   ┌─────────────────┐                                          │
│   │  Execute SQL 1  │                                          │
│   │  Execute SQL 2  │       ◄── Changes in memory only        │
│   │  Execute SQL 3  │                                          │
│   └────────┬────────┘                                          │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────┐                                           │
│     │  All Success? │                                          │
│     └──────┬───────┘                                           │
│            │                                                    │
│     YES ◄──┴──► NO                                             │
│      │          │                                               │
│      ▼          ▼                                               │
│  commit()    rollback()                                        │
│      │          │                                               │
│      ▼          ▼                                               │
│  Changes     Changes                                           │
│  SAVED       UNDONE                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Complete Example

```java
import java.sql.*;

public class TransactionExample {
    public static void main(String[] args) {
        Connection con = null;
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/bank", "root", "password");
            
            // Step 1: Disable auto-commit
            con.setAutoCommit(false);
            System.out.println("Transaction started...");
            
            PreparedStatement pstmt1 = con.prepareStatement(
                "UPDATE accounts SET balance = balance - 5000 WHERE acc_no = ?");
            pstmt1.setInt(1, 101);
            pstmt1.executeUpdate();
            System.out.println("Debited from Account 101");
            
            PreparedStatement pstmt2 = con.prepareStatement(
                "UPDATE accounts SET balance = balance + 5000 WHERE acc_no = ?");
            pstmt2.setInt(1, 102);
            pstmt2.executeUpdate();
            System.out.println("Credited to Account 102");
            
            // Step 2: If all successful, commit
            con.commit();
            System.out.println("Transaction committed successfully!");
            
        } catch(Exception e) {
            try {
                // Step 3: If any error, rollback
                if(con != null) {
                    con.rollback();
                    System.out.println("Transaction rolled back due to error!");
                }
            } catch(SQLException se) {
                se.printStackTrace();
            }
            e.printStackTrace();
        } finally {
            try {
                if(con != null) con.close();
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Savepoints

Used to rollback to a specific point instead of entire transaction.

```java
con.setAutoCommit(false);

// Execute some SQL
stmt.executeUpdate("INSERT INTO orders VALUES(1, 'Order1')");

// Create savepoint
Savepoint sp1 = con.setSavepoint("AfterOrder1");

// Execute more SQL
stmt.executeUpdate("INSERT INTO orders VALUES(2, 'Order2')");

// Oops! Problem with order 2
con.rollback(sp1);  // Only undo Order2, keep Order1

con.commit();  // Commit Order1
```

---

## Q18. What is Batch Processing in JDBC? Write a program to insert multiple records.

### What is Batch Processing?

Batch processing allows you to **execute multiple SQL statements in a single database call** instead of individual calls. This significantly improves performance.

### Without Batch (Slow)
```
Java → DB → Java → DB → Java → DB → Java → DB
(4 round trips for 4 inserts)
```

### With Batch (Fast)
```
Java → [SQL1, SQL2, SQL3, SQL4] → DB
(1 round trip for 4 inserts)
```

### Key Methods

| Method | Description |
|--------|-------------|
| `addBatch(sql)` | Add SQL to batch (Statement) |
| `addBatch()` | Add current parameters to batch (PreparedStatement) |
| `executeBatch()` | Execute all statements in batch |
| `clearBatch()` | Remove all statements from batch |

### Statement Batch Example

```java
Statement stmt = con.createStatement();

stmt.addBatch("INSERT INTO students VALUES(1, 'John', 85)");
stmt.addBatch("INSERT INTO students VALUES(2, 'Jane', 90)");
stmt.addBatch("INSERT INTO students VALUES(3, 'Bob', 78)");
stmt.addBatch("UPDATE students SET marks = 95 WHERE id = 1");

int[] results = stmt.executeBatch();
System.out.println("Batch executed. Rows affected: " + results.length);
```

### Complete PreparedStatement Batch Program

```java
import java.sql.*;

public class BatchInsertExample {
    public static void main(String[] args) {
        Connection con = null;
        PreparedStatement pstmt = null;
        
        try {
            // Step 1: Load driver and connect
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/school", "root", "password");
            
            // Step 2: Disable auto-commit for better performance
            con.setAutoCommit(false);
            
            // Step 3: Create PreparedStatement
            String sql = "INSERT INTO students(rollno, name, marks) VALUES(?, ?, ?)";
            pstmt = con.prepareStatement(sql);
            
            // Step 4: Add records to batch
            // Record 1
            pstmt.setInt(1, 101);
            pstmt.setString(2, "Rahul Sharma");
            pstmt.setInt(3, 85);
            pstmt.addBatch();
            
            // Record 2
            pstmt.setInt(1, 102);
            pstmt.setString(2, "Priya Patel");
            pstmt.setInt(3, 92);
            pstmt.addBatch();
            
            // Record 3
            pstmt.setInt(1, 103);
            pstmt.setString(2, "Amit Kumar");
            pstmt.setInt(3, 78);
            pstmt.addBatch();
            
            // Record 4
            pstmt.setInt(1, 104);
            pstmt.setString(2, "Sneha Gupta");
            pstmt.setInt(3, 88);
            pstmt.addBatch();
            
            // Record 5
            pstmt.setInt(1, 105);
            pstmt.setString(2, "Vikram Singh");
            pstmt.setInt(3, 95);
            pstmt.addBatch();
            
            // Step 5: Execute batch
            int[] result = pstmt.executeBatch();
            System.out.println("Batch executed successfully!");
            System.out.println("Total records inserted: " + result.length);
            
            // Step 6: Commit transaction
            con.commit();
            System.out.println("Transaction committed!");
            
        } catch(BatchUpdateException bue) {
            System.out.println("BatchUpdateException: " + bue.getMessage());
            try {
                con.rollback();
                System.out.println("Transaction rolled back!");
            } catch(SQLException se) {
                se.printStackTrace();
            }
        } catch(Exception e) {
            e.printStackTrace();
            try {
                if(con != null) con.rollback();
            } catch(SQLException se) {
                se.printStackTrace();
            }
        } finally {
            try {
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Batch executed successfully!
Total records inserted: 5
Transaction committed!
```

### Benefits of Batch Processing

| Benefit | Description |
|---------|-------------|
| **Performance** | Fewer network round trips |
| **Efficiency** | Database can optimize batch execution |
| **Transaction** | Easy to commit/rollback entire batch |
| **Memory** | Reduced overhead |

---

## Q19. Differentiate between JDBC and ODBC.

### Comparison Table

| Feature | JDBC | ODBC |
|---------|------|------|
| **Full Form** | Java Database Connectivity | Open Database Connectivity |
| **Language** | Java only | C/C++ (language independent) |
| **Platform** | Platform Independent | Platform Dependent |
| **Developer** | Sun Microsystems (Oracle) | Microsoft |
| **Driver** | Pure Java drivers available | Requires native ODBC driver |
| **Performance** | Faster (Type-4 driver) | Slower (native calls) |
| **Security** | Secure (no native code) | Less secure |
| **Installation** | No special installation | ODBC driver must be installed |
| **Object-Oriented** | Yes (OOP based) | No (procedural) |
| **Portability** | Highly portable | Not portable |

### Architecture Comparison

**JDBC Architecture:**
```
Java App → JDBC API → JDBC Driver → Database
```

**ODBC Architecture:**
```
Application → ODBC API → Driver Manager → ODBC Driver → Database
```

### When to Use What?

| Use JDBC When | Use ODBC When |
|---------------|---------------|
| Building Java applications | Building C/C++ applications |
| Need platform independence | Windows-specific applications |
| Web applications | Desktop applications |
| Enterprise applications | Legacy system integration |

---

## Q20. What are the limitations of JDBC? How are they addressed in modern frameworks?

### JDBC Limitations

| Limitation | Description |
|------------|-------------|
| **Boilerplate Code** | Too much repetitive code for simple operations |
| **Exception Handling** | Must handle SQLException everywhere |
| **Resource Management** | Manual connection open/close |
| **No Connection Pooling** | Creates new connection each time (slow) |
| **SQL in Java Code** | SQL mixed with business logic |
| **No Object Mapping** | Manual ResultSet to Object conversion |
| **No Caching** | Repeated database calls |

### Example of JDBC Boilerplate

```java
// Just to fetch one record - too much code!
Connection con = null;
PreparedStatement pstmt = null;
ResultSet rs = null;

try {
    con = DriverManager.getConnection(url, user, pass);
    pstmt = con.prepareStatement("SELECT * FROM students WHERE id=?");
    pstmt.setInt(1, 101);
    rs = pstmt.executeQuery();
    
    if(rs.next()) {
        Student s = new Student();
        s.setId(rs.getInt("id"));
        s.setName(rs.getString("name"));
        s.setMarks(rs.getInt("marks"));
    }
} catch(SQLException e) {
    e.printStackTrace();
} finally {
    if(rs != null) rs.close();
    if(pstmt != null) pstmt.close();
    if(con != null) con.close();
}
```

### How Modern Frameworks Solve These

#### 1. JPA (Java Persistence API)
- **ORM** (Object-Relational Mapping)
- Maps Java objects directly to database tables
- No SQL needed for basic operations

```java
// JPA - Simple and clean!
@Entity
public class Student {
    @Id
    private int id;
    private String name;
    private int marks;
}

// To save
entityManager.persist(student);

// To find
Student s = entityManager.find(Student.class, 101);
```

#### 2. Hibernate
- Most popular JPA implementation
- Automatic SQL generation
- Caching (First-level and Second-level)
- Lazy loading

```java
// Hibernate - No SQL!
Session session = sessionFactory.openSession();
Student s = session.get(Student.class, 101);
```

#### 3. Spring JDBC Template
- Reduces boilerplate code
- Automatic resource management
- Better exception handling

```java
// Spring JDBC - Much simpler!
String sql = "SELECT * FROM students WHERE id = ?";
Student s = jdbcTemplate.queryForObject(sql, new StudentRowMapper(), 101);
```

#### 4. Connection Pooling (HikariCP, C3P0)
- Reuses connections instead of creating new ones
- Significantly improves performance

### Comparison Summary

| Aspect | JDBC | JPA/Hibernate |
|--------|------|---------------|
| Code Volume | High | Low |
| SQL | Manual | Auto-generated |
| Object Mapping | Manual | Automatic |
| Caching | None | Built-in |
| Connection Pool | Manual setup | Built-in |
| Learning Curve | Easy | Moderate |

---

## Q21. What is the role of Web Container in Enterprise Java? Give examples.

### What is a Web Container?

A **Web Container** (also called Servlet Container) is a component of a web server that:
- **Manages the lifecycle** of Servlets and JSP
- **Handles HTTP requests and responses**
- **Provides runtime environment** for web components

### Key Responsibilities

| Responsibility | Description |
|----------------|-------------|
| **Servlet Lifecycle** | Create, initialize, execute, destroy servlets |
| **Request Handling** | Receive HTTP requests, route to correct servlet |
| **Response Handling** | Send HTTP response back to client |
| **Session Management** | Maintain user sessions |
| **Security** | Authentication and authorization |
| **Threading** | Handle multiple requests concurrently |
| **Resource Management** | Database connections, JNDI resources |

### How Web Container Works

```
┌────────────────────────────────────────────────────────────────┐
│                        WEB SERVER                              │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │                    WEB CONTAINER                          │ │
│  │                                                           │ │
│  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │ │
│  │   │  Servlet 1  │  │  Servlet 2  │  │    JSP 1    │     │ │
│  │   └─────────────┘  └─────────────┘  └─────────────┘     │ │
│  │                                                           │ │
│  │   ┌─────────────────────────────────────────────────┐   │ │
│  │   │              Container Services                  │   │ │
│  │   │  • Lifecycle Management                         │   │ │
│  │   │  • Request/Response Processing                  │   │ │
│  │   │  • Session Management                           │   │ │
│  │   │  • Security                                     │   │ │
│  │   └─────────────────────────────────────────────────┘   │ │
│  └──────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
           ▲                                    │
           │ HTTP Request                       │ HTTP Response
           │                                    ▼
      ┌──────────────────────────────────────────────┐
      │                CLIENT (Browser)               │
      └──────────────────────────────────────────────┘
```

### Examples of Web Containers

| Container | Description |
|-----------|-------------|
| **Apache Tomcat** | Most popular, lightweight, open-source |
| **Jetty** | Lightweight, embeddable, good for testing |
| **GlassFish** | Full Java EE server by Oracle |
| **JBoss/WildFly** | Full Java EE server by Red Hat |
| **WebLogic** | Enterprise server by Oracle |
| **WebSphere** | Enterprise server by IBM |

### Servlet Lifecycle in Container

```
1. Client Request
       ↓
2. Container loads Servlet class
       ↓
3. Container creates Servlet instance
       ↓
4. init() called (once)
       ↓
5. service() called (for each request)
       ↓
6. destroy() called (during shutdown)
```

---

## Q22. What is a Deployment Descriptor? Explain the role of web.xml file.

### What is Deployment Descriptor?

A **Deployment Descriptor** is an **XML configuration file** that describes how a web application should be deployed and configured in the web container.

**File name**: `web.xml`
**Location**: `WEB-INF/web.xml`

### Purpose of web.xml

| Purpose | Description |
|---------|-------------|
| **Servlet Configuration** | Define servlet names, classes, URL mappings |
| **Initialization Parameters** | Set config values for servlets |
| **Welcome Files** | Default page when accessing application |
| **Error Pages** | Custom error handling pages |
| **Session Configuration** | Session timeout settings |
| **Security Constraints** | Authentication and authorization |
| **Filter Configuration** | Request/response filters |
| **Listener Configuration** | Event listeners |

### Basic Structure of web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         version="4.0">

    <!-- Display Name -->
    <display-name>My Web Application</display-name>
    
    <!-- Welcome File List -->
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
    
    <!-- Servlet Definition -->
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.example.HelloServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    
    <!-- Servlet Mapping -->
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
    
    <!-- Context Parameters -->
    <context-param>
        <param-name>adminEmail</param-name>
        <param-value>admin@example.com</param-value>
    </context-param>
    
    <!-- Session Configuration -->
    <session-config>
        <session-timeout>30</session-timeout>
    </session-config>
    
    <!-- Error Pages -->
    <error-page>
        <error-code>404</error-code>
        <location>/error/404.jsp</location>
    </error-page>
    
    <error-page>
        <exception-type>java.lang.Exception</exception-type>
        <location>/error/error.jsp</location>
    </error-page>
    
</web-app>
```

### Key Elements Explained

#### 1. Servlet Configuration
```xml
<servlet>
    <servlet-name>LoginServlet</servlet-name>
    <servlet-class>com.app.LoginServlet</servlet-class>
    
    <!-- Initialization Parameters -->
    <init-param>
        <param-name>maxAttempts</param-name>
        <param-value>3</param-value>
    </init-param>
    
    <!-- Load when container starts (1 = first) -->
    <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>LoginServlet</servlet-name>
    <url-pattern>/login</url-pattern>
</servlet-mapping>
```

#### 2. Filter Configuration
```xml
<filter>
    <filter-name>AuthFilter</filter-name>
    <filter-class>com.app.AuthFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>AuthFilter</filter-name>
    <url-pattern>/admin/*</url-pattern>
</filter-mapping>
```

### Note: Annotations (Modern Approach)

Since Servlet 3.0, you can use **annotations** instead of web.xml:

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    // No web.xml entry needed!
}
```

But web.xml is still used for:
- Complex configurations
- Third-party libraries
- Overriding annotations

---

## Q23. Explain the Request-Response Cycle in an MVC-based Web Application.

### Request-Response Cycle

The request-response cycle describes **how a user's request flows through an MVC application** and returns a response.

### Step-by-Step Flow

```
┌────────────────────────────────────────────────────────────────────┐
│                    MVC REQUEST-RESPONSE CYCLE                      │
└────────────────────────────────────────────────────────────────────┘

                    ┌──────────────┐
                    │    CLIENT    │
                    │   (Browser)  │
                    └──────┬───────┘
                           │
         1. HTTP Request   │   8. HTTP Response
            (URL + Data)   │      (HTML Page)
                           │
                    ┌──────▼───────┐
                    │  WEB SERVER  │
                    │  (Tomcat)    │
                    └──────┬───────┘
                           │
         2. Route to       │   7. Send Response
            Controller     │
                           │
                    ┌──────▼───────┐
                    │  CONTROLLER  │
                    │  (Servlet)   │◄────────────────────┐
                    └──────┬───────┘                     │
                           │                             │
         3. Request Data   │   6. Select View &         │
                           │      Forward Data           │
                    ┌──────▼───────┐              ┌─────┴─────┐
                    │    MODEL     │              │    VIEW   │
                    │  (Java Bean  │              │   (JSP)   │
                    │    + DAO)    │              │           │
                    └──────┬───────┘              └───────────┘
                           │
         4. Query          │   5. Return
            Database       │      Results
                           │
                    ┌──────▼───────┐
                    │   DATABASE   │
                    └──────────────┘
```

### Detailed Steps

| Step | Component | Action |
|------|-----------|--------|
| 1 | **Client** | User enters URL or submits form |
| 2 | **Web Server** | Routes request to appropriate Controller |
| 3 | **Controller** | Receives request, extracts parameters |
| 4 | **Model** | Controller calls Model to get/save data |
| 5 | **Database** | Model interacts with database via JDBC |
| 6 | **Controller** | Gets data, selects View, forwards data |
| 7 | **View** | JSP renders HTML using data |
| 8 | **Client** | Receives HTML page, displays to user |

### Example: Student Search

**1. User Request**
```
URL: http://localhost:8080/app/searchStudent?id=101
```

**2. Controller (Servlet)**
```java
@WebServlet("/searchStudent")
public class StudentController extends HttpServlet {
    protected void doGet(HttpServletRequest request, 
                         HttpServletResponse response) {
        
        // Step 3: Get parameter
        int id = Integer.parseInt(request.getParameter("id"));
        
        // Step 4-5: Call Model
        StudentDAO dao = new StudentDAO();
        Student student = dao.findById(id);
        
        // Step 6: Set data and forward to View
        request.setAttribute("student", student);
        request.getRequestDispatcher("/student.jsp").forward(request, response);
    }
}
```

**3. Model (DAO)**
```java
public class StudentDAO {
    public Student findById(int id) {
        // JDBC code to fetch from database
        Student s = new Student();
        // ... fetch data ...
        return s;
    }
}
```

**4. View (JSP)**
```jsp
<%@ page language="java" %>
<html>
<body>
    <h2>Student Details</h2>
    <p>ID: ${student.id}</p>
    <p>Name: ${student.name}</p>
    <p>Marks: ${student.marks}</p>
</body>
</html>
```

---

## Q24. What is Dependency Injection? How does Spring Framework implement it?

### What is Dependency Injection (DI)?

**Dependency Injection** is a design pattern where:
- Objects receive their dependencies from **external sources** (container)
- Instead of creating dependencies themselves
- Also known as **Inversion of Control (IoC)**

### Without DI (Tight Coupling) Wrong

```java
public class StudentService {
    // Service creates its own dependency - TIGHT COUPLING
    private StudentDAO dao = new StudentDAO();
    
    public Student getStudent(int id) {
        return dao.findById(id);
    }
}
```

**Problems:**
- Hard to test (can't mock DAO)
- Hard to change implementation
- Classes are tightly coupled

### With DI (Loose Coupling) Correct

```java
public class StudentService {
    // Dependency is INJECTED from outside
    private StudentDAO dao;
    
    // Constructor Injection
    public StudentService(StudentDAO dao) {
        this.dao = dao;
    }
    
    public Student getStudent(int id) {
        return dao.findById(id);
    }
}
```

**Benefits:**
- Easy to test (can inject mock)
- Easy to change implementation
- Classes are loosely coupled

### Types of Dependency Injection

| Type | How It Works |
|------|--------------|
| **Constructor Injection** | Dependencies passed via constructor |
| **Setter Injection** | Dependencies set via setter methods |
| **Field Injection** | Dependencies injected directly into fields |

### How Spring Implements DI

Spring uses **IoC Container** to manage object creation and dependency injection.

#### 1. XML-based Configuration

```xml
<!-- applicationContext.xml -->
<beans>
    <!-- Define DAO bean -->
    <bean id="studentDAO" class="com.app.StudentDAO"/>
    
    <!-- Define Service bean with dependency -->
    <bean id="studentService" class="com.app.StudentService">
        <constructor-arg ref="studentDAO"/>
    </bean>
</beans>
```

```java
// Get bean from container
ApplicationContext context = 
    new ClassPathXmlApplicationContext("applicationContext.xml");
    
StudentService service = context.getBean("studentService", StudentService.class);
```

#### 2. Annotation-based Configuration (Modern)

```java
// Mark as Spring-managed component
@Repository
public class StudentDAO {
    public Student findById(int id) {
        // JDBC code
    }
}

@Service
public class StudentService {
    
    // Spring automatically injects StudentDAO
    @Autowired
    private StudentDAO dao;
    
    public Student getStudent(int id) {
        return dao.findById(id);
    }
}
```

#### 3. Constructor Injection (Recommended)

```java
@Service
public class StudentService {
    
    private final StudentDAO dao;
    
    @Autowired  // Optional in newer Spring versions
    public StudentService(StudentDAO dao) {
        this.dao = dao;
    }
}
```

### Spring IoC Container Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    SPRING IoC CONTAINER                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Bean Definitions                       │   │
│   │   (From XML, Annotations, or Java Config)           │   │
│   └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Create Beans                           │   │
│   │   StudentDAO, StudentService, etc.                  │   │
│   └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Inject Dependencies                    │   │
│   │   StudentDAO → StudentService                       │   │
│   └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │              Ready for Use                          │   │
│   │   Application can use fully configured beans        │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Common Spring Annotations

| Annotation | Purpose |
|------------|---------|
| `@Component` | Generic Spring-managed bean |
| `@Service` | Business logic layer |
| `@Repository` | Data access layer (DAO) |
| `@Controller` | Web controller |
| `@Autowired` | Inject dependency |
| `@Qualifier` | Specify which bean to inject |

---

---

## Q25. Program: Insert a Student Record using PreparedStatement

```java
import java.sql.*;

public class InsertStudentProgram {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/school";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        PreparedStatement pstmt = null;
        
        try {
            // Step 1: Load the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver loaded successfully!");
            
            // Step 2: Establish connection
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!");
            
            // Step 3: Create PreparedStatement with parameterized query
            String sql = "INSERT INTO students(rollno, name, marks) VALUES(?, ?, ?)";
            pstmt = con.prepareStatement(sql);
            
            // Step 4: Set parameter values
            pstmt.setInt(1, 101);           // RollNo
            pstmt.setString(2, "Rahul Sharma");  // Name
            pstmt.setInt(3, 85);            // Marks
            
            // Step 5: Execute the query
            int rowsAffected = pstmt.executeUpdate();
            
            // Step 6: Check result
            if(rowsAffected > 0) {
                System.out.println("Student record inserted successfully!");
                System.out.println("Rows affected: " + rowsAffected);
            } else {
                System.out.println("Failed to insert record!");
            }
            
        } catch(ClassNotFoundException e) {
            System.out.println("Error: JDBC Driver not found!");
            e.printStackTrace();
        } catch(SQLException e) {
            System.out.println("Error: Database operation failed!");
            e.printStackTrace();
        } finally {
            // Step 7: Close resources
            try {
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
                System.out.println("Connection closed.");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Driver loaded successfully!
Connected to database!
Student record inserted successfully!
Rows affected: 1
Connection closed.
```

---

## Q26. Program: Display Employees with Salary > 50000

```java
import java.sql.*;

public class DisplayEmployeesProgram {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/company";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        
        try {
            // Step 1: Load driver and connect
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!\n");
            
            // Step 2: Create PreparedStatement with condition
            String sql = "SELECT emp_id, emp_name, department, salary " +
                         "FROM employee WHERE salary > ?";
            pstmt = con.prepareStatement(sql);
            
            // Step 3: Set parameter (salary threshold)
            pstmt.setDouble(1, 50000);
            
            // Step 4: Execute query
            rs = pstmt.executeQuery();
            
            // Step 5: Display results
            System.out.println("=================================================");
            System.out.println("Employees with Salary > Rs. 50,000");
            System.out.println("=================================================");
            System.out.printf("%-10s %-20s %-15s %-10s%n", 
                              "EMP_ID", "NAME", "DEPARTMENT", "SALARY");
            System.out.println("-------------------------------------------------");
            
            int count = 0;
            while(rs.next()) {
                int empId = rs.getInt("emp_id");
                String empName = rs.getString("emp_name");
                String dept = rs.getString("department");
                double salary = rs.getDouble("salary");
                
                System.out.printf("%-10d %-20s %-15s Rs.%-10.2f%n", 
                                  empId, empName, dept, salary);
                count++;
            }
            
            System.out.println("-------------------------------------------------");
            System.out.println("Total Records Found: " + count);
            
            if(count == 0) {
                System.out.println("No employees found with salary > 50000");
            }
            
        } catch(ClassNotFoundException e) {
            System.out.println("Driver not found: " + e.getMessage());
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        } finally {
            // Step 6: Close resources
            try {
                if(rs != null) rs.close();
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Connected to database!

=================================================
Employees with Salary > Rs. 50,000
=================================================
EMP_ID     NAME                 DEPARTMENT      SALARY    
-------------------------------------------------
1001       Amit Kumar           IT              Rs.75000.00  
1002       Priya Singh          HR              Rs.65000.00  
1005       Rajesh Verma         Finance         Rs.80000.00  
-------------------------------------------------
Total Records Found: 3
```

---

## Q27. Program: Update Product Price by ProductID

```java
import java.sql.*;
import java.util.Scanner;

public class UpdateProductProgram {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/store";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        PreparedStatement pstmt = null;
        Scanner scanner = new Scanner(System.in);
        
        try {
            // Step 1: Connect to database
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!\n");
            
            // Step 2: Get input from user
            System.out.print("Enter Product ID to update: ");
            int productId = scanner.nextInt();
            
            System.out.print("Enter new Price: ");
            double newPrice = scanner.nextDouble();
            
            // Step 3: Create UPDATE query
            String sql = "UPDATE products SET price = ? WHERE product_id = ?";
            pstmt = con.prepareStatement(sql);
            
            // Step 4: Set parameters
            pstmt.setDouble(1, newPrice);
            pstmt.setInt(2, productId);
            
            // Step 5: Execute update
            int rowsAffected = pstmt.executeUpdate();
            
            // Step 6: Display result
            if(rowsAffected > 0) {
                System.out.println("\n✓ Product price updated successfully!");
                System.out.println("Product ID: " + productId);
                System.out.println("New Price: Rs. " + newPrice);
            } else {
                System.out.println("\n✗ No product found with ID: " + productId);
            }
            
        } catch(ClassNotFoundException e) {
            System.out.println("Driver not found!");
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        } finally {
            try {
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
                scanner.close();
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Connected to database!

Enter Product ID to update: 1005
Enter new Price: 1299.99

✓ Product price updated successfully!
Product ID: 1005
New Price: Rs. 1299.99
```

---

## Q28. Program: Delete Customer Record using PreparedStatement

```java
import java.sql.*;
import java.util.Scanner;

public class DeleteCustomerProgram {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/shop";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        PreparedStatement pstmt = null;
        PreparedStatement selectStmt = null;
        ResultSet rs = null;
        Scanner scanner = new Scanner(System.in);
        
        try {
            // Step 1: Connect to database
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!\n");
            
            // Step 2: Get customer ID to delete
            System.out.print("Enter Customer ID to delete: ");
            int customerId = scanner.nextInt();
            
            // Step 3: First, display the record to be deleted
            String selectSql = "SELECT * FROM customers WHERE customer_id = ?";
            selectStmt = con.prepareStatement(selectSql);
            selectStmt.setInt(1, customerId);
            rs = selectStmt.executeQuery();
            
            if(rs.next()) {
                System.out.println("\nRecord to be deleted:");
                System.out.println("Customer ID: " + rs.getInt("customer_id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Email: " + rs.getString("email"));
                System.out.println("Phone: " + rs.getString("phone"));
                
                // Step 4: Confirm deletion
                System.out.print("\nAre you sure you want to delete? (Y/N): ");
                scanner.nextLine(); // consume newline
                String confirm = scanner.nextLine();
                
                if(confirm.equalsIgnoreCase("Y")) {
                    // Step 5: Create DELETE query
                    String deleteSql = "DELETE FROM customers WHERE customer_id = ?";
                    pstmt = con.prepareStatement(deleteSql);
                    pstmt.setInt(1, customerId);
                    
                    // Step 6: Execute delete
                    int rowsAffected = pstmt.executeUpdate();
                    
                    if(rowsAffected > 0) {
                        System.out.println("\n✓ Customer record deleted successfully!");
                    }
                } else {
                    System.out.println("\n✗ Deletion cancelled by user.");
                }
            } else {
                System.out.println("\n✗ No customer found with ID: " + customerId);
            }
            
        } catch(ClassNotFoundException e) {
            System.out.println("Driver not found!");
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        } finally {
            try {
                if(rs != null) rs.close();
                if(selectStmt != null) selectStmt.close();
                if(pstmt != null) pstmt.close();
                if(con != null) con.close();
                scanner.close();
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Connected to database!

Enter Customer ID to delete: 1003

Record to be deleted:
Customer ID: 1003
Name: Sneha Patel
Email: sneha@example.com
Phone: 9876543210

Are you sure you want to delete? (Y/N): Y

✓ Customer record deleted successfully!
```

---

## Q29. Program: Transaction Management with Rollback on Failure

```java
import java.sql.*;

public class TransactionProgram {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bank";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        PreparedStatement pstmt1 = null;
        PreparedStatement pstmt2 = null;
        
        try {
            // Step 1: Connect to database
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!\n");
            
            // Step 2: Disable auto-commit (START TRANSACTION)
            con.setAutoCommit(false);
            System.out.println("Transaction started...\n");
            
            // Step 3: Insert into first table (Orders)
            String sql1 = "INSERT INTO orders(order_id, customer_id, amount, order_date) " +
                          "VALUES(?, ?, ?, ?)";
            pstmt1 = con.prepareStatement(sql1);
            pstmt1.setInt(1, 5001);
            pstmt1.setInt(2, 101);
            pstmt1.setDouble(3, 2500.00);
            pstmt1.setDate(4, Date.valueOf("2024-01-15"));
            
            int rows1 = pstmt1.executeUpdate();
            System.out.println("✓ Order inserted: " + rows1 + " row(s)");
            
            // Step 4: Insert into second table (Order_Details)
            String sql2 = "INSERT INTO order_details(order_id, product_id, quantity, price) " +
                          "VALUES(?, ?, ?, ?)";
            pstmt2 = con.prepareStatement(sql2);
            pstmt2.setInt(1, 5001);
            pstmt2.setInt(2, 201);
            pstmt2.setInt(3, 2);
            pstmt2.setDouble(4, 1250.00);
            
            int rows2 = pstmt2.executeUpdate();
            System.out.println("✓ Order details inserted: " + rows2 + " row(s)");
            
            // Simulate an error (uncomment to test rollback)
            // int x = 10 / 0;  // ArithmeticException
            
            // Step 5: If all successful, COMMIT
            con.commit();
            System.out.println("\n✓✓ TRANSACTION COMMITTED SUCCESSFULLY! ✓✓");
            System.out.println("Both records saved to database.");
            
        } catch(Exception e) {
            // Step 6: If any error, ROLLBACK
            System.out.println("\n✗ Error occurred: " + e.getMessage());
            
            try {
                if(con != null) {
                    con.rollback();
                    System.out.println("\n✗✗ TRANSACTION ROLLED BACK! ✗✗");
                    System.out.println("All changes have been undone.");
                }
            } catch(SQLException se) {
                System.out.println("Rollback failed: " + se.getMessage());
            }
            
        } finally {
            // Step 7: Close resources
            try {
                if(pstmt1 != null) pstmt1.close();
                if(pstmt2 != null) pstmt2.close();
                if(con != null) {
                    con.setAutoCommit(true);  // Reset to default
                    con.close();
                }
                System.out.println("\nConnection closed.");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output (Successful)
```
Connected to database!

Transaction started...

✓ Order inserted: 1 row(s)
✓ Order details inserted: 1 row(s)

✓✓ TRANSACTION COMMITTED SUCCESSFULLY! ✓✓
Both records saved to database.

Connection closed.
```

### Output (With Error - Rollback)
```
Connected to database!

Transaction started...

✓ Order inserted: 1 row(s)

✗ Error occurred: / by zero

✗✗ TRANSACTION ROLLED BACK! ✗✗
All changes have been undone.

Connection closed.
```

---

## Q30. Program: Call Stored Procedure using CallableStatement

### Step 1: Create Stored Procedure in MySQL

```sql
DELIMITER //

CREATE PROCEDURE getStudentById(
    IN student_id INT,
    OUT student_name VARCHAR(100),
    OUT student_marks INT
)
BEGIN
    SELECT name, marks INTO student_name, student_marks
    FROM students
    WHERE id = student_id;
END //

DELIMITER ;
```

### Step 2: Java Program to Call Stored Procedure

```java
import java.sql.*;

public class CallableStatementProgram {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String username = "root";
        String password = "password";
        
        Connection con = null;
        CallableStatement cstmt = null;
        
        try {
            // Step 1: Connect to database
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to database!\n");
            
            // Step 2: Create CallableStatement
            // Syntax: {call procedure_name(?, ?, ?)}
            String sql = "{call getStudentById(?, ?, ?)}";
            cstmt = con.prepareCall(sql);
            
            // Step 3: Set IN parameter (student ID)
            cstmt.setInt(1, 101);
            
            // Step 4: Register OUT parameters
            cstmt.registerOutParameter(2, Types.VARCHAR);  // student_name
            cstmt.registerOutParameter(3, Types.INTEGER);  // student_marks
            
            // Step 5: Execute stored procedure
            System.out.println("Calling stored procedure: getStudentById(101)");
            cstmt.execute();
            
            // Step 6: Get OUT parameter values
            String name = cstmt.getString(2);
            int marks = cstmt.getInt(3);
            
            // Step 7: Display results
            System.out.println("\n=============================");
            System.out.println("   STUDENT INFORMATION");
            System.out.println("=============================");
            System.out.println("Student ID   : 101");
            System.out.println("Student Name : " + name);
            System.out.println("Marks        : " + marks);
            System.out.println("=============================");
            
        } catch(ClassNotFoundException e) {
            System.out.println("Driver not found: " + e.getMessage());
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Step 8: Close resources
            try {
                if(cstmt != null) cstmt.close();
                if(con != null) con.close();
                System.out.println("\nConnection closed.");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### Output
```
Connected to database!

Calling stored procedure: getStudentById(101)

=============================
   STUDENT INFORMATION
=============================
Student ID   : 101
Student Name : Rahul Sharma
Marks        : 85
=============================

Connection closed.
```

### CallableStatement Parameter Types

| Type | Description | Example |
|------|-------------|---------|
| **IN** | Input parameter | `cstmt.setInt(1, value)` |
| **OUT** | Output parameter | `cstmt.registerOutParameter(2, Types.VARCHAR)` |
| **INOUT** | Both input and output | Set value + register |

### Stored Procedure with ResultSet

```java
// Procedure that returns multiple rows
String sql = "{call getAllStudents()}";
CallableStatement cstmt = con.prepareCall(sql);

// Execute and get ResultSet
ResultSet rs = cstmt.executeQuery();

while(rs.next()) {
    System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
}
```

---

# Summary: Key Points for Exam

## JDBC Important Topics

| Topic | Key Points |
|-------|------------|
| **JDBC Steps** | Load → Connect → Statement → Execute → Process → Close |
| **Driver Types** | Type-4 (Thin) is best, Type-1 is slowest |
| **Statement Types** | Statement, PreparedStatement (safe), CallableStatement |
| **SQL Injection** | Use PreparedStatement to prevent |
| **Execute Methods** | executeQuery() → ResultSet, executeUpdate() → int |
| **ResultSet Types** | FORWARD_ONLY, SCROLL_INSENSITIVE, SCROLL_SENSITIVE |
| **Transaction** | setAutoCommit(false), commit(), rollback() |
| **Batch Processing** | addBatch(), executeBatch() |

## Enterprise Java Topics

| Topic | Key Points |
|-------|------------|
| **Enterprise vs Core Java** | Enterprise = Web apps, Core = Desktop apps |
| **MVC** | Model (Data), View (UI), Controller (Logic) |
| **Web Container** | Manages Servlet lifecycle (Tomcat, Jetty) |
| **web.xml** | Deployment descriptor, servlet configuration |
| **Dependency Injection** | Objects receive dependencies from outside |
| **Spring Annotations** | @Component, @Service, @Repository, @Autowired |

---

**Best of Luck for Your Exam! 🎓**
