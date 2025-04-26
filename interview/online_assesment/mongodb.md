# MongoDB and C++/STL Interview Questions

## MongoDB Long-Answer Questions

1. Explain the differences between embedded documents and document references in MongoDB. When would you choose one over the other?
2. Describe how MongoDB's aggregation pipeline works. What are the key stages and their purposes?
3. Compare $lookup in MongoDB with SQL joins. What are the limitations of $lookup?
4. How does indexing improve query performance in MongoDB? Explain with examples.
5. What is sharding in MongoDB, and how does it help with scalability?
6. Explain the CAP theorem and how MongoDB fits into it.
7. Describe how MongoDB ensures data durability with write concerns and journaling.
8. What are the advantages of using a document database like MongoDB over a relational database?
9. How does MongoDB handle transactions, and what are their limitations?
10. Explain the difference between find() and aggregate() in MongoDB.
11. What is a covered query in MongoDB, and how does it improve performance?
12. Describe how TTL (Time-To-Live) indexes work in MongoDB. Provide a use case.
13. How does MongoDB handle schema validation? Explain with an example.
14. What are MongoDB's replication and failover mechanisms?
15. Explain the role of the _id field in MongoDB documents. Can it be customized?
16. What is the purpose of the explain() method in MongoDB? How do you interpret its output?
17. How does MongoDB handle concurrency with its locking mechanism?
18. Describe the differences between deleteOne(), deleteMany(), and drop().
19. What are MongoDB's geospatial query capabilities? Provide examples of $near and $geoWithin.
20. How do you model a many-to-many relationship in MongoDB?
21. What are the trade-offs between embedding documents and referencing them?
22. Explain how partial indexes work and when they should be used.
23. How does MongoDB handle case-insensitive searches? Compare $regex and text indexes.
24. What is a capped collection in MongoDB? When would you use one?
25. Describe MongoDB's oplog and its role in replication.

## MongoDB Coding Questions

1. Insert a document into the books collection with fields: title, author, genres (array).
2. Find all books published between 2010 and 2020 using comparison operators ($gte, $lte).
3. Count the number of books in the "Science Fiction" genre.
4. Update a book's publication year from 2015 to 2016 using $set.
5. Delete all books with rating less than 3.
6. Create a compound index on author (ascending) and publication_year (descending).
7. Use $lookup to join books with authors and display each book's author details.
8. Aggregate data to find the average rating of books per genre.
9. Implement text search on a description field to find documents containing the word "fantasy".
10. Use $unwind to flatten an array of genres and group by genre name.
11. Create a unique index on the isbn field to prevent duplicates.
12. Write a query to find books that are either "Mystery" or "Thriller" genre ($in).
13. Use $elemMatch to find books that have at least one review with rating above 4.
14. Backup the books collection using mongodump with compression enabled.
15. Restore the books collection from a backup while preserving indexes.
16. Create a TTL index on a last_updated field to expire documents after 90 days.
17. Validate documents in a collection to ensure title exists and page_count is positive.
18. Use $regex to find books whose titles start with "The" (case-insensitive).
19. Implement pagination using limit() and skip() to fetch page 3 of books (15 per page).
20. Sort books by title (A-Z) and then by rating (descending).
21. Use $group to count how many books each author has written.
22. Update multiple documents to increment all books' ratings by 0.1 using $inc.
23. Drop all indexes from the books collection except the _id index.
24. Create a capped collection named activity_logs with a size of 5MB.
25. Simulate a transaction to transfer a book between two categories (if using MongoDB 4.0+).

