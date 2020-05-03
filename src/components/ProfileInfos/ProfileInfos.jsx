import React from 'react';

import './ProfileInfos.scss'

const ProfileInfo = props => {
  const { profile } = props;
  return (
    <div className='profile-info'>
      <img src={profile.image + '?raw=true'} alt="profile image" />
      <h1>{profile.name}</h1>
      <p>{profile.profession}</p>
      <hr />
      <h2 className='border-item'>Profile</h2>
      <p>{profile.description}</p>

      <h2 className='border-item'>Contact</h2>
      <p>{profile.contact && profile.contact.tel}</p>
      <p>{profile.contact && profile.contact.cel}</p>
      <p>{profile.contact && profile.contact.address}</p>
      <p>{profile.contact && profile.contact.website}</p>
      <p>{profile.contact && profile.contact.mail}</p>

      <h2 className='border-item'>Skills</h2>
      {profile.skills && profile.skills.map((skill) =>
        <div>
          <p>{skill.name}</p>
          <div className='skills' style={{background: `linear-gradient(90deg,#fff ${skill.value}, #313131 ${100 - skill.value.replace('%', '')}%)`}}>
          </div>
        </div>
      )
      }
    </div>
  );
}
export default ProfileInfo;