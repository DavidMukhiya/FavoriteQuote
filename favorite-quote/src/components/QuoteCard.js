import React from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
<style>
</style>
const QuoteCard = ({quotes}) => {
  const{author, quote} = quotes;
  return (
   <Card style={{ textAlign:"center", fontFamily: 'Acme', height: '15rem' , minWidth: '15rem'}} className='p-4 ms-5 mb-5 align-middle'>
    <CardTitle >
      <h1 >{author}</h1>
    </CardTitle>
    <CardBody>
      <p style={{fontFamily: 'coveat'}}>
        {quote}
      </p>
    </CardBody>
   </Card>
  );
};

export default QuoteCard;
