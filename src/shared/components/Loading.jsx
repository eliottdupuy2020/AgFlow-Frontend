import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loading, bgcolor } = this.props;

    return (
      <div className={`load${loading ? '' : ' loaded'}${bgcolor ? ' bgcolor' : ''}`}>
        <div className="load__icon-wrap">
          <svg className="load__icon">
            <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Loading;
