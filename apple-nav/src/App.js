import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import TopNav from "./components/TopNav";
import Content from "./components/Content";
import SubNav from "./components/SubNav";

import {
  macData,
  iPadData,
  iPhoneData,
  watchData,
  tvData,
  musicData
} from "./data/navData";

// Do we even need this?
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <TopNav />
        <Route
          path="/mac"
          render={props => <SubNav {...props} navData={macData} />}
        />
        <Route
          exact
          path="/mac"
          render={props => (
            <Content
              {...props}
              header="Mac"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/mac/:id"}
          render={props => {
            const id = props.match.params.id;
            return (
              <Content header={macData[id].name} icon={macData[id].icon} />
            );
          }}
        />
        <Route
          path="/ipad"
          render={props => <SubNav {...props} navData={iPadData} />}
        />
        <Route
          exact
          path="/ipad"
          render={props => (
            <Content
              {...props}
              header="iPad"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/ipad/:id"}
          render={props => {
            const id = props.match.params.id;
            return (
              <Content header={iPadData[id].name} icon={iPadData[id].icon} />
            );
          }}
        />
        <Route
          path="/iphone"
          render={props => <SubNav {...props} navData={iPhoneData} />}
        />
        <Route
          exact
          path="/iphone"
          render={props => (
            <Content
              {...props}
              header="iPhone"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/iphone/:id"}
          render={props => {
            const id = props.match.params.id;
            return (
              <Content
                header={iPhoneData[id].name}
                icon={iPhoneData[id].icon}
              />
            );
          }}
        />
        <Route
          path="/watch"
          render={props => <SubNav {...props} navData={watchData} />}
        />
        <Route
          exact
          path="/watch"
          render={props => (
            <Content
              {...props}
              header="Watch"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/watch/:id"}
          render={props => {
            const id = props.match.params.id;
            return (
              <Content header={watchData[id].name} icon={watchData[id].icon} />
            );
          }}
        />
        <Route
          path="/tv"
          render={props => <SubNav {...props} navData={tvData} bgBlack />}
        />
        <Route
          exact
          path="/tv"
          render={props => (
            <Content
              {...props}
              header="TV"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/tv/:id"}
          render={props => {
            const id = props.match.params.id;
            return <Content header={tvData[id].name} icon={tvData[id].icon} />;
          }}
        />
        <Route
          path="/music"
          render={props => <SubNav {...props} navData={musicData} />}
        />
        <Route
          exact
          path="/music"
          render={props => (
            <Content
              {...props}
              header="Music"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path={"/music/:id"}
          render={props => {
            const id = props.match.params.id;
            return (
              <Content header={musicData[id].name} icon={musicData[id].icon} />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Content
              header="Home"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
        <Route
          path="/support"
          render={props => (
            <Content
              header="Support"
              icon="https://img.icons8.com/metro/300/000000/mac-os.png"
            />
          )}
        />
      </AppContainer>
    );
  }
}

export default App;
