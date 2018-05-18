<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

middleware id oftware that acts as a bridge between an operating system or database and applications, especially on a network.

A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application.

bcrypt is a password hashing function that adds extra security to a users password.

jwt is a means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption 


2.  What does bcrypt do in order to prevent attacks?
 - bcrypt hashes passwords to make it extrtemely difficult for attackers to decrypt what a password is using cracking algorithms.

3.  What are the three parts of the JSON Web Token?
-header, payload, signiture.
