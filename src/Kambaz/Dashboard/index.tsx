import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard()
{
  const courses = [
    { id: 1, title: "React Basics", desc: "Learn React from scratch.", img: "/images/course1.svg" },
    { id: 2, title: "Advanced React", desc: "Master React components.", img: "/images/course2.png" },
    { id: 3, title: "Backend Development", desc: "Node.js and Express basics.", img: "/images/course3.png" },
    { id: 4, title: "Database Essentials", desc: "Master SQL and database design.", img: "/images/course4.jpg" },
    { id: 5, title: "JavaScript Mastery", desc: "Advanced JavaScript concepts.", img: "/images/course5.jpg" },
    { id: 6, title: "CSS Animations", desc: "Create dynamic web experiences.", img: "/images/course6.jpg" },
    { id: 7, title: "Full-Stack Development", desc: "Combine frontend and backend skills.", img: "/images/course7.png" },
  ];

  return (
    <Container fluid className="p-4">
      <h1 className="text-dark">Dashboard</h1>
      <hr />
      <h2 className="text-secondary">Published Courses ({courses.length})</h2>
      <Row className="g-4">
        {courses.map((course) => (
          <Col key={course.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow">
              <Card.Img variant="top" src={course.img} height="160" style={{ objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.desc}</Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}