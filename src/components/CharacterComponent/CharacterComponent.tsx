import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface ICharacterComponentProps{
    item: ICharacter,
    children: ReactNode

}

export const CharacterComponent = ({item, children}: ICharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <p>{children}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    );
};