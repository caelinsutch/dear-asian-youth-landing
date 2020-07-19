import React from "react";
import DefaultWrapper from "../components/defaultWrapper";
import styled from "styled-components";
import Container from "../components/UI/Container";
const TemplateWrapper = styled.div`
  margin-top: 10em;
`;

const AboutPage = () => (
  <DefaultWrapper>
    <TemplateWrapper>
      <Container width="1260px">
        <h1>About Our Group</h1>
        During my Junior year, I discovered that many Asian-Americans are conditioned to lay low which results in an underrepresentation in activities on school campuses, social media, and even in the public events.
        I would like to use my position as a community leader to empower young Asians to learn to use their voice, to speak their thoughts, and to become more active members in the community.
        I hope that by creating a DAY chapter here in Sacramento, Asian-Americans here will feel more comfortable with themselves. With that said, I would like to dedicate this space for all my fellow Asian-Americans to educate their peers and express their opinions.
        - Princess Pascua, DAY Sacramento Chapter Lead",

      </Container>
    </TemplateWrapper>
  </DefaultWrapper>
)

export default AboutPage;
