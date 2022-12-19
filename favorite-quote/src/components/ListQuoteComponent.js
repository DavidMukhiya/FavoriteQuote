import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import quoteService from '../services/quote-service';
import QuoteCard from './QuoteCard';
import { Link } from 'react-router-dom';

const ListQuoteComponent = () => {
const [Quote, setQuote] = useState([])

useEffect(()=>{
  quoteService.getAllQuotes().then((response)=>{
    setQuote(response.data)
    console.log(response.data)
  }).catch(error =>{
    console.log(error);
  })
},[])

  return (
    <div className="container justify-content-center">
    <Row className="gx-4">
     {Quote.map((quote) => {
       return (
         <Col xs="12" sm="6" md="4" xl="4" key={quote.id}>
           <QuoteCard quotes={quote} />
           <Link className='btn btn-info' to={`/edit-quote/${quote.id}`}>Update</Link>
         </Col>
       );
     })}
   </Row>
  </div>
  )
}

export default ListQuoteComponent