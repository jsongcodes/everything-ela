# Everything ELA

Everything ELA is a virtual space where students can read, comment, and post about ELA topics.

## Installation

In a terminal, type the following:

```
git clone git@github.com:jsongcodes/everything-ela.git
```

## Migration and Seed

```
bundle exec rake db:migrate db:seed

```

## Backend Server
Type in the terminal:
```
rails s
```

## Frontend Server

for the frontend, type:
```
cd client
npm install
npm start
```
## Relationships within Database

### Models

#### Comment
belongs to student

belongs to post

#### Post
has many comments

has many students, through comments

#### Student
has many comments

has many posts, through comments

## Usage

Students are able to register, login, create posts, and leave comments. Comments are able to be created, read, updated, and deleted. 

## License

[MIT](https://choosealicense.com/licenses/mit/)