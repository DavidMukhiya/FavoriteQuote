import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../css/quoteformstyle.css";
import quoteService from "../services/quote-service";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddQuote = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const {id} = useParams();

  const saveQuote = (e) => {
    e.preventDefault();

    const quotes = { author, quote, category };
    console.log(quote);

    quoteService
      .addQuote(quotes)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="quoteformstyles">
        <p
          style={{
            textTransform: "uppercase",
            color: "white",
            fontSize: "1.5rem",
          }}
          className="mt-2"
        >
          add dish
        </p>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label
                  for="author"
                  className="visually-hidden"
                  style={{ color: "#5B4F47" }}
                >
                  Dish Name
                </Label>
                <Input
                  className="inputID"
                  id="author"
                  name="author"
                  placeholder="Author *"
                  type="text"
                  style={{
                    backgroundColor: "white",
                    width: "25rem",
                    margin: "1.5rem 0rem",
                    textAlign: "center",
                  }}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea" className="visually-hidden">
                  Description
                </Label>
                <Input
                  className="inputID"
                  id="textArea"
                  name="quote"
                  type="textarea"
                  placeholder="Quote *"
                  style={{
                    backgroundColor: "white",
                    width: "25rem",
                    margin: "1.5rem 0rem",
                    lineHeight: "3.5rem",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="category" className="visually-hidden">
                  Category
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  style={{
                    backgroundColor: "white",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                  }}
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>
                    Category
                    <MdOutlineArrowDropDown />
                  </option>
                  <option>Life</option>
                  <option>Inspiration</option>
                  <option>Funny</option>
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label for="file" className="visually-hidden">
                  Image
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  style={{
                    backgroundColor: "white",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                    color: "#6C757D",
                  }}
                />
              </FormGroup> */}
            </Col>
          </Row>
          <Button
            style={{
              backgroundColor: "#4B5289",
              color: "white",
              display: "block",
              marginTop: "1.5rem",
            }}
            className="mx-auto"
            onClick={(e) => saveQuote(e)}
          >
            Add Quote
          </Button>
          {/* <Link to="/" className="btn btn-danger">
            Cancel
          </Link> */}
        </Form>
        '
      </div>
    </div>
  );
};

export default AddQuote;
