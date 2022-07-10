import { useState, useEffect } from "react";
import Link from "../components/Link";
import "./Profile.css";

function Profile({ userName }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const result = await profile.json();

      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

  return (
    <div className="Profile-container">
      <h2>About me</h2>

      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
            <img className="Profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}/>
          <ul>
            <li>
              <span>html_url: </span><a href={profile.html_url}>{profile.html_url}</a> 
            </li>
            <li>
              <span>repos_url: </span> {profile.repos_url}
            </li>
            <li>
              <span>name: </span> {profile.name}
            </li>
            <li>
              <span>company: </span> {profile.company}
            </li>
            <li>
              <span>location: </span> {profile.location}
            </li>
            <li>
              <span>email: </span> {profile.email}
            </li>
            <li>
              <span>bio: </span> {profile.bio}
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}

export default Profile;
