import * as React from "react";
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const TasksList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="text" />
            <TextField source="userId" />
            <DateField source="createdAt" />
            <BooleanField source="isChecked" />
        </Datagrid>
    </List>
);