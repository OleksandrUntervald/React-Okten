import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};