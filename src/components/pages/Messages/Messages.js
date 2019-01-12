import React from 'react';
import './Messages.scss';

class Messages extends React.Component {
  render() {
    return (
      <div className='Home'>
      <div class="card-deck">
        <div class="card border-dark" id="messages">
          <div class="card-body text-center">
            <h4 class="card-title"><i className="fas fa-comments fa-7x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Messages;
