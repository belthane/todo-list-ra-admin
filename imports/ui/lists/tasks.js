import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    BooleanField,
    SelectField,
    Filter,
    SearchInput,
    ReferenceField,
    EditButton,
    useListContext,
} from 'react-admin';

const Aside = () => {
    const { selectedIds } = useListContext();
    console.log("Aside selectedIds:", selectedIds);
    const taskDetailsId = selectedIds.find(e => e);
    console.log("Aside taskDetailsId:", taskDetailsId);
    console.log(`${taskDetailsId}`);
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <h5>
                Task details
            </h5>
            <SelectField 
            source="text" 
            choices={[
                { id: `${taskDetailsId}` }
            ]} />
        </div>
    );
};

const TasksFilter = (props) => {
    console.log('TasksFilter:', props);
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
        aside={<Aside />}
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

