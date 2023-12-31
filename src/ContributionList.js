import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function ContributionList() {
    let contributions = useSelector((state) => state.arr);

    return (
        <>
            כל התרומות
            <ul>
                {contributions.map((item) => (
                    <li key={item.id}>
                        <ListItem one={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}
