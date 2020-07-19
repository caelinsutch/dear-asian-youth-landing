import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import BlogPost from '../../components/BlogPost';
import Container from '../../components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './workSection.style';

const WorkSection = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        workData {
          title
          slogan
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);

  const { title, slogan, features } = data.dataJson.workData;
  return (
    <SectionWrapper id="work">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlogPost
              key={`feature_key${item.id}`}
              thumbUrl={item.icon.publicURL}
              title={item.title}
              excerpt={item.description}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WorkSection;
