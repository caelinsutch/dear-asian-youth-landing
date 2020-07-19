import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Box from '../../components/Box';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import Container from '../../components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './promotionBlock.style';

const AboutBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        promotionData {
          image {
            publicURL
          }
          slogan
          title
          text1
        }
      }
    }
  `);

  const {
    slogan,
    title,
    text1,
    image,
  } = data.dataJson.promotionData;

  return (
    <BlockWrapper id="about">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
              <Text content={text1} />
              <Link to="/about" className="learn__more-btn">
                <span className="hyphen" />
                <span className="btn_text">Learn More </span>
              </Link>
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image.publicURL} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// AboutBlock style props
AboutBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// AboutBlock default style
AboutBlock.defaultProps = {
  // AboutBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // AboutBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default AboutBlock;
