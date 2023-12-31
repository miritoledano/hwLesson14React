import logo from './logo.svg';
import './App.css';
import ContributionList from './ContributionList';
import ContributionDetails from './ContributionDetails';
import { useSelector } from 'react-redux';
import EditContribution from './EditContribution';


function App() {
  let selectedContribution = useSelector(state => state.selectedContribution);
  let selectedContributionForEdit = useSelector(state => state.selectedContributionForEdit);

  return (
    <>
      <ContributionList />
      {selectedContribution && <ContributionDetails />}
      {selectedContributionForEdit && <EditContribution />}
   
      </>
  );
}

export default App;
