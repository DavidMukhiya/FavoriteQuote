import React from "react";
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../css/quoteformstyle.css";

const AddQuote = () => {
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
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea" className="visually-hidden">
                  Description
                </Label>
                <Input
                  className="inputID"
                  id="textArea"
                  name="textArea"
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
          >
            Add Quote
          </Button>
        </Form>
        '
      </div>
    </div>
  );
};

export default AddQuote;
