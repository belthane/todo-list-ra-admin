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
    EditButton
} from 'react-admin';

const TasksFilter = (props) => {
    // console.log('TasksFilter:', props);
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

{/* <ReferenceInput
      label="Username"
      source="userId"
      reference="users"
      filterToQuery={searchText => ({ username: searchText })}
      alwaysOn
      allowEmpty
    >
      <AutocompleteInput optionText={choice => `${choice.username}`} />
    </ReferenceInput> */}