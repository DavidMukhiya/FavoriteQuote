import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../css/quoteformstyle.css";
import quoteService from "../services/quote-service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import categoryService from "../services/category-service";

const AddQuote = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [categoryID, setCategoryID] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService
      .getAllCategory()
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  const { id } = useParams();

  const saveOrUpdateQuote = (e) => {
    e.preventDefault();

    const quotes = { author, quote, categoryID };

    //console.log(quote);

    if (id) {
      quoteService
        .updateQuote(id, quotes)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      quoteService
        .addQuote(quotes)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    quoteService
      .getQuoteByID(id)
      .then((response) => {
        console.log("data" + response);
        setAuthor(response.data.author);
        setQuote(response.data.quote);
        setCategoryID(response.data.categoryID);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return (
        <p
          style={{
            // textTransform: "uppercase",
            color: "white",
            fontSize: "1.5rem",
          }}
          className="mt-2"
        >
          Update Quote
        </p>
      );
    } else {
      <p
        style={{
          textTransform: "uppercase",
          color: "white",
          fontSize: "1.5rem",
        }}
        className="mt-2"
      >
        Add Quote
      </p>;
    }
  };

  return (
    <div>
      <div className="quoteformstyles">
        {JSON.stringify(author)}
        {JSON.stringify(quote)}
        {JSON.stringify(categoryID)}
        {title()}
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
                  id="category"
                  name="category"
                  type="select"
                  style={{
                    backgroundColor: "white",
                    width: "25rem",
                    margin: "1.5rem 0",
                    textAlign: "center",
                  }}
                  placeholder="Category"
                  onChange={(e) => setCategoryID(e.target.value)}
                  defaultValue={0}
                >
                  <option disabled value={0}>
                    Category
                    <MdOutlineArrowDropDown />
                  </option>
                  {categories.map((category) => (
                    <option
                      value={category.categoryID}
                      key={category.categoryID}
                    >
                      {category.categoryTitle}
                    </option>
                  ))}
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
            onClick={(e) => saveOrUpdateQuote(e)}
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
