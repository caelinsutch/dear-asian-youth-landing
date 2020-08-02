import React from "react";
import DefaultWrapper from "../components/defaultWrapper";
import {graphql, Link, useStaticQuery} from "gatsby";
import styled from "styled-components";
import BlogPost from "../components/BlogPost";
import Container from "../components/UI/Container";
import SectionWrapper, {
  LinkArea,
  PostArea,
  SectionHeader,
  Text,
  TitleArea
} from "../containers/BlogSection/blogSection.style";
import Heading from "../components/Heading";

const TemplateWrapper = styled.div`
  margin-top: 10em;
`;

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
        nodes {
          frontmatter {
            title
            description
            slug
          }
        }
      }
    }
  `);

  return (
    <DefaultWrapper>
      <TemplateWrapper>
        <Container width="1260px">
          <SectionHeader>
            <TitleArea>
              <Heading content="Blog & News Updates" />
              <Text>
                Read articles published my the Sacramento DAY community.
              </Text>
            </TitleArea>
          </SectionHeader>        <PostArea>
          {data.allMarkdownRemark.nodes.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              title={item.frontmatter.title}
              excerpt={item.frontmatter.description}
              link={
                <Link className="learn__more-btn" to={item.frontmatter.slug}>
                  <span className="hyphen"></span>
                  <span className="btn_text">Read More</span>
                </Link>
              }
            />
          ))}
        </PostArea>
        </Container>
      </TemplateWrapper>
    </DefaultWrapper>
  );
}

export default BlogPage;
