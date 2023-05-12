import { Router, Route, Set } from '@redwoodjs/router';
import StoriesLayout from './layouts/StoriesLayout/StoriesLayout';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Routes = () => {
  return (
    <Router>
      <Set wrap={StoriesLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path='/stories' page={StoriesPage} name='stories' />
        <Route path="/features" page={FeaturesPage} name="features" />
        <Route path="/pricing" page={PricingPage} name="pricing" />

      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
