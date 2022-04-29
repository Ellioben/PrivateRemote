const child = require('child_process');

//增加一些用作区分上下行的标记
//const output = child.execSync(`git log --graph --pretty=format:'%h - %d %s (%an, %cd)' --abbrev-commit`).toString('utf-8');
const output = child.execSync(`git log -1 --pretty=format:'%H--%cd--(%an, %s)'\n`).toString('utf-8');

console.log("********",output.split('\n'))


//拆分标记到一个管理commit message 和 commit id的映射表中
var i=0;
const commitsArray = output.split('--').map(commit => {
  
  const [com,sha,message ] = commit.split('\n');

  console.log(">>>>>",[...commit.split('\n')])
  return {com,sha, message };
}).filter(commit => Boolean(commit.sha));

console.log({ commitsArray });
//console.log(output)
