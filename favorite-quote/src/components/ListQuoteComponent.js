import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import quoteService from '../services/quote-service';
import QuoteCard from './QuoteCard';
import { Link } from 'react-router-dom';

const ListQuoteComponent = () => {
const [Quote, setQuote] = useState([])

const getAllQuote = ()=>{
  quoteService.getAllQuotes().then((response)=>{
    setQuote(response.data)
    console.log(response.data)
  }).catch(error =>{
    console.log(error);
  })
}

useEffect(()=>{
  getAllQuote()
},[])

const deleteQuote = (quoteId) =>{
  console.log(quoteId)
  quoteService.deleteQuote(quoteId).then((response)=>{
    getAllQuote()
  }).catch(error => {
    console.log(error) 
  })
}

  return (
    <div className="container justify-content-center">
    <Row className="gx-4">
     {Quote.map((quote) => {
       return (
         <Col xs="12" sm="6" md="4" xl="4" key={quote.id}>
           <QuoteCard quotes={quote} />
           <div className='text-center'>
           <Link className='btn btn-light' to={`/edit-quote/${quote.id}`}>Update</Link>
           <button className='btn btn-danger' onClick={()=>deleteQuote(quote.id)} style={{marginLeft:'10px'}} >Delete</button>
           </div>
         </Col>
       );
     })}
   </Row>
  </div>
  )
}

export default ListQuoteComponent