import React, { useState } from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"

const Todo = (props) => {

	const [item, setItem] = useState(props.item);
	const [readOnly, setReadOnly] = useState(true);

	const deleteItem = props.deleteItem;
	const editItem = props.editItem;

  const deleteEventHander = () => {
		deleteItem(item);
	}

	const turnOffReadOnly = () => {
		setReadOnly(false);
	}

	const turnOnReadOnly = (e)=> {
		if(e.key === 'Enter' && readOnly === false){
			setReadOnly(true);
			editItem(item);
		}
	}

	const editEventHandler = (e) => {
		// item.title = e.target.value;
		// editItem();
		setItem({...item, title: e.target.value});
	};

	const checkboxEventHander = (e)=>{
		item.done = e.target.checked;
		editItem(item);		
	}

	return (
		<ListItem>
			<Checkbox checked={item.done} onChange={checkboxEventHander} />
			<ListItemText>
				<InputBase 
					inputProps={{"aria-label": "naked", readOnly: readOnly}}
					onClick={turnOffReadOnly}
					onKeyDown={turnOnReadOnly}
					onChange={editEventHandler}
					type='text'
					id = {item.id}
					name= {item.name}
					value={item.title}
					multiline={true}
					fullWidth={true}
				/>
			</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label='Delete Todo' onClick={deleteEventHander}>
					<DeleteOutlined />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
		
	);
};

export default Todo;