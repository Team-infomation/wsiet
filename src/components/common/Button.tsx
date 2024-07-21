// MODULE
import styled from "styled-components";
// STYLE
const ButtonBox = styled.button<{
  widthSize: string | number | null;
  heightSize: string | number | null;
}>`
  width: ${(props) =>
    props.widthSize
      ? typeof props.widthSize === "number"
        ? `${props.widthSize}rem`
        : props.widthSize
      : "auto"};
  height: ${(props) =>
    props.heightSize
      ? typeof props.heightSize === "number"
        ? `${props.heightSize}rem`
        : props.heightSize
      : "auto"};
  background: var(--bright-blue);
  border-radius: 1rem;
  color: var(--white);
`;
// TYPE
type ButtonProps = {
  txt: string;
  width: string | number | null;
  height: string | number | null;
};
export const Button: React.FC<ButtonProps> = ({ txt, width, height }) => {
  return (
    <ButtonBox
      className="flex flex_jc_c flex_ai_c"
      widthSize={width}
      heightSize={height}
    >
      {txt}
    </ButtonBox>
  );
};
