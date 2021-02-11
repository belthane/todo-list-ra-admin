import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const UsersList = (props) => {
    console.log("UsersList ", props)
    return (
        <List {...props}
            title="List of users"
            perPage={25}
        >

            <Datagrid>
                <TextField source="id" />
                <DateField source="createdAt" />
                <TextField label="Username" source="username" />
            </Datagrid>
        </List>
    );
}

