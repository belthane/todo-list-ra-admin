import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField, Filter, TextInput } from 'react-admin';

const TasksFilter = (props) => {
    // console.log('TasksFilter:', props);
    return (
        <Filter {...props}>
            <TextInput label="Search" source="text" alwaysOn />
        </Filter>
    );
};

export const TasksList = (props) => (
    <List filters={<TasksFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="text" />
            <TextField source="userId" />
            <DateField source="createdAt" />
            <BooleanField source="isChecked" />
        </Datagrid>
    </List>
);