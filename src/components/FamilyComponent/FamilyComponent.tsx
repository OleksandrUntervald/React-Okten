import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent item={value} key={index}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};