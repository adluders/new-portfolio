import React from "react";
import styled from "styled-components";

const Wrapper = styled.section``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-family: "Gravitas One";
  font-weight: 100;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: solid #ccc;
`;

const TextArea = styled.textarea`
  resize: none;
  border-radius: 0.5rem;
  border: solid #ccc;
  padding: 0.5rem;
`;

const Submit = styled.button`
  border-radius: 0.5rem;
  border: 1px solid;
  background-color: #5f6caf;
  color: #fff;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;

  cursor: pointer;

  margin-top: 2rem;
  align-self: flex-end;

  width: 50%;

  &:hover {
    background-color: #374bad;
  }
  &:focus {
    transform: scale(0.98);
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ContactForm = () => {
  return (
    <Wrapper>
      <Form method="post" action="#">
        <Label>
          Name
          <Input type="text" name="name" placeholder="John Doe" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder="email@example.com" />
        </Label>
        <Label>
          Subject
          <Input type="text" name="subject" placeholder="New Project Idea..." />
        </Label>
        <Label>
          Message
          <TextArea
            name="message"
            placeholder="Here is how we can work together..."
            rows="5"
          />
        </Label>
        <Submit type="submit">Send</Submit>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
