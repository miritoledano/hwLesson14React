import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedContribution } from "./store/actions/contribution";


const EditContribution = () => {
    const contributionForEdit = useSelector(state => state.selectedContributionForEdit);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: contributionForEdit
    });

    const saveDetails = (data) => {
        console.log(data);
        dispatch(saveEditedContribution(data));
    }

    return (
        <form onSubmit={handleSubmit(saveDetails)}>
            <label>שם</label>
            <input {...register("name", { minLength: 3 })} />
            {errors.name && <span>שם לא תקין</span>}
            <label>משך</label>
            <input {...register("duration")} />
            <label>הקדשה</label>
            <input {...register("dedication")} />
            <label>תאריך</label>
            <input {...register("DateOfDonation")} />
            <input type="submit" />
        </form>
    );
}

export default EditContribution;
