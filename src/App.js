import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import projects from './projects.js';
import Tag from './Tag.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.setTag = this.setTag.bind(this)

    const arrays = projects.map(project => project.tags);
    const merged = [].concat.apply([], arrays);
    let tagsSet = new Set([...merged]);

    this.state = {
      tags : null,
      tagsSet : [...tagsSet],
    }
  }

  setTag(tag) {
    if (tag == this.state.tags)
      tag = null;
    this.setState({
      tags : tag
    })
  }

  clearTag() {
    this.setState({
      tags : null
    })
  }

  render() {
    let selectedProjects = projects;
    let tagList = this.state.tagsSet.map(tag => <Tag key={tag} string={tag} setTag={this.setTag} active={this.state.tags == tag} />).sort((a, b) => a.props.string.localeCompare(b.props.string));
    
    if (this.state.tags)
    {
      selectedProjects = projects.filter(project => project.tags.includes(this.state.tags));
      tagList.unshift(<span className="removeTagButton" onClick={() => this.clearTag()}><i>Clear Tags</i></span>);
    }
    

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-side">
            <img src={require("./media/headshot.jpg")} />
          </div>
          <div className="App-header-center">
            <h1 className="App-title">Sean Maltz's Portfolio</h1>
            <p><a href="mailto:sean.maltz@gmail.com">sean.maltz@gmail.com</a></p>
            <div id="tagsList">
              { tagList } 
            </div>
          </div>
        </header>
        <div id="main">
          <div id="projects">
          {
            selectedProjects.map((content, key) =>
              <Project content={content} key={content.title} setTag={this.setTag}/>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
