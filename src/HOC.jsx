import { useRef, memo } from "react";
const withRenderTracker = (WrappComp, WrappCompName) => {
  return memo((props) => {
    const ref = useRef(0);
    ref.current += 1;
    console.log(
      `Компонент ${WrappCompName ?? WrappComp.name} рендерился ${ref.current} раз`,
    );
    return <WrappComp {...props} />;
  });
};

export default withRenderTracker;
