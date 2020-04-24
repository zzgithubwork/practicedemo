* git 是一个分布式版本控制系统。这就意味着每一个人的电脑就是一个完整的版本库，不存在中央服务器不需要联网。svn是一个集中式版本控系统，版本库集中放在中央服务器中，下载更新版本都需要在中央服务器操作需要联网
  - 1.工作原理/流程 分为以下4步
    - workspace 工作区(也就是项目目录地址)
    - stage 缓存区 
    - repository 本地仓库
    - remote 远程仓库 
 * git 首次安装时需要设置用户名和邮箱作为一个标识
   - git config --global user.name 'xxx'
   - git config --global user.email 'xxx'
 * bash 基础命令
   - pwd 常看当前路径 mkdir 新建文件夹 touch 新建文件 cat 查看文件 rmdir删除文件夹
 * git 基础命令
    ###创建和推送仓库的命令
   - git init 创建一个本地仓库
   - git add . 添加本地所有文件到缓存区
   - git commit -m '描述信息' 将文件添加到本地仓库
   - git push -u origin master 将master主分支添加到远程仓
   第一次push用 -u 会把本地master和远程的master分支关联起来
   - git remote add/rm origin '远程仓库地址' 添加/删除一个远程地址映射为origin 
   - git status 查看git本地仓库的状态
   - git checkout -- 文件名 会将缓存区或者本地仓库中的此文件修改的内容全部撤销
   - git clone '远程仓库地址' 克隆一个本地仓库
    ###创建分支和合并分支的命令
   - git branch 查看所有分支
   - git branch 'name' 创建分支
   - git branch -d 'name' 删除分支
   - git checkout 'name' 切换分支
   - git checkout -b  'name' 创建分支并切换到此分支
   - git merge --no-ff 'name' 合并此分支到当前分支并且不使用 fast forward 模式 就不会删除此分支的信息
   ### 回滚版本
   - git log 查看日志 git reflog 查看版本号
   - git reset --hard 版本号 回滚到某个版本
   - git reset --hard HEAD~num 回滚到某个版本
   ###适用于改其余bug保留当前进程
   - git stash 将当前工作区域隐藏起来 
   - git stash pop 恢复当前工作区域 
   - git remote -v 查看远程库的详细信息
   - git 密钥生成ssh-keygen -t rsa -b 4096 -C "邮箱地址"


