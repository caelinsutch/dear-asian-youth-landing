import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '../common/theme';
import { ResetCSS } from '../common/assets/css/style';
import { DrawerProvider } from '../common/contexts/DrawerContext';
import Navbar from '../containers/Navbar';
import DrawerSection from '../containers/DrawerSection';
import BannerSection from '../containers/BannerSection';
import FeatureSection from '../containers/FeatureSection';
import BranchSection from '../containers/BranchSection';
import WorkSection from '../containers/WorkSection';
import MilestoneBlock from '../containers/MilestoneBlock';
import HumanityBlock from '../containers/HumanityBlock';
import PromotionBlock from '../containers/PromotionBlock';
import DonateSection from '../containers/DonateSection';
import MapSection from '../containers/MapSection';
import FundraiserSection from '../containers/FundraiserSection';
import BlogSection from '../containers/BlogSection';
import ClientBlock from '../containers/ClientBlock';
import Footer from '../containers/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Home" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            {/*<FeatureSection />*/}
            <BranchSection />
            {/*<WorkSection />*/}
            {/*<MilestoneBlock />*/}
            {/*<HumanityBlock />*/}
            <PromotionBlock />
            {/*<DonateSection />*/}
            {/*<MapSection />*/}
            {/*<FundraiserSection />*/}
            <BlogSection />
            {/*<ClientBlock />*/}
          </ContentWrapper>
          {/*<Footer />*/}
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
