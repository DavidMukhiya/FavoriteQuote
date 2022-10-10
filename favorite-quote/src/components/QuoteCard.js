import React from "react";
import { Card, CardText, CardTitle, Button, CardBody } from "reactstrap";
<style>
</style>
const QuoteCard = () => {
  return (
   <Card style={{width: '18rem', height:'auto', textAlign:"center", fontFamily: 'Acme'}} className='p-3 m-5'>
    <CardTitle>
      <h1 >Albert Einstein</h1>
    </CardTitle>
    <CardBody>
      <p style={{fontFamily: 'coveat'}}>
        Aliqua cillum qui anim mollit. Velit incididunt ex laborum ex excepteur sunt cupidatat duis ad magna sit. Et id laborum amet Lorem mollit. Consequat nulla fugiat Lorem adipisicing dolore. Incididunt cillum sit esse amet nulla minim.
      </p>
    </CardBody>
   </Card>
  );
};

export default QuoteCard;
