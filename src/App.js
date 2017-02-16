
import React, {Component}from 'react';
import './App.css';
import ShowPanel from './ShowPanel';
import UnValidButton from './UnValidButton';
import ValidButton  from './ValidButton';
import $ from 'jquery';

class App extends Component {
  state = { status: "init", content: "Yeah, hello world!" };

  changePannel = (params) => {
    $.ajax({
      type: "get",
      url: params.link,
      data: "format=json&appid=379020&bk_key=关键字&bk_length=600",
      dataType: "jsonp",
      beforeSend: function (s) {
        this.setState({ status: "sending", content: "sending" });
      }.bind(this),
      success: function (response) {
        this.setState({ status: "done", content: response.abstract });
      }.bind(this),
      error: function (err) {
        this.setState({ status: "fail", content: "fail to load " });
      }.bind(this)
    });
    return true;
  };

  render() {
    return (
      <div className="App">
        {(() => {
          var mainContent;
          if (this.state.status === 'sending') {
            mainContent = (
              <div className="wrapper">
                <div className="preloader_2" >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>);
          } else {
            mainContent = (
              <div className="App-main">
                <ShowPanel text={this.state.content} />
                <div className="Control-panel">
                  <UnValidButton link="http://www.mock.com/test" txt="无效请求"  clickCallBack={this.changePannel}/>
                  <ValidButton link="http://baike.baidu.com/api/openapi/BaikeLemmaCardApi" txt="有效请求" clickCallBack={this.changePannel}/>
                </div>
              </div>
            );
          }
          return mainContent;
        })() }
      </div >
    );
  }
}

export default App;
