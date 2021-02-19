import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    Filter,
    SearchInput,
    ReferenceField,
    EditButton,
} from 'react-admin';
import { Below } from '../lists/Below';

const TasksFilter = (props) => {
    return (
        <Filter {...props}>
            <SearchInput
                source="text"
                alwaysOn
            />
        </Filter>
    );
};

export const TasksList = (props) => (
        <List {...props}
            aside={<Below />}
            filters={<TasksFilter />}
            sort={{ field: 'createdAt', order: 'DESC' }}
            title="List of tasks"
            perPage={25}
        >
            <Datagrid >
                <TextField source="id" />
                <TextField source="text" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="username" />
                </ReferenceField>
                <DateField source="createdAt" />
                <BooleanField source="isChecked" />
                <EditButton />
            </Datagrid>
        </List>
);

