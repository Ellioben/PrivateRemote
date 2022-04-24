const child = require('child_process');

//增加一些用作区分上下行的标记
const output = child.execSync(`git log --format=%B%H----DELIMITER----`).toString('utf-8');

//拆分标记到一个管理commit message 和 commit id的映射表中
const commitsArray = output.split('----DELIMITER----\n').map(commit => {
  const [message, sha] = commit.split('\n');
  return { sha, message };
}).filter(commit => Boolean(commit.sha));

console.log({ commitsArray });
