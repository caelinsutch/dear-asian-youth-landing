import React, {Fragment} from "react";
import {ThemeProvider} from "styled-components";
import {charityTheme} from "../common/theme";
import SEO from "./seo";
import {ResetCSS} from "../common/assets/css/style";
import {ContentWrapper, GlobalStyle, StyleWrapper} from "../containers/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Navbar";
import {DrawerProvider} from "../common/contexts/DrawerContext";
import DrawerSection from "../containers/DrawerSection";
import BannerSection from "../containers/BannerSection";
import BranchSection from "../containers/BranchSection";
import PromotionBlock from "../containers/PromotionBlock";
import BlogSection from "../containers/BlogSection";

const DefaultWrapper = ({ children }) => (
  <ThemeProvider theme={charityTheme}>
    <Fragment>
      <SEO title="Home" />
      <ResetCSS />
      <GlobalStyle />
      <StyleWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar />
        </Sticky>
        <DrawerProvider>
          <DrawerSection />
        </DrawerProvider>
        <ContentWrapper>
          {children}
          {/*<ClientBlock />*/}
        </ContentWrapper>
        {/*<Footer />*/}
      </StyleWrapper>
    </Fragment>
  </ThemeProvider>
)

export default DefaultWrapper;
