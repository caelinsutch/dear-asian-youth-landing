import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from 'gatsby-image';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Tab, {Panel} from '../../components/Tabs';
import SectionWrapper, {ContentWrapper} from './branchSection.style';

const BranchSection = () => {
  const data = useStaticQuery(graphql`
    query {
      chapters: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/chapters/"}}) {
        nodes {
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
    }
  `);

  const title = text => {
    return {__html: text};
  };

  console.log(data);

  return (
    <SectionWrapper id="chapters">
      <Tab active={0}>
        {data.chapters.nodes.map((item, i) => (
          <Panel
            title={<Text content={item.frontmatter.title}/>}
            key={`tab_key${i}`}
          >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image
                    fluid={
                      (item.frontmatter.image !== null) | undefined
                        ? item.frontmatter.banner.childImageSharp.fluid
                        : {}
                    }
                    alt={`Branch page ${i}`}
                    className="tab_image"
                  />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.frontmatter.slogan}/>
                <h2 dangerouslySetInnerHTML={title(item.frontmatter.title)}/>
                <Text content={item.frontmatter.description}/>
                <a className="learn__more-btn" href={item.frontmatter.slug}>
                  <span className="hyphen"/>
                  <span className="btn_text">Learn MOre</span>
                </a>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
