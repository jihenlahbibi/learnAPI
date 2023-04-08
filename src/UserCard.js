import Card from 'react-bootstrap/Card';

function UserCard({use}) {
    console.log(use);
  return (
    <Card style={{ width: '18rem' ,backgroundColor:'beige',borderRadius:'3cm',display:'flex',justifyContent:'center'}}>
      <Card.Body>
        <Card.Title>{use.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{use.name}</Card.Subtitle>
        <Card.Text>  {use.website}</Card.Text>
        <Card.Link href="#">{use.email}</Card.Link>
        <Card.Link href="#">{use.number}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;