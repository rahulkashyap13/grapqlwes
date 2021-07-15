
import React, { useEffect } from 'react';
import {   
	useQuery,
	gql
} from "@apollo/client";
import { Button } from 'reactstrap';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../LoginForm/constant';
import { logoutFun } from './supportiveFun';
import { UserPageContainer } from './style';


const EXCHANGE_RATES = gql`
  query GetUserInfo {
    user(userNameOrId: "re0002") {
		_id
		userName
		firstName
		lastName
    }
  }
`;
function ListPage() {
	const history = useHistory();
	useEffect(() => {
		const userInfo = localStorage.getItem( AUTH_TOKEN );
		if(!userInfo) {
			history.push('/login');
		}
	}, [ history ])
	const { loading, error, data } = useQuery(EXCHANGE_RATES);
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const { user } = data;
	const logoutToggle = () => {
		logoutFun(history)
	}

	
  return (
    <UserPageContainer>  
		{
			user &&
			<div className="container-fluid well span6 jumbotron">
				<div className="row-fluid">       
					
					<div className="span8">
						<h3>User Info</h3>
						<h6>First Name: { user.firstName }</h6>
						<h6>Last Name: { user.lastName }</h6>
						<h6>User Id: { user._id  }</h6>
					</div>
					
					<div className="span2">
						<div className="btn-group">
							<Button onClick={ logoutToggle } className="btn btn-primary" >
								Logout
							</Button>
						</div>
					</div>
				</div>
			</div>
		}
		
		

    </UserPageContainer>
  );
}

export default ListPage;
