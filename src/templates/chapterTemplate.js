import React from "react";
import {graphql} from "gatsby";
import DefaultWrapper from "../components/defaultWrapper";
import styled from "styled-components";
import Container from "../components/UI/Container";
import Fade from "react-reveal/Fade";
import Image from "gatsby-image";

const TemplateWrapper = styled.div`
  margin-top: 10em;
`;

export default function Template({data,}) {
  const {markdownRemark} = data; // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark;
  return (
    <DefaultWrapper>
      <TemplateWrapper>
        <Container width="1260px">
          <Fade>
            <div className="image">
              <Image
                fluid={
                  (frontmatter.banner !== null) | undefined
                    ? frontmatter.banner.childImageSharp.fluid
                    : {}
                }
                alt={`${frontmatter.title} Banner Image`}
              />
            </div>
          </Fade>
          <h1>{frontmatter.title} Chapter</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </Container>
      </TemplateWrapper>
    </DefaultWrapper>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        slogan
        slug
        banner {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
