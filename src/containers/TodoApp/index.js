import withResetCss from '@hocs/withResetCss';
import withTodoContext from '@hocs/withTodoContext';
import { compose } from '@utils/helpers';

import { TodoApp } from './TodoApp';

const composedTodoApp = compose(
  withTodoContext,
  withResetCss,
)(TodoApp);

export default composedTodoApp;
