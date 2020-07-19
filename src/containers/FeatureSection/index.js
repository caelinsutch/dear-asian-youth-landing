import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import BlogPost from '../../components/BlogPost';
import Container from '../../components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

const FeatureSection = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        featureData {
          title
          slogan
          features {
            id
            title
            description
            icon {
              publicURL
            }
          }
        }
      }
    }
  `);

  const { title, slogan, features } = data.dataJson.featureData;

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlogPost
              key={`option_key${item.id}`}
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

export default FeatureSection;
