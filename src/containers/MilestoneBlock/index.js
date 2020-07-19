import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Container from '../../components/UI/Container';
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem,
} from './milestoneBlock.style';

const MilestoneBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        milestoneData {
          title
          amount
          text
          counterItems {
            id
            amount
            title
          }
        }
      }
    }
  `);

  const { title, amount, text, counterItems } = data.dataJson.milestoneData;

  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={title} />
          <Heading content={amount} />
          <Text content={text} />
          <a href="#1" className="learn__more-btn">
            <span className="hyphen" />
            <span className="btn_text">Meet our Donors</span>
          </a>
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {counterItems.map(item => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <Text content={item.title} />
          </CounterItem>
        ))}
      </CounterWrapper>
    </Container>
  );
};

export default MilestoneBlock;
