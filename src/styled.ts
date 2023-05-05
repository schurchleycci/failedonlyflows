import { CompassTheme } from '@circleci/compass';
import Theme from '@circleci/theme';
import styled, { CreateStyled } from '@emotion/styled';

export default styled as CreateStyled<typeof Theme & CompassTheme>;