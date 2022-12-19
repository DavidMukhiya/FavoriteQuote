import React from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
<style>
</style>
const QuoteCard = ({quotes}) => {
  const{author, quote} = quotes;
  return (
   <Card style={{ textAlign:"center", fontFamily: 'Acme', height: '15rem'}} className='p-4 mb-3 mt-3 align-middle'>
    <CardTitle >
      <h1 >{author}</h1>
    </CardTitle>
    <CardBody>
    <CardText>
      <p style={{fontFamily: 'coveat'}}>
        {quote}
      </p>
      </CardText>
    </CardBody>
   </Card>
  );
};

export default QuoteCard;
