import React from 'react';
import BannerSection from '../containers/BannerSection';
import BranchSection from '../containers/BranchSection';
import AboutBlock from '../containers/AboutBlock';
import BlogSection from '../containers/BlogSection';
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
      <AboutBlock />
      {/*<DonateSection />*/}
      {/*<MapSection />*/}
      {/*<FundraiserSection />*/}
      <BlogSection />
      {/*<ClientBlock />*/}
    </DefaultWrapper>
  );
};
