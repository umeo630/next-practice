import { ComponentMeta } from "@storybook/react";
import { StyledButton, StyledButtonProps } from "../components/StyledButton";

// ファイル内のStoryの設定
export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}

export const Transparent = (props: StyledButtonProps) => {
  return (
    <StyledButton {...props} variant="transparetnt">
      Transparent
    </StyledButton>
  )
}
