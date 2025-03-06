function ProfileSettings() {
    return (
      <div>
        <h3>Profile Settings</h3>
        <p>Update your profile information and preferences here.</p>
  
        <form>
          <label>
            Change Username:
            <input type="text" placeholder="New username" />
          </label>
          <br />
          <label>
            Update Email:
            <input type="email" placeholder="New email" />
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
  
  export default ProfileSettings;
  