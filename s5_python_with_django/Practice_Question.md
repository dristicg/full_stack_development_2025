# Practice Question

---

# CHAPTER 2: Introduction to Web Development and Django Basics

---

## Q1. Explain the MVC and MVT design patterns with a diagram. (5-10 marks)

**MVC (Model-View-Controller)** is a software design pattern that separates an application into three parts:
- **Model:** handles data and business logic (database).
- **View:** handles presentation (what the user sees).
- **Controller:** receives user input, talks to the Model, and chooses the View.

**MVT (Model-View-Template)** is Django's version of the same idea:
- **Model:** defines the data structure and interacts with the database through the ORM (models.py).
- **View:** a Python function or class that receives an HTTP request, applies logic, uses the Model, and returns an HTTP response (views.py).
- **Template:** the HTML file with Django template language that defines presentation (templates/).

In Django the framework itself acts as the Controller. The URL dispatcher (urls.py) receives the request and sends it to the correct View.

```
 Browser
    |  1. HTTP Request
    v
 +----------+   2. matches URL   +----------+
 |  urls.py | -----------------> |   View   |
 +----------+                    | views.py |
                                 +----------+
                                   |      ^
                      3. query     |      | 4. data
                                   v      |
                                 +----------+
                                 |  Model   |<--> Database
                                 | models.py|
                                 +----------+
                                   |
                       5. context  v
                                 +----------+
                                 | Template |
                                 |  .html   |
                                 +----------+
                                   |
    ^  6. HTTP Response (HTML)     |
    +------------------------------+
```

**Difference between MVC and MVT**

| MVC | MVT |
|---|---|
| Controller written by the developer | Controller handled by the framework (URL dispatcher) |
| View displays the data | Template displays the data |
| Controller decides which View to use | View contains the logic and decides which Template to use |

**Advantages:** separation of concerns, easier maintenance, reusable components, parallel work by designers and developers.

---

## Q2. Explain how Django processes a request (request/response cycle) with a flow diagram. (5-10 marks)

The request/response cycle is the sequence of steps from the moment a browser sends a request to the moment it receives a response.

**Steps**
1. The browser sends an HTTP request to the web server.
2. The web server passes it to Django through WSGI (or ASGI) and Django creates an `HttpRequest` object.
3. The request passes through the **middleware** (in the order listed in `MIDDLEWARE` in settings.py), for example security, sessions, authentication.
4. The **URL resolver** reads `ROOT_URLCONF`, matches the requested path against `urlpatterns`, and finds the matching view.
5. The **view** is called with the `HttpRequest` object and any URL parameters. The view runs the logic and, if needed, queries the database through models.
6. The view loads a template, fills it with context data (`render()`), and returns an `HttpResponse`.
7. The response travels back through the middleware in reverse order.
8. The server sends the response to the browser, which displays it.

```
Browser -> Web Server (WSGI) -> Middleware -> URL Resolver (urls.py)
                                                    |
                                                    v
Browser <- Web Server <- Middleware <- Response <- View (views.py)
                                                  |        ^
                                                  v        |
                                           Model/Database  Template
```

**Note:** If no URL pattern matches, Django returns a 404 response. If the view raises an unhandled exception, Django returns a 500 response.

---

## Q3. Differentiate between a Django project and a Django app. Explain the files created with a project. (5-10 marks)

**Project:** the whole website. It holds configuration (settings, URLs, deployment entry points) and one or more apps. Created with `django-admin startproject mysite`.

**App:** a single module that does one job (for example students, blog, payments). It holds its own models, views and templates. Created with `python manage.py startapp students`. One project can contain many apps, and one app can be reused in many projects.

| Project | App |
|---|---|
| Whole website or configuration | One feature of the website |
| Created with `startproject` | Created with `startapp` |
| Only one per website | Many per project |
| Has settings.py, wsgi.py | Has models.py, views.py, admin.py |

**Files created by `startproject mysite`**
```
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

| File | Purpose |
|---|---|
| `manage.py` | Command-line utility to run server, migrations, shell, create apps |
| `__init__.py` | Marks the folder as a Python package |
| `settings.py` | All configuration: INSTALLED_APPS, DATABASES, MIDDLEWARE, TEMPLATES, STATIC_URL, DEBUG |
| `urls.py` | Project-level URL configuration |
| `wsgi.py` | Entry point for WSGI-compatible web servers (production) |
| `asgi.py` | Entry point for ASGI-compatible servers (async support) |

**Files created by `startapp students`:** `__init__.py`, `admin.py`, `apps.py`, `models.py`, `tests.py`, `views.py`, and a `migrations/` folder.

After creating an app, it must be added to `INSTALLED_APPS` in settings.py.

---

## Q4. Explain the role of models.py, views.py, urls.py, admin.py, settings.py and manage.py. (5-6 marks)

| File | Role |
|---|---|
| `models.py` | Defines database tables as Python classes. Each class is a table, each attribute is a column. |
| `views.py` | Contains view functions or classes that take a request and return a response. Holds the application logic. |
| `urls.py` | Maps URL patterns to views. Project-level urls.py usually includes app-level urls.py using `include()`. |
| `admin.py` | Registers models with the Django admin site so data can be managed through the admin interface. |
| `settings.py` | Central configuration of the project: installed apps, middleware, database, templates, static files, security options. |
| `manage.py` | Command-line tool for administrative tasks: `runserver`, `makemigrations`, `migrate`, `createsuperuser`, `shell`, `startapp`, `test`. |

**Example**
```python
# models.py
class Student(models.Model):
    name = models.CharField(max_length=100)

# views.py
def student_list(request):
    return render(request, 'student_list.html', {'students': Student.objects.all()})

# urls.py
urlpatterns = [path('students/', views.student_list, name='student_list')]
```

---

## Q5. Write a Django view and URL configuration that displays the current date and time of the server. (5-8 marks)

**views.py**
```python
from django.http import HttpResponse
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)
```

**urls.py**
```python
from django.urls import path
from . import views

urlpatterns = [
    path('time/', views.current_datetime, name='current_datetime'),
]
```

**Working:** When the user visits `http://127.0.0.1:8000/time/`, the URL resolver matches `time/` and calls `current_datetime()`. The view gets the current time with `datetime.datetime.now()`, builds an HTML string, and returns it in an `HttpResponse`.

**Using a template (preferred)**
```python
from django.shortcuts import render
import datetime

def current_datetime(request):
    return render(request, 'time.html', {'now': datetime.datetime.now()})
```
```html
<!-- time.html -->
<p>It is now {{ now }}.</p>
```

**Extension: time offset (VTU style)**
```python
def hours_ahead(request, offset):
    offset = int(offset)
    dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
    return HttpResponse("In %s hour(s), it will be %s." % (offset, dt))

# urls.py
path('time/plus/<int:offset>/', views.hours_ahead),
```

---

## Q6. Explain URL mapping to views, wildcard (dynamic) URL patterns, and loose coupling in URLconf. (5-10 marks)

**URL mapping:** The URLconf (`urls.py`) is a list called `urlpatterns`. Each entry is a `path()` that links a URL pattern to a view.
```python
urlpatterns = [
    path('', views.home, name='home'),
    path('students/', views.student_list, name='student_list'),
]
```
`path(route, view, name=None)`: `route` is the URL pattern, `view` is the function to call, `name` is a label used for reverse lookup.

**Including app URLs**
```python
from django.urls import path, include
urlpatterns = [
    path('students/', include('students.urls')),
]
```

**Wildcard (dynamic) URL patterns:** Parts of a URL can be captured and passed to the view as arguments using **path converters**.
```python
path('students/<int:student_id>/', views.student_detail),
path('hello/<str:name>/', views.hello),
```
| Converter | Matches |
|---|---|
| `str` | Any non-empty string without `/` (default) |
| `int` | Zero or positive integer |
| `slug` | Letters, numbers, hyphens, underscores |
| `uuid` | A UUID |
| `path` | Any string including `/` |

```python
def student_detail(request, student_id):
    return HttpResponse("Student number %d" % student_id)
```
Regular expressions can be used with `re_path()` for complex patterns.

**Order matters:** Django checks patterns from top to bottom and stops at the first match. Fixed paths like `students/add/` must come before `students/<int:id>/`.

**Loose coupling:** The URL pattern and the view function are independent. Changing a URL (for example `/students/` to `/pupils/`) does not require changing the view, and renaming a view does not change the URL. This makes the application easier to maintain. Using `name=` and the `{% url 'student_list' %}` tag in templates keeps links working when the URL changes.

---

## Q7. Explain Django template tags and filters with examples. (5-6 marks)

**Template tags:** constructs written in `{% %}` that add logic to a template (loops, conditions, inheritance, URLs).

| Tag | Purpose |
|---|---|
| `{% if %} ... {% elif %} ... {% else %} ... {% endif %}` | Conditional display |
| `{% for %} ... {% empty %} ... {% endfor %}` | Loop over a list; `{% empty %}` runs for an empty list |
| `{% url 'name' %}` | Generates URL from a named pattern |
| `{% extends 'base.html' %}` | Inherit from a parent template |
| `{% block name %} ... {% endblock %}` | Defines an overridable section |
| `{% include 'file.html' %}` | Inserts another template |
| `{% csrf_token %}` | Adds CSRF protection token to a POST form |
| `{% load static %}` | Loads the static tag library |

```html
{% if user.is_authenticated %}
    <p>Welcome, {{ user.username }}</p>
{% else %}
    <p>Please log in</p>
{% endif %}

<ul>
{% for s in students %}
    <li>{{ forloop.counter }}. {{ s.name }}</li>
{% empty %}
    <li>No students found</li>
{% endfor %}
</ul>
```

**Template filters:** modify how a variable is displayed. Syntax: `{{ variable|filter }}` or `{{ variable|filter:argument }}`. Filters can be chained and are applied left to right.

| Filter | Example | Result |
|---|---|---|
| `upper` | `{{ name\|upper }}` | RAHUL |
| `lower` | `{{ name\|lower }}` | rahul |
| `title` | `{{ name\|title }}` | Rahul Sharma |
| `length` | `{{ list\|length }}` | number of items |
| `default` | `{{ value\|default:"N/A" }}` | N/A if empty |
| `date` | `{{ created\|date:"d-m-Y" }}` | 07-10-2026 |
| `truncatewords` | `{{ text\|truncatewords:10 }}` | first 10 words... |

**Difference:** Tags control logic and structure. Filters change the presentation of a single value.

---

## Q8. Explain template inheritance in Django with an example. (5-10 marks)

**Definition:** Template inheritance lets a base (parent) template define the common layout of a website, with blocks that child templates can override. It avoids repeating the header, navigation and footer on every page (DRY principle).

**Tags used**
- `{% block name %}{% endblock %}` in the parent defines a replaceable section.
- `{% extends 'base.html' %}` in the child declares the parent. It must be the **first tag** in the child template.
- `{{ block.super }}` includes the parent's block content inside the child's block.

**base.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <header>
        <a href="{% url 'home' %}">Home</a> |
        <a href="{% url 'about' %}">About</a>
    </header>

    {% block content %}{% endblock %}

    <footer>&copy; 2026 My College</footer>
</body>
</html>
```

**home.html**
```html
{% extends 'base.html' %}

{% block title %}Home{% endblock %}

{% block content %}
    <h1>Welcome to the homepage</h1>
{% endblock %}
```

**about.html**
```html
{% extends 'base.html' %}

{% block title %}About{% endblock %}

{% block content %}
    <h1>About us</h1>
{% endblock %}
```

**Advantages:** code reuse, consistent look, a change in base.html updates every page, smaller child templates.

---

## Q9. Explain the Django template system and the Django Template Language (DTL). (5-10 marks)

**Template:** a text file (usually HTML) that holds the static structure of a page together with placeholders and tags that Django fills in at run time.

**Django Template Language (DTL):** the mini-language used inside templates. It is intentionally limited so that templates cannot run arbitrary Python code, which keeps logic in views and presentation in templates.

**Four building blocks**
1. **Variables:** `{{ name }}`. Dot notation works for dictionary keys, attributes and list indexes: `{{ student.name }}`, `{{ items.0 }}`.
2. **Tags:** `{% if %}`, `{% for %}`, `{% extends %}`.
3. **Filters:** `{{ name|upper }}`.
4. **Comments:** `{# single line #}` or `{% comment %} ... {% endcomment %}`.

**Configuration (settings.py)**
```python
TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [BASE_DIR / 'templates'],
    'APP_DIRS': True,
    'OPTIONS': {'context_processors': [...]},
}]
```
- `DIRS`: extra folders to search for templates (project-level).
- `APP_DIRS`: if True, Django also looks in each app's `templates/` folder.

**Rendering a template**
```python
from django.shortcuts import render

def profile(request):
    context = {'name': 'Rahul', 'semester': 5}
    return render(request, 'profile.html', context)
```
```html
<h1>{{ name }}</h1>
<p>Semester: {{ semester }}</p>
```
`render(request, template_name, context)` loads the template, fills it with the context dictionary, and returns an `HttpResponse`.

**Why use templates:** separates design from logic, enables reuse through inheritance, and lets non-programmers edit page design.

---

## Q10. Short notes and definitions (2-3 marks each)

**Web framework:** a software library that provides ready-made structure and tools (routing, database access, templates, security) for building web applications faster.

**Django:** a free, open-source, high-level Python web framework that follows the MVT pattern and the "batteries included" idea. It was created in 2003 at the Lawrence Journal-World newspaper and released publicly in 2005.

**MVC:** Model-View-Controller. **MVT:** Model-View-Template. **DTL:** Django Template Language.

**View:** a Python function or class that receives an `HttpRequest` and returns an `HttpResponse`.

**HttpRequest:** an object that holds information about the request: `request.method`, `request.GET`, `request.POST`, `request.user`, `request.session`, `request.COOKIES`.

**HttpResponse:** an object that carries the content, status code and headers sent back to the browser.

**render():** a shortcut that combines a template with a context dictionary and returns an `HttpResponse`.

**Context:** the dictionary passed from a view to a template, where each key becomes a template variable.

**manage.py:** command-line utility for administrative tasks.

**Virtual environment:** an isolated Python environment for one project so package versions do not conflict. Created with `python -m venv venv`.

**Features of Django:** fast development, built-in admin, ORM, security (CSRF, XSS, SQL injection protection), scalability, authentication system, template engine, large community.

**Development server:** started with `python manage.py runserver`. It runs at `http://127.0.0.1:8000/` and is only for development, not for production.

---
# UNIT 3: Django Models, ORM and Databases

---

## Q1. What is a Django model? Explain how to create a model with field types and an example. (5-6 marks)

**Model:** a Python class that represents a database table. It is a subclass of `django.db.models.Model`. Each attribute of the class is a column (field), and each object of the class is a row (record).

**Creating a model (models.py)**
```python
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.IntegerField()
    enrollment_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
```
Django creates a table `students_student` (appname_modelname) with an automatic primary key `id` (AutoField).

**Common field types**

| Field | Stores |
|---|---|
| `CharField(max_length=n)` | Short text; `max_length` is required |
| `TextField()` | Long text |
| `IntegerField()` | Whole numbers |
| `FloatField()` / `DecimalField()` | Decimal numbers |
| `BooleanField()` | True or False |
| `DateField()` / `DateTimeField()` | Date / date and time |
| `EmailField()` | Email address (validated) |
| `URLField()` | URL |
| `AutoField()` | Auto-increment integer (primary key) |
| `FileField()` / `ImageField()` | Uploaded file / image |

**Common field options**

| Option | Meaning |
|---|---|
| `null=True` | Column may be NULL in the database |
| `blank=True` | Field may be left empty in forms (validation level) |
| `default=value` | Default value |
| `unique=True` | No duplicate values |
| `choices=[...]` | Limits to a fixed set of options |
| `auto_now_add=True` | Sets date/time once when the record is created |
| `auto_now=True` | Updates date/time on every save |

**Meta class:** gives model-level options.
```python
class Meta:
    ordering = ['name']
    verbose_name_plural = 'Students'
```

**Important:** Creating a model does not create the table. Migrations must be run (see Q6).

---

## Q2. Explain the save(), create() and values() methods with examples. (6 marks)

**save():** called on a model instance. It inserts a new row if the object is new, or updates the row if the object already exists.
```python
s = Student(name='Amit', email='amit@example.com', age=20)
s.save()            # INSERT

s.age = 21
s.save()            # UPDATE
```

**create():** a manager method that creates the object and saves it in a single step. It returns the new object.
```python
Student.objects.create(name='Priya', email='priya@example.com', age=19)
```

**values():** a QuerySet method that returns a QuerySet of **dictionaries** instead of model objects, containing only the requested fields.
```python
Student.objects.values('name', 'age')
# <QuerySet [{'name': 'Amit', 'age': 21}, {'name': 'Priya', 'age': 19}]>
```
Related method `values_list('name', flat=True)` returns plain values.

| save() | create() |
|---|---|
| Called on an instance | Called on the manager (`objects`) |
| Two steps: build object, then save | One step |
| Can insert or update | Always inserts |

---

## Q3. Explain how to insert, update and delete records in Django with examples. (5-6 marks)

These are the **CRUD** operations: Create, Read, Update, Delete.

**Insert (Create)**
```python
# Method 1
s = Student(name='Rahul', email='rahul@example.com', age=22)
s.save()

# Method 2
Student.objects.create(name='Sneha', email='sneha@example.com', age=20)
```

**Read**
```python
Student.objects.all()
Student.objects.get(id=1)
Student.objects.filter(age__gte=20)
```

**Update**
```python
# Single object: get, change, save
s = Student.objects.get(id=1)
s.age = 23
s.save()

# Many objects at once
Student.objects.filter(age__lt=18).update(is_active=False)
```
`update()` works on a QuerySet, runs a single SQL UPDATE, and returns the number of rows changed. It does not call `save()`.

**Delete**
```python
s = Student.objects.get(id=1)
s.delete()

Student.objects.filter(is_active=False).delete()   # delete many
```
`delete()` returns the number of objects deleted.

**Using the shell:** run `python manage.py shell`, then `from students.models import Student` and execute the statements above.

---

## Q4. Explain QuerySet methods: all(), get(), filter(), exclude(), order_by(), slicing, and field lookups. (6-8 marks)

**QuerySet:** a collection of objects from the database. QuerySets are **lazy**: the database is queried only when the result is used (iterated, sliced with a step, converted to a list, or counted).

| Method | Returns | Example |
|---|---|---|
| `all()` | QuerySet of all rows | `Student.objects.all()` |
| `get()` | **One** object; raises `DoesNotExist` if none, `MultipleObjectsReturned` if more than one | `Student.objects.get(id=1)` |
| `filter()` | QuerySet of rows that match | `Student.objects.filter(age=20)` |
| `exclude()` | QuerySet of rows that do not match | `Student.objects.exclude(age=20)` |
| `order_by()` | Sorted QuerySet; `-` for descending | `Student.objects.order_by('-age')` |
| `count()` | Number of rows | `Student.objects.count()` |
| `exists()` | True or False | `Student.objects.filter(age=20).exists()` |
| `first()` / `last()` | One object or None | `Student.objects.first()` |

**Field lookups:** written as `field__lookup=value` (double underscore).

| Lookup | Meaning |
|---|---|
| `name__exact="Amit"` | Equal |
| `name__iexact="amit"` | Equal, ignore case |
| `name__contains="mit"` | Contains (case-sensitive) |
| `name__icontains="mit"` | Contains, ignore case |
| `name__startswith="A"` | Starts with |
| `age__gt=20`, `age__gte=20` | Greater than, greater or equal |
| `age__lt=20`, `age__lte=20` | Less than, less or equal |
| `age__in=[18, 20, 22]` | Value in list |
| `age__range=(18, 25)` | Between two values |

**Chaining:** each call returns a new QuerySet, so filters can be chained.
```python
Student.objects.filter(age__gte=18).exclude(name='Amit').order_by('name')
```

**Slicing:** Python slicing syntax limits the rows (SQL LIMIT and OFFSET).
```python
Student.objects.all()[:5]       # first 5 rows
Student.objects.all()[5:10]     # rows 6 to 10
```
Negative indexing is not supported.

**Aggregation**
```python
from django.db.models import Count, Avg, Max, Min
Student.objects.aggregate(Avg('age'), Max('age'))
```

---

## Q5. What is ORM? Explain the advantages of ORM in Django. (5-6 marks)

**ORM (Object-Relational Mapper):** a layer that maps database tables to Python classes, rows to objects, and columns to attributes. Developers write Python code and Django converts it into SQL.

```python
# Python (ORM)
Student.objects.filter(age__gte=20)

# SQL generated
SELECT * FROM students_student WHERE age >= 20;
```

**Mapping**

| Database | Django ORM |
|---|---|
| Table | Model class |
| Row | Model object |
| Column | Field (attribute) |
| SQL query | QuerySet |

**Advantages**
1. No need to write raw SQL for most tasks.
2. Database independent: the same code works with SQLite, MySQL, PostgreSQL by changing `DATABASES` in settings.
3. Protects against SQL injection because queries are parameterised.
4. Code is shorter, readable and easier to maintain.
5. Migrations track and apply schema changes.

**Disadvantage:** very complex queries can be harder to express or slower than hand-written SQL. Django allows raw SQL with `Student.objects.raw("SELECT * FROM students_student")` when needed.

---

## Q6. Explain database configuration and migrations in Django. (5-8 marks)

**Database configuration (settings.py)**

Default (SQLite):
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

MySQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'college_db',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```
Supported engines: `sqlite3`, `postgresql`, `mysql`, `oracle`. A driver package (for example `mysqlclient`) must be installed for MySQL.

**Migrations:** Django's way of propagating changes made to models (new model, new field, removed field) into the database schema.

**Steps**
1. Create or change a model in `models.py`.
2. `python manage.py makemigrations`: creates a migration file in the `migrations/` folder. It only **plans** the change; the database is not touched.
3. `python manage.py migrate`: **executes** the migration files and creates or alters tables.
4. Optional: `python manage.py sqlmigrate students 0001` shows the SQL; `python manage.py showmigrations` lists applied migrations.

**Schema evolution:** when a model changes later, repeat makemigrations and migrate. Django records applied migrations in the `django_migrations` table. Adding a non-null field to a table that already has rows needs a default value, or `null=True`.

**Important:** `INSTALLED_APPS` must contain the app, otherwise makemigrations will not detect its models.

---

## Q7. Explain the Django admin interface: superuser, registering models and customising it. (6-10 marks)

**Django admin:** a built-in, ready-to-use web interface to add, view, edit and delete database records. It is provided by `django.contrib.admin` and available at `/admin/`.

**Setup steps**
1. Ensure `django.contrib.admin`, `auth`, `contenttypes`, `sessions`, `messages` are in `INSTALLED_APPS`.
2. Run migrations.
3. Create an administrator: `python manage.py createsuperuser` (asks for username, email, password).
4. Register the model in `admin.py`.
5. Run the server and open `http://127.0.0.1:8000/admin/`.

**Registering a model**
```python
from django.contrib import admin
from .models import Student

admin.site.register(Student)
```

**Customising with ModelAdmin**
```python
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'age')      # columns in list page
    list_filter = ('age', 'is_active')           # filter sidebar
    search_fields = ('name', 'email')            # search box
    list_editable = ('age',)                     # edit from list page
    ordering = ('name',)
    fields = ('name', 'email', 'age')            # fields in the edit form
    readonly_fields = ('enrollment_date',)
```

| Option | Purpose |
|---|---|
| `list_display` | Columns shown on the list page |
| `list_filter` | Adds filter sidebar |
| `search_fields` | Adds search box |
| `list_editable` | Makes columns editable on the list page (field must also be in list_display) |
| `fields` | Controls which fields appear in the form and their order |
| `readonly_fields` | Shows fields that cannot be edited |
| `ordering` | Default sort order |

**Inlines:** show related records on the parent's page. `TabularInline` shows a table, `StackedInline` shows stacked forms.
```python
class StudentInline(admin.TabularInline):
    model = Student

class DepartmentAdmin(admin.ModelAdmin):
    inlines = [StudentInline]
```

**Benefits:** no need to build a back-end panel, built-in login, permissions and user management, search and filters, and quick data entry during development.

---

## Q8. Explain model relationships in Django: OneToOne, ForeignKey and ManyToMany. (6-8 marks)

**1. ForeignKey (many-to-one):** many rows of one table point to one row of another. The key is placed on the "many" side.
```python
class Department(models.Model):
    name = models.CharField(max_length=100)

class Student(models.Model):
    name = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE,
                                   related_name='students')
```
One department has many students; each student belongs to one department.

`on_delete` is **compulsory**:
| Value | Behaviour when the parent is deleted |
|---|---|
| `CASCADE` | Delete child rows too |
| `PROTECT` | Block deletion |
| `SET_NULL` | Set the foreign key to NULL (needs `null=True`) |
| `SET_DEFAULT` | Set to the default value |

**2. ManyToManyField:** many rows on both sides. Django automatically creates a **junction (through) table**.
```python
class Course(models.Model):
    title = models.CharField(max_length=100)

class Student(models.Model):
    courses = models.ManyToManyField(Course, related_name='students')
```
```python
s.courses.add(c1, c2)       # add (existing links stay)
s.courses.set([c1])         # replace all links
s.courses.remove(c1)
s.courses.clear()
```

**3. OneToOneField:** each row links to exactly one row of another table.
```python
class StudentProfile(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    address = models.TextField()
```

**Forward and reverse queries**
```python
student.department.name                  # forward
department.students.all()                # reverse (uses related_name)
course.students.all()                    # reverse many-to-many
Student.objects.filter(department__name='CSE')   # lookup across relation
```
If `related_name` is not given, the reverse accessor is `modelname_set` (for example `department.student_set.all()`).

---

## Q9. Develop a Django application for student registration to a course and listing students per course. (10 marks)

**models.py**
```python
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    courses = models.ManyToManyField(Course, related_name='students')

    def __str__(self):
        return self.name
```

**forms.py**
```python
from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'email', 'courses']
        widgets = {'courses': forms.CheckboxSelectMultiple}
```

**views.py**
```python
from django.shortcuts import render, redirect, get_object_or_404
from .forms import StudentForm
from .models import Course

def register_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()                  # saves student and many-to-many data
            return redirect('course_list')
    else:
        form = StudentForm()
    return render(request, 'register.html', {'form': form})

def course_list(request):
    return render(request, 'course_list.html',
                  {'courses': Course.objects.all()})

def course_students(request, course_id):
    course = get_object_or_404(Course, id=course_id)
    return render(request, 'course_students.html',
                  {'course': course, 'students': course.students.all()})
```

**urls.py**
```python
urlpatterns = [
    path('register/', views.register_student, name='register'),
    path('courses/', views.course_list, name='course_list'),
    path('courses/<int:course_id>/', views.course_students, name='course_students'),
]
```

**register.html**
```html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Register</button>
</form>
```

**course_students.html**
```html
<h2>{{ course.title }}</h2>
<ul>
{% for s in students %}
    <li>{{ s.name }} ({{ s.email }})</li>
{% empty %}
    <li>No students registered</li>
{% endfor %}
</ul>
```

**Steps to run:** add the app to `INSTALLED_APPS`, run `makemigrations` and `migrate`, add courses through the admin, then open `/register/`.

---

## Q10. Develop a Django project to display and delete employee records. (8-10 marks)

**models.py**
```python
from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
```

**views.py**
```python
from django.shortcuts import render, redirect, get_object_or_404
from .models import Employee

def employee_list(request):
    employees = Employee.objects.all()
    return render(request, 'employee_list.html', {'employees': employees})

def employee_delete(request, emp_id):
    employee = get_object_or_404(Employee, id=emp_id)
    if request.method == 'POST':
        employee.delete()
        return redirect('employee_list')
    return render(request, 'employee_confirm_delete.html', {'employee': employee})
```

**urls.py**
```python
urlpatterns = [
    path('employees/', views.employee_list, name='employee_list'),
    path('employees/<int:emp_id>/delete/', views.employee_delete, name='employee_delete'),
]
```

**employee_list.html**
```html
<table border="1">
    <tr><th>Name</th><th>Department</th><th>Salary</th><th>Action</th></tr>
    {% for e in employees %}
    <tr>
        <td>{{ e.name }}</td>
        <td>{{ e.department }}</td>
        <td>{{ e.salary }}</td>
        <td><a href="{% url 'employee_delete' e.id %}">Delete</a></td>
    </tr>
    {% endfor %}
</table>
```

**employee_confirm_delete.html**
```html
<p>Delete {{ employee.name }}?</p>
<form method="post">
    {% csrf_token %}
    <button type="submit">Yes, delete</button>
    <a href="{% url 'employee_list' %}">Cancel</a>
</form>
```

**Working:** The list page shows all employees. Clicking Delete opens a confirmation page (GET). Submitting the form (POST) deletes the record and redirects back to the list. Deleting only on POST prevents accidental deletion through a link.

---

## Q11. Short notes and definitions (2-3 marks each)

**Model variable:** a class attribute in a model, created with a field class, which becomes a column in the table.

**CRUD:** Create, Read, Update, Delete: the four basic database operations.

**Manager (`objects`):** the interface through which database queries are made. Every model has a default manager named `objects`.

**QuerySet:** a lazy collection of database objects that can be filtered, ordered and sliced.

**Migration:** a Python file that describes a change to the database schema.

**Superuser:** an administrator account with all permissions, created with `createsuperuser`.

**Default database in Django:** SQLite (`db.sqlite3`).

**AutoField:** an integer field that increments automatically, used for the primary key `id`.

**URLField:** a CharField that stores and validates a URL.

**`__str__()`:** returns a readable name for an object, used in the admin and the shell.

**null vs blank:** `null` is database level (allows NULL); `blank` is validation level (allows empty value in forms).

**django.contrib:** a collection of built-in apps shipped with Django, such as admin, auth, sessions, messages, staticfiles.

**Python shell command to save a record:** `python manage.py shell`, then create an object and call `.save()`.

---
# CHAPTER 4: Advanced Django Features and Forms

---

## Q1. Explain Django forms. How do you create and process a form with validation? (6-10 marks)

**Django form:** a Python class that defines the fields of an HTML form, renders them, and validates the submitted data. It is a subclass of `django.forms.Form`.

**Advantages:** automatic HTML generation, built-in validation, cleaned Python data types, protection against common attacks when used with CSRF.

**Step 1: forms.py**
```python
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)
```

**Step 2: views.py**
```python
from django.shortcuts import render, redirect
from .forms import ContactForm

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)         # bound form
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            # process data (save, send mail)
            return redirect('thanks')
    else:
        form = ContactForm()                     # unbound (empty) form
    return render(request, 'contact.html', {'form': form})
```

**Step 3: contact.html**
```html
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Send</button>
</form>
```

**Key points**
- **Unbound form:** created without data, shown empty on GET.
- **Bound form:** created with `request.POST`, so it can be validated.
- `form.is_valid()` runs validation and returns True or False.
- `form.cleaned_data` is available **only after** `is_valid()` is called and contains validated, Python-typed values.
- `form.errors` holds the error messages.
- Rendering options: `as_p`, `as_table`, `as_ul`, or manual field-by-field.

**Common form fields:** `CharField`, `IntegerField`, `EmailField`, `BooleanField`, `ChoiceField`, `DateField`, `FileField`.

---

## Q2. Explain form validation in Django: built-in, clean_<fieldname>() and clean(). (6-10 marks)

**Form validation:** checking that submitted data is correct before using it. Django validates on the server when `is_valid()` is called.

**1. Built-in validation:** comes from the field type and its options.
```python
age = forms.IntegerField(min_value=15, max_value=60)
email = forms.EmailField()
name = forms.CharField(max_length=100, required=True)
```
A field with `required=True` (default) cannot be empty.

**2. Field-level custom validation: `clean_<fieldname>()`**
```python
class StudentForm(forms.Form):
    name = forms.CharField(max_length=100)

    def clean_name(self):
        name = self.cleaned_data['name']
        if any(ch.isdigit() for ch in name):
            raise forms.ValidationError("Name cannot contain numbers.")
        return name.title()       # must return the value
```
The method **must return** the cleaned value, otherwise the field becomes None.

**3. Form-level (cross-field) validation: `clean()`**
```python
class RegistrationForm(forms.Form):
    password = forms.CharField(widget=forms.PasswordInput)
    confirm = forms.CharField(widget=forms.PasswordInput)

    def clean(self):
        cleaned = super().clean()
        if cleaned.get('password') != cleaned.get('confirm'):
            raise forms.ValidationError("Passwords do not match.")
        return cleaned
```
Errors raised in `clean()` are stored as **non-field errors**.

**4. Validators:**
```python
from django.core.validators import RegexValidator
phone = forms.CharField(validators=[RegexValidator(r'^\d{10}$', 'Enter 10 digits')])
```

**Customising messages and widgets**
```python
name = forms.CharField(
    error_messages={'required': 'Please enter your name'},
    widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Name'}),
)
```

**Displaying errors in a template**
```html
{{ form.non_field_errors }}
{% for field in form %}
    {{ field.label_tag }} {{ field }}
    {{ field.errors }}
{% endfor %}
```

**Validation order:** field validation, then `clean_<field>()` for each field, then `clean()`.

**Client-side vs server-side:** HTML attributes give a quick check in the browser, but only server-side validation is secure because the browser check can be bypassed.

---

## Q3. What is a ModelForm? Develop a ModelForm for a Student model and use it to add and edit records. (6-10 marks)

**ModelForm:** a form class that is generated automatically from a model. Fields, types and validation rules (such as `max_length`, `unique`) are taken from the model. It adds a `save()` method.

**models.py**
```python
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.IntegerField()
```

**forms.py**
```python
from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'email', 'age']        # or '__all__'
        labels = {'name': 'Full Name'}
        widgets = {'name': forms.TextInput(attrs={'class': 'form-control'})}
```

**views.py: add and edit with one form**
```python
from django.shortcuts import render, redirect, get_object_or_404

def add_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm()
    return render(request, 'student_form.html', {'form': form})

def edit_student(request, student_id):
    student = get_object_or_404(Student, id=student_id)
    if request.method == 'POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm(instance=student)
    return render(request, 'student_form.html', {'form': form})
```

**Key points:** `instance=student` pre-fills the form and makes `save()` update the existing record instead of creating a new one.

**Form vs ModelForm**

| Form | ModelForm |
|---|---|
| Fields defined manually | Fields generated from the model |
| Data saved manually | Has `save()` method |
| Not tied to a model | Tied to a model through `Meta` |
| Use for search, contact forms | Use for create and edit forms |

---

## Q4. Differentiate between GET and POST. Explain the use of CSRF protection in Django forms. (5 marks)

| GET | POST |
|---|---|
| Data is sent in the URL (visible) | Data is sent in the request body (hidden) |
| Used to fetch or search data | Used to create or change data |
| Can be bookmarked and cached | Cannot be bookmarked, not cached |
| Limited length | No practical limit |
| Should not change the server state | Changes server state |

In Django, `request.GET` and `request.POST` are dictionary-like objects that hold the data. `request.method` tells which one was used.

**CSRF (Cross-Site Request Forgery):** an attack in which a malicious site makes a logged-in user's browser send an unwanted request to another site.

**Protection in Django:** `CsrfViewMiddleware` is enabled by default. Every POST form must contain `{% csrf_token %}`. It adds a hidden field with a secret token that Django checks on submission. If the token is missing or wrong, Django returns **403 Forbidden**.
```html
<form method="post">
    {% csrf_token %}
    ...
</form>
```
GET forms (such as search) do not need a CSRF token because they do not change data.

**Post/Redirect/Get pattern:** after a successful POST, redirect to another URL. This prevents the form from being submitted twice when the user refreshes the page.

---

## Q5. Explain user authentication in Django. Differentiate authentication and authorization. (6-10 marks)

**Authentication:** verifying **who** the user is (login with username and password).
**Authorization:** deciding **what** the user is allowed to do (permissions).

| Authentication | Authorization |
|---|---|
| Are you who you claim to be? | Are you allowed to do this? |
| Happens first | Happens after authentication |
| Login, logout, password check | Permissions, groups, `is_staff`, `is_superuser` |

**Django auth system (`django.contrib.auth`)** provides the `User` model, groups, permissions, password hashing, and session-based login. It needs `django.contrib.auth` and `django.contrib.contenttypes` in `INSTALLED_APPS`, plus `SessionMiddleware` and `AuthenticationMiddleware` in `MIDDLEWARE`.

**Login view**
```python
from django.contrib.auth import authenticate, login, logout

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        error = "Invalid username or password"
        return render(request, 'login.html', {'error': error})
    return render(request, 'login.html')
```
- `authenticate()` checks the credentials and returns a `User` object or `None`. It does **not** log the user in.
- `login(request, user)` creates the session and logs the user in.

**Logout view**
```python
def logout_view(request):
    logout(request)
    return redirect('login')
```

**Registration with the built-in form**
```python
from django.contrib.auth.forms import UserCreationForm

def register(request):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save()
        login(request, user)
        return redirect('home')
    return render(request, 'register.html', {'form': form})
```

**Protecting views**
```python
from django.contrib.auth.decorators import login_required

@login_required
def add_student(request):
    ...
```
In settings.py set `LOGIN_URL = 'login'`. Unauthenticated users are redirected there, with `?next=` holding the original URL.

**In templates:** `{% if user.is_authenticated %} ... {% endif %}`; `request.user` is the current user in views.

**Users, groups and permissions**
- Each model automatically gets add, change, delete and view permissions.
- Check in code: `request.user.has_perm('students.add_student')`.
- Protect a view: `@permission_required('students.add_student')`.
- A **group** is a set of permissions assigned to many users at once.
- `is_staff` allows admin site access; `is_superuser` grants all permissions.

**Decorator:** a function that wraps another function to add behaviour. Django uses decorators such as `@login_required`, `@permission_required`, `@csrf_exempt`, `@require_POST`. For class-based views, use `LoginRequiredMixin` instead.

---

## Q6. What are cookies? Explain how cookies are set, read and deleted in Django. (5-6 marks)

**Cookie:** a small piece of data (name and value) that the server sends to the browser. The browser stores it and sends it back with every later request to the same site. Cookies make a stateless HTTP protocol remember information.

**Uses:** keeping a user logged in (session ID), remembering preferences such as theme, shopping carts, tracking.

**Setting a cookie**
```python
def set_theme(request):
    response = HttpResponse("Theme saved")
    response.set_cookie('theme', 'dark', max_age=3600*24*7)   # 7 days
    return response
```
`set_cookie(key, value, max_age, expires, path, domain, secure, httponly)`

**Reading a cookie**
```python
def show_theme(request):
    theme = request.COOKIES.get('theme', 'light')
    return HttpResponse("Theme is " + theme)
```

**Deleting a cookie**
```python
def clear_theme(request):
    response = HttpResponse("Theme removed")
    response.delete_cookie('theme')
    return response
```

**Limitations:** stored on the client so it can be viewed or edited by the user, size limit of about 4 KB, so never store passwords or sensitive data in cookies. Use sessions for that.

---

## Q7. Explain the Django session framework. Differentiate sessions and cookies. (5-10 marks)

**Session:** a way to store data about a user on the **server side** across requests. The browser only holds a cookie named `sessionid`, which is a key to the stored data.

**Setup:** `django.contrib.sessions` in `INSTALLED_APPS` and `SessionMiddleware` in `MIDDLEWARE` (both are present by default). Run `migrate` to create the `django_session` table. The default storage is the **database**; other options are cache, file and signed cookies (`SESSION_ENGINE`).

**Using sessions in a view**
```python
def home(request):
    count = request.session.get('visit_count', 0) + 1
    request.session['visit_count'] = count          # set
    return HttpResponse("You visited %d times" % count)
```

**Session methods**

| Method | Purpose |
|---|---|
| `request.session['key'] = value` | Set a value |
| `request.session['key']` | Read a value (KeyError if missing) |
| `request.session.get('key', default)` | Read with default |
| `del request.session['key']` | Delete one key |
| `keys()`, `values()`, `items()` | Dictionary-like access |
| `clear()` | Remove all session data, session key is kept |
| `flush()` | Delete the session data and the cookie (used by logout) |
| `set_expiry(value)` | Set expiry: seconds as an integer, `0` for browser close, `None` for the global default |
| `get_expiry_age()` | Seconds remaining |
| `session.session_key` | The session key |

```python
request.session.set_expiry(300)      # expires in 5 minutes
```

**Clearing expired sessions:** expired sessions stay in the database until removed. Run `python manage.py clearsessions`, or call `clear_expired()` on the database session backend:
```python
from django.contrib.sessions.backends.db import SessionStore
SessionStore.clear_expired()
```

**Using sessions outside views:** a session can be read from code through the model.
```python
from django.contrib.sessions.models import Session
s = Session.objects.get(session_key='abc123')
data = s.get_decoded()
```

**Session vs Cookie**

| Cookie | Session |
|---|---|
| Stored in the browser | Stored on the server |
| Less secure, user can edit | More secure |
| Size limit about 4 KB | Practically unlimited |
| Can persist for a long time | Usually expires sooner |
| Holds the data itself | Cookie only holds the session ID |

---

## Q8. What is middleware in Django? Explain its types and how to write a custom middleware. (5-8 marks)

**Middleware:** a lightweight layer of hooks between the web server and the view. Each middleware can process the request before it reaches the view and the response before it goes back to the browser. It is configured in the `MIDDLEWARE` list in settings.py. Middleware runs **top to bottom** for the request and **bottom to top** for the response.

**Default middleware**

| Middleware | Purpose |
|---|---|
| `SecurityMiddleware` | Security headers, HTTPS redirect |
| `SessionMiddleware` | Enables sessions |
| `CommonMiddleware` | URL normalisation (adds trailing slash) |
| `CsrfViewMiddleware` | CSRF protection |
| `AuthenticationMiddleware` | Adds `request.user` |
| `MessageMiddleware` | Enables the messages framework |
| `XFrameOptionsMiddleware` | Clickjacking protection |

**Types of middleware by when it acts**
1. **Request middleware:** runs before the view (authentication, sessions).
2. **Response middleware:** runs after the view (add headers, compress).
3. **Exception middleware:** handles exceptions raised by views.
4. **Built-in vs custom** middleware.

**Custom middleware (function style)**
```python
import time

class RequestTimingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response            # runs once at startup

    def __call__(self, request):
        start = time.time()
        response = self.get_response(request)       # calls next layer / view
        print(f"{request.path} took {time.time() - start:.3f}s")
        return response
```
Register it: add `'students.middleware.RequestTimingMiddleware'` to `MIDDLEWARE`.

**Uses:** logging, authentication, security, performance measurement, language selection.

---

## Q9. What are generic views (class-based views)? Explain the types with examples. (5-10 marks)

**Class-based view (CBV):** a view written as a Python class instead of a function. Different HTTP methods are handled by different methods (`get()`, `post()`).

**Generic views:** ready-made class-based views for common tasks such as listing, showing details, creating, updating and deleting objects. They reduce repeated code.

**Basic CBV**
```python
from django.views import View
from django.http import HttpResponse

class AboutView(View):
    def get(self, request):
        return HttpResponse("About page")

# urls.py
path('about/', AboutView.as_view(), name='about')
```
`.as_view()` converts the class into a function that URLs can use.

**Types of generic views**

| View | Purpose | Default template |
|---|---|---|
| `TemplateView` | Show a static template | set by `template_name` |
| `ListView` | List of objects | `<model>_list.html` |
| `DetailView` | One object | `<model>_detail.html` |
| `CreateView` | Form to create an object | `<model>_form.html` |
| `UpdateView` | Form to edit an object | `<model>_form.html` |
| `DeleteView` | Confirm and delete | `<model>_confirm_delete.html` |

**Example**
```python
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

class StudentListView(ListView):
    model = Student
    template_name = 'students/student_list.html'
    context_object_name = 'students'
    paginate_by = 10

class StudentDetailView(DetailView):
    model = Student
    pk_url_kwarg = 'student_id'          # if URL uses <int:student_id>

class StudentCreateView(LoginRequiredMixin, CreateView):
    model = Student
    form_class = StudentForm
    success_url = reverse_lazy('student_list')

class StudentDeleteView(LoginRequiredMixin, DeleteView):
    model = Student
    success_url = reverse_lazy('student_list')
```

**Extending generic views:** override methods.
- `get_queryset()` to filter or sort the list (for example search).
- `get_context_data()` to add extra data to the template.
```python
class StudentListView(ListView):
    model = Student

    def get_queryset(self):
        q = self.request.GET.get('q', '')
        return Student.objects.filter(name__icontains=q)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total'] = Student.objects.count()
        return context
```

**Important points:** `LoginRequiredMixin` must come **before** the generic view in the class definition, because `@login_required` does not work directly on classes. Use `reverse_lazy` for `success_url` at class level.

**FBV vs CBV**

| Function-based view | Class-based view |
|---|---|
| Simple and explicit | Reusable through inheritance and mixins |
| More repeated code for CRUD | Less code for standard tasks |
| Uses `if request.method` | Separate method per HTTP verb |

---

## Q10. Create a generic class-based view that displays a list of students and a detail view. (8-10 marks)

**models.py**
```python
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
```

**views.py**
```python
from django.views.generic import ListView, DetailView
from .models import Student

class StudentListView(ListView):
    model = Student
    template_name = 'students/student_list.html'
    context_object_name = 'students'

class StudentDetailView(DetailView):
    model = Student
    template_name = 'students/student_detail.html'
    context_object_name = 'student'
```

**urls.py**
```python
from django.urls import path
from .views import StudentListView, StudentDetailView

urlpatterns = [
    path('students/', StudentListView.as_view(), name='student_list'),
    path('students/<int:pk>/', StudentDetailView.as_view(), name='student_detail'),
]
```

**student_list.html**
```html
<h2>Students</h2>
<ul>
{% for s in students %}
    <li><a href="{% url 'student_detail' s.pk %}">{{ s.name }}</a></li>
{% empty %}
    <li>No students found</li>
{% endfor %}
</ul>
```

**student_detail.html**
```html
<h2>{{ student.name }}</h2>
<p>Email: {{ student.email }}</p>
<p>Age: {{ student.age }}</p>
<a href="{% url 'student_list' %}">Back</a>
```

**Working:** `ListView` runs `Student.objects.all()` and passes the result to the template under the name `students`. `DetailView` reads `pk` from the URL, fetches that student (raising 404 if not found) and passes it as `student`.

---

## Q11. Explain unit testing in Django. (5-6 marks)

**Testing:** writing code that automatically checks whether other code works correctly. A **unit test** checks a small unit, such as a model method or a view.

**Django testing:** Django builds on Python's `unittest` module and provides `django.test.TestCase`. For each test run Django creates a **separate test database** and destroys it afterwards, so real data is not affected. Tests are written in `tests.py` and run with:
```
python manage.py test
```

**Example**
```python
from django.test import TestCase
from django.urls import reverse
from .models import Student

class StudentTests(TestCase):
    def setUp(self):
        self.student = Student.objects.create(name='Amit', email='a@x.com', age=20)

    def test_student_str(self):
        self.assertEqual(str(self.student), 'Amit')

    def test_list_view_status(self):
        response = self.client.get(reverse('student_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Amit')
```

**Common assertions:** `assertEqual`, `assertTrue`, `assertFalse`, `assertContains`, `assertRedirects`, `assertTemplateUsed`.

**Test client:** `self.client` simulates a browser: `get()`, `post()`, `login()`.

**Methods:** `setUp()` runs before each test; `tearDown()` runs after each test.

**Advantages:** finds bugs early, makes later changes safe, documents expected behaviour, supports automated checking.

**Note:** `unittest2` in older papers is a back-port of Python's `unittest` features, now part of the standard `unittest` module.

---
# CHAPTER 5: REST APIs with Django REST Framework (DRF) and Deployment

---

## Q1. What is a REST API? Explain the HTTP methods and status codes. (5-6 marks)

**API (Application Programming Interface):** a set of rules that lets one software program communicate with another.

**REST (Representational State Transfer):** an architectural style for web APIs in which resources (students, courses) are identified by URLs and manipulated with standard HTTP methods. Data is usually exchanged in **JSON** format. A service that follows REST is called a **RESTful API**.

**Principles of REST**
1. **Client-server:** the client and the server are independent.
2. **Stateless:** every request carries all the information needed; the server does not remember earlier requests.
3. **Resource-based URLs:** `/api/students/`, `/api/students/5/`.
4. **Uniform interface:** standard HTTP methods.
5. **Representation:** resources are sent as JSON (or XML).
6. **Cacheable:** responses can be cached.

**HTTP methods and CRUD**

| Method | Operation | Example | Success code |
|---|---|---|---|
| GET | Read | `GET /api/students/` | 200 |
| POST | Create | `POST /api/students/` | 201 |
| PUT | Update (full) | `PUT /api/students/5/` | 200 |
| PATCH | Update (partial) | `PATCH /api/students/5/` | 200 |
| DELETE | Delete | `DELETE /api/students/5/` | 204 |

**Common status codes**

| Code | Meaning |
|---|---|
| 200 | OK |
| 201 | Created |
| 204 | No Content (deleted) |
| 400 | Bad Request (invalid data) |
| 401 | Unauthorized (not logged in) |
| 403 | Forbidden (not allowed) |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 500 | Internal Server Error |

**Sample JSON response**
```json
{"id": 1, "name": "Amit", "email": "amit@example.com", "age": 20}
```

---

## Q2. What is Django REST Framework? Explain the installation and what a serializer is. (6-8 marks)

**Django REST Framework (DRF):** a powerful third-party toolkit for building Web APIs with Django. It is **not part of Django**; it is a separate package.

**Features:** serializers, API views and ViewSets, routers, authentication and permissions, pagination, a browsable API in the web browser, throttling.

**Installation**
```
pip install djangorestframework
```
```python
# settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
    'students',
]
```

**Serializer:** a class that converts complex data (model instances, QuerySets) to Python data types that can be rendered as JSON (**serialization**), and converts incoming JSON back to validated Python data (**deserialization**). It also validates data.

```
Model object  --serialize-->  Python dict  --render-->  JSON
JSON  --parse-->  Python dict  --validate/save-->  Model object
```

**ModelSerializer:** generates fields and validators automatically from a model.
```python
# serializers.py
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'            # or ['id', 'name', 'email']
```

**Using it**
```python
# Serialize one object
StudentSerializer(student).data

# Serialize a QuerySet: many=True is compulsory
StudentSerializer(Student.objects.all(), many=True).data

# Deserialize and save
serializer = StudentSerializer(data={'name': 'Amit', 'email': 'a@x.com', 'age': 20})
if serializer.is_valid():
    serializer.save()
else:
    print(serializer.errors)
```

**Note:** for ForeignKey and ManyToMany fields, `ModelSerializer` returns the related IDs by default.

---

## Q3. Differentiate Serializer and ModelSerializer. Compare ModelSerializer with ModelForm. (5 marks)

**Serializer vs ModelSerializer**

| Serializer | ModelSerializer |
|---|---|
| Fields declared manually | Fields generated automatically from the model |
| `create()` and `update()` written by developer | Default `create()` and `update()` provided |
| Not tied to a model | Tied to a model through `Meta` |
| More control, more code | Less code |

```python
# Serializer (manual)
class StudentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()

    def create(self, validated_data):
        return Student.objects.create(**validated_data)

# ModelSerializer (automatic)
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
```

**ModelSerializer vs ModelForm**

| ModelForm | ModelSerializer |
|---|---|
| Works with HTML forms | Works with JSON data |
| Input from `request.POST` | Input from `request.data` |
| `form.is_valid()` | `serializer.is_valid()` |
| `form.cleaned_data` | `serializer.validated_data` |
| `form.errors` | `serializer.errors` |
| `form.save()` | `serializer.save()` |
| Output is an HTML page | Output is JSON |

Both use an inner `Meta` class with `model` and `fields`, so the pattern is the same.

**Custom validation in a serializer**
```python
def validate_age(self, value):
    if value < 15:
        raise serializers.ValidationError("Age must be at least 15")
    return value
```

---

## Q4. Write DRF function-based API views for listing and creating students (GET and POST). (6-10 marks)

**serializers.py**
```python
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
```

**views.py**
```python
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer

@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    # POST
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def student_detail(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        return Response(StudentSerializer(student).data)

    if request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    student.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
```

**urls.py**
```python
from django.urls import path
from . import views

urlpatterns = [
    path('api/students/', views.student_list),
    path('api/students/<int:pk>/', views.student_detail),
]
```

**Explanation**
- `@api_view([...])` restricts the allowed HTTP methods; any other method returns **405**.
- `request.data` holds the parsed body and works for JSON as well as form data. `request.POST` does not parse JSON.
- `Response` is rendered to JSON (or HTML in the browsable API) depending on the client.
- The `status` module gives readable names for codes (`HTTP_201_CREATED`).
- Passing an existing `student` to the serializer makes `save()` perform an update.

**Browsable API:** opening `/api/students/` in a browser shows a web page where GET and POST can be tried without any extra tool.

---

## Q5. Explain @api_view, APIView, ViewSet and Router in DRF. (6-10 marks)

DRF offers three levels of writing views, each with less code.

**1. Function-based: `@api_view`**
Simple function with full control. Shown in Q4.

**2. Class-based: `APIView`**
One method per HTTP verb.
```python
from rest_framework.views import APIView

class StudentListAPI(APIView):
    def get(self, request):
        serializer = StudentSerializer(Student.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# urls.py
path('api/students/', StudentListAPI.as_view())
```

**3. ViewSet: `ModelViewSet`**
Provides the complete CRUD (list, create, retrieve, update, partial_update, destroy) in a few lines.
```python
from rest_framework import viewsets

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
```

**Router:** generates the URL patterns for a ViewSet automatically.
```python
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('students', StudentViewSet)

urlpatterns = router.urls
# or: path('api/', include(router.urls))
```

**URLs generated by the router**

| URL | Method | Action |
|---|---|---|
| `/students/` | GET | list |
| `/students/` | POST | create |
| `/students/1/` | GET | retrieve |
| `/students/1/` | PUT / PATCH | update |
| `/students/1/` | DELETE | destroy |

`DefaultRouter` also creates an API root page that lists all endpoints.

**Comparison**

| @api_view | APIView | ModelViewSet |
|---|---|---|
| Function | Class | Class |
| `if request.method` | One method per verb | Actions generated |
| Most code | Medium code | Least code |
| Manual URLs | Manual URLs | Router makes URLs |
| Most control | Good control | Least control |

`ReadOnlyModelViewSet` provides only list and retrieve.

---

## Q6. Explain request.data vs request.POST, and many=True in DRF. (3-5 marks)

**request.data**
- DRF's `Request` object attribute that holds the parsed request body.
- Works for JSON, form data and file uploads.
- Works for POST, PUT and PATCH.

**request.POST**
- Django's attribute; holds only form-encoded data from POST requests.
- Does **not** parse a JSON body, so it would be empty for a JSON API client.

| request.POST | request.data |
|---|---|
| Django | DRF |
| Form data only | JSON and form data |
| POST method only | POST, PUT, PATCH |

**many=True**
A serializer expects one object by default. When serializing a QuerySet or a list of objects, `many=True` must be passed, otherwise an error occurs.
```python
StudentSerializer(Student.objects.all(), many=True)     # list of students
StudentSerializer(student)                               # one student
```
`many=True` also lets a serializer accept a list of objects when deserializing.

---

## Q7. How can an API be consumed in Python? Explain the requests library with error handling. (5-6 marks)

**Consuming an API:** sending requests from a program (a Django view, a script, a mobile app) to an API and using the response. A common Python tool is the **requests** library. It is separate from Django's `request` object.

**Installation:** `pip install requests`

**GET request**
```python
import requests

response = requests.get('http://127.0.0.1:8000/api/students/', timeout=5)
response.raise_for_status()
students = response.json()          # Python list of dictionaries
```

**POST request**
```python
data = {'name': 'Amit', 'email': 'a@x.com', 'age': 20}
response = requests.post('http://127.0.0.1:8000/api/students/', json=data, timeout=5)
print(response.status_code)         # 201 on success
```

**Useful response attributes**

| Attribute | Meaning |
|---|---|
| `response.status_code` | HTTP status code |
| `response.json()` | Body parsed from JSON |
| `response.text` | Body as text |
| `response.headers` | Response headers |
| `response.raise_for_status()` | Raises an exception for 4xx/5xx codes |

**Defensive consumption**
```python
def students_from_api(request):
    try:
        r = requests.get(API_URL, timeout=5)
        r.raise_for_status()
        students = r.json()
        error = None
    except requests.RequestException as e:
        students, error = [], str(e)
    return render(request, 'api_students.html',
                  {'students': students, 'error': error})
```
- `timeout` stops the program from waiting forever if the other server does not respond.
- `raise_for_status()` turns an error response into an exception, so an error page is not mistaken for data.
- `requests.RequestException` catches connection problems, timeouts and HTTP errors.

---

## Q8. Explain the settings and steps required to prepare and deploy a Django project to production. (8-10 marks)

**Deployment:** moving a project from the developer's computer to a server so that users can access it on the internet. The development server (`runserver`) is only for development and must not be used in production.

**Checklist**

**1. DEBUG = False**
With `DEBUG = True`, error pages show source code and settings, which is a serious security risk.

**2. ALLOWED_HOSTS**
List of domain names the site may serve. With `DEBUG = False` it must contain the live domain, otherwise Django raises `DisallowedHost` (400 Bad Request).
```python
ALLOWED_HOSTS = ['mysite.onrender.com']
```

**3. SECRET_KEY from an environment variable**
Secrets must not be written in code, since the code is stored on GitHub.
```python
import os
SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = os.environ.get('DEBUG', 'False') == 'True'
```

**4. requirements.txt**
Lists all packages so the server can install them.
```
pip freeze > requirements.txt
```

**5. Production web server: gunicorn**
Replaces `runserver`. Install with `pip install gunicorn`. Start command:
```
gunicorn mysite.wsgi
```

**6. Static files: collectstatic and WhiteNoise**
In production Django does not serve static files itself.
```python
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',    # right after SecurityMiddleware
    ...
]
```
`python manage.py collectstatic` gathers all static files into `STATIC_ROOT`; WhiteNoise serves them.

**7. Production database**
Use PostgreSQL or MySQL instead of SQLite for real deployments, and run `python manage.py migrate` on the server. Hosts such as Render and Heroku can lose SQLite data on restart.

**8. Security:** HTTPS (SSL), `CSRF` and `SESSION` cookies marked secure (`CSRF_COOKIE_SECURE = True`, `SESSION_COOKIE_SECURE = True`).

**Deployment flow on a platform such as Render**
1. Push the project to a GitHub repository.
2. Create a new Web Service and connect the repository.
3. Set the build command: `pip install -r requirements.txt && python manage.py collectstatic --no-input && python manage.py migrate`.
4. Set the start command: `gunicorn mysite.wsgi`.
5. Add environment variables (`SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`).
6. Deploy and open the live URL.

**Common errors and causes**

| Error | Cause |
|---|---|
| `DisallowedHost` | Domain missing from `ALLOWED_HOSTS` |
| CSS/JS not loading | `collectstatic` not run or WhiteNoise not set |
| `ModuleNotFoundError` | Package missing from `requirements.txt` |
| 500 error | Check logs; usually a missing environment variable or unmigrated database |

---

## Q9. Explain the commands used to deploy a project through Git and Heroku. Explain version control and Git commands. (8-10 marks)

**Version control system (VCS):** software that records changes to files over time so that earlier versions can be recovered and many people can work together.

| Centralized VCS | Distributed (decentralized) VCS |
|---|---|
| One central server holds the full history | Every user has a full copy of the repository |
| Needs network to commit | Can commit offline |
| Example: SVN | Example: Git |
| Single point of failure | Many backups |

**Git:** a distributed VCS. **GitHub:** an online hosting service for Git repositories.

**Basic Git commands**

| Command | Purpose |
|---|---|
| `git init` | Create a new repository |
| `git clone <url>` | Copy a remote repository |
| `git status` | Show changed and staged files |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save staged changes |
| `git branch` / `git checkout -b name` | List / create branch |
| `git merge name` | Merge a branch |
| `git push origin main` | Upload commits |
| `git pull` | Download and merge remote changes |
| `git log` | Show history |

**.gitignore:** a file that lists files Git must not track, such as `db.sqlite3`, `__pycache__/`, `venv/`, `.env`. It keeps secrets and unnecessary files out of the repository.

**Deploying to Heroku (main commands)**
1. Install the Heroku CLI and run `heroku login`.
2. Prepare the project: `requirements.txt`, a `Procfile` containing `web: gunicorn mysite.wsgi`, `DEBUG = False`, `ALLOWED_HOSTS`, WhiteNoise.
3. `git init`, `git add .`, `git commit -m "first commit"`.
4. `heroku create app-name` creates the app and adds a Git remote named `heroku`.
5. `git push heroku main` uploads the code and builds it.
6. `heroku run python manage.py migrate` applies migrations; `heroku run python manage.py createsuperuser` creates an admin.
7. `heroku open` opens the live site; `heroku logs --tail` shows logs.

**Heroku:** a platform-as-a-service (PaaS) cloud where applications can be deployed without managing servers. Render, Railway and PythonAnywhere work in a similar way.

---

## Q10. Explain AJAX and JSON. Compare JSON with XML. (5-6 marks)

**AJAX (Asynchronous JavaScript and XML):** a technique in which a web page sends a request to the server in the background using JavaScript (`XMLHttpRequest` or `fetch`) and updates only part of the page, without reloading the whole page.

**Technologies used:** HTML/CSS for display, JavaScript for logic, `XMLHttpRequest` object for requests, and JSON or XML for data.

**XMLHttpRequest basics**

| Item | Meaning |
|---|---|
| `open(method, url)` | Prepares the request |
| `send()` | Sends the request |
| `readyState` | Request state (4 = done) |
| `status` | HTTP status (200 = OK) |
| `responseText` | Response body as text |
| `onreadystatechange` | Function called when the state changes |

**Django view returning JSON**
```python
from django.http import JsonResponse

def search_students(request):
    q = request.GET.get('q', '')
    data = list(Student.objects.filter(name__icontains=q).values('id', 'name'))
    return JsonResponse(data, safe=False)
```

**JavaScript calling it**
```javascript
fetch('/search/?q=am')
    .then(response => response.json())
    .then(data => console.log(data));
```

**JSON (JavaScript Object Notation):** a lightweight text format for data, made of key-value pairs and lists.
```json
{"name": "Amit", "courses": ["Python", "Django"]}
```

**JSON vs XML**

| JSON | XML |
|---|---|
| Lightweight, short | Verbose, uses tags |
| Easy to read and write | Harder to read |
| Parsed faster, native to JavaScript | Needs an XML parser |
| Supports arrays directly | No direct array type |
| No comments, no namespaces | Supports comments, attributes, namespaces |
| Standard for modern REST APIs | Used in older SOAP services |

**Advantages of AJAX:** faster, better user experience, less server load, no full page reload.

---
