import React from 'react';
import {db,auth} from './Firebase'

class Users extends React.Component {
    constructor() {
      super();
      this.state = { Users: [], loading: true };
    }
    componentDidMount() {
      db.collection("Users")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          // snapshot.docs.map((doc)=>({
          //   console.log(doc.data())
          // }));
          const Users = snapshot.docs.map((doc) => {
            const data = doc.data();
            data["id"] = doc.id;
            return data;
          });
          this.setState({ Users: Users, loading: false });
        });
    }
    render() {
      const { Users } = this.state;
      return (
        <div>
          <ul>
            {
                Users.map((user)=>(
                    <li>
                        {user.name}
                        {user.email}
                    </li>
                ))
            }
          </ul>
        </div>
      );
    }
  }
  
  export default Users;