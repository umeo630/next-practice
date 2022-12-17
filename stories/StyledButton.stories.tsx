import { ComponentMeta } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";
import { action } from '@storybook/addon-actions';
import React, { useState } from "react";

// ファイル内のStoryの設定
export default {
  // グループ名
  title: "StyledButton",
  // 使用するコンポーネント
  component: StyledButton,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof StyledButton>;

// incrementという名前でactionを出力するための関数をつくる
const incrementAction = action('increment')

export const Primary = (props: StyledButtonProps) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(e, count)
    setCount((c) => c + 1 )
  }
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: { count }
    </StyledButton>
  );
};

export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="transparetnt">
      Transparent
    </StyledButton>
  );
};
