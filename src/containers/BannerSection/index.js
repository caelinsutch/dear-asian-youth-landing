import React, { Fragment } from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Image from 'gatsby-image';
import Text from '../../components/Text';
import Heading from '../../components/Heading';
import GlideCarousel from '../../components/GlideCarousel';
import GlideSlide from '../../components/GlideCarousel/glideSlide';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  const data = useStaticQuery(graphql`
    query {
      dataJson {
        bannerSlides {
          id
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>NEWS</strong> Apply to join us today.
            <Icon icon={chevronRight} />
          </HighlightedText>
          <Heading
            content="Dear Asian Youth."
          />
          <Heading
            as="h4"
            content="Uniting the Asian-American community to freely discuss and express their experiences"
          />
          <Text
            content="Dear Asian Youth is a national organization that empowers the Asian-American community to learn to use their voice, speak their thoughts, and become active members of their community.
          "
          />
          {/*<Link className="learn__more-btn" to="#chapters">*/}
          {/*  <span className="hyphen" />*/}
          {/*  <span className="btn_text">See our Chapters</span>*/}
          {/*</Link>*/}
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {data.dataJson.bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image
                    fluid={
                      (slide.thumb_url !== null) | undefined
                        ? slide.thumb_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`Charity slide image ${slide.id}`}
                    className="slide_image"
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
