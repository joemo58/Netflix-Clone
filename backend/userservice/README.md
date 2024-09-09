# User Service
Authentication and Profile Management

**Responsibilities**:

- **User Registration and Authentication**: Allow users to sign up, log in, and manage their profiles.
- **Profile Management**: Manage user profiles, including subscription details and viewing preferences.
Tech Stack:

**Framework**: Spring Boot
**Database**: PostgreSQL
**Authentication**: OAuth2 with JWT

Run instructions Docker:
docker build -t netflix-clone/userservice .
docker run -p 8080:8080 netflix-clone/userservice