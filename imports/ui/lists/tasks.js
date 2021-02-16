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
    useListContext,
    useGetOne,
} from 'react-admin';



const Aside = () => {
    const { selectedIds } = useListContext();
    console.log("Aside selectedIds:", selectedIds);
    const taskDetailsId = selectedIds.find(e => e);
    console.log("Aside taskDetailsId:", taskDetailsId);
    
    if (taskDetailsId !== undefined) {
     const { data } = useGetOne('tasks', taskDetailsId);
     console.log("Details:", data);
        return (
            <div style={{ width: 200, margin: '1em' }}>
                <h5>
                    Task details
            </h5>
                <p>Content: {data.text}</p>
                <p>Is checked: {data.isChecked ? "true" : "false"}</p>
            </div>
        );
    }
    else {
        return(null);
    };
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

