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
  /* border: none;
  border-bottom: 1px #bbb solid; */
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
          <textarea name="message" id="message" rows="5" />
        </Label>
        <button type="submit">Send</button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
