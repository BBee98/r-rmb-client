import {CreateOptions} from "../../Form/Create/fields.ts";
import {Create} from "../../Form/Create";

export const Vertical = () => {
    return (
        <nav>
            {CreateOptions.map((option) => <Create fieldName={option}/>)}
        </nav>
    )
}