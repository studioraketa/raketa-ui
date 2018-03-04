import React from 'react';
import styled from 'styled-components';

import reset from '../reset';
import resetButton from '../resetButton';
import em from '../em';

const TabsWrapper = styled.div`
  margin-bottom: ${em(1)}
`;

const Tab = styled.button`
  ${reset()}
  ${resetButton()}
  padding: ${em(.5)} 0;
  margin-right: ${em(1)};
  border-bottom: 2px solid ${props => props.selected ? props.theme.primaryColor : 'transparent'};
  color: ${props => props.selected ? props.theme.primaryColor : props.theme.hintColor};
  font-size: ${em(1)};
`;

const TabContent = styled.div`
  ${reset()};
`;

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  renderLinks() {
    const { children } = this.props;
    const { current } = this.state;

    return (
      <TabsWrapper>
        {children.map((tab, idx) => <Tab type="button" key={`tab-${idx}`} selected={current === idx} onClick={() => this.setState({ current: idx })}>{tab.props.title}</Tab>)}
      </TabsWrapper>
    );
  }

  render() {
    const { children } = this.props;
    const { current } = this.state;

    return (
      <div>
        {this.renderLinks()}
        <TabContent>{children[current]}</TabContent>
      </div>
    );
  }
}
