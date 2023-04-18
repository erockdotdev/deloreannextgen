import * as S from "./styles";
import { ButtonProps } from "@mui/material/Button";

import React from "react";

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
