import { User } from "../entities";

const UserAccount = ({ user }: { user: User }) => {
  return (
    <>
      <h2>User Profile</h2>
      {user.isAdmin && <button>Edit</button>}
      <div>
        <strong>Name: {user.name}</strong> 
      </div>
    </>
  );
};

export default UserAccount;
