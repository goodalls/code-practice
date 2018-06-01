#Directory Aliases
alias pro='cd ~/documents/projects/'
alias m1="cd ~/documents/turing/mod1" 
alias m2="cd ~/documents/turing/mod2" 
alias m3="cd ~/documents/turing/mod3" 
alias m4="cd ~/documents/turing/mod4" 
alias m5="cd ~/documents/turing/mod5" 
alias mamp="cd ~/documents/mamp" 

#Git Aliases
alias code='code .'
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gco='git checkout'
alias gpl='git pull'
alias gplom='git pull origin master'
alias gplrom='git pull --rebase origin master'
alias gp='git push'
alias gpo='git push origin'
alias gpom='git push origin master'
alias gd='git diff | mate'
alias gb='git branch'
alias gba='git branch -a'
alias gdel='git branch -d'


#Add Git Branch to Command Line
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\w\[\033[36m\]\$(parse_git_branch) \[\033[00m\] > "