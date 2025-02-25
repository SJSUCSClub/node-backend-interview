import express from 'express';

const app = express();
app.use(express.json());

type Review = {
  id: number;
  professorName: string;
  courseName: string;
  rating: number;
  grade: string;
  tags: string[];
  takeAgain: boolean;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    professorName: 'John Doe',
    courseName: 'Introduction to Computer Science',
    rating: 5,
    grade: 'A',
    tags: ['Java', 'Programming'],
    takeAgain: true,
    content: 'This is a great course!'
  },
  {
    id: 2,
    professorName: 'Jane Smith',
    courseName: 'Advanced Computer Science',
    rating: 4,
    grade: 'B',
    tags: ['Java', 'DSA'],
    takeAgain: false,
    content: 'This course is challenging but worth it.'
  }
];


// write your routes here


app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
