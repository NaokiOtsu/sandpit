import React, { Component } from "react";
import "./App.css";

interface Props {}
interface State {}

const App: React.FC<Props> = () => (
  <>
    <div>hoge</div>
    <MyComponent />
  </>
);

export default App;

type MyComponentProps = React.ComponentProps<typeof MyComponent>;

const withState = <P extends Props>(
  WrappedComponentProps: React.ComponentType<P>
) => {};

class MyComponent extends Component<MyComponentProps, State> {}
