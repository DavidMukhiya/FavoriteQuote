import React from "react";
import { Col, Row } from "reactstrap";
import { QUOTES } from "../QUOTES";
import QuoteCard from "./QuoteCard";

const QuoteCardList = () => {
  return (
    <Row className="gx-1 ms-5 me-5">
      {QUOTES.map((quote) => {
        return (
          <Col xs="4" sm="4" md="4" xl="4" key={quote.id}>
            <QuoteCard quotes={quote} />
          </Col>
        );
      })}
    </Row>
  );
};

export default QuoteCardList;
