import { Router, Route, Set } from '@redwoodjs/router';
import StoriesLayout from './layouts/StoriesLayout/StoriesLayout';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Routes = () => {
  return (
    <Router>
      <Set wrap={StoriesLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
