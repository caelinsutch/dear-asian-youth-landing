import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Container from '../../components/UI/Container';
import Heading from '../../components/Heading';
import BlogPost from '../../components/BlogPost';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from './blogSection.style';

const BlogSection = () => {
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
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Blog & News Updates" />
            <Text>
              Read articles published my the Sacramento DAY community.
            </Text>
          </TitleArea>
          <LinkArea>
            <to to={'/blog'} className="text__btn">
              <span className="text">View all blog posts</span>
              <span className="arrow" />
            </to>
          </LinkArea>
        </SectionHeader>
        <PostArea>
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
    </SectionWrapper>
  );
};

export default BlogSection;
