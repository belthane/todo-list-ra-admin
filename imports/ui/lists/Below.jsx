import * as React from "react";
import { useListContext, useGetOne } from 'react-admin';

export const Below = () => {
  const { selectedIds } = useListContext();
  const taskDetailsId = selectedIds.find(e => e);

  if (taskDetailsId !== undefined) {
    const { data } = useGetOne('tasks', taskDetailsId);
    console.log("Data:", data);
    return (
      <div className='below'>
        <h5>
          Task details
          </h5>
        <p>Content: {data.text}</p>
        <p>Is checked: {data.isChecked ? "true" : "false"}</p>
        <p>Created: {Date(data.createdAt)}</p>
      </div>
    );
  }
  else {
    return (null);
  };
};