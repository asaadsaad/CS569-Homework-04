

   function rpsGame(prevState){
    console.log(this.user, 'uuuuuuuuuuuuuu')
    console.log(this.state.computer, 'cccccccccccccc')

    switch (this.user + this.state.computer) {
     
      case 'RockScissors' || 'PaperRock' || 'ScissorsPaper' : return {
        ...prevState, w: this.state.w++
      }
     
      case 'RockPaper' || 'ScissorsRock' || 'PaperScissors' :return {
        ...prevState, l: this.state.l++
      }
                  
     case 'RockRock' || 'ScissorsScissors' || 'PaperPaper' :return {
        ...prevState, w: this.state.w+0, l: this.state.l+0
      }
      
    }
  }