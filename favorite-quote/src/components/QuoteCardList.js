import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { QUOTES } from "../QUOTES";
import QuoteCard from "./QuoteCard";

const QuoteCardList = () => {

  
  return (
   <div className="container justify-content-center">
     <Row className="gx-4">
      {QUOTES.map((quote) => {
        return (
          <Col xs="12" sm="6" md="4" xl="4" key={quote.id}>
            <QuoteCard quotes={quote} />
          </Col>
        );
      })}
    </Row>
   </div>
  );
};

export default QuoteCardList;
