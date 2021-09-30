import React, { useState } from "react";
import axios from "axios";
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
  font-size: 1.1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  resize: none;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
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
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } });
    ok && form.reset();
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/7988c389-1110-44df-8860-be85b1b85381",
      data: new FormData(form),
    })
      .then(res => handleServerResponse(true, "Thanks", form))
      .catch(res => handleServerResponse(false, res.response.data.error, form));
  };
  return (
    <Wrapper>
      <Form
        onSubmit={handleOnSubmit}
        action="https://getform.io/f/7988c389-1110-44df-8860-be85b1b85381"
      >
        <Input type="hidden" name="form-name" value="contact" />
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
