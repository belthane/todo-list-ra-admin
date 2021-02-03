import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="createdAt" />
            <TextField source="username" />
        </Datagrid>
    </List>
);