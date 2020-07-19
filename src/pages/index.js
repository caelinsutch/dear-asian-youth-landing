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
  StyleWrapper,
  ContentWrapper,
} from '../containers/style';
import SEO from '../components/seo';
import DefaultWrapper from "../components/defaultWrapper";

export default () => {
  return (
    <DefaultWrapper>
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
    </DefaultWrapper>
  );
};
