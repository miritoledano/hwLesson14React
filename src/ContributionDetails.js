import { useSelector } from "react-redux";

const ContributionDetails = () => {
    const contribution = useSelector(state => state.selectedContribution);

    return (
        <div className="">
            פרטי התרומה הנבחרת
            <h1>{contribution.name}</h1>
            <h2>{contribution.duration}</h2>
            <h2>{contribution.dedication}</h2>
            {/* <h3>{ contribution.DateOfDonation}</h3> */}
            
        </div>
    );
}

export default ContributionDetails;
