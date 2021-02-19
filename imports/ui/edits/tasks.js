import * as React from "react";
import {
  Edit,
  SimpleForm,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  BooleanInput,
  TextInput,
  ReferenceManyField
} from 'react-admin';


export const TasksEdit = (props) => {
  return (
    <Edit {...props}
      title="Edit task"
    >
      <SimpleForm>
        <ReferenceManyField label="Task" reference="tasks" target="_id">
          <Datagrid>
            <TextInput disabled source="_id" />
            <DateField source="createdAt" />
            <BooleanField label="isChecked" source="isChecked" />
            <TextField label="Text" source="text" />
          </Datagrid>
        </ReferenceManyField>
        <TextInput label="Text to be edited" source="text" />
        <BooleanInput label="isChecked" source="isChecked" />
      </SimpleForm>
    </Edit>
  );
}
