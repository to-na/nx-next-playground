import React from 'react';
import { styled } from '@compiled/react';

type FooBarProps = {
  prop1: string;
};
type FooBarDomProps = {
  prop1: string;
};

const FooBarStyle = styled.div``;

const FooBarDom: React.VFC<FooBarDomProps> = (props) => (
  <FooBarStyle>Code Your Component</FooBarStyle>
);

const FooBar: React.VFC<FooBarProps> = (props) => {
  // Code Container Logic
  const domProps = props;
  return <FooBarDom {...domProps}>Code Your Component</FooBarDom>;
};

export default FooBar;
