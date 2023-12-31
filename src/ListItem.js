import { useDispatch } from "react-redux";
import { deleteContribution, selectContributionForEdit, selectcontributionToPlay } from "./store/actions/contribution";

const ListItem = ({ one }) => {
    const dispatch = useDispatch();
    

    return (
        <div>
            <h3>{one.name}</h3>
            <input type="button" onClick={() => { dispatch(deleteContribution(one.id)) }} value="מחק אותי" />
            <input type="button" onClick={() => { dispatch(selectContributionForEdit(one)) }} value="ערוך" />
            <input type="button" onClick={() => { dispatch(selectcontributionToPlay(one)) }} value="הצג פרטים" />
        </div>
    );
}

export default ListItem;
