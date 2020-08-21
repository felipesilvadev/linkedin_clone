import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E16AQGs_tqM3DESsA/profile-displaybackgroundimage-shrink_350_1400/0?e=1603324800&v=beta&t=YbYkw9gGb17Zu-TpadtbfG6iZFMROYUUPjX8vRc8Hdo"
            alt="Cover"
            className="profile-cover-image"
          />
        </div>
        <img
          src="https://github.com/felipesilvadev.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Felipe Silva</h1>
        <h2>Desenvolvedor Full-stack</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">81</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">849</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
