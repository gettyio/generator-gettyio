'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the laudable ' + chalk.red('generator-gettyio') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name:',
        default: 'my-awesome-project'
      },
      {
        type: 'list',
        name: 'template',
        message: 'Your project template:',
        choices: ['backend']
      }
    ];
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    const projectName = this.props.projectName;
    const template = this.props.template;
    this.fs.copy(
      this.templatePath(`${template}/**/*`),
      this.destinationPath(projectName)
    );
    this.fs.copy(
      this.templatePath(`${template}/.*`),
      this.destinationPath(projectName)
    );
  },

  install: function () {
    this.installDependencies();
  }
});
