import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'antd';


const initUsers = [
	{
		id: 1,
		name: 'scv',
		email: 'scv@naver.com'
	},
	{
		id: 2,
		name: 'scv2',
		email: 'scv2@naver.com'
	}
];

const UserList = ({ users }) => {
	return (
		<div>
			<h1>
				UserList
			</h1>
			{users && users.map(user => <User user={user}/>)}
		</div>
	);
};


const User = ({ user }) => {
	return (
		<div>
			Name: {user.name}
		</div>
	);
};

const UserListContainer = (props) =>{

	const [users, setUsers] = useState([]);

	useEffect(() => {



	});

	const ref = useRef();	//

	return (
		<React.Fragment>
			<Input placeholder="사용자명을 입력해 주세요"
				   onChange={e => console.log(e)}
				   style={{marginTop: 32}}/>
			<UserList users={users}/>
		</React.Fragment>
	);
};





export default UserListContainer